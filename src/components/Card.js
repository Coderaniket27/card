import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const handleDownload = () => {
    // Get the HTML content of the card
    const cardElement = document.querySelector(".card-layout");
    const cardHTML = cardElement.outerHTML;
    // css
    const cardStyles = `.card-layout {
        background: #FBFEE8;
        align-items: center;
            text-align: center;
            width:400px !important; 

            border-radius: 20px;
            height:300px !important;
            padding: 20px;
        
        }
        
        .card-header h4 {
            font-size: 20px;
            font-weight: 700;
            color: #2c2cd0;
        }
        
        .card-header h5 {
            font-size: 18px;
            color: #07710e !important;
            font-weight: 600;
            text-transform: lowercase;
        }
        
        .card-phno h4 {
            font-size: 18px;
            color: red;
        }
        
        .card-mail h5 {
            font-size: 18px;
            color: #07710e !important;
            font-weight: 600;
            text-transform: lowercase;
        }
        
    
        
      `;
    const fullContent = `<html><head><style>${cardStyles}</style></head><body>${cardHTML}</body></html>`;

    // Create a Blob and trigger the download
    const blob = new Blob([fullContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "nirog_card.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="navbar-area pb-70">
        <div className="container-fluid">
          <div className="card-bg">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="card-boxx p-5">
                  <div className="card-heading text-white">
                    <h1>Fill Your Details !</h1>
                  </div>{" "}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Aadhar No."
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Registered No."
                    />
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center pt-70">Download Our Card Now !</h1>
          <div class="nirog-card">
            <div
              class="col-lg-4 col-md-4 col-sm-12 p-4 d-flex
    "
            >
              <div class="d-flex">
                <div class="card-layout">
                  <div class="card-logo">
                    <img src="logo (1).png" width={50} height={50} />
                  </div>

                  <div class="card-header">
                    <h4>Nirog Sansar Health Card</h4>
                    <h5>www.nirogsansar.com</h5>
                  </div>
                  <div class="card-footer">
                    <div class="card-phno">
                      <h4>8789654084,9110188345,7488679011</h4>
                    </div>
                    <div class="card-mail">
                      <h5> info@nirogsansar.com</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-card d-flex justify-content-center">
            <button
              onClick={handleDownload}
              className="text-center btn-primary btn download"
            >
              Download!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
