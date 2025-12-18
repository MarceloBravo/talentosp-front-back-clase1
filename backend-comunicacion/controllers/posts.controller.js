const PostsServices = require('../services/posts.service');

class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'AppError'; 
    }
}

class postController {

    constructor() {
        this.service = new PostsServices();
    }

    async getAllPosts(req, res, next) {
        try {
            const rows = await this.service.getAllPosts();
            res.json(rows);
        } catch (error) {
            next(error);
        }
    }

    async getPostById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('El ID del post es requerido.', 400);
            }
            const result = await this.service.getPostById(id);
            if (!result) {
                throw new AppError(`Post con id ${id} no encontrado.`, 404);
            }
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async createPost(req, res, next) {
        try {
            const { titulo, contenido, autor } = req.body;
            if (!titulo || !contenido || !autor) {
                throw new AppError('Título, contenido y nombre del autor son requeridos.', 400);
            }
            const result = await this.service.createPost(titulo, contenido, autor);
            res.status(201).json({message: 'Post creado exitosamente', data: result});
        } catch (error) {
            next(error);
        }
    }

    async updatePost(req, res, next) {
        try {
            const id = req.params.id;
            const { titulo, contenido, autor } = req.body;
            if (!id || !titulo || !contenido || !autor) {
                throw new AppError('ID, título, contenido y autor son requeridos.', 400);
            }
            const result = await this.service.updatePost(id, titulo, contenido, autor);
            if(result.affectedRows === 0) {
                throw new AppError(`Post con id ${id} no encontrado.`, 404);
            }
            res.status(201).json({message: 'Post actaulizado exitosamente', data: result});
        } catch (error) {
            next(error);
        }
    }

    async deletePost(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('El ID del post es requerido.', 400);
            }
            const result = await this.service.deletePost(id);
            debugger
             if(result[0].affectedRows === 0) {
                throw new AppError(`Post con id ${id} no encontrado.`, 404);
            }
            res.status(200).json({ message: `Post ${id} eliminado.` });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = postController;