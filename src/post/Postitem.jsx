import React from 'react';
import './postitem.css'; 

const PostItem = ({ post }) => {
    const getRandomColor = () => {
    const first = Math.floor(Math.random() * 256);
    const second = Math.floor(Math.random() * 256);
    const third = Math.floor(Math.random() * 256);

    const color = `rgba(${first},${second},${third}, 0.4)`;
    return color;
    };

    const styles = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: getRandomColor(),
    };

    return (
        <div className="post-item" style={styles}>
            <h2>{post.title}</h2>
            <p>{post.sinopsis}</p>
            <p>{post.gender}</p>
        </div>
    );
};

export default PostItem;
