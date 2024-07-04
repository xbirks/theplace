"use client";

import React from 'react';
import StandardButton from './buttons/standard-button';
import BannerButtons from './buttons/banner-buttons';
import Reloj from './reloj';
import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '../assets/icon/instagram.svg';
import InterBg from '../assets/img/internacional-bg.jpg';


function Footer() {

    
    return (
        <div className="footer__master">
            <BannerButtons />
            <div className="footer__h-line"></div>
            <div className="footer__interior">
                <div className="footer__services">
                    <div className="footer__services-first">
                        <Link href="#internacional">
                            <div className="footer__services-item">
                                <Image src={InterBg} width="300" height="200"></Image>
                                <h4>Servicios internacionales</h4>
                            </div>
                        </Link>
                        <Link href="#inmuebles">
                            <div className="footer__services-item">
                                <Image src="https://www.apartup.com/alquiler-larga-estancia/fotos/2/1645724983a00c8600d3e42bb93ab8b7d5de19e260/huge1645725010d52c3fae40030638b061d82596bab441.jpg" width="300" height="200"></Image>
                                <h4>Gestión de inmuebles</h4>
                            </div>
                        </Link>
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
                        <Link href="soyandres.es" className="footer__child-1">hola@theplace.com</Link>
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
