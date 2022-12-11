import './App.css';
import React, { useState } from 'react';


function App() {
  const[Name,SetName]=useState("")
  const [count, setCount] = useState(" ");
const[id,setid]=useState(" ")

  return (
    <div className="App">
      <div className="Card">
        <div className="Card-inner">

<div  style={{textAlign:"center", marginTop:"20px"}}className='name'>
  {Name}

</div>
<div style={{textAlign:"center", marginTop:"20px"}}  className='name'>

  {count}

</div>
<div style={{textAlign:"center", marginTop:"20px"}}  className='names'>

  {id}

</div>
        </div>
      </div>
      <label>
    Name:
      <input type="text" placeholder="Firstname" value={Name} onChange={(e)=>{
        SetName(e.target.value)
      }} />
       </label>
      <br/>
      <br/>
      <label>
        Phone:
      <input type="text" placeholder="no" value={count} onChange={(e)=>{
        setCount(e.target.value)
      }}  />
 </label>
 <button onClick={(e)=>{setid(Math.floor(Math.random() * 10000000))}}>Submit</button>
    </div>
  );
}

export default App;
