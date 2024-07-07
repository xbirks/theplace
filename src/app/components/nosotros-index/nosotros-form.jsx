import React, { useState } from 'react';

const NosotrosForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', tel: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(''); // Reset status

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
