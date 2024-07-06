"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlaceIcon from '../assets/logo/icon_header.svg'; 
import PlaceName from '../assets/logo/name_header.svg'; 

const HamburgerIcon = ({ menuOpen }) => (
  <svg className={`hamburger ${menuOpen ? 'open' : ''}`} width="36" height="25" viewBox="0 0 36 25">
    <path d="M0 0h36v3H0z" />
    <rect y="11" width="36" height="3" />
    <rect y="22" width="36" height="3" />
  </svg>
);

const ArrowMenu = () => (
  <svg className="arrow__svg" width="34" height="23" viewBox="0 0 34 23">
    <path d="M21.03 0L19.95 1.23L30.6 10.68H0V12.33H30.6L19.95 21.77L21.03 23L34 11.5L21.03 0Z" />
  </svg>
);

const MenuButton = ({ buttonName, buttonEnlace, onClick }) => (
  <div className="menu__slider-button" onClick={onClick}>
    <Link href={buttonEnlace}>
      <div className="menu__button">
        <p>{buttonName}</p>
        <ArrowMenu />
      </div>
    </Link>
  </div>
);

const MenuSlider = ({ menuOpen, closeMenu }) => (
  <div className={`menu__slider ${menuOpen ? 'mostrar' : ''}`}>
    <div className="menu__slider-container">
      <MenuButton buttonName="Servicios internacionales" buttonEnlace="#internacional" onClick={closeMenu} />
      <MenuButton buttonName="Gestión de inmuebles" buttonEnlace="#inmuebles" onClick={closeMenu} />
      <MenuButton buttonName="Nosotros" buttonEnlace="#" onClick={closeMenu} />
      <MenuButton buttonName="FAQ" buttonEnlace="#" onClick={closeMenu} />
    </div>
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('no-scroll', !menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className="header__master">
      <Link href="/" className="place-name-icon">
        <Image src={PlaceIcon} alt="Logo ERMO" width={40} height={46} />
      </Link>

      <Link href="/" aria-label="Inicio" className="place-name-logo">
        <Image src={PlaceName} alt="Logo ERMO" width={202} height={46} />
      </Link>

      <button className="menu-nav" aria-label="Menú navegación" onClick={toggleMenu}>
        <HamburgerIcon menuOpen={menuOpen} />
      </button>
      <MenuSlider menuOpen={menuOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default Header;

