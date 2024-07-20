"use client";

import React, { useState } from 'react';
import Image from 'next/image.js';
import InmueblesItem from './inmuebles-item.jsx';
import leftArrow from '../../assets/icon/left-arrow.svg';
import rightArrowWhite from '../../assets/icon/right-arrow-white.svg';
import leftArrowWhite from '../../assets/icon/left-arrow-white.svg';
import rightArrow from '../../assets/icon/right-arrow.svg';
import Section from '../section-intro.jsx';
import BannerButtons from '../buttons/banner-buttons.jsx';
import PisoTuria from '../../assets/img/airbnb-piso-turia-1.jpg'
import PisoCentro from '../../assets/img/airbnb-piso-centro-1.jpg'

const datosInmuebles = [
    {
        src: 'https://www.apartup.com/alquiler-larga-estancia/fotos/2/1645724983a00c8600d3e42bb93ab8b7d5de19e260/1645725029650f31554349d17c75a1af45b8eda95e.jpg',
        alt:'imagen piso Carrasqueta Deluxe',
        titulo: 'Carrasqueta Deluxe',
        descripcion: 'El apartamento dispone de una zona de lavandería con lavadora y secadora, para que puedas tener tu ropa limpia y seca rápidamente. Además, la cocina está equipada con todo lo necesario para que disfrutes de tu estancia, incluido lavavajillas. Hay conexión wifi y Smart TV.',
        caracteristicas: ['Piscina', 'Acceso a internet', 'Aire acondicionado', 'Jardín'],
        boton: 'Ver en ApartUP',
        link: 'https://www.airbnb.es/rooms/44134906?viralityEntryPoint=1&unique_share_id=00DC64BD-F83C-47FA-9F14-19951CA89278&slcid=b228000452164a7683c36b3cc03684b7&s=76&feature=share&adults=1&channel=native&slug=b4EcRa95&source_impression_id=p3_1720377406_P31ntwIDyTxE94cL',
    },
    {
        src: PisoTuria,
        alt:'imagen piso Rio Turia',
        titulo: 'Piso en Río Turia',
        descripcion: 'El apartamento ha sido recién reformado y cuenta con 135 metros cuadrados , una zona amplia de estar en la que se encuentra la cocina y el salón, tres habitaciones cada una con aire acondicionado y grandes armarios y dos baños completos.',
        caracteristicas: ['Cocina', 'Wifi',
        'Zona para trabajar',
        'Aparcamiento gratuito ',
        'Televisión HD',
        'Ascensor',
        'Lavadora',
        'Secadora',],
        boton: 'Ver en Airbnb',
        link: 'https://www.airbnb.es/rooms/810254726997200920?viralityEntryPoint=1&unique_share_id=6B662A9F-207B-4E31-8C96-4573EAA60210&slcid=544585e07fd04e3492e36d10ff2d728b&s=76&feature=share&adults=1&channel=native&slug=AG72bYxC&source_impression_id=p3_1719665788_P3SpCkZY0yKRDemp',
    },
    {
        src: PisoCentro,
        alt:'imagen apartamento en la playa',
        titulo: 'Piso en Valencia',
        descripcion: 'El apartamento dispone de una zona de lavandería con lavadora y secadora, para que puedas tener tu ropa limpia y seca rápidamente. Además, la cocina está equipada con todo lo necesario para que disfrutes de tu estancia, incluido lavavajillas. Hay conexión wifi y Smart TV.',
        caracteristicas:['Cocina', 'Wifi', 'Zona para trabajar', 'Vistas al perfil urbano', 'Acceso a la playa',],
        boton: 'Ver en Airbnb',
        link: 'https://www.apartup.com/alquiler-larga-estancia/casa-pobla-de-vallbona-carrasqueta-deluxe-381073.html',
    },
    
];

function InmueblesPadre() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % datosInmuebles.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + datosInmuebles.length) % datosInmuebles.length);
    };

    return (
        <><Section
            title={<span id="inmuebles">Nuestra cartera de <span className="section__description-hightlight">inmuebles</span></span>}
            description="Con más de 10 años de experiencia en el sector, gestionamos la venta o alquiler de propiedades para particulares y empresas en Valencia y alrededores."
        />
       
            <div className="inmuebles__padre">
                <button aria-label="anterior inmueble" className="inmuebles__left-arrow" onClick={handlePrev}><Image className="arrow-normal" src={leftArrow} alt="flecha para ir al anterior inmueble"></Image><Image className="arrow-white" src={leftArrowWhite} alt="flecha para ir al anterior inmueble"></Image></button>
                <InmueblesItem {...datosInmuebles[currentIndex]} />
                <button aria-label="Siguiente inmueble" className="inmuebles__right-arrow" onClick={handleNext}><Image className="arrow-normal" src={rightArrow} alt="flecha para ir al siguiente inmueble"></Image><Image className="arrow-white" src={rightArrowWhite} alt="flecha para ir al siguiente inmueble"></Image></button>
            </div>

            <BannerButtons />
        </>
    );
}

export default InmueblesPadre;
