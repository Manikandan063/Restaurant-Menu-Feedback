import { Link } from 'react-router-dom';
import "./App.css";

function Menu() {
  return (
    <div className="menu">
      <p>Delicious food served fresh!</p>

      <div className="menu-list">
        <div className="card">
          <img src="https://www.southernliving.com/thmb/neXdkcBhnuLrIuF30-ZJ8GYVr-E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Supreme_Pizza_006-3b04db62117d404e9c37b126d7a7f0a2.jpg" />
          <h3>Pizza</h3>
          <p>₹200</p>
        </div>

        <div className="card">
          <img src="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/4:3/w_2666,h_2000,c_limit/basically-burger-1.jpg" />
          <h3>Burger</h3>
          <p>₹150</p>
        </div>
        <div className="card">
          <img src="https://media.istockphoto.com/id/1225004589/photo/pasta-with-cream-sauce.jpg?s=612x612&w=0&k=20&c=KvlgEhh45qvDao_zYp4Bhv-GOQX1zKkAiaQ4qz3DPDw=" />
          <h3>White Sauce Pasta</h3>
          <p>₹250</p>
        </div>
        <div className="card">
          <img src="https://www.yummytummyaarthi.com/wp-content/uploads/2017/03/1-15.jpg" />
          <h3> Chicken Noodles</h3>
          <p>₹150</p>
        </div>
      </div>
       <br/>
      <Link to ="/" className="btn">Back to Home</Link>
    </div>
          
  );
}

export default Menu;
