// nosotrosForm.jsx
import React, { useState } from 'react';

const NosotrosForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', tel: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Limitar el campo de teléfono solo a números
        if (name === 'tel') {
            if (!/^\d*$/.test(value)) return; // Permitir solo números
        }
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(''); // Reset status

        if (formData.tel.length !== 9) {
            setStatus('error');
            alert('El número de teléfono debe tener exactamente 9 dígitos.');
            return;
        }

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subject: `Mensaje de ${formData.name}`,
                    message: `
                        <p>Nombre: ${formData.name}</p>
                        <p>Email: ${formData.email}</p>
                        <p>Teléfono: ${formData.tel}</p>
                        <p>Mensaje: ${formData.message}</p>
                    `,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', tel: '', message: '' }); // Clear form
            } else {
                setStatus('error');
            }
            console.log(data);
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
        }
    };

    return (
        <div className="nosotros__form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Pon tu nombre y apellidos"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="¿Cuál es tu mail?"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tel">Teléfono</label>
                    <input
                        type="tel"
                        id="tel"
                        name="tel"
                        maxLength="9"
                        placeholder="¿Te podemos llamar?"
                        inputMode="numeric"
                        value={formData.tel}
                        onChange={handleChange}
                        pattern="\d{9}" // Exactamente 9 dígitos
                        required
                    />
                </div>
                
                <p className="nosotros__form-aviso">
                    Al hacer clic en ENVIAR estás aceptando la política de privacidad.
                </p>
                <button className="nosotros__form-button" type="submit">
                    Enviar
                </button>
            </form>
            {status === 'success' && <p className="success-message">¡Formulario enviado con éxito!</p>}
            {status === 'error' && <p className="error-message">Hubo un error al enviar el formulario. Inténtalo de nuevo.</p>}
        </div>
    );
};

export default NosotrosForm;
