"use client";

import React from 'react';
import Image from 'next/image';

function InternacionalesItem({imagen, titulo, descripcion, alt}) {
    return (
       <div className="interItem">
            <div className="interItem__img"><Image src={imagen} alt={alt} width={32} height={32} loading="lazy"></Image></div>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
       </div>
    );
}

export default InternacionalesItem;

