import React from 'react'
import Nav from '../Component/Nav';
import Banner from '../Component/Banner';
import Aboutus from '../Component/Aboutus';
import Mission from '../Component/Mission';
import Otherbenefits from '../Component/Otherbenefits';
// import Foot from '../Component/Foot'
const Home = () => {
  return (
    <div style={{height:"100vh"}}> 

 <Nav/>

<Banner/>
<Aboutus/>
<Mission/>
<Otherbenefits/>
{/* <Foot/> */}

    </div>
  )
}

export default Home 