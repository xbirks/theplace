"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function IntroItem({imgSrc, title, alt, enlace}) {
    return (
        <div>
            <Link href={enlace}>
                
                <div className="introItem__container">
                    <Image src={imgSrc} alt={alt} width={550} height={460} ></Image>
                    <h3>{title}</h3>
                </div>
                
            </Link>
        </div>
    );
}

export default IntroItem;
