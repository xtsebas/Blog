import React from 'react';
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
                <PostItem key={post.id} post={post} />
            ))}
        </section>
    );
};

export default Posts;
