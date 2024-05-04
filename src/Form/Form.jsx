import React from 'react';
import useForm from '../useForm/Useform';
import { useApi } from '../useApi/useApi';
import useNavigate from '../HOC/useNavigate';
import Swal from 'sweetalert2';
import { useState } from 'react';
import './form.css'

const MyFormComponent = () => {
    const { navigate } = useNavigate();
    const initialState = {
        title: '',
        sinopsis: '',
        gender: ''
    };
    const { addPost, loading, error } = useApi(); // Usa el hook useApi para obtener la función addPost
    const [formData, setFormData] = useState(initialState); // Estado para los datos del formulario

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPost(formData); // Envía los datos del formulario usando addPost
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

    return (
        <div>
            <h2>Agregar Nuevo Post</h2>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Sinopsis:</label>
                    <textarea name="sinopsis" value={formData.sinopsis} onChange={handleChange} required />
                </div>
                <div>
                    <label>Género:</label>
                    <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
                </div>
                <button type="submit">Agregar Post</button>
            </form>
        </div>
        
    );
};
export default MyFormComponent;
