const { sendContactEmail } = require('../services/contacto.service');

class ContactoController{

    constructor(){
    }

    async enviarMensaje(req, res, next){
        try{
            const { nombre, email, mensaje } = req.body;
            const result = await sendContactEmail(nombre, email, mensaje);
            res.status(200).json(result);
        }catch(error){
            next(error);
        }
    }

}

module.exports = ContactoController