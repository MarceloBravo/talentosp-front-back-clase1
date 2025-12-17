const pool = require('../db/connection');

class CommentsModel{
    constructor() {
        this.db = pool;
    }

    async getAllCommentsByPostId(postId){
        const [rows] = await this.db.execute('SELECT * FROM comentarios WHERE post_id = ?', [postId]);
        return rows;
    }

    async getCommentById(postId, commentId){
        const rows = await this.db.execute('SELECT * FROM comentarios WHERE post_id = ? AND id = ?', [postId, commentId]);
        return rows;
    }

    async addComment(postId, contenido, autor, email){
        const result = await this.db.execute(
            'INSERT INTO comentarios (post_id, contenido, autor, email) VALUES (?, ?, ?, ?)',
            [postId, contenido, autor, email]
        );
        return result;
    }   

    async updateComment(postId, commentId, contenido, autor, email){
        const result = await this.db.execute(
            'UPDATE comentarios SET contenido = ?, autor = ?, email = ? WHERE id = ? AND post_id = ?',
            [contenido, autor, email, commentId, postId]
        );
        return result;
    }   

    async deleteComment(postId, commentId){
        const result =await this.db.execute(
            'DELETE FROM comentarios WHERE id = ? AND post_id = ?',
            [commentId, postId]
        );
        return result;
    }   
}

module.exports = CommentsModel;