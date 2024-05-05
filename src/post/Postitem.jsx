import React from 'react';
import './postitem.css'; 

const PostItem = ({ post }) => {
    const getRandomColor = () => {
        const minBrightness = 100; // Luminosidad mínima
        const maxBrightness = 220; // Luminosidad máxima
    
        const first = Math.floor(Math.random() * (maxBrightness - minBrightness)) + minBrightness;
        const second = Math.floor(Math.random() * (maxBrightness - minBrightness)) + minBrightness;
        const third = Math.floor(Math.random() * (maxBrightness - minBrightness)) + minBrightness;
    
        // Generar color RGBA con transparencia
        const color = `rgba(${first},${second},${third}, 0.4)`;
        return color;
    };

    const styles = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: getRandomColor(),
    };
    const genders = post.gender.split(',').map(gender => gender.trim());

    return (
        <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <image xlinkHref="../src/assets/img/images.jpg" width="100%" height="100%" />
            </svg>

            <div className="card__content" style={styles}>
                <h2 className="card__title" >{post.title}</h2>
                <p className="card__description" >{post.sinopsis}</p>
                <p className="card__gender" >
                    {genders.map((gender, index) => (
                        <span key={index} className="card__gender-label">{gender}</span>
                    ))}
                </p>
                <input type='hidden' name='date' value = {post.Created_add}/>
            </div>
        </div>
    );
};

export default PostItem;
