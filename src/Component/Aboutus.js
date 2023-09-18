import React,{ useState} from "react";
import ReactWhatsapp from "react-whatsapp";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const Aboutus = () => {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    number: "",
    email: "",
  });
  const [Service, setService] = useState("Hospitalization");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleChanges = (event) => {
    setService(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    console.log(Service);
  };
  return (
    <div className="About-us" id="about">
  <div className='Modal'>
    
    <img    className='Modal-Button vibrate'onClick={onOpenModal} src ="support.png" alt=""/>
   
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
      <div className="About-Full">
        <div className="About-Write">
          <div className="About-Header">About Us</div>
          <div className="About-flex">
            <div className="About-Paragraph font-serif">
              Nirog-Sansar offers premium-quality, affordable healthcare
              services through an innovative, technologically advanced platform.
              They provide online and offline consultations, emergency services,
              and professional diagnostic healthcare check-ups. Guided by a
              focus on quality and empowered by AI, their mission is to make
              good health accessible, reliable, and hassle-free for everyone.
              They are committed to ensuring timely treatments and accurate
              diagnoses, using the latest technology available. Nirog-Sansar
              takes great pride in their dedication to quality care, and they
              constantly strive to provide the best possible experience for
              their users. With a passion for care and a commitment to
              innovation, Nirog-Sansar is revolutionizing healthcare delivery
              for all.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
