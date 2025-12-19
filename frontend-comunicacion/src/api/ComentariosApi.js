import { useHttp } from '../hooks/useHttp';

export const useComentariosApi = () => {
    const { request } = useHttp();

    const getComentariosByPostId = (postId) => request(`/api/posts/${postId}/comments`);
    const addComentarioByPostId = (postId, data) => request(`/api/posts/${postId}/comments`, 'POST', data);
    const updateComentarioByPostId = (postId, comentarioId, data) => request(`/api/posts/${postId}/comments/${comentarioId}`, data);
    const deleteComentarioByPostId = (postId, comentarioId) => request(`/api/posts/${postId}/comments/${comentarioId}`, 'DELETE');

    return {getComentariosByPostId, addComentarioByPostId, updateComentarioByPostId, deleteComentarioByPostId}
}