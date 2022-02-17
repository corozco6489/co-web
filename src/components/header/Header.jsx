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
                src="./assets/img/orozco1.png"
                alt=""
                className="img-fluid"
              />
            </a>

            <nav
              id="navbar"
              className={
                showMobileMenu
                  ? "navbar-mobile order-last order-lg-0"
                  : "navbar order-last order-lg-0"
              }
              onClick={() => setshowMobileMenu(!showMobileMenu)}
            >
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
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
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
