import { Link } from 'react-router-dom';
import './App.css';

function Nav(){

    return(<>
    
    <nav>
     <h1>🍕Foodies</h1>
     <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/Feedback">Feedback</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
     </ul>
    </nav>
    </>)
}

export default Nav;