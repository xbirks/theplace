"use client";

import React from 'react';
import IntroItem from './intro-item.jsx';
import InterBg from '../../assets/img/internacional-bg.jpg'

function Intro() {
    return (
        <div className="intro__master">
            <h1>Gestión de inmuebles y servicios internacionales en <span className="intro__city">Valencia</span></h1>

            <div className="intro__banner">
                <h3>¿Cómo podemos ayudarte?</h3>
            </div>

            <div className="intro__items">
                <IntroItem
                    imgSrc={InterBg}
                    alt=""
                    title="Servicios internacionales"
                    enlace="#internacional"
                />

                <IntroItem
                    imgSrc="https://www.apartup.com/alquiler-larga-estancia/fotos/2/1645724983a00c8600d3e42bb93ab8b7d5de19e260/huge1645725010d52c3fae40030638b061d82596bab441.jpg"
                    alt=""
                    title="Gestión de inmuebles"
                    enlace="#inmuebles"
                />
               
            </div>
        </div>
    );
}

export default Intro;
