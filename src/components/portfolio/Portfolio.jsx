import React from 'react'

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

      <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

        {/* <ul className="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-product">Product</li>
          <li data-filter=".filter-branding">Branding</li>
          <li data-filter=".filter-books">Books</li>
        </ul> */}

        <div className="row g-0 portfolio-container">

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
            <img loading="lazy"  src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product">
            <img loading="lazy"  src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Product 1</h4>
              <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-branding">
            <img loading="lazy"  src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Branding 1</h4>
              <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-books">
            <img loading="lazy"  src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Books 1</h4>
              <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
            <img loading="lazy"  src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product">
            <img loading="lazy"  src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Product 2</h4>
              <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-branding">
            <img loading="lazy"  src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Branding 2</h4>
              <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-books">
            <img loading="lazy"  src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Books 2</h4>
              <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
            <img loading="lazy"  src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product">
            <img loading="lazy"  src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Product 3</h4>
              <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-branding">
            <img loading="lazy"  src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Branding 3</h4>
              <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-books">
            <img loading="lazy"  src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Books 3</h4>
              <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
  )
}
