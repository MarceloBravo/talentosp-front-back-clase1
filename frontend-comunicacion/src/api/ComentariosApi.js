import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

async function getComentariosByPostId(postId) {
    try {
        const response = await axios.get(`${API_URL}/api/posts/${postId}/comments`);
        return response.data;
    } catch (error) {
        console.error(`Error obteniendo los comentarios del post:`, error);
        throw error;
    }
}

async function addComentarioByPostId(postId, data) {
    try {
        const response = await axios.post(`${API_URL}/api/posts/${postId}/comments`, data);
        return response.data;
    } catch (error) {
        console.error(`Error creando el comentario:`, error);
        throw error;
    }
}

async function updateComentarioByPostId(postId, comentarioId, data) {
    try {
        const response = await axios.put(`${API_URL}/api/posts/${postId}/comments/${comentarioId}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error actualizando el comentario:`, error);
        throw error;
    }
}

async function deleteComentarioByPostId(postId, comentarioId) {
    try {
        const response = await axios.delete(`${API_URL}/api/posts/${postId}/comments/${comentarioId}`);
        return response.data;
    } catch (error) {
        console.error(`Error eliminando el comentario:`, error);
        throw error;
    }
}


export { getComentariosByPostId, addComentarioByPostId, updateComentarioByPostId, deleteComentarioByPostId};