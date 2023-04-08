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
    
    <div id="hospital" className='First-Heads'>
<div  className='First-Headings'>
    <div className='Headings'>Hospital</div>
    <div className='Paragraphs'>In Bihar, you can schedule emergency hospital stays and operations from anywhere. Hospitals are readily available, and <b>Nirog Sansar</b> staff will assist you in booking a suitable slot.  </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Bihar</div>
    <div className='Points-point'>   We have partnered with healthcare providers across Bihar to ensure that your employees and loved ones receive a consistent experience during hospitalization. This partnership enables us to deliver uniform quality healthcare services to everyone in Bihar, regardless of location. Our goal is to provide accessible and reliable healthcare to all.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    We collaborate exclusively with NABH-certified partners and meticulously monitor them to maintain impeccable service levels, providing our customers with the highest quality of care.
    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    We provide discounts up to 40% in ipd to ease the burden of hospital bills, as well as every assistance possible both during and after hospitalisation. We also ensure that all treatments are affordable and completely secure because we value every single life.    </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='hosps.png' alt="roof"/>

</div>

<div id="lab" className='First-Heads'>
<div className='First-Pics'>
    <img  className="First-icons" src='lbs.png' alt="roof"/>

</div>
<div className='First-Headings'>
    <div className='Headings'>Lab Test</div>
    <div className='Paragraphs'>Book lab tests from our network lab with free sample collection from any location and at any time . </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Bihar</div>
    <div className='Points-point'>    With our service partners and home collection centres across bihar, all your employees and loved ones get a uniform experience.    </div>
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


<div id="radiology" className='First-Heads'>
<div className='First-Headings'>
    <div className='Headings'>Radiology</div>
    <div className='Paragraphs'>You can easily schedule a nuclear screening from anywhere in Bihar. </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Bihar</div>
    <div className='Points-point'>   For an exact assessment, we'll be collaborating with the reowned scan centres across Bihar.   </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    We will be collaborating with the city's reowned scan centres to ensure the validity of the scan reports, and we will also be closely observing them to make sure their service standards are flawless.   </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>   Along with offering discounts of up to 50% on all scans to <b>Nirog sansar</b> card holder, we'll also make sure that the scans' quality isn't compromised for the sake of the savings. 
    </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='radiations.png' alt="roof"/>

</div>


    </div>
    </div>
<div id="ambulance" className='First-Heads'>
<div className='First-Pics'>
    <img  className="First-icons" src='ambula.png' alt="roof"/>

</div>
<div className='First-Headings'>
    <div className='Headings'>Ambulance</div>
    <div className='Paragraphs'>Call an ambulance in Bihar from any location we will arrive in less than 20 minutes because every second counts.    </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Bihar</div>
    <div className='Points-point'>    Working with 100+ professionals and regularly checking their performance to guarantee top-notch service levels.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    We provide all necessary facilities when the emergency occurs, we will provide in our certified ambulance.   </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    We will offer a 30% discount and 40% cashback on our ambulance for our <b>Nirog sansar </b>card holder.     </div>
</div>

</div>
</div>



    </div>

    </div>
    <div id="bloodbank" className='First-Heads'>
<div className='First-Headings'>
    <div className='Headings'>Blood Bank</div>
    <div className='Paragraphs'>In your difficult times, we will always stand for you and organise blood from any group at any moment.  </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Bihar</div>
    <div className='Points-point'>   With our extensive network in Bihar, we will work quickly to organise any blood group at any moment within a short period of time.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>   We guarantee that our patients will receive only pure blood because we only deal with recognised blood banks.     </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    We will also offer a processing charge reduction of up to 50% for blood transfusion procedures.     </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='bloodbank.png' alt="roof"/>

</div>


    </div>
  
    <div  id="doctor" className='First-Heads'>
    <div className='First-Pics'>
    <img  className="First-icons" src='doctp.png' alt="roof"/>

</div>
<div className='First-Headings'>
    <div className='Headings'>Doctor Consultation</div>
    <div className='Paragraphs'>Make an appointment with your doctor anytime at your doorstep 24 * 7.  </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Bihar</div>
    <div className='Points-point'>  Get ridd off from long quene for doctor consultation, we will book a doctor consultation offline and online just to  keep you relax, we are going to solve all your problems.   </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>   We only work with a certified, experienced and qualified doctor to make sure you are safe.   </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>   We will give up to 50% discount and 50% cash back to our <strong>Nirog sansar</strong> cardholder on medical consultation.     </div>
</div>

</div>
</div>



    </div>
    <div id="homecare" className='First-Heads'>
<div className='First-Headings'>
    <div className='Headings'>Home Care</div>
    <div className='Paragraphs'>Make reservations for hospitalisation and residential care for your loved ones.
 . </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Bihar</div>
    <div className='Points-point'>   We will set up all medical necessities, including medical equipment, doctors, nurses, and medication, at your house.   </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>   Only advanced medical tools and licenced physicians and nurses will be used by us.   </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>   For holders of the <b>Nirog Sansar card,</b> we will offer up to a 40% discount on home care services, with unmatched excellence at this price.     </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='homecare.png' alt="roof"/>

</div>


    </div>
   
    <div id="healthcamp" className='First-Heads'>
    <div className='First-Pics'>
    <img  className="First-icons" src='camp.png' alt="roof"/>

</div>
<div className='First-Headings'>
    <div className='Headings'>Health Camp</div>
    <div className='Paragraphs'>With the best physicians and institutions, we will set up a health camp. . </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Bihar</div>
    <div className='Points-point'>    We will set up a complimentary health checkup for holders of <strong>Nirog sansar cards</strong> through collaboration with reputable medical facilities throughout Bihar.   </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>   To ensure the success of our camp, we only set up our facilities with NABH and NABL certified hospitals and laboratories.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>   For financial assistance, we offer the patient an additional discount if they are diagnosed with any illness in our camp.     </div>
</div>

</div>
</div>



    </div>

    <div id="book " className='First-Heads'>
<div id='mentalhealth' className='First-Headings'>
    <div className='Headings'>Mental Health & Fitness</div>
    <div className='Paragraphs'>We offer mental health and wellness sessions because every second individual in the modern world is struggling with their mental health. </div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="MAP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Bihar</div>
    <div className='Points-point'>    We will guarantee the <b>Nirog sansar card</b> holder's excellent mental health with our new methodology and mental sessions.    </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="CERTIFICAT.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Certified Connection</div>
    <div className='Points-point'>    To guarantee a better outcome, we will only use the approved and tested methodologies for mental health in our sessions.     </div>
</div>

</div>
<div className='points'>
    <div className='points-icon'>

        <img  className="icons"src="PP.png" alt="icon"/>
    </div>
    <div className='Points-Brief'>
        <div className='Points-Head'>Discount & Cashback</div>
    <div className='Points-point'>    Once every four months, we will offer completely free mental health and wellbeing services. We will also give holders of <b>Nirog Sansar cards</b> up to a 30% discount on frequent mental health and counselling sessions.    </div>
</div>

</div>
</div>
<div className='First-Pics'>
    <img  className="First-icons" src='MH' alt="roof"/>

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