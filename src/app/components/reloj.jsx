// components/Relo.js
import React, { useState, useEffect } from 'react';

function Reloj() {
    const [hora, setHora] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const fecha = new Date();
            const horaLocal = fecha.toLocaleTimeString('es-ES', {
                timeZone: 'Europe/Madrid',
                hour12: false, 
                hour: '2-digit',
                minute: '2-digit'
            });
            setHora(horaLocal);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="reloj__master">
            <p className="reloj__hora">{hora}</p>
            <div className="reloj__lugar">
                <p>Local time</p>
                <h4>Valencia, España</h4>
            </div>
        </div>
    );
}

export default Reloj;
