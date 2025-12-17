const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db/connection');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Registro de rutas



// Puerto de escucha
app.set('port', process.env.PORT || 3000);

// Iniciar el servidor
app.listen(app.get('port'), '0,0,0,0',() => {
  console.log(`Servidor activo en el puerto ${app.get('port')}`);
});


