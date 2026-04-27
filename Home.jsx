import { Link } from 'react-router-dom';
import './App.css';

function Home(){

    return(
        <div className='home'>
         <h1> Crunch  <span>&</span> Munch Café</h1>
         <p>Welcome to our restaurant! We serve delicious food made with fresh ingredients.</p>
         <p>Order now and enjoy!</p>
         <Link to='/menu' className='btn'>Menu</Link>
            <Link to='/feedback' className='feedbtn'>Feedback</Link>
         
        </div>
  

    )
}

export default Home;
