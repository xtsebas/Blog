import React, { useRef, useState, useEffect } from 'react';
import useForm from '../useForm/Useform';
import { useApi } from '../useApi/useApi';
import useNavigate from '../HOC/useNavigate';
import Swal from 'sweetalert2';
import LoadingScreen from '../loading/loadingScreen';
import './form.css'

const MyFormComponent = () => {
    const { navigate } = useNavigate();
    const initialState = {
        title: '',
        sinopsis: '',
        gender: ''
    };
    const { addPost, loading, error } = useApi();
    const [formData, setFormData] = useState(initialState); 
    const [textareaHeight, setTextareaHeight] = useState('auto'); 
    const textareaRef = useRef(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPost(formData); 
            setFormData(initialState); 
            Swal.fire({
                title: '¡Post Agregado!',
                text: 'El post se ha agregado exitosamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                navigate('/');
            });
        } catch (error) {
            console.error('Error al crear el post:', error);
        }
    };
    console.log(formData);

    if (loading) {
        return (
            <div className="loading-screen">
                <LoadingScreen />
            </div>
        );
    }

    return (
        <div class="form-container">
            <h2>Agregar Nuevo Post</h2>
            {error && <p>Error: {error}</p>}
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <p for="title" id = 'title'>Titulo</p>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <p for="sinopsis" id="sinopsis">Sinopsis</p>
                    <textarea name="sinopsis" value={formData.sinopsis} onChange={handleChange} required style={ {height: textareaHeight}} />
                </div>
                <div className="form-group">
                    <p for="gender">Genero/s</p>
                    <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
                </div>
                <button type="submit" className="form-submit-btn">Submit</button>
            </form>
        </div>  
        
    );
};
export default MyFormComponent;
