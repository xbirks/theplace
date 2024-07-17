"use client";

import Section from "../section-intro";
import React, {useState} from 'react';
import StandardButton from "../buttons/standard-button";
import InteresItem from "./interes-item";


const datosInteres = [
    {
        imagen: "https://www.visitvalencia.com/sites/default/files/styles/full_width_gallery_laptop/public/media/media-images/images/3/3dias.webp?itok=YAYNekuz",
        alt: "Atardecer en Albufera de valència",
        fecha:'17/07/24',
        titulo: 'Visitar València en tres días es posible',
        enlace: 'https://www.visitvalencia.com/que-ver-valencia/valencia-en-tres-dias',
    },
    {
        imagen: "https://www.visitvalencia.com/sites/default/files/styles/full_width_gallery_laptop/public/media/media-images/images/p/pan_cac_fac_fra_at_201109r.webp?itok=TxKUHTpD",
        alt: "ciudad artes y ciencias vista aerea",
        fecha:'21/04/24',
        titulo: 'Lugares imprescindibles que visitar en València',
        enlace: 'https://www.visitvalencia.com/que-ver-valencia/que-visitar-en-valencia',
    },
    {
        imagen: "https://www.visitvalencia.com/sites/default/files/styles/content_gallery_sm/public/media/media-images/images/OCEANOGRAFIC_EVENTOS_VALENCIA%20_2_.webp?itok=_-khbu21",
        alt: "Oceanogràfic",
        fecha:'13/03/24',
        titulo: 'Oceanogràfic de València',
        enlace: 'https://www.visitvalencia.com/que-ver-valencia/ciudad-de-las-artes-y-de-las-ciencias-y-pla-del-real/oceanografic-valencia',
    },
    // Añade más objetos para más inmuebles
];

function InteresPadre(){

    return(
        <div className="interes__master">
            <h2>Sección de <span className="section__description-hightlight">interés</span></h2>
            <div className="interes__item-index">
                {datosInteres.map((datos, index) => (
                    <InteresItem key={index} {...datos} />
                ))}
            </div>
        </div>

    );
}

export default InteresPadre;