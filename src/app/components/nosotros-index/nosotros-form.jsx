// components/ContactForm.js

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            alert('Mensaje enviado correctamente!');
            setFormData({ name: '', email: '', tel: '' });
        } else {
            alert('Error al enviar el mensaje.');
        }
    };

    return (
        <div className="nosotros__form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre completo</label>
                    <input type="text" id="name" name="name" placeholder="Pon tu nombre y apellidos" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" placeholder="¿Cuál es tu mail?" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Teléfono</label>
                    <input type="tel" id="phone" name="tel" maxLength="9" placeholder="¿Te podemos llamar?" inputMode="numeric" value={formData.tel} onChange={handleChange} required />
                </div>
                <p className="nosotros__form-aviso">Al hacer clic en ENVIAR estás aceptando la política de privacidad.</p>
                <button className="nosotros__form-button" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
