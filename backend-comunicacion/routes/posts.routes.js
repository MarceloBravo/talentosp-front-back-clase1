const PostsController = require('../controllers/posts.controller');

module.exports= (app) => {
    const posts = new PostsController();

    app.get('/api/posts', (req, res, next) => posts.getAllPosts(req, res, next));
    app.get('/api/posts/:id', (req, res, next) => posts.getPostById(req, res, next));
    app.post('/api/posts', (req, res, next) => posts.createPost(req, res, next));
    app.put('/api/posts/:id', (req, res, next) => posts.updatePost(req, res, next));
    app.delete('/api/posts/:id', (req, res, next) => posts.deletePost(req, res, next));
}