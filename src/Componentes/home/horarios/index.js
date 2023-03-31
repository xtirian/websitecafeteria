import React from "react";
import "./estilos.css";

export default function Horarios(props) {
  const horaSegunda = props.Segunda;
  const horaTerca = props.Terca;
  const horaQuarta = props.Quarta;
  const horaQuinta = props.Quinta;
  const horaSexta = props.Sexta;
  const horaSabado = props.Sabado;
  const horaDomingo = props.Domingo;

  return (
    <section id="horarios-banner">
      <div className="limitar-secao">
        <h2>HORÁRIOS DE FUNCIONAMENTO</h2>
        <article className="horarios-grid">
          <ul type="none">
            <li>
              <h3>SEGUNDA</h3>
              <div className="tarjaCinza"></div>
              <span>{horaSegunda}</span>
            </li>
            <li>
              <h3>TERÇA</h3>
              <div className="tarjaCinza"></div>
              <p>{horaTerca}</p>
            </li>
            <li>
              <h3>QUARTA</h3>
              <div className="tarjaCinza"></div>
              <p>{horaQuarta}</p>
            </li>
            <li>
              <h3>QUINTA</h3>
              <div className="tarjaCinza"></div>
              <p>{horaQuinta}</p>
            </li>
            <li>
              <h3>SEXTA</h3>
              <div className="tarjaCinza"></div>
              <p>{horaSexta}</p>
            </li>
            <li>
              <h3>SÁBADO</h3>
              <div className="tarjaCinza"></div>
              <p>{horaSabado}</p>
            </li>
            <li>
              <h3>DOMINGO</h3>
              <div className="tarjaCinza"></div>
              <p>{horaDomingo}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
