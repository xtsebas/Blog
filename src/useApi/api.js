const API_URL = 'https://api.tiburoncin.lat/22295';

export const fetchPosts = async () => {
    const response = await fetch(`${API_URL}/posts`);
    if (!response.ok) {
        throw new Error('Error al obtener los datos del API');
    }
    return response.json();
};

export const fetchPostById = async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener el post del API');
    }
    return response.json();
};

export const createPost = async (title, sinopsis, gender) => {
    const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, sinopsis, gender })
    });
    if (!response.ok) {
        throw new Error('Error al crear el post en el API');
    }
    return response.json();
};

export const deletePostById = async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error al eliminar el post del API');
    }
    return response.json();
};

export const updatePostById = async (id, title, sinopsis, gender) => {
    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, sinopsis, gender })
    });
    if (!response.ok) {
        throw new Error('Error al actualizar el post en el API');
    }
    return response.json();
};
