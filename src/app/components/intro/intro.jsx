"use client";

import React from 'react';
import IntroItem from './intro-item.jsx';

function Intro() {
    return (
        <div className="intro__master">
            <h1>Gestión de inmuebles y servicios internacionales en <span className="intro__city">Valencia</span></h1>

            <div className="intro__banner">
                <h3>¿Cómo podemos ayudarte?</h3>
            </div>

            <div className="intro__items">
                <IntroItem
                    imgSrc="https://www.apartup.com/alquiler-larga-estancia/fotos/2/1645724983a00c8600d3e42bb93ab8b7d5de19e260/huge1645725010d52c3fae40030638b061d82596bab441.jpg"
                    alt=""
                    title="Servicios internacionales"
                    enlace="soyandres.es"
                />

                <IntroItem
                    imgSrc="https://www.apartup.com/alquiler-larga-estancia/fotos/2/1645724983a00c8600d3e42bb93ab8b7d5de19e260/1645725029650f31554349d17c75a1af45b8eda95e.jpg"
                    alt=""
                    title="Gestión de inmuebles"
                    enlace="soyandres.es"
                />
               
            </div>
        </div>
    );
}

export default Intro;
