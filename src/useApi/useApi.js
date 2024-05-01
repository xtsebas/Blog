import { useState, useEffect } from 'react';
import mysql from 'mysql';
import bcrypt from 'bcryptjs';
import { fetchPosts, fetchPostById, createPost, deletePostById, updatePostById, login, register } from './api';

export const useApi = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const responseData = await fetchPosts();
                setData(responseData);
            } catch (error) {
                setError('Error de comunicación con el API. Por favor, inténtalo de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchPost = async (postId) => {
        setLoading(true);
        try {
            const responseData = await fetchPostById(postId);
            return responseData;
        } catch (error) {
            setError('Error al obtener el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const addPost = async (postData) => {
        setLoading(true);
        try {
            const { title, sinopsis, gender } = postData; // Desestructura el objeto postData
            const responseData = await createPost(title, sinopsis, gender);
            setData([...data, responseData]); // Agregar el nuevo post a la lista actual
        } catch (error) {
            setError('Error al crear el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const removePost = async (postId) => {
        setLoading(true);
        try {
            await deletePostById(postId);
            setData(data.filter(post => post.id !== postId)); // Eliminar el post de la lista actual
        } catch (error) {
            setError('Error al eliminar el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const updatePost = async (postId, updatedData) => {
        setLoading(true);
        try {
            const responseData = await updatePostById(postId, updatedData);
            setData(data.map(post => (post.id === postId ? responseData : post))); // Actualizar el post en la lista actual
        } catch (error) {
            setError('Error al actualizar el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const userLogin = async (usuario, password) => {
        //debugger;
        setLoading(true);
        try {
            const response = await login(usuario, password);
            return response;
        } catch (error) {
            setError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchPost, addPost, removePost, updatePost, userLogin };
};

