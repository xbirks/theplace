"use client";

import React, { useState } from 'react';
import Section from '../section-intro.jsx';
import InternacionalesItem from './internacionales-item.jsx';
import CasaIcon from '../../assets/icon/casa-icon.svg';
import TarjetaIcon from '../../assets/icon/tarjeta-icon.svg';
import CarteraIcon from '../../assets/icon/cartera-icon.svg';
import ContratoIcon from '../../assets/icon/contrato-icon.svg';
import FurgoIcon from '../../assets/icon/furgo-icon.svg';
import OtrosIcon from '../../assets/icon/otros-icon.svg';



const datosInternacionales = [
    {
        imagen: CasaIcon,
        alt:'icono de una casa',
        titulo: 'Búsqueda de vivienda personalizada',
        descripcion: 'Nos adaptamos a tus objetivos y cubrimos tus necesidades en la búsqueda de tu nuevo hogar.',
    },
    {
        imagen: TarjetaIcon,
        alt:'icono de una tarjeta',
        titulo: 'Gestión de visado',
        descripcion: 'Contacta con nuestro estudio de abogados de extranjería de confianza .',
    },
    {
        imagen: FurgoIcon,
        alt:'icono de una furgoneta',
        titulo: 'Traslados',
        descripcion: 'Desplázate cómodamente desde cualquier ciudad, nosotros lo coordinaremos.',
    },
    {
        imagen: ContratoIcon,
        alt:'icono de un contrato',
        titulo: 'Contratación de seguros',
        descripcion: 'Te ayudaremos a seleccionar un seguro médico de extranjería y visados, así como un seguro del hogar y de mascotas entre otros.',
    },
    {
        imagen: CarteraIcon,
        alt:'icono de una cartera',
        titulo: 'Asesoramiento legal integral',
        descripcion: 'Orientación en cuestiones legales y sucesorias para tranquilidad futura.',
    },
    {
        imagen: OtrosIcon,
        alt:'icono de una lupa buscando',
        titulo: 'Otros',
        descripcion: 'Somos tu contacto de confianza para cualquier cosa que necesites, solo tienes que contactarnos y nos pondremos en marcha.',
    },
    // Añade más objetos para más inmuebles
];



function InternacionalesPadre() {


    return (
        <>
            <Section
            title={<span id="internacional">Servicios <span className="section__description-hightlight">internacionales</span></span>}
            description={<span>Ofrecemos servicios internacionales a todas aquellas personas interesadas en conseguir lo que buscan en Valencia de la mano de un profesional local con experiencia en el sector.
            <br></br> <br></br>
            Para escoger nuestros servicios internacionales debes contactarnos antes de tu llegada a Valencia y completar el formulario que aparece al final de la página para brindarnos más detalles de tu búsqueda.</span>}
            />
           <div className="interItem__master">
                {datosInternacionales.map((datos, index) => (
                    <InternacionalesItem key={index} {...datos} />
                ))}
            </div>
        </>
    );
}

export default InternacionalesPadre;
