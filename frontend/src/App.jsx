
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contacts from "./pages/Contacts/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Auths/Login';
import Signup from './pages/Auths/Signup';
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
