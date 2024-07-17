"use client";

import React from 'react';
import FaqItem from './faq-item';
import StandardButton from '../buttons/standard-button';

const datosFaq = [
    {
        titulo: "¿Qué es exactamente lo que gestionáis?",
        explicacion: "Desde patrimonio inmobiliario (compra y/o alquiler de viviendas), hasta cualquier tipo de seguro, visado o gestión en la que necesites ayuda.",
    },
    {
        titulo: "¿Cómo puedo ponerme en contacto con vosotros?",
        explicacion: "Rellena el formulario o hablamos a través de whastapp a nuestro contacto. En seguida nos pondremos en contacto contigo y concertaremos una videollamada o una reunión presencial.",
    },
    {
        titulo: "¿Qué presupuesto debo tener?",
        explicacion: "Eso dependerá de las necesidades que tengas, nosotros te ayudamos con todo desde la búsqueda de un piso, hasta la gestión del vistado o contratación de cualquier seguro.",
    },
];

function FaqPadre() {

    
    return (
        <div className="faq__starter" id="faq">
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
                link="https://wa.me/message/B5ZHFOXXINNKP1"
                title="Contacto"
                style=""
            />
        </div>
        </div>
    );
}

export default FaqPadre;
