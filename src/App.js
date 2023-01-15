import './App.css';
import Benefits from './Component/Benefits';
import Home from './Component/Home';
import Products from './Component/Products';
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
      <Route exact path="/benefits" element={<Benefits />} />
      <Route exact path="/products" element={<Products />} />

    </Routes>
  </BrowserRouter>,

    </div>
  );
}

export default App;
