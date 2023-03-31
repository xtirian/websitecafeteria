import React from "react";
import './estilo.css'

export default function Rodape() {
  return (
    <footer className="rodape">
      <article>
        <a className="voltar-Topo" href="#banner">
          <img src="/assets/seta-para-cima.png" alt="retornar para o topo" />
        </a>
      </article>
      <div className="limitar-secao rodape-box">
        <p>© Manhattan - Coffee House - Todos os direitos reservados</p>
        <p>Desenvolvido por <span>xTirian</span></p>
      </div>

    </footer>
  );
}
