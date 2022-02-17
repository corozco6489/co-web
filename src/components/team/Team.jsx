import React from 'react'

export default function Team() {
  return (
    <section id="team" className="team">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Team</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row justify-content-center">

        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="member">
            <img src="assets/img/javier.jpeg" className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="member">
            <img src="assets/img/carlos.jpeg" className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="member">
            <img src="assets/img/diego.jpeg" className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

    

      </div>

    </div>
  </section>
  )
}
