// route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { subject, message } = await request.json();

        const transporter = nodemailer.createTransport({

            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',

            service: 'hostinger',
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true', // Asegúrate de convertir a booleano

            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'neus@placevlc.com, hugo@placevlc.com',
            subject: subject || 'Solicitud de contacto',
            html: message,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email enviado correctamente" }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: "Error al enviar el email" }, { status: 500 });
    }
}
