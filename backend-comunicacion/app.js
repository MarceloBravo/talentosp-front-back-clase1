const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Registro de rutas
require('./routes/posts.routes')(app);
require('./routes/comments.routes')(app);

// Manejador de errores global
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

// Puerto de escucha
app.set('port', process.env.PORT || 3000);

// Iniciar el servidor
app.listen(app.get('port'), 'localhost',() => {
  console.log(`Servidor activo en el puerto ${app.get('port')}`);
});


