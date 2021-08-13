import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="hero-container">
      <Navbar />
      <section className="hero-card-container">
        <section className="hero-card">
          <p>
            Somos una empresa mexicana que tiene la misión de proporcionar
            soluciones médicas de la más alta calidad, con el servicio eficiente
            y al mejor precio del mercado.
          </p>
          <br />
          <p>"Nuestro deber es ofrecer la oportunidad de preservan la vida"</p>
        </section>
      </section>
    </div>
  );
}
