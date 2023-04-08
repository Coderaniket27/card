import { useNavigate } from "react-router-dom"; // v6

import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import {Link} from 'react-scroll'
const BenefitsNav = () => {
      const navigate = useNavigate();

    const[list,showlist]=useState(false)
  
  return (
    <div>
         <div  className='NavBar' style={{"width":"100%"}}>
        <div  className='NavFull'>
        <div style={{"color":"#0018A8","marginTop":"20px"}} className='Navlogo'>
<img  alt="logo" height="60px" width="60px"src='logo.png'/>
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
<li className="hovers"style={{marginRight:"40px",paddingTop:"10px",paddingBottom:"10px",paddingRight:"4px",paddingLeft:"4px"}}>  <Link activeClass="active"  onClick={()=>navigate('/')} to="home" spy={true} smooth={true}>Home</Link></li>
<li className="hovers"style={{marginRight:"40px",paddingBottom:"10px",paddingTop:"10px",paddingRight:"4px",paddingLeft:"4px"}} > <Link activeClass="active" to="hospital" spy={true} smooth={true}>Hospital</Link></li>
<li className="hovers"style={{marginRight:"40px",paddingBottom:"10px",paddingTop:"10px",paddingRight:"4px",paddingLeft:"4px"}} > <Link activeClass="active" to="lab" spy={true} smooth={true}>Lab</Link></li>
<li className="hovers"style={{marginRight:"40px",paddingBottom:"10px",paddingTop:"10px",paddingRight:"4px",paddingLeft:"4px"}} > <Link activeClass="active" to="radiology" spy={true} smooth={true}>Radiology</Link></li>
<li className="hovers"style={{marginRight:"40px",paddingBottom:"10px",paddingTop:"10px",paddingRight:"4px",paddingLeft:"4px"}} > <Link activeClass="active" to="ambulance" spy={true} smooth={true}>Ambulance</Link></li>
<li className="hovers"style={{marginRight:"40px",paddingBottom:"10px",paddingTop:"10px",paddingRight:"4px",paddingLeft:"4px"}} > <Link activeClass="active" to="bloodbank" spy={true} smooth={true}>Blood bank</Link></li>
<li className="hovers"style={{marginRight:"40px",paddingBottom:"10px",paddingTop:"10px",paddingRight:"4px",paddingLeft:"4px"}} > <Link activeClass="active" to="doctor" spy={true} smooth={true}>Doctor Consultation</Link></li>
<li className="hovers"style={{marginRight:"40px",paddingBottom:"10px",paddingTop:"10px",paddingRight:"4px",paddingLeft:"4px"}} > <Link activeClass="active" to="homecare" spy={true} smooth={true}>Home Care</Link></li>
<li className="hovers"style={{marginRight:"40px",paddingBottom:"10px",paddingTop:"10px",paddingRight:"4px",paddingLeft:"4px"}} > <Link activeClass="active" to="healthcamp" spy={true} smooth={true}>Health Camp</Link></li>
<li className="hovers"style={{marginRight:"40px",paddingBottom:"10px",paddingTop:"10px",paddingRight:"4px",paddingLeft:"4px"}} > <Link activeClass="active" to="mentalhealth" spy={true} smooth={true}>Mental Health</Link></li>



</ul>
</div> 

{list?<div className='list-item'>
  <ul style={{listStyle:"none"}}>
    <li onClick={()=>navigate('/')}  className="hamburger-list">Home</li>
    
<li className="hamburger-list" > <Link activeClass="active" to="hospital" spy={true} smooth={true}>Hospital</Link></li>
<li className="hamburger-list" > <Link activeClass="active" to="lab" spy={true} smooth={true}>Lab</Link></li>
<li className="hamburger-list" > <Link activeClass="active" to="radiology" spy={true} smooth={true}>Radiology</Link></li>
<li className="hamburger-list" > <Link activeClass="active" to="ambulance" spy={true} smooth={true}>Ambulance</Link></li>
<li className="hamburger-list" > <Link activeClass="active" to="bloodbank" spy={true} smooth={true}>Blood bank</Link></li>
<li className="hamburger-list" > <Link activeClass="active" to="doctor" spy={true} smooth={true}>Doctor Consultation</Link></li>
<li className="hamburger-list" > <Link activeClass="active" to="homecare" spy={true} smooth={true}>Home Care</Link></li>
<li className="hamburger-list" > <Link activeClass="active" to="healthcamp" spy={true} smooth={true}>Health Camp</Link></li>
<li className="hamburger-list" > <Link activeClass="active" to="mentalhealth" spy={true} smooth={true}>Mental Health</Link></li>

  </ul>

</div>:""}

          </div>
            
    </div>
    </div>
  )
}

export default BenefitsNav