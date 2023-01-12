import Item from './components/Item';
import {v4 as uuidv4} from 'uuid';
import {useState} from "react"
import {RiSendPlaneFill} from "react-icons/ri";


import './App.css';

function App() {

  const[message,updateMessage]=useState('');
  const[text,updateText]=useState([]);
  
 

  const user = ["Alam","Bob","Carol","Dean","Elin"];

  
  const updatingMessage=(event)=>{
    updateMessage(event.target.value);
    
  }

  const updatingText=()=>{
    const name =user[Math.floor(Math.random()*user.length)];
    const half=name[0]+name[1];
    const object={
      id:uuidv4(),
      name1:half,
      value1:message, 

    }
    updateText(prevText=>[...prevText,object])
    updateMessage('');
  }

  return (
    <div className='container'>
      <div className='top'>
        <h1 className='head11'>✨ CHAT APP ✨</h1>
        
      </div>
      <div className='middle'> 
        <h3>Messages : 📃</h3>
        <ul>
          {text.map((each)=>{
            return <Item id={each.id} details={each}/>

          })}
        </ul>

      </div>
      <div className='bottom'>
        <div className='input'>
           
            <textarea rows="8" cols="55" placeholder='Type your messages here...' onChange={updatingMessage} value={message}></textarea>
            <button type="button" onClick={updatingText}><RiSendPlaneFill id="icon1"/></button>
            
              
        </div>

      </div>

    </div>
  );
}

export default App;
