const LikesModel = require('../models/likes.model');

class LikesController{
    constructor(){
        this.model = new LikesModel();
    }

    async nuevoLike(req, res, next){
        try{
            const { postId } = req.body;
            if(!postId){
                throw new Error('postId es requerido.');
            }
            const result = await this.model.addLike(postId);
            if(result.affectedRows === 0){
                throw new Error(`Post ${postId} no encontrado.`);
            }
            res.status(201).json({message: `Like registrado para el post ${postId}.`});
        }catch(error){
            next(error);
        }
    }

    async eliminarLike(req, res, next){
        try{
            const { postId } = req.body;
            if(!postId){
                throw new Error('postId es requerido.');
            }
            
            const result = await this.model.removeLike(postId);
            if(result.affectedRows === 0){
                throw new Error(`Post ${postId} no encontrado.`);
            }

            res.status(200).json({message: `Like eliminado para el post ${postId}.`});
        }catch(error){
            next(error);
        }
    }
}

module.exports = LikesController