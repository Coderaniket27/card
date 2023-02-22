import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
const AllBenefits = () => {
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState({
        username:"",
        number:"",
        email:""
    });
    const [Service, setService] = useState("Hospitalization");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]:e.target.value})
  }
  const handleChanges = (event) => {
    setService(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    console.log(Service);

  }

  return (
    <>
     <div className='First-Heads'>
<div className='First-Headings'>
    <div className='Headings'>Lab Test</div>
    <div className='Paragraphs'>Book lab tests from our network lab with free sample collection from any location and at any time . </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Pan-India Network</div>
    <div className='Points-point'>    With our service partners and home collection centres across 150+ cities, all your employees and loved ones get a uniform experience.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    Working with only NABL and NABH-certified partners, we regularly monitor them to ensure service levels are impeccable.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    We provide up to 100% genuine cashback and up to 50% off on lab tests, with free sample collection at your doorstep.     </div>
   
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='LABS.png' alt="roof"/>

</div>


    </div>
    <div className='First-Heads'>
<div className='First-Headings'>
    <div className='Headings'>Hospital</div>
    <div className='Paragraphs'>Book lab tests from our network lab with free sample collection from any location and at any time . </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Pan-India Network</div>
    <div className='Points-point'>    With our service partners and home collection centres across 150+ cities, all your employees and loved ones get a uniform experience.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    Working with only NABL and NABH-certified partners, we regularly monitor them to ensure service levels are impeccable.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    We provide up to 100% genuine cashback and up to 50% off on lab tests, with free sample collection at your doorstep.     </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='hosps.png' alt="roof"/>

</div>
<div className='First-Heads'>
<div className='First-Headings'>
    <div className='Headings'>Ambulance</div>
    <div className='Paragraphs'>Book lab tests from our network lab with free sample collection from any location and at any time . </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Pan-India Network</div>
    <div className='Points-point'>    With our service partners and home collection centres across 150+ cities, all your employees and loved ones get a uniform experience.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    Working with only NABL and NABH-certified partners, we regularly monitor them to ensure service levels are impeccable.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    We provide up to 100% genuine cashback and up to 50% off on lab tests, with free sample collection at your doorstep.     </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='ambula.png' alt="roof"/>

</div>


    </div>

    </div>
    <div className='First-Heads'>
<div className='First-Headings'>
    <div className='Headings'>Doctor Consultation</div>
    <div className='Paragraphs'>Book lab tests from our network lab with free sample collection from any location and at any time . </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Pan-India Network</div>
    <div className='Points-point'>    With our service partners and home collection centres across 150+ cities, all your employees and loved ones get a uniform experience.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    Working with only NABL and NABH-certified partners, we regularly monitor them to ensure service levels are impeccable.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    We provide up to 100% genuine cashback and up to 50% off on lab tests, with free sample collection at your doorstep.     </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='ondoc.png' alt="roof"/>

</div>


    </div>
    <div className='First-Heads'>
<div className='First-Headings'>
    <div className='Headings'>Home Care</div>
    <div className='Paragraphs'>Book lab tests from our network lab with free sample collection from any location and at any time . </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Pan-India Network</div>
    <div className='Points-point'>    With our service partners and home collection centres across 150+ cities, all your employees and loved ones get a uniform experience.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    Working with only NABL and NABH-certified partners, we regularly monitor them to ensure service levels are impeccable.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    We provide up to 100% genuine cashback and up to 50% off on lab tests, with free sample collection at your doorstep.     </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='homecare.png' alt="roof"/>

</div>


    </div>
    <div className='First-Heads'>
<div className='First-Headings'>
    <div className='Headings'>Health Camp</div>
    <div className='Paragraphs'>Book lab tests from our network lab with free sample collection from any location and at any time . </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Pan-India Network</div>
    <div className='Points-point'>    With our service partners and home collection centres across 150+ cities, all your employees and loved ones get a uniform experience.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    Working with only NABL and NABH-certified partners, we regularly monitor them to ensure service levels are impeccable.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    We provide up to 100% genuine cashback and up to 50% off on lab tests, with free sample collection at your doorstep.     </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='camp.png' alt="roof"/>

</div>


    </div>

    <div id="book" className='First-Heads'>
<div className='First-Headings'>
    <div className='Headings'>Mental Health & Fitness</div>
    <div className='Paragraphs'>Book lab tests from our network lab with free sample collection from any location and at any time . </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Pan-India Network</div>
    <div className='Points-point'>    With our service partners and home collection centres across 150+ cities, all your employees and loved ones get a uniform experience.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    Working with only NABL and NABH-certified partners, we regularly monitor them to ensure service levels are impeccable.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    We provide up to 100% genuine cashback and up to 50% off on lab tests, with free sample collection at your doorstep.     </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='mental.png' alt="roof"/>

</div>

<div className='Modal'>
    <button onClick={onOpenModal}  className='Modal-Button'>
        Click To Book
    </button>
    <Modal className="Modal-Color" open={open} onClose={onCloseModal} center>
        <p style={{textAlign:"center",fontFamily:"cursive",fontSize:"30px"}}>Booking Details</p>
       <form className='Form-Modal'>
        <div className='Input-Align'>
      <label>Enter your name:<br/>
        <input  type="text" 
        name="username" 
        value={inputs.username} 
        onChange={handleChange} className='Modal-Input' />
      </label>
      <br/>
      <label>Enter your number:<br/>
        <input  type="number" 
        name="number" 
        value={inputs.number} 
        onChange={handleChange} className='Modal-Input'  />
      </label>
      <br/>
      <label>Enter your email:<br/>
        <input 
        name="email" 
        value={inputs.email} 
        onChange={handleChange} className='Modal-Input' type="text" />
      </label>
      <br/>
      <label>Select your service:<br/>
      
      <select value={Service} onChange={handleChanges} className='Select-Input'>
        <option value="Hospitalization">Hospitalization</option>
        <option value="Lab">Lab Test</option>
        <option value="Ambulance">Ambulance</option>
        <option value="Doctor Consultation">Doctor Consultation</option>
        <option value="Home Care">Home Care</option>

        <option value="Health Camp">Health Camp</option>
        <option value="Mental Health">Mental Health</option>


      </select>
        
      </label>
     <div className='Button-align'>
      <div onClick={handleSubmit} className='button-book'><ReactWhatsapp onClick={onOpenModal} className='whatsapp-button' number="7277706637" message={`${inputs.username} contact-${inputs.number}, ${inputs.email}  Service-${Service}`}>
          Click To Book
        </ReactWhatsapp> </div>     
      </div>
      </div>
    </form>
      </Modal>
</div>

    </div>
    </>
  )
}

export default AllBenefits