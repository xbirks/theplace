"use client";

import React from 'react';
import Image from 'next/image';
import StandardButton from '../buttons/standard-button';

function InmueblesItem({ src, titulo, descripcion, caracteristicas, boton, link, alt = [] }) {
    return (
        <div className="inmuebles__master">
            <div className="inmuebles__image">
                <Image src={src} alt={alt} width={1200} height={500} loading="lazy" />
            </div>
            <div className="inmuebles__datos">
                <h3 className="inmuebles__datos-titulo">{titulo}</h3>
                <p className="inmuebles__datos-descripcion">{descripcion}</p>
                <ul>
                    {caracteristicas.map((car, index) => (
                        <li key={index}>· {car}</li>
                    ))}
                </ul>
                <StandardButton
                    link={link}
                    title={boton}
                    style="inmuebles__button"
                />
            </div>
        </div>
    );
}

export default InmueblesItem;

