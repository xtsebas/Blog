import React, { useRef, useState, useEffect } from 'react';
import useForm from '../useForm/Useform';
import { object, string } from 'yup';
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
    const schema = object().shape({
        title: string().required('El título es requerido'),
        sinopsis: string().required('La sinopsis es requerida'),
        gender: string().required('El género es requerido'),
    });
    const { values, setValue, validate, errors } = useForm(schema);
    const { addPost, loading, error } = useApi();
    const [formData, setFormData] = useState(initialState); 
    const [textareaHeight, setTextareaHeight] = useState('auto'); 
    const textareaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue(name, value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = await validate();
        if (isValid) {
            try {
                await addPost(formData);
                setValue('title', '');
                setValue('sinopsis', '');
                setValue('gender', '');
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
        }
    };

    if (loading) {
        return (
            <div className="loading-screen">
                <LoadingScreen />
            </div>
        );
    }

    return (
        <div className="form-container">
            <h2>Agregar Nuevo Post</h2>
            {error && <p>Error: {error}</p>}
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <p htmlFor="title" id = 'title'>Titulo</p>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <p htmlFor="sinopsis" id="sinopsis">Sinopsis</p>
                    <textarea name="sinopsis" value={formData.sinopsis} onChange={handleChange} required style={ {height: textareaHeight}} />
                </div>
                <div className="form-group">
                    <p htmlFor="gender">Genero/s</p>
                    <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
                </div>
                <button type="submit" className="form-submit-btn">Submit</button>
            </form>
        </div>  
        
    );
};
export default MyFormComponent;
