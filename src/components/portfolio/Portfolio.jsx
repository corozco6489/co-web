import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">
     
      <div className="container">
        <div className="section-title">
          <h2>Trabajos Realizados</h2>
          {/* <p>
            Para contar con nuestros servicios puedes visitar nuestras redes
            sociales o llenar el formulario con el motivo de su inquietud.
          </p> */}
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
        <div
          className="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
        >
          {/* <ul className="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-product">Product</li>
          <li data-filter=".filter-branding">Branding</li>
          <li data-filter=".filter-books">Books</li>
        </ul> */}

          <div className="row g-0 portfolio-container">
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil1.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Construcción</h4>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Remodelación</h4>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Mantenimiento</h4>
              </div>
            </div>


            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Construcción</h4>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Remodelación</h4>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil6.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Mantenimiento</h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil10.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Construcción</h4>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil11.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Construcción</h4>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Mantenimiento</h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil1.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Construcción</h4>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Construcción</h4>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                loading="lazy"
                src="assets/img/portfolio/civil14.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Cubierta Metálica</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
