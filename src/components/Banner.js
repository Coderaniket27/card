import React from "react";

function Banner() {
  return (
    <>
      <div className="banner-area bg-grey">
        <div className="container">
          <div className="row justify-content-center banner-content">
            {/* Left Section */}
            <div className="col-lg-6 col-md-10 align-self-center text-left mt-5 mt-md-0">
              <div className="banner-inner-left text-left">
                <h6 className="sub-title mb-20">DISCOVER RESEARCH </h6>
                <h1 className="mb-30 title">
                  A better Treatment future starts here
                </h1>
                <div className="button-banner d-flex  pt-3">
                <button type="button" class="btn btn-outline-primary">Read More</button>
                <button type="button" class="btn btn-outline-primary service-btn">Our Services</button>

                </div>

               
              </div>
            </div>

            <div className="col-lg-6 col-md-8 justify-content-end d-flex">
              <div className="img-banner">
                <img
                  src="/ayurved.jpg"
                  width={445}
                  height={480}
                  alt="Banner"
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
