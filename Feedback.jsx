import {useState} from 'react';
import './App.css';


function Feedback(){
    const[name, setName]=useState("");
    const[feedback, setFeedback]= useState("");
    const[submitted, setSubmitted]= useState(false);


    return(<>
    <div className='feedback'>
         <h2>Restaurant Feedback Form</h2>

           <input type="text" placeholder="Enter Your Name"
           value={name}
           onChange={(e)=>setName(e.target.value)}>
            </input>   <br></br>
           <textarea placeholder='Enter your Feedback'
           value={feedback}
           onChange={(e)=>setFeedback(e.target.value)}
           /> <br></br>
           <button onClick={()=>setSubmitted(true)}>Submit</button>

           {/* <h2>Your Name: {name}!</h2> 
           <h2>Your Feedback: {feedback}!</h2> */}
           {submitted && <h2>Thank you for your feedback!</h2>}

    </div>
            
    
    </>)
}

export default Feedback;