const PostModel = require('../models/posts.model');
const CommentsModel = require('../models/comments.model');

class PostsServices {
    
    constructor() {
        this.postsRepository = new PostModel();
        this.commentsRepository = new CommentsModel();
    }

    async getAllPosts() {
        return await this.postsRepository.getAllPosts();
    }

    /**
     * Retorna un post junto con sus comentarios
     * @param {*} id: ID del post
     * @returns {Object} Post con sus comentarios 
     */
    async getPostById(id) {
        try{
            const post = await this.postsRepository.getPostById(id);
            if (!post) {
                throw new Error('Post no encontrado.');
            }
            const comments = await this.commentsRepository.getAllCommentsByPostId(id);
            const resp = { post, comments };
            return resp;
        }catch(error){
            throw new Error('Error al obtener el post y sus comentarios: ' + error.message);
        }
    }

    async createPost(titulo, contenido, autor) {
        const result = await this.postsRepository.createPost(titulo, contenido, autor);
        return result;
    }


    async updatePost(id, titulo, contenido, autor) {
        return await this.postsRepository.updatePost(id, titulo, contenido, autor);       
    }


    async deletePost(id) {
        const result = await this.postsRepository.deletePost(id);
        debugger;
        return result;
    }
}

module.exports = PostsServices;