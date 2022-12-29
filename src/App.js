import './App.css';
import Benefits from './Component/Benefits';
import Home from './Component/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

 
function App() {
  return (
    <div >
        {/* <Home/>
<Benefits/> */}
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="benefits" element={<Benefits />} />
      
    </Routes>
  </BrowserRouter>,

    </div>
  );
}

export default App;
