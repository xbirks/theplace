"use client";

import Section from "../section-intro";
import React, {useState} from 'react';
import StandardButton from "../buttons/standard-button";
import InteresItem from "./interes-item";


const datosInteres = [
    {
        imagen: "https://entreprendas.es/wp-content/themes/EntrePrendas23/img/camisas_01.jpg",
        alt: "casa de comidas",
        fecha:'10/11/24',
        titulo: 'Valencia Natural: Explora sus Espacios Verdes',
        enlace: 'entreprendas.es',
    },
    {
        imagen: "https://entreprendas.es/wp-content/themes/EntrePrendas23/img/camisas_01.jpg",
        alt: "casa de comidas",
        fecha:'10/11/24',
        titulo: 'Valencia Natural: Explora sus Espacios Verdes',
        enlace: 'entreprendas.es',
    },
    {
        imagen: "https://entreprendas.es/wp-content/themes/EntrePrendas23/img/camisas_01.jpg",
        alt: "casa de comidas",
        fecha:'10/11/24',
        titulo: 'Valencia Natural: Explora sus Espacios Verdes',
        enlace: 'entreprendas.es',
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