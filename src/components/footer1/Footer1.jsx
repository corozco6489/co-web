import React from 'react'
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useState } from "react";

export default function Footer1() {
  const formRef = useRef();

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_176fbvr",
        "template_va3o6dj",
        formRef.current,
        "user_ivqOhPFMk0nSTDqx8cZU3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-info">
            <p>Somos una empresa Ambateña brindando servicios de Construcción , Electrónica y Electricidad , trabajamos con profesionales jóvenes y responsables en todo tipo de proyectos.

</p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#hero">Inicio</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#about">Nosotros</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#service">Servicios</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#portfolio">Trabajos</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contacto</h4>
            <p>
             Ambatillo - Palama <br/>
              Tungurahua - Ambato<br/>
       Ecuador<br/>
              <strong>Teléfono:</strong>(03) 2470211<br/>
              <strong>Email:</strong> construccionesorozcoinfo@gmail.com<br/>
            </p>

            <div className="social-links">
              <a href="https://twitter.com/corozco2022" className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
              <a href="https://www.facebook.com/contruccionesorozco" className="facebook" target="_blank"><i className="bi bi-facebook" ></i></a>
              <a href="https://www.instagram.com/orozcoconstrucciones/" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UCw3M3Zkwgchdy1YGzt0TfGQ" className="instagram" target="_blank"><i className="bi bi-youtube"></i></a>
              <a href="https://www.linkedin.com/company/construccionesorozco" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
              <a href="https://construccionesorozco.negocio.site/" className="google" target="_blank"><i className="bi bi-google"></i></a>

            </div>

          </div>

          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Suscríbete</h4>
            <p>Desea recibir una notificación de nuevos proyectos y servicios realizados.</p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
         
            >              <input type="email" name="user_email"/><input type="submit" value="Subscribe"/>
                <br />
            <p> {message && " TGracias...."}</p>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>Orozco Contrucciones</strong>. All Rights Reserved
      </div>
     
    </div>
  </footer>
  )
}
