import React from "react";
import './estilo.css'

export default function Contatos(props) {
    return (
        <section id="contatos-banner">
            <div className="limitar-secao contatos-container">
                <h2>Contatos & Endereço</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.116814396092!2d-43.363081683955244!3d-22.98273154636566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-904!5e0!3m2!1sen!2sbr!4v1677808046320!5m2!1sen!2sbr" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Endereço"> </iframe>
                <div className="contatos-grid">
                    <p>Telefone & Whatsapp: {props.Telefone}</p>
                    <p>E-mail: {props.Email}</p>
                    <p>Endereço: Av Ayrton Senna, 3000 - Barra da Tijuca - Rio de Janeiro</p>
                </div>
            </div>
        </section>        
    )
}