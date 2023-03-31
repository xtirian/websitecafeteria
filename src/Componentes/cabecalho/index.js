import React from "react";
import './estilo.css'

export default function Topo () {
    return (
        <header>
            <div className="limitar-secao topo-grid">
                <img src="/assets/logo.png" alt="Logo" />
                <nav className="navigation-grid">
                    <a href="#informacoes" className="navigation-links">INFORMAÇÕES</a>
                    <a href="#contatos-banner" className="navigation-links">CONTATOS</a>
                    <a href="#horarios-banner" className="navigation-links">HORÁRIOS</a>
                </nav>
            </div>
        </header>
    )
}