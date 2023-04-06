import React from 'react'
import Pdf from 'react-to-pdf';
import axios from 'axios'
import { useState } from 'react';

const ref = React.createRef();
const CardDownload = () => {
    const [phone,setphone]=useState("")
    const [aadhar,setAadhar]=useState("")
    const [data,setdata]=useState({})
    const [visible,setvisble]= useState(false)

    async function  handle(e){
        e.preventDefault()
        try{
        let response= await axios.post("https://api-nirog.vercel.app/downloadcard",{aadhar })
        console.log(response.data)
        console.log(data.phone)
        if(response.status===200 && response.data.data.phone===phone){
           setdata(response.data.data)
            setvisble(true)
          alert("downloaded")
      
      
         }
         else{
          alert("Aadhar or no dosent match")
         }
      console.log(response.status,"ko")
      
      } catch (err){
      console.log(err)
      } 
      }

  return (
    <div  className="check" style={{height:"100vh"}}>
    < div className="CardMain"><div  style={{fontFamily:"serif",fontSize:"30px",fontWeight:"800",paddingTop:"90px"}}className='CardDownload'> Fill Details</div>
    <br/>
    <form className='Form-Model CardDownload'>
            <div className='Input-Align'>
          <label>Enter your Aadhar no:<br/>
            <input  value={aadhar} onChange={(e) =>{setAadhar(e.target.value)}} type="text" 
            name="username" 
             className='Modal-Input' />
          </label>
          <br/>
          <label>Enteryour number:<br/>
            <input value={phone} onChange={(e) =>{setphone(e.target.value)}}  type="text" 
            name="number" 
            className='Modal-Input'  />
          </label>
          <br/>
          
          <br/>
          
          
         
            
          
         <div className='Button-align'>
          <div  className='button-book'>
            <button onClick={handle} style={{width:"80px"}}>Search</button>
           
             </div>     
          </div>
          </div>
        </form>
        <div className='Card-Main'>
            <div ref={ref} className='Card1'>
           <div>
            <div style={{color:"blue", fontFamily:"cursive",fontWeight:"800", marginLeft:"70px"}}>Nirog Sansar Health Card</div>
            <img src="logoo.png" alt="logo"/></div>  
             <div className='Card-Detail'>
<div>{visible ? <b>{data.name}</b> :""}</div>
<div>{visible ? <b>{data.member}</b> :""}</div>
<div>{visible ? <b>{data.date}</b> :""}</div>

<div style={{paddingTop:"16px",paddingLeft:"20px"}}><strong>7277706637</strong></div>

             </div>

            </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"400px"}}>
        <Pdf x={2} y={2} scale={1} targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button  style={{paddingTop:"15px",paddingBottom:"15px"}}onClick={toPdf}>Download Card</button>}
      </Pdf>
      </div>
        </div>
        </div>
  )
}

export default CardDownload