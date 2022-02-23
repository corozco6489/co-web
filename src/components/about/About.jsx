import React from 'react'

export default function About() {
  return (
    <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>Nosotros</h2>
            <p>
            Somos una empresa conformada por un equipo de gente joven, dinámica y actualizada, enfocados en atender los requerimientos que exige su organización. Contamos con ingenieros certificados servicios que ofrecemos. Te brindamos el servicio de proyectos CONSTRUCCIÓN DE TODO TIPO DE OBRAS CIVILES, ARQUITECTÓNICAS, ELÉCTRICAS Y ELECTRÓNICAS, TALES COMO CARRETERAS, VÍAS, CALLES, EDIFICIOS, GALPONES, INSTALACIONES INDUSTRIALES, URBANIZACIONES, VILLAS CASAS, LOTIZACIONES.
            
        
            </p>
          </div>

          <div className="row content">
            <div className="col-lg-6">
              <p>
                Enfocados en dar soluciones a la : 
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> Ingenieria Civil
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Ingenieria Electronica y Comunicaciones
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Instalaciones Electricas 
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
              Estamos comprometidos en buscar la mejor alternativa para satisfacer sus requerimientos tecnicos y tecnológicos pues estamos convencidos de que las verdaderas soluciones exigen un exhaustivo trabajo creativo fundamentado en la juventud y experiencia.

              </p>
              {/* <a href="#" className="btn-learn-more">Learn More</a> */}
            </div>
          </div>
        </div>
      </section>
  )
}
