import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import {Link} from 'react-scroll'
import { useNavigate } from "react-router-dom"; // v6



const Nav = () => {

  const navigate = useNavigate();

  const[list,showlist]=useState(false)

  // const navlist=["Home","About Us","Products","Benefits","Offers"]
  return (
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
<li className="hovers"style={{paddingRight:"50px"}}>  <Link activeClass="active"  to="home" spy={true} smooth={true}>Home</Link></li>
<li className="hovers"style={{paddingRight:"50px"}}>  <Link activeClass="active" to="about" spy={true} smooth={true}>About Us</Link></li>
<li className="hovers"style={{paddingRight:"50px"}}>  <Link activeClass="active" to="other" spy={true} smooth={true}>Other Services</Link></li>
       
<li onClick={()=>navigate('/products')} className="hovers"style={{paddingRight:"50px"}}>Products

 </li>

  <li onClick={()=>navigate('/benefits')} className="hovers"style={{paddingRight:"50px"}}>Benefits</li>
  <li className="hovers"style={{paddingRight:"50px"}}>Offers</li>

</ul>
</div> 

{list?<div className='list-item'>
  <ul style={{listStyle:"none"}}>
  <li className='hamburger-list' >Home</li>
  <li   className='hamburger-list' > <Link activeClass="active" to="about" spy={true} smooth={true}>About Us</Link></li>
  <li className='hamburger-list' > <Link activeClass="active" to="other" spy={true} smooth={true}>Other Services</Link></li>
  <li  onClick={()=>navigate('/benefits')} className='hamburger-list' > Benefits</li>
  <li  onClick={()=>navigate('/products')}  className='hamburger-list' > Products</li>

  <li className='hamburger-list' > <Link activeClass="active" to="about" spy={true} smooth={true}>Offers</Link></li>

    
  </ul>

</div>:""}

          </div>
            
    </div>
  )
}

export default Nav