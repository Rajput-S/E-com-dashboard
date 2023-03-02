import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Ragister from './Ragister';
import Login from './Login';
import Updateproduct from './Updateproduct';
import Addproduct from './Addproduct';

import {BrowserRouter,Route, Routes} from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <BrowserRouter>  
<Header />
<h1>Ecom - Dashboard</h1>
<Routes>
<Route  path="/login" element={<Login />} />
<Route  path="/register" element={<Ragister />} />
<Route  path="/add" element={<Addproduct />} />
<Route  path="/update" element={<Updateproduct />} />



</Routes>
</BrowserRouter>

      </div>
  );
}

export default App;
