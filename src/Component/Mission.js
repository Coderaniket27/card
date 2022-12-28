import React from 'react'
import '../Mission.css';

const Mission = () => {
  return (
<>
    <div className='Mission-main'>    
    <div className='Mission-Image'>
        <img  className='Image' src='Mission.jpg' alt="mission"/>
        </div>
        <div className='Mission-Vision'>
          <div className='Mission-Full'>
            <div className='Mission-Head'>
             <div className='Head'>
              Mission
             </div>
             <div className='In'>
             As a company engaged in the healthcare industry, we want to make this not just a business but also a healthy movement. We hope that in the future, people will be more
             careful in choosing healthcare services and their providers, which provide reliable and quality care .


                          </div>
            </div>
            <div className='Mission-In'>
            <div className='Head'>
              Vision
             </div>
             <div className='In'>
             We want to be a company that becomes a role model in the healthcare industry. We want to be affordable, dependable, and accessible to all strata of the community in the future by providing high-quality healthcare services at the tip of your finger. 

                          </div>            </div>

          </div>
        </div>
         </div>
         
              </>
  )
}

export default Mission