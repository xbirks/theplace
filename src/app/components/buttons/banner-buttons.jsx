import React from 'react';
import StandardButton from './standard-button';




function BannerButtons() {
   
    return(
   
   <div className="bannerButtons__master">
        <StandardButton
            title="Buscar viviendas"
            link="https://wa.me/message/B5ZHFOXXINNKP1"
            style="bannerButtons__mod"
        />

        <StandardButton
            title="Traslados"
            link="https://wa.me/message/B5ZHFOXXINNKP1"
            style="bannerButtons__mod"
        />

        <StandardButton
            title="Seguros"
            link="https://wa.me/message/B5ZHFOXXINNKP1"
            style="bannerButtons__mod"
        />

        <StandardButton
            title="Asesoramiento legal"
            link="https://wa.me/message/B5ZHFOXXINNKP1"
            style="bannerButtons__mod"
        />

  </div>

);
}

export default BannerButtons;




