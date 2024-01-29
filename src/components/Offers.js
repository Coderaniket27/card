import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <>
      <div className="offer-page navbar-area mt-5">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="offer-left-part">
                <div className="offer-main-head">
                  {" "}
                  <h1>Grab Your Offer Now !</h1>
                </div>
                <div className="offer-subtitle">
                  {" "}
                  <h2>Upto 60% Off 😎</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                src="https://www.hooplakidz.com/plus/images/limited_peroid_offer_green_big.png"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="offer-list pt-5  mt-5">
            <div className="row rg-30">
              <div className="col-md-6 col-lg-4 col-sm-12">
                <div className="offer-box">
                  <div className="card  p-4">
                    <h1 className="text-center ">DHAMAKA🤩</h1>
                    <h4>60% off On PREMIMIUM package</h4>
                    <p>Grab the Deal . </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12">
                <div className="offer-box">
                  <div className="card  p-4">
                    <h1 className="text-center ">Sale Sale 😁</h1>
                    <h4>BUY 1 GET 1 FREEE !</h4>
                    <p className="pt-1">
                      This offer is limited for 24 hours.
                      <br /> Shop Now
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 text-center p-5 mt-4">
                <Link to="/products">
                  {" "}
                  <button className="btn btn-primary">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
