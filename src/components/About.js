import React from "react";
import { FaCheck } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="about-area pt-140">
        <div className="container">
          <div className="about-area-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-left-content-wrapper">
                  <div className="about-icon">
                    <img
                      src="/about.png"
                      className="img-fluid"
                      alt="About Image"
                      width={380}
                      height={200}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 ">
                <div className="about-right-content-wrapper mb-30">
                  <div className="about-title-wrapper">
                    <div className="about-sub-head ">
                      <h6>ABOUT US</h6>
                    </div>

                    <div className="about-title">
                      <h2>Strength in Numbers</h2>
                    </div>
                    <div className="about-para ">
                      <p className="about-para-content mt-20 mb-30">
                        Nirog-Sansar offers premium-quality, affordable
                        healthcare services through an innovative,
                        technologically advanced platform. They provide online
                        and offline consultations, emergency services, and
                        professional diagnostic healthcare check-ups. Guided by
                        a focus on quality and empowered by AI, their mission is
                        to make good health accessible, reliable, and
                        hassle-free for everyone. They are committed to ensuring
                        timely treatments and accurate diagnoses, using the
                        latest technology available. Nirog-Sansar takes great
                        pride in their dedication to quality care, and they
                        constantly strive to provide the best possible
                        experience for their users. With a passion for care and
                        a commitment to innovation, Nirog-Sansar is
                        revolutionizing healthcare delivery for all.
                      </p>
                    </div>
                  </div>

                  {/* <ul class="single-list-wrap">
                    <li class="single-list-inner style-check-box-grid">
                      <div class="media d-flex">
                        <div class="media-left">
                          <FaCheck />
                        </div>
                        <div class="media-body">
                          <h5>Ligula molestie</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur elit, sed do
                            <br />
                            eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="single-list-inner style-check-box-grid">
                      <div class="media d-flex">
                        <div class="media-left">
                          <FaCheck />
                        </div>
                        <div class="media-body">
                          <h5>Ligula molestie</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur elit, sed do
                            <br />
                            eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
