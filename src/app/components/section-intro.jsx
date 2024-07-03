"use client";

import React from 'react';
import StandardButton from './buttons/standard-button';

function Section({title, description}){
    return(

        <div className="section__master">

            <h2 className="section__title">{title}</h2>
            <p className="section__description">{description}</p>


        </div>


    );
}

export default Section;
