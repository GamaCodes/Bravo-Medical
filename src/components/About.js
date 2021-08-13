import React from "react";

export default function About() {
  return (
    <>
      <div className="about-contain">
        <section className="about-card">
          <h2 className="about-title">Visión</h2>
          <p>
            Hace 30 años comercializamos por primera vez material de curación,
            hoy día tenemos la capacidad de crear y equipar integralmente un
            hospital, clínica, laboratorio o consultorios de especialidades, el
            trabajo arduo, compromiso y esfuerzo son las piedras angulares de
            nuestro éxito y crecimiento.
          </p>
        </section>
        <section className="about-section">
          <img className="about-img" src="/001.jpg" alt="Visión" />
        </section>
      </div>

      <div className="about-contain">
        <section className="about-section">
          <img className="about-img" src="/002.jpg" alt="Misión" />
        </section>
        <section className="about-card">
          <h2 className="about-title">Misión</h2>
          <p>
            En BRAVO Medical Translations creemos que las instituciones de salud
            del sector público y privado de México, deben tener acceso a los
            mejores y más avanzados equipos médicos y material de curación en
            beneficio de sus pacientes.
          </p>
        </section>
      </div>

      <div className="about-div">
        <h2 className="about-div-title">| 1 Nación |</h2>
        <p>
          Tenemos presencia directa en 5 estados de la República Mexicana y
          abarcamos el resto del país a través de nuestros subdistribuidores.
        </p>
        <p>
          Contamos con proveedores en Estados Unidos que nos ayuda a brindar un
          servicio más ágil y oportuno.
        </p>

        <h2 className="about-div-title">| 5 Años de experiencia |</h2>
        <p>
          Aportamos valor a tus proyectos de integración y llave en mano, para
          crear un equipo de trabajo que supere los retos diarios en los
          hospitales.
        </p>

        <h2 className="about-div-title">| 107 Colaboradores |</h2>
        <p>
          Profesionales y comprometidos todos los días, en ofrecer lo mejor de
          sí.
        </p>

        <h2 className="about-div-title">| +5000 Productos |</h2>
        <p>
          Contamos con más de 5000 soluciones especializadas para cada área
          médica.
        </p>
      </div>

      <div>
        <section className="about-value">
          <div className="about-title-contain">
            <h2 className="about-title">Valores</h2>
          </div>
          <p className="about-value-p">
            <span className="about-p">Calidad</span>
            <span className="about-p about-variant">Colaboración</span>
            <span className="about-p">Liderazgo</span>
          </p>
          <p className="about-value-p">
            <span className="about-p about-variant">Integridad</span>
            <span className="about-p">Productos</span>
            <span className="about-p about-variant">Pasión</span>
          </p>
          <p className="about-value-p">
            <span className="about-p">Ser Humano</span>
            <span className="about-p about-variant">Responsabilidad</span>
          </p>
        </section>
      </div>
    </>
  );
}
