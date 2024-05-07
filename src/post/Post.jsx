import React, {useState} from 'react';
import LoadingScreen from '../loading/loadingScreen';
import { useApi } from '../useApi/useApi';
import PostItem from './Postitem';
import useNavigate from '../HOC/useNavigate';
import './Post.css';

const Posts = () => {
    const { data: posts, loading, error } = useApi();
    const { navigate } = useNavigate();
    const [orderBy, setOrderBy] = useState('recent');

    const handleClick = (postId) => {
        localStorage.setItem('postId', postId);
        navigate( '/post/:id');
    };

    const handleOrder = () => {
        setOrderBy(orderBy === 'recent' ? 'oldest' : 'recent');
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
        <div>
             <button className={`order-button ${orderBy === 'recent' ? 'recent-button' : 'oldest-button'}`} onClick={handleOrder}>
                {orderBy === 'recent' ? 'Ordenar por más antiguo' : 'Ordenar por más reciente'}
            </button>
            <section className="posts">
                {posts
                .slice()
                .sort((a, b) => {
                    if (orderBy === 'recent') {
                            return new Date(b.created_at) - new Date(a.created_at);
                        } else {
                            return new Date(a.created_at) - new Date(b.created_at);
                        }
                })
                .map((post) => (
                    <div className='postdiv' key={post.id} onClick={() => handleClick(post.id)}>
                        <PostItem post={post} />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Posts;
