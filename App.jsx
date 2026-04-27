import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Feedback from './Feedback';

function App(){
  return(
   <>
   <Nav/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Menu" element={<Menu/>} />
    <Route path="/Feedback" element={<Feedback/>} />
    <Route path="/Contact" element={<Contact/>} />
   </Routes>
  
   </>
  )
}

export default App;