import React from "react";

export default function Tabs() {
  return (
    <section id="tabs" className="tabs ">
      <div className="container" data-aos="fade-up">
      <div className="section-title">
          <h2>Información</h2>
          {/* <p>
            Contamos con ingenieros certificados en los servicios que ofrecemos.
            Trabajando siempre con los más altos estándares de calidad,
            eficiencia , garantizando al cliente eficiencia total en cuanto a
            nuestro desempeño.
          </p> */}
        </div>
        <ul className="nav nav-tabs row d-flex justify-content-center">
          <li className="nav-item col-3">
            <a
              className="nav-link show javier"
              data-bs-toggle="tab"
              data-bs-target="#tab-1"
            >
              <i class="bi bi-house-door-fill"></i>
              <h4 className="d-none d-lg-block">Javier Orozco</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a
              className="nav-link carlos"
              data-bs-toggle="tab"
              data-bs-target="#tab-2"
            >
              <i class="bi bi-cpu-fill"></i>{" "}
              <h4 className="d-none d-lg-block">Carlos Orozco</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a
              className="nav-link diego"
              data-bs-toggle="tab"
              data-bs-target="#tab-3"
            >
              <i class="bi bi-lightning-charge-fill"></i>{" "}
              <h4 className="d-none d-lg-block">Diego Orozco</h4>
            </a>
          </li>
         
        </ul>

        <div className="tab-content ">
          <div className="tab-pane active show " id="tab-1">
            <div className="row justify-content-center">
              {/* <div
                className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate trideta storacalaperda
                    mastiro dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div> */}
              <div
                className="col-lg-8 order-1 order-lg-2 text-center justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  loading="lazy"
                  src="assets/img/Construction Banner/5.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row justify-content-center">
              <div className="col-lg-8 order-1 order-lg-2 text-center">
                <img
                  loading="lazy"
                  src="assets/img/Construction Banner/4.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row justify-content-center">
              <div className="col-lg-8 order-1 order-lg-2 text-center">
                <img
                  loading="lazy"
                  src="assets/img/Construction Banner/6.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row justify-content-center">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                  Omnis fugiat ea explicabo sunt dolorum asperiores sequi
                  inventore rerum
                </h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate trideta storacalaperda
                    mastiro dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  loading="lazy"
                  src="assets/img/tabs-4.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
