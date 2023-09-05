import React from "react";
import "../Mission.css";

const Mission = () => {
  return (
    <>
      <div className="Mission-Visions">
        <div className="Mission">
          <div className="Mission-Full">
            <div className="Mission-Image">
              <img className="Image-Mission" src="Mission.png" alt="" />
            </div>
            <div className="Mission-Brief">
              <div className="Mission-Heading">Mission</div>
              <div className="Misiion-Detail font-sans">
                Our mission is to revolutionize the healthcare sector by turning
                it into a robust and wholesome movement. We strive to inspire
                individuals to give precedence to dependable and superior
                healthcare providers. By advocating this transformation, we
                aspire to enhance the general quality of healthcare, resulting
                in a more salubrious and thriving society.
              </div>
            </div>
          </div>
          <div className="Vission-Full">
            <div className="Vission-Image">
              <img className="Image-Vission" src="Vission.png" alt=""/>

            </div>
            <div className="Vission-Brief">
              <div className="Vission-Heading">
 Vision
              </div>
              <div className="Vission-Detail font-sans">
              We envision a healthcare industry driven by a powerful 
and healthy movement, not just a profit-making enterprise. 
Our aim is to empower people to choose reliable and quality 
healthcare services and providers. Through this, we aim to 
create a stronger, healthier society that prioritizes well-being 
above all else
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
