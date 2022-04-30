import React from "react";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        {/* <div className="section-header">
          <h2>Lo que Ofrecemos</h2>
          <p>
            Somos gente joven que ofrecemos soluciones en proyectos de
            Construccion , Telecomunicaciones y Electricidad
          </p>
        </div> */}

        <div className="container">
        <div className="section-title">
          <h2>Servicios</h2>
          {/* <p>
            Para contar con nuestros servicios puedes visitar nuestras redes
            sociales o llenar el formulario con el motivo de su inquietud.
          </p> */}
        </div>
      </div>
        
        



        <div className="row gy-5">
          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="service-item">
              <div className="img">
                <img loading="lazy" 
                  src="https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i>
                    <img loading="lazy"  src="assets/img/services/arquitecto.png" alt="" />
                  </i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Diseño Arquitectónico</h3>
                </a>
                <p>
                  Diseño de Viviendas , Edificaciones Comerciales , Cubiertas
                  Metálicas , Modelados 3D , Renders , Paseos Virtuales.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="service-item">
              <div className="img">
                <img loading="lazy" 
                  src="https://cdn.pixabay.com/photo/2016/11/04/18/44/grid-1798629_960_720.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i>
                    <img loading="lazy"  src="assets/img/services/constructor.png" alt="" />
                  </i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Cálculo Estructural</h3>
                </a>
                <p>
                  Estructuras Metálicas , Estructuras Mixtas , Hormigon Armado
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="service-item">
              <div className="img">
                <img loading="lazy" 
                  src="https://cdn.pixabay.com/photo/2019/02/06/16/32/architect-3979490_960_720.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i>
                    <img loading="lazy"  src="assets/img/services/trabajador.png" alt="" />
                  </i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Construcción</h3>
                </a>
                <p>
                  Construcción de Viviendas , Edificios , Redes de
                  Alcantarillado , Redes de Agua Potable , Remodelaciones ,
                  Cubiertas Metálicas.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="service-item">
              <div className="img">
                <img loading="lazy" 
                  src="https://cdn.pixabay.com/photo/2017/08/02/00/49/people-2569234_960_720.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i>
                    <img loading="lazy"  src="assets/img/services/ayuda.png" alt="" />
                  </i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Asesoramiento y Planificación</h3>
                </a>
                <p>
                  Planimetrías , Permisos de construcción , presupuesto de obra
                  , dirección ténica , aprobación de planos , líneas de fábrica
                  , normas perticulares.
                </p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="service-item">
              <div className="img">
                <img loading="lazy" 
                  src="https://cdn.pixabay.com/photo/2020/11/13/08/37/pc-5737958_960_720.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i>
                    <img loading="lazy" 
                      src="assets/img/services/puesto-de-trabajo.png"
                      alt=""
                    />
                  </i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Servicio Técnico</h3>
                </a>
                <p>
                  Mantenimiento Correctivo y Preventivo de Computadoras ,
                  Instalacion de Sistemas Operativos (Linux , Windows){" "}
                </p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <div className="service-item">
              <div className="img">
                <img loading="lazy" 
                  src="https://cdn.pixabay.com/photo/2017/10/12/21/39/cctv-2846083_960_720.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i>
                    <img loading="lazy" 
                      src="assets/img/services/circuito-cerrado-de-television.png"
                      alt=""
                    />
                  </i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Seguridad</h3>
                </a>
                <p>
                  Sistemas de Seguridad (CCTV) , Biometricos , Cerraduras
                  Electronicas{" "}
                </p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <div className="service-item">
              <div className="img">
                <img loading="lazy" 
                  src="https://cdn.pixabay.com/photo/2019/05/12/15/07/electric-4198293_960_720.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i>
                    <img loading="lazy"  src="assets/img/services/eco-house.png" alt="" />
                  </i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Instalaciones Electricas</h3>
                </a>
                <p>
                  Instalaciones Electricas para casas residenciales y
                  comerciales , Instalaciones de medidores electricos , Cambio
                  de redes electricas , Mantenimiento preventivo y correctivo de
                  instalaciones eléctricas
                </p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <div className="service-item">
              <div className="img">
                <img loading="lazy" 
                  src="https://cdn.pixabay.com/photo/2015/09/23/15/54/electronics-953932_960_720.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i>
                    <img loading="lazy"  src="assets/img/services/client.png" alt="" />
                  </i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Electronica y Telecomunicaciones</h3>
                </a>
                <p>
                  Proyectos de Electronica Digital , Programacion , Redes ,
                  Tarjetas de Desarrollo , Nube , Base de datos{" "}
                </p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <div className="service-item">
              <div className="img">
                <img loading="lazy" 
                  src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i>
                    <img loading="lazy"  src="assets/img/services/coding.png" alt="" />
                  </i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Tecnologias de la Información</h3>
                </a>
                <p>
                  lenguajes de programacion , correo electronico , base de datos
                  , manejo de sowtware de ingenierias{" "}
                </p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
