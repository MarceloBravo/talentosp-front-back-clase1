const LikesController = require('../controllers/likes.controllers');

module.exports = (app) => {
    const likes = new LikesController();    
    app.post('/api/posts/:postId/likes', (req, res, next) => likes.nuevoLike(req, res, next));
    app.delete('/api/posts/:postId/likes', (req, res, next) => likes.eliminarLike(req, res, next));
}