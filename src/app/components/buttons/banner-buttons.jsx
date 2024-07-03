import React from 'react';
import StandardButton from './standard-button';




function BannerButtons() {
   
    return(
   
   <div className="bannerButtons__master">
        <StandardButton
            title="Buscar viviendas"
            link="#"
            style="bannerButtons__mod"
        />

        <StandardButton
            title="Traslados"
            link="#"
            style="bannerButtons__mod"
        />

        <StandardButton
            title="Seguros"
            link="#"
            style="bannerButtons__mod"
        />

        <StandardButton
            title="Asesoramiento legal"
            link="#"
            style="bannerButtons__mod"
        />

        <StandardButton
            title="Instagram"
            link="#"
            style="bannerButtons__instagram"
        />
  </div>

);
}

export default BannerButtons;




