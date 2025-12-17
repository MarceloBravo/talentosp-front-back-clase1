const pool = require('../db/connection');

class PostModel {
    
    constructor() {
        this.db = pool;
    }

    async getAllPosts() {
        const [rows] = await this.db.execute('SELECT * FROM posts');
        return rows;
    }

    async getPostById(id) {
        debugger;
        const [rows] = await this.db.execute('SELECT * FROM posts WHERE id = ?', [id]);
        return rows[0];
    }

    async createPost(titulo, contenido, autor) {
        const [result] = await this.db.execute(
            'INSERT INTO posts (titulo, contenido, autor) VALUES (?, ?, ?)',
            [titulo, contenido, autor]
        );
        return { id: result.insertId, titulo, contenido, autor };
    }   

    async updatePost(id, titulo, contenido, autor) {
        await this.db.execute(
            'UPDATE posts SET titulo = ?, contenido = ?, autor = ? WHERE id = ?',
            [titulo, contenido, autor, id]
        );
        return { id, titulo, contenido, autor };
    }   

    async deletePost(id) {
        const result = await this.db.execute(
            'DELETE FROM posts WHERE id = ?',
            [id]
        );
        return result;
    }   
}

module.exports = PostModel;