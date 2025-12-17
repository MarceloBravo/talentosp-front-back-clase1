const ContactoController = require('../controllers/contacto.controller');

module.exports = (app) => {
    const contacto = new ContactoController();

    app.post('/api/contacto', (req, res, next) => contacto.enviarMensaje(req, res, next));
};