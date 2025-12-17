const CommentsController = require('../controllers/comments.controller');

module.exports = (app) => {
    const comments = new CommentsController();
    
    app.get('/api/posts/:postId/comments', (req, res, next) => comments.getCommentsByPostId(req, res, next));
    app.get('/api/posts/:postId/comments/:commentId', (req, res, next) => comments.getCommentById(req, res, next));
    app.post('/api/posts/:postId/comments', (req, res, next) => comments.addComment(req, res, next));
    app.put('/api/posts/:postId/comments/:commentId', (req, res, next) => comments.updateComment(req, res, next));
    app.delete('/api/posts/:postId/comments/:commentId', (req, res, next) => comments.deleteComment(req, res, next));
}