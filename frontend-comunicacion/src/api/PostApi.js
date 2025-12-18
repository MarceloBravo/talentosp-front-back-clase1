import instance from './axiosInstance'

async function getPosts() {
    try {
        const response = await instance.get(`/api/posts`);
        return response.data;
    } catch (error) {
        console.error('Error obteniebdo los posts:', error);
        throw error;
    }
}

async function getPostsById(postId){
    try {
        const response = await instance.get(`/api/posts/${postId}`);
        return response.data; 
    } catch (error) {
        console.error(`Error obteniendo el post requerido:`, error);
        throw error;
    }  
}

async function createPost(data) {
    try {
        const response = await instance.post(`/api/posts`, data);
        return response.data;
    } catch (error) {
        console.error('Error creando el post:', error);
        throw error;
    }
}

async function updatePost(postId, data) {
    try {
        const response = await instance.put(`/api/posts/${postId}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error actualizando el post:`, error);
        throw error;
    }
}


async function deletePost(postId) {
    try {
        const response = await instance.delete(`/api/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error(`Error eliminando el post:`, error);
        throw error;
    }   
}

async function darLikePost(postId) {
    try {
        const response = await instance.post(`/api/posts/${ postId }/likes`);
        return response.data;
    } catch (error) {
        console.error(`Error dando like al post:`, error);
        throw error;
    }
}

async function darUnlikePost(postId) {
    try {
        const response = await instance.delete(`/api/posts/${ postId }/likes`);
        return response.data;
    } catch (error) {
        console.error(`Error quitando like al post:`, error);
        throw error;
    }
}



export { getPosts, getPostsById, createPost, updatePost, deletePost, darLikePost, darUnlikePost };