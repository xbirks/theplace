"use client";

import React from 'react';
import StandardButton from './buttons/standard-button';
import BannerButtons from './buttons/banner-buttons';
import Reloj from './reloj';
import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '../assets/icon/instagram.svg'


function Footer() {

    
    return (
        <div className="footer__master">
            <BannerButtons />
            <div className="footer__h-line"></div>
            <div className="footer__interior">
                <div className="footer__services">
                    <div className="footer__services-first">
                        <div className="footer__services-item">
                            <Image src="https://entreprendas.es/wp-content/themes/EntrePrendas23/img/vestidos_01.jpg" width="300" height="200"></Image>
                            <h4>Servicios internacionales</h4>
                        </div>
                        <div className="footer__services-item">
                            <Image src="https://entreprendas.es/wp-content/themes/EntrePrendas23/img/vestidos_01.jpg" width="300" height="200"></Image>
                            <h4>Gestión de inmuebles</h4>
                        </div>
                    </div>
                    <button className="footer__services-button">
                        <p>Ponte en contacto</p>
                    </button>
                </div>
                <div className="footer__v-line"></div>
                <div className="footer__time">
                    <Reloj />
                    <div className="footer__h-line"></div>
                    <div className="footer__enlaces">
                        <div className="footer__instagram"><Image src={InstagramIcon}></Image><Link href="soyandres.es"> Instagram</Link></div>
                        <Link href="soyandres.es">hola@theplace.com</Link>
                        <Link href="soyandres.es">961 123 456</Link>
                        <Link href="soyandres.es">Política de privacidad</Link>
                        <Link href="soyandres.es">Política de cookies</Link>
                        <Link href="soyandres.es">Aviso legal</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
