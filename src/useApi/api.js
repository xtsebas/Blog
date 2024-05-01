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

export const login = async (usuario, password) => {
    //debugger;
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, password })
    });

    if (!response.ok) {
        throw new Error('Error al iniciar sesión');
    }
    return response;
};

export const register = async (usuario, password) => {
    const response = await fetch(`${API_URL}/registro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, password })
    });
    if (!response.ok) {
        throw new Error('Error al crear el post en el API');
    }
    return response.json();
};

