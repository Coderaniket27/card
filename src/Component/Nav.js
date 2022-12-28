import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import {Link} from 'react-scroll'


const Nav = () => {
  const[list,showlist]=useState(false)
  const[list1,setlist1]=useState(false)
  const navlists=["Home","About Us","Benefits","Offers","Lab Test","Hospital","Ambulance","Doctor Appointment","Home Care","Health Checkup","Mental Health & Fitness"]

  // const navlist=["Home","About Us","Products","Benefits","Offers"]
  return (
    <div className='NavBar' style={{"width":"100%"}}>
        <div className='NavFull'>
          <div style={{"color":"#0018A8"}} className='Navlogo'>
<img  alt="logo" height="100px" width="100px"src='newlog.jpg'/>
          </div>
         <div className='Navlist'>
          <div className='Hamburger'>
          <Hamburger size={48}label={"Show menu"} durstion={20} color={"#0018A8"}onToggle={toggled => {
  if (toggled) {
     showlist(true)
  } else {
showlist(false)  }
}} />

          </div>
<ul className='Navitems'>
  <li className="hovers"style={{paddingRight:"50px"}}>Home</li>
<li className="hovers"style={{paddingRight:"50px"}}>  <Link activeClass="active" to="about" spy={true} smooth={true}>About Us</Link></li>
         
<li onClick={(e) =>{
  setlist1(!list1)
}} className="hovers"style={{paddingRight:"50px"}}>Products

 </li>

  <li className="hovers"style={{paddingRight:"50px"}}>Benefits</li>
  <li className="hovers"style={{paddingRight:"50px"}}>Offers</li>

</ul>
</div> 
{list1?<div className='list-item1'>
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
</div>:""}
{list?<div className='list-item'>
  <ul style={{listStyle:"none"}}>
    
    {navlists.map((e,i)=>{
      return (<li className='hamburger-list' key={i}> <Link activeClass="active" to="about" spy={true} smooth={true}>{e}</Link></li>)
    })}

  </ul>

</div>:""}

          </div>
            
    </div>
  )
}

export default Nav