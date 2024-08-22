import React from "react";
import { BiFastForward } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
function Footer() {
  return (
    <>
      <div className="footer-area mt-5">
        <div className="container footer-container">
          <div className="row">
            <div className="col-sm-12 col-md-4 ">
              <div className="logo-container">
                <img
                  src="/SANSAR.png"
                  alt="footer-logo"
                  height={24}
                  width={65}
                  className="img-fluid"
                />
              </div>
              <div className="footer-para-content fs-16 mb-23">
                <p>
                  Nirog-Sansar offers premium-quality, affordable healthcare
                  services through an innovative, technologically advanced
                  platform.
                </p>
              </div>
              <div className="social-footer-links">
                <ul className="social-links cg-10 d-flex ">
                  <li className="social-links-items-footer">
                    <a href="#home" aria-hidden="true">
                      <RiFacebookFill className="social-links-items icon-bg" />
                    </a>
                  </li>
                  <li>
                    <a href="#home" aria-hidden="true">
                      <AiOutlineTwitter className="social-links-items icon-bg1" />
                    </a>
                  </li>

                  <li>
                    <a href="#home" aria-hidden="true">
                      <FaLinkedinIn className="social-links-items icon-bg3" />
                    </a>
                  </li>
                  <li>
                    <a href="#home" aria-hidden="true">
                      <IoLogoInstagram className="social-links-items icon-bg4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className="footer-heading">
                <h4 className="title-footer">services</h4>
              </div>
              <div className="footer-service-list">
                <ul>
                  <li className="footer-service-items">
                    <BiFastForward />
                    <span className="ml-14">Health Master</span>
                  </li>
                  <li className="footer-service-items">
                    <BiFastForward />
                    <span className="ml-14">Exercise Session</span>
                  </li>
                  <li className="footer-service-items">
                    <BiFastForward />
                    <span className="ml-14">Dental Care</span>
                  </li>
                  <li className="footer-service-items">
                    <BiFastForward />
                    <span className="ml-14">Meditation Care </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className="footer-heading">
                <h4 className="title-footer">Contact Us-</h4>
              </div>
              <div className="footer-contact-list">
                <ul>
                  <li className="footer-contact-items mb-29">
                    <FaAddressBook className="footer-icon" />
                    <span className="ml-14 fs-14 ">
                      {" "}
                      312 Clinton Circle Atlantic City, M2{" "}
                    </span>
                  </li>
                  <li className="footer-contact-items mb-15">
                    <FiPhoneCall className="footer-icon" />
                    <span className="ml-14 fs-14"> US +1-650-334-2222</span>
                    <br />
                    <span className="pl-28 fs-14"> IND +91- 9910112345 </span>
                  </li>
                  <li className="footer-contact-items">
                    <CiMail className="footer-icon" />
                    <a href="#">
                      <span className="ml-14 fs-14"> info@abc.com </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-botom-sec text-center">
        <div className="container">
          <div className="row">
            <div class="col-12">
              <span>copyright 2021 by nirogsansar.com</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/+917277706637"
        class="whatsapp_float d-flex"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whatsapp.png" width={60} height={60} />
      </a>
    </>
  );
}

export default Footer;
