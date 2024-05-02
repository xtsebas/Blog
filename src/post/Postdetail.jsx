import React from 'react';
import { useState, useEffect } from 'react';
import { useApi } from '../useApi/useApi';
import useNavigate from '../HOC/useNavigate';
import './Post.css'

const Postdetail = () => {
    const postId = localStorage.getItem('postId');
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updatedPostData, setUpdatedPostData] = useState({
        title: '',
        sinopsis: '',
        gender: ''
      });
    const [error, setError] = useState(null);
    const { navigate } = useNavigate();
    const { fetchPost, removePost, updatePost } = useApi();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                debugger;
                const responseData = await fetchPost(postId);
                setPost(responseData);
            } catch (error) {
                setError('Error al obtener el post. Por favor, inténtalo de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este post?')) {
            try {
                await removePost(postId);
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
            console.log(updatedPostData);
            await updatePost(postId, updatedPostData);
            localStorage.setItem('postId', postId);
            navigate( '/post/:id');
        } catch (error) {
            setError('Error al actualizar el post. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!post) {
        return <div>No se encontró el post.</div>;
    }

    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <p>{post.sinopsis}</p>
            <p>Género: {post.gender}</p>
            <br></br>
            <input type="text" name="title" placeholder="Nuevo título" value={post.title} onChange={handleChange} />
            <input type="text" name="sinopsis" placeholder="Nueva sinopsis" value={post.sinopsis} onChange={handleChange} />
            <input type="text" name="gender" placeholder="Nuevo género" value={post.gender} onChange={handleChange} />
            <button onClick={handleDelete}>Eliminar</button>
            <button onClick={handleUpdate}>Actualizar</button>
        </div>
    );
};

export default Postdetail;
