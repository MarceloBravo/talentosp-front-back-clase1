const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * Envía un correo electrónico utilizando un servicio SMTP de prueba (Ethereal).
 * Los datos del formulario de contacto se incluyen en el cuerpo del correo.
 * @param {string} nombre - Nombre del remitente.
 * @param {string} email - Correo del remitente.
 * @param {string} mensaje - Mensaje.
 * @returns {Promise<string>} - URL de vista previa del correo electrónico enviado.
 */
async function sendContactEmail(nombre, email, mensaje) {
  // Crea una cuenta de prueba en Ethereal para obtener credenciales SMTP temporales.
  const testAccount = await nodemailer.createTestAccount();

  // Crea un transportador reutilizable usando los datos de la cuenta de prueba.
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true para puerto 465, false para otros puertos
    auth: {
      user: testAccount.user, // usuario generado por Ethereal
      pass: testAccount.pass, // contraseña generada por Ethereal
    },
  });

  // Define las opciones del correo electrónico
  const mailOptions = {
    from: `"${nombre}" <${email}>`, // Dirección del remitente
    to: process.env.EMAIL_TO, // Lista de destinatarios
    subject: 'Nuevo Mensaje de Contacto ✔', // Asunto
    text: mensaje, // Cuerpo del correo en texto plano
    html: `<p>Has recibido un nuevo mensaje de tu formulario de contacto:</p>
           <ul>
             <li><b>Nombre:</b> ${nombre}</li>
             <li><b>Email:</b> ${email}</li>
           </ul>
           <p><b>Mensaje:</b></p>
           <p>${mensaje}</p>`, // Cuerpo del correo en HTML
  };

  // Envía el correo
  const info = await transporter.sendMail(mailOptions);

  console.log('Mensaje enviado: %s', info.messageId);
  // La URL de vista previa solo está disponible para cuentas de Ethereal
  const previewUrl = nodemailer.getTestMessageUrl(info);
  console.log('URL de vista previa: %s', previewUrl);

  return previewUrl;
}

module.exports = {
  sendContactEmail,
};
