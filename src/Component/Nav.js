import React from 'react'
import Hamburger from 'hamburger-react'

const Nav = () => {
  const navlist=["Home","About Us","Products","Benefits","Offers"]
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
     
  } else {
    console.log("off")
  }
}} />

          </div>
<ul className='Navitems'>
 {navlist.map((e,i) =>{
  return(<li className="hover"style={{paddingRight:"50px"}}key={i}>{e}</li>)
 })}
</ul>
</div> 
          </div>
            
    </div>
  )
}

export default Nav