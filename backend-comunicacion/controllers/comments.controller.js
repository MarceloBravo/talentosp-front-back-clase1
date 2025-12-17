const CommentsModel = require('../models/comments.model');

class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'AppError';
    }
}

class CommentsController {
    constructor() {
        this.model = new CommentsModel();
    }

    async getCommentsByPostId(req, res, next) {
        try {
            const { postId } = req.params;
            if (!postId) {
                throw new AppError('El ID del post es requerido.', 400);
            }
            const rows = await this.model.getAllCommentsByPostId(postId);
            res.json(rows);
        } catch (error) {
            next(error);
        }
    }

    async getCommentById(req, res, next) {
        try {
            debugger;
            const { postId, commentId } = req.params;
            if (!postId || !commentId) {
                throw new AppError('El ID del post y el ID del comentario son requeridos.', 400);
            }
            const row = await this.model.getCommentById(postId, commentId);
             if (!row || row[0].length === 0) {
                throw new AppError(`Comentario ${commentId} del post ${postId} no fue encontrado.`, 404);
            }
            res.json(row[0]);
        } catch (error) {
            next(error);
        }
    }

    async addComment(req, res, next) {
        try {
            const { postId } = req.params;
            const { contenido, autor, email } = req.body;
            if (!postId || !contenido || !autor || !email) {
                throw new AppError('ID del post, contenido, autor y email del comentario son requeridos.', 400);
            }
            const result = await this.model.addComment(postId, contenido, autor, email);
            res.status(201).json({ message: 'Comentario agregado exitosamente', data: {id: result[0].insertId, contenido, autor, email } });
        } catch (error) {
            next(error);
        }
    }

    async updateComment(req, res, next) {
        try {
            const { postId, commentId } = req.params;
            const { contenido, autor, email } = req.body;
            if (!postId || !commentId || !contenido || !autor || !email) {
                throw new AppError('ID del post, ID del comentario, contenido, autor y email son requeridos.', 400);
            }
            const result = await this.model.updateComment(postId, commentId, contenido, autor, email);
            if(result[0].affectedRows === 0) {
                throw new AppError(`Comentario ${commentId} no encontrado.`, 404);
            }
            res.json({ message: 'Comentario actualizado exitosamente', data: {post: postId, comentario: commentId, contenido, autor, email } });
        } catch (error) {
            next(error);
        }
    }

    async deleteComment(req, res, next) {
        try {
            const { postId, commentId } = req.params;
            if (!postId || !commentId) {
                throw new AppError('ID del post y el ID del comentario son requeridos.', 400);
            }
            const result = await this.model.deleteComment(postId, commentId);
            if(result[0].affectedRows === 0) {
                throw new AppError(`Comentario ${commentId} del post ${postId} no fue encontrado.`, 404);
            }
            res.json({ message: `Comentario ${commentId} del post ${postId} fue eliminado exitosamente.` });
        } catch (error) {
            next(error);
        }
    }

}
module.exports = CommentsController;