"use client";

import Section from "../section-intro";
import React, {useState} from 'react';
import ContactForm from "./nosotros-form";
import StandardButton from "../buttons/standard-button";


function NosotrosPadre(){

    return(
        <div className="nosotros__master">
            <div className="nosotros__descripcion">
                <Section
                title={<span>Estos somos <span className="section__description-hightlight">nosotros</span></span>}
                description={<span><span className="bold_p">THE PLACE VLC</span> surge de nuestra experiencia personal a través de los años en contacto con gran cantidad de clientes que necesitaban ayuda para gestionar su patrimonio inmobiliario. A raíz de ofrecerles nuestra ayuda durante casi más de 10 años decidimos embarcarnos en este proyecto para poder seguir creciendo de vuestra mano.
                    <br></br> <br></br>
                    Nuestros servicios abarcan muchas posibilidades y por ello lo más importante para nosotros es conocernos y explorar las oportunidades que nos ofrece el mercado.</span>}
                />
                <div className="nosotros__buttons">
                    <StandardButton
                    link="soyandres.es"
                    title="Mándanos un WhatsApp"
                    style="button__whatsapp"
                    />
                    <StandardButton
                    link="soyandres.es"
                    title="Llámanos"
                    style=""
                    />
                </div>
            </div>
            <div className="nosotros__formulario">
                <h3>Formulario de contacto</h3>
                <ContactForm />
            </div>
        </div>

    );
}

export default NosotrosPadre;