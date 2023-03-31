import React from "react";

import "./estilo.css";

export default function InfoBanner(props) {
  const imgBackground = props.Background;

  return (
    <section
      id="info-banner"
      style={{
        backgroundImage: `url(${imgBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="limitar-secao background-banner">
        <h3>{props.Mensagem}</h3>
      </div>
    </section>
  );
}

// ${props.Background}
