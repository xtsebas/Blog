import React from 'react';
import { useState, useEffect } from 'react';
import { useApi } from '../useApi/useApi';
import useNavigate from '../HOC/useNavigate';
import Swal from 'sweetalert2';
import LoadingScreen from '../loading/loadingScreen';
import './Post.css'

const Postdetail = () => {
    const postId = localStorage.getItem('postId');
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { navigate } = useNavigate();
    const { fetchPost, removePost, updatePost } = useApi();
    const [updatedPostData, setUpdatedPostData] = useState({
        title: '',
        sinopsis: '',
        gender: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                //debugger;
                const responseData = await fetchPost(postId);
                setPost(responseData);
                const { title, sinopsis, gender } = responseData;
                if (title && sinopsis && gender) {
                    setUpdatedPostData({ title, sinopsis, gender });
                }
            } catch (error) {
                setError('Error al obtener el post. Por favor, inténtalo de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: '¿Estás seguro de que deseas eliminar este post?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo'
        });
    
        // Si el usuario confirma la eliminación
        if (result.isConfirmed) {
            try {
                await removePost(postId);
                Swal.fire('Eliminado', 'El post ha sido eliminado correctamente', 'success');
                navigate('/');
            } catch (error) {
                setError('Error al eliminar el post. Por favor, inténtalo de nuevo más tarde.');
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedPostData({ ...updatedPostData, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            debugger;
            console.log(updatedPostData);
            await updatePost(postId, updatedPostData);
            localStorage.setItem('postId', postId);
            Swal.fire({
                title: '¡Post Actualizado!',
                text: 'El post se ha actualizado exitosamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                navigate('/');
            });
        } catch (error) {
            setError('Error al actualizar el post. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    if (loading) {
        return (
            <div className="loading-screen">
                <LoadingScreen />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!post) {
        return <div>No se encontró el post.</div>;
    }

    return (
        <div className='container'>
            <div className='post-details'>
                <h1>{post.title}</h1>
                <p>{post.sinopsis}</p>
                <p>Género: {post.gender}</p>
                <br></br>
                <textarea type="text" name="title" placeholder="Nuevo título" onChange={handleChange}>{post.title}</textarea>
                <textarea type="text" name="sinopsis" placeholder="Nueva sinopsis" onChange={handleChange}>{post.sinopsis}</textarea>
                <textarea type="text" name="gender" placeholder="Nuevo género" onChange={handleChange} >{post.gender}</textarea>
                <button onClick={handleDelete}>Eliminar</button>
                <button onClick={handleUpdate}>Actualizar</button>
            </div>
        </div>
    );
};

export default Postdetail;
