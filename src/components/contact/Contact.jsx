import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useState } from "react";
export default function Contact() {
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
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contacto</h2>
          {/* <p>
            Para contar con nuestros servicios puedes visitar nuestras redes
            sociales o llenar el formulario con el motivo de su inquietud.
          </p> */}
        </div>
      </div>

      <div className="mapa">
        <iframe
          className="contacto-mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13416.945359326333!2d-78.67246416680655!3d-1.2414995135185276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb12bcc3edeea05c!2zMcKwMTQnMjQuNyJTIDc4wrA0MCcwMi4wIlc!5e0!3m2!1ses!2sec!4v1645119065562!5m2!1ses!2sec"
          width="100%"
          height="350px"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="ri-map-pin-line"></i>
                <h4>Ubicación:</h4>
                <p>Ambato - Ecuador</p>
              </div>

              <div className="email">
                <i className="ri-mail-line"></i>
                <h4>Email:</h4>
                <p>construccionesorozcoinfo@gmail.com</p>
              </div>

              <div className="phone">
                <i className="ri-phone-line"></i>
                <h4>Teléfono:</h4>
                <p>0983592690 - 0939979649 - (03)2470211</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="name"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="user_subject"
                  id="subject"
                  placeholder="Asunto"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Mensaje"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
              <input type="submit" value="Enviar Mensaje" className="enviar" />
              <br />
            <p> {message && " Gracias...."}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
