import React from "react";
import './estilo.css'

 const InfoTexto = (props) => {
    return (
        <section id="informacoes" className="info-texto">
            <div className="limitar-secao info-texto-div">
                <h2>{props.Subtitulo}</h2>
                <p>{props.Paragrafo}</p>
            </div>
        </section>
    )
}

export default InfoTexto