"use client";

import React from 'react';
import FaqItem from './faq-item';
import StandardButton from '../buttons/standard-button';

const datosFaq = [
    {
        titulo: "¿Qué es exactamente lo que gestionáis?",
        explicacion: "Desde patrimonio inmobiliario (compra y/o alquiler de viviendas), hasta un seguro para tu mascota.",
    },
    {
        titulo: "¿Cómo puedo ponerme en contacto con vosotros?",
        explicacion: "Rellena el formulario o hablamos a través de whastapp a nuestro contacto. En seguida nos pondremos en contacto contigo y concertaremos una videollamada o una reunión presencial.",
    },
    {
        titulo: "¿Qué presupuesto debo tener?",
        explicacion: "Eso dependerá de las necesidades que tengas.",
    },
];

function FaqPadre() {

    
    return (
        <div className="faq__starter">
        <div className="faq__master">
            <h2><span className="section__description-hightlight">Preguntas <br /></span>frecuentes</h2>
            <div className="faq__item-index">
                {datosFaq.map((datos, index) => (
                    <FaqItem key={index} {...datos} />
                ))}
            </div>
        </div>
        <div className="faq_btn">
            <p>Si tienes más preguntas puedes<br></br>contactarnos haciendo clic aquí:</p>
            <StandardButton
                link="#"
                title="Contacto"
                style=""
            />
        </div>
        </div>
    );
}

export default FaqPadre;
