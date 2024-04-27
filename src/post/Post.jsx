import React from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from '../loading/loadingScreen';
import { useApi } from '../useApi/useApi';
import PostItem from './Postitem';
import './Post.css';

const Posts = () => {
    const { data: posts, loading, error } = useApi();

    if (error) {
        return (
            <div className="error-message">
                <h2>{error}</h2>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="loading-screen">
                <LoadingScreen />
            </div>
        );
    }

    return (
        <section className="posts">
            {posts.map((post) => (
                // Utilizar Link para navegar a la ruta /postdetail con el ID del post seleccionado como parámetro
                <Link key={post.id} to={`/postdetail?id=${post.id}`} className="post-link">
                    <section className="posts">
                        {posts.map((post) => (
                            <PostItem key={post.id} post={post} />
                        ))}
                    </section>
                </Link>
            ))}
        </section>
    );
};

export default Posts;
