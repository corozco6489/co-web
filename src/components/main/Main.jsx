import React from 'react'
import "./mian11.css"
export default function Main() {
  return (
    <header className="main-header">
    
    <div className="header-top">
      <div className="auto-container">
        <div className="clearfix">
       
          <div className="top-left pull-left">
            <ul className="clearfix">
              <li>Bienvenido a Construcciones Orozco</li>
            </ul>
          </div>
       
          <div className="top-right pull-right">
            <ul className="social-nav">
              <li>
                <a href="#"><span className="fa fa-facebook-f"></span></a>
              </li>
              <li>
                <a href="#"><span className="fa fa-twitter"></span></a>
              </li>
              <li>
                <a href="#"><span className="fa fa-linkedin"></span></a>
              </li>
              <li>
                <a href="#"><span className="fa fa-youtube"></span></a>
              </li>
              <li>
                <a href="#"><span className="fa fa-instagram"></span></a>
              </li>
              <li>
                <a href="#"><span className="fa fa-google"></span></a>
              </li>
            </ul>
            <ul className="list">
              <li>¿Tiene alguna pregunta? +593 983592690</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <div className="header-upper">
      <div className="auto-container">
        <div className="clearfix">
          <div className="pull-left logo-box">
            <div className="logo">
              <a href="index.html"
                ><img src="images/logo2.png" alt="" title=""
              /></a>
            </div>
          </div>

          <div className="pull-right upper-right clearfix">
            <div className="upper-column info-box">
              <div className="icon-box">
                <span className="flaticon-home-1"></span>
              </div>
              <ul>
                <li><strong>Palama - Ambatillo,</strong></li>
                <li>Ambato - Ecuador</li>
              </ul>
            </div>

            <div className="upper-column info-box">
              <div className="icon-box">
                <span className="flaticon-note"></span>
              </div>
              <ul>
                <li><strong>Envía tu correo a</strong></li>
                <li>info@example.com</li>
              </ul>
            </div>

            <div className="upper-column info-box">
              <div className="icon-box">
                <span className="flaticon-clock-1"></span>
              </div>
              <ul>
                <li><strong>Horas Laborales</strong></li>
                <li>Lu-Vi: 09 am - 17 pm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="header-lower">
      <div className="auto-container">
        <div className="nav-outer clearfix">
          <nav className="main-menu">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="navbar-collapse collapse clearfix">
              <ul className="navigation clearfix">
                <li className="current dropdown"><a href="/">Inicio</a></li>
                <li><a href="about.html">Nosotros</a></li>
                <li className="dropdown"><a href="#">Servicios</a></li>
                <li className="dropdown"><a href="#">Proyectos</a></li>
                <li className="dropdown"><a href="#">Información</a></li>

                <li><a href="contact.html">Contacto</a></li>
              </ul>
            </div>
          </nav>
          <div className="outer-box clearfix">
            <div className="search-box-outer">
              <div className="dropdown"></div>
            </div>

            <div className="advisor-box">
              <a href="contact.html" className="theme-btn advisor-btn"
                >Solicite información
                <span className="fa fa-long-arrow-right"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="sticky-header">
      <div className="auto-container clearfix">
        <div className="logo pull-left">
          <a href="index.html" className="img-responsive"
            ><img src="images/logo2.png" alt="" title=""
          />
          <img src="" alt="" /></a>
        </div>

        <div className="right-col pull-right">
          <nav className="main-menu">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="navbar-collapse collapse clearfix">
              <ul className="navigation clearfix">
                <li className="current dropdown">
                  <a href="#">Home</a>
                  <ul>
                    <li><a href="index.html">Homepage One</a></li>
                    <li><a href="index-2.html">Homepage Two</a></li>
                    <li className="dropdown">
                      <a href="#">Header Styles</a>
                      <ul>
                        <li><a href="index.html">Header Style One</a></li>
                        <li><a href="index-2.html">Header Style Two</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="about.html">About us</a></li>
                <li className="dropdown">
                  <a href="#">Services</a>
                  <ul>
                    <li><a href="services.html">Services</a></li>
                    <li>
                      Design and Build
                    </li>
                    <li>
                      <a href="management-work.html">Management Work</a>
                    </li>
                    <li>
                      <a href="construction-planing.html"
                        >Construction Planning</a
                      >
                    </li>
                    <li>
                      <a href="house-renovation.html">House Renovation</a>
                    </li>
                    <li>
                      <a href="building-construction.html"
                        >Building construction</a
                      >
                    </li>
                    <li>
                      <a href="interior-design.html">Interior Design</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Projects</a>
                  <ul>
                    <li><a href="projects.html">Our projects</a></li>
                    <li>
                      <a href="projects-detail.html">Projects Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Blog</a>
                  <ul>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="blog-detail.html">Blog Details</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Shop</a>
                  <ul>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="shop-single.html">Product Details</a></li>
                    <li><a href="shoping-cart.html">Cart Page</a></li>
                    <li><a href="checkout.html">Checkout Page</a></li>
                    <li><a href="login.html">Login Page</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact us</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}
