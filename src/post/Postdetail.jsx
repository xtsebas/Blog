import React from 'react';

const Postdetail = ({ post }) => {
    return (
        <div className="post-details">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.author}</p>
        </div>
    );
};

export default Postdetail;
