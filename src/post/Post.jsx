import React from 'react';
import LoadingScreen from '../loading/loadingScreen';
import { useApi } from '../useApi/useApi';
import PostItem from './Postitem';
import useNavigate from '../HOC/useNavigate';
import './Post.css';

const Posts = () => {
    const { data: posts, loading, error } = useApi();
    const { navigate } = useNavigate();

    const handleClick = (postId) => {
        localStorage.setItem('postId', postId);
        navigate( '/post/:id');
    };

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
                <div className='postdiv' key={post.id} onClick={() => handleClick(post.id)}>
                    <PostItem post={post} />
                </div>
            ))}
        </section>
    );
};

export default Posts;
