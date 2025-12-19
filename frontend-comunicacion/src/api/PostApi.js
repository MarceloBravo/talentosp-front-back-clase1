import { useHttp } from '../hooks/useHttp';

export const usePostApi = () => {
    const { request } = useHttp();

    const getPosts = () => request(`/api/posts`);
    const getPostsById = (postId) => request(`/api/posts/${postId}`);
    const createPost = (data) => request(`/api/posts`, 'POST', data);
    const updatePost = (postId, data) => request(`/api/posts/${postId}`, 'PUT', data);
    const deletePost = (postId) => request(`/api/posts/${postId}`, 'DELETE');
    const darLikePost = (postId) => request(`/api/posts/${ postId }/likes`, 'POST');
    const darUnlikePost = (postId) => request(`/api/posts/${ postId }/likes`, 'DELETE');

    return  { getPosts, getPostsById, createPost, updatePost, deletePost, darLikePost, darUnlikePost };
}