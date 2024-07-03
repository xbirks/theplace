// api/sendEmail.js

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const msg = {
            to: 'destinatario@example.com', // Reemplaza con tu dirección de correo electrónico
            from: 'remitente@example.com', // Reemplaza con la dirección de correo electrónico verificada en SendGrid
            subject: 'Mensaje de contacto desde tu sitio web',
            text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ message: 'Mensaje enviado correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al enviar el mensaje' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
