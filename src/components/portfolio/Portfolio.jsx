import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">
      <div className="container">
        <div className="section-header">
          <h2>Trabajos Realizados</h2>
          {/* <p>Non hic nulla eum consequatur maxime ut vero memo vero totam officiis pariatur eos dolorum sed fug dolorem est possimus esse quae repudiandae. Dolorem id enim officiis sunt deserunt esse soluta consequatur quaerat</p> */}
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
                src="assets/img/civil2.jpg"
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
                src="assets/img/civil3.jpg"
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
                src="assets/img/civil2.jpg"
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
                src="assets/img/civil3.jpg"
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
                src="assets/img/civil2.jpg"
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
                src="assets/img/civil3.jpg"
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
                src="assets/img/civil2.jpg"
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
                src="assets/img/civil3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Mantenimiento</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
