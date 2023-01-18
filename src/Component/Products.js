import React from 'react'
import '../Benefits.css';
const Products = () => {
  return (
    <div  className='Pro-Main'>
      <div className='Product-Main'>
        <div className='Products-Img'>
          <img  className="pro-img" src='pro.jpg' alt='pro' />

        </div>
<div  style={{textAlign:"center",fontFamily:"cursive",fontSize:"40px",color:"grey"}}className='Products-Head'>
  Welcome in our corporate health

</div>
<div className='Pro-Pack'>
  <div className='Product-Head'>
  THE GROWING NEED FOR ONSITE CLINICS

  </div>
  <div className='Product-Brief'>
  As we watch, the switch in the working condition is being changed to reflect the current situation.We are offering healthcare solutions to corporate employees and
  students to give them a healthy healthcare environment. Onsite clinics are a long term solution to maintain employees' and students' health, improve cost-effectiveness
  in terms of absenteeism, and also provide a stress free work environment and timely and easy access to primary and acute care.
  </div>
  <div  style={{paddingTop:"20px"}} className='Pro-Package'>
    <div className='Pro-pack1'>
      <ul  className="Package-A" style={{color:"grey"}}>
      <div className='Premium'> Basic-Package</div>
        <li>
        Qualified Nurse Deputation.
        </li>
        <li>
        Online and Offline Doctor Consultation as and when required.
        </li>
        <li>
        Emergency Ambulance Services
        </li>
        <li>
        OTC medicines.
        </li>
        <li>
        Medical furniture and Fixtures.
        </li>
        <li>
        Medical Consumable and Disposable.
        </li>
        <li>
        Assistance in Hospital admission and at home Lab Services.
        </li>
        <li>
        Accidental Cover of Rs.100000 per person.
        </li>
        <li>
        Mental Wellness Sessions (Yoga,Meditation,Counselling Session)
        </li>
        <li style={{paddingBottom:"20px"}}>
        Physical Wellness Session (Physiotherapy,Diet,Zumba etc).
        </li>
      </ul>

    </div>
    <div className='Pro-pack2'>
      <ul className="Package-B" style={{color:"grey"}}>
        <div className='Premium'> Premium-Package</div>
        <li>
        Student/ Employee Health Records
        </li>
        <li>
        Qualified Nurse Deputation.
        </li>
        <li>
        Online and Offline Doctor Consultation as and when required.
        </li>
        <li>
        Emergency Ambulance Services
        </li>
        <li>
        Medical furniture and Fixtures.
        </li>
        <li>
        Medical Consumable and Disposable.
        </li>
        <li>
        OTC medicines.
        </li>
        <li>
        Assistance in Hospital admission and at home Lab Services.
        </li>
        <li>
        Accidental Cover of Rs.300000 per person.
        </li>
        <li>
        Annual Complete Health Checkup Camp including.
        </li>
        <li>
        Mental Wellness Sessions (Yoga,Meditation,Counselling Session)
        </li>
        <li style={{paddingBottom:"20px"}}>
        Physical Wellness Session (Physiotherapy,Diet,Zumba etc).
        </li>
      </ul>

    </div>
  </div>
</div>

      </div>
      
    </div>
  )
}

export default Products