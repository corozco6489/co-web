import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <video id="video1" autoPlay loop muted className="video1 videos">
            <source src="assets/img/video.mp4" />
          </video>

          {/* <video id="video2" autoPlay muted className="video2 videos">
            <source src="./assets/img/computer6.mp4" />
          </video>

          <video id="video3" autoPlay muted className="video3 videos">
            <source src="./assets/img/construction.mp4" />
          </video> */}
          <h3>Bienvenido a <strong>Orozco Construcciones </strong></h3>

         
          <h2>Te brindamos servicios en proyectos de Construción , Electrónica , Telecomunicaciones y Electricidad</h2>
         
          <a href="#about" className="btn-get-started scrollto">Nosotros</a>
        </div>
      </div>
      
    </div>
    <a href="#about" className="abajo">
      <i class='bx bx-chevrons-down' ></i>
        </a>
  
  </section>  )
}
