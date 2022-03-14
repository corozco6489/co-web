import React from "react";
import { useState } from "react";
export default function Header() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  //change nav color scrolling

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <header
      id="header"
      className={color ? "fixed-top header-scrolled" : "fixed-top"}
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-9 d-flex align-items-center justify-content-lg-between">
            <a href="index.html" className="logo me-auto me-lg-0">
              <img
                loading="lazy"
                src="assets/img/logo1.png"
                alt=""
                className="img-fluid"
              />
            </a>

            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a className="nav-link scrollto " href="#hero">
                    Inicio
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#about">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#services">
                    Servicios
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#portfolio">
                    Trabajos
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="#contact">
                    Contacto
                  </a>
                </li>
              </ul>
              <i
                className="bi bi-list mobile-nav-toggle"
                className={
                  showMobileMenu
                    ? "bi bi-x mobile-nav-toggle"
                    : "bi bi-list mobile-nav-toggle"
                }
                onClick={() => setshowMobileMenu(!showMobileMenu)}
              ></i>
            </nav>
          </div>
        </div>
      </div>

      <div className={showMobileMenu ? "contact-info active" : "contact-info"}>
      <footer id="footer1">
          <div className="container">
            <br />
            <h3 className="d-flex">
              <img loading="lazy" src="./assets/img/logonegro.png" alt="" />
            </h3>
         
          </div>
        </footer>
        <div
          id="close-contact-info"
          className={showMobileMenu ? "bi bi-x" : "bi bi-list"}
          onClick={() => setshowMobileMenu(!showMobileMenu)}
        ></div>

        <div class="info">
          <i class="fas fa-phone"></i>
          <h3>Contacto</h3>
          <p>(03) 2470211</p>
          {/* <p>0983592690</p> */}
        </div>

        <div class="info">
          <i class="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>construccionesorozcoinfo@gmail.com</p>
        </div>

        <div class="info">
          <i class="fas fa-map-marker-alt"></i>
          <h3>Ubicación</h3>
          <p>Ambato - Ecuador</p>
        </div>

        <div class="share">
          <a
            href="https://www.facebook.com/contruccionesorozco"
            target="_blank"
            class="fab fa-facebook-f"
          ></a>
          <a
            href="https://twitter.com/corozco2022"
            target="_blank"
            class="fab fa-twitter"
          ></a>
          <a
            href="https://www.youtube.com/channel/UCw3M3Zkwgchdy1YGzt0TfGQ"
            target="_blank"
            class="fab fa-youtube"
          ></a>
          <a
            href="https://www.linkedin.com/company/construccionesorozco"
            target="_blank"
            class="fab fa-linkedin"
          ></a>
            <a
            href="https://www.instagram.com/orozcoconstrucciones/"
            target="_blank"
            class="fab fa-instagram"
          ></a>
        </div>
      
      </div>
    </header>
  );
}
