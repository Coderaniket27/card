import { useNavigate } from "react-router-dom"; // v6

import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import {Link} from 'react-scroll'
const BenefitsNav = () => {
      const navigate = useNavigate();

    const[list,showlist]=useState(false)
  const navlists=["Lab Test","Hospital","Ambulance","Doctor-Consultation","Home-Care","Health-Camp","Mental Health & Fitness","Other"]
  const navlist=["LabTest","Hospital","Ambulance","Doctor-Consultation","Home-Care","Health-Camp","Mental Health & Fitness","Other"]

  return (
    <div>
         <div  className='NavBar' style={{"width":"100%"}}>
        <div  className='NavFull'>
          <div style={{"color":"#0018A8"}} className='Navlogo'>
<img  alt="logo" height="100px" width="100px"src='newlog.jpg'/>
          </div>
         <div className='Navlist'>
          <div className='Hamburger'>
          <Hamburger size={30}label={"Show menu"} durstion={20} color={"#0018A8"}onToggle={toggled => {
  if (toggled) {
     showlist(true)
  } else {
showlist(false)  }
}} />

          </div>
<ul className='Navitems'>
<li className="hovers"style={{paddingRight:"40px"}}>  <Link activeClass="active"  onClick={()=>navigate('/')} to="home" spy={true} smooth={true}>Home</Link></li>
  
{navlist.map((e,i)=>{
      return (<li className="hovers"style={{paddingRight:"40px"}} key={i}> <Link activeClass="active" to="about" spy={true} smooth={true}>{e}</Link></li>)
    })}


</ul>
</div> 
{/* {list1?<div className='list-item1'>
<ul style={{  listStyle: "none"}}>
  <li onClick={(e) =>{
  setlist1(!list1)
}} className='hamburger-list'>
   Lab Test
  </li>
  <li onClick={(e) =>{
  setlist1(!list1)
}} className='hamburger-list'>
   Hospital
  </li>
  <li onClick={(e) =>{
  setlist1(!list1)
}}className='hamburger-list'>
   Ambulance
  </li>
  <li onClick={(e) =>{
  setlist1(!list1)
}}className='hamburger-list'>
  Doctor Appointment
  </li>
  <li onClick={(e) =>{
  setlist1(!list1)
}}  className='hamburger-list'>
  Home Care
  </li>
  <li  onClick={(e) =>{
  setlist1(!list1)
}} className='hamburger-list'>
  Health Checkup
  </li>
  <li  onClick={(e) =>{
  setlist1(!list1)
}} className='hamburger-list'>
  Mental Health & Fitness  </li>
</ul>
</div>:""} */}
{list?<div className='list-item'>
  <ul style={{listStyle:"none"}}>
    <li onClick={()=>navigate('/')}  className="hamburger-list">Home</li>
    {navlists.map((e,i)=>{
      return (<li className='hamburger-list' key={i}> <Link activeClass="active" to="about" spy={true} smooth={true}>{e}</Link></li>)
    })}

  </ul>

</div>:""}

          </div>
            
    </div>
    </div>
  )
}

export default BenefitsNav