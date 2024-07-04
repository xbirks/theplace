"use client";
import Image from "next/image";
import StandardButton from "../buttons/standard-button";

function InteresItem({imagen, alt, fecha, titulo, enlace}){

    return(
        <div className="interes__master-item">
            <Image src={imagen} alt={alt} width={300} height={300}></Image>
            <div className="interes__item-data">
                <p>{fecha}</p>
                <h3>{titulo}</h3>
                <StandardButton
                    link={enlace}
                    title="Leer noticia"
                    style=""
                />
            </div>
        </div>
    );
}

export default InteresItem;