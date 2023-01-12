import {useState} from 'react';
import {AiOutlineLike} from 'react-icons/ai'
import './index.css' 

const Item=(props)=>{
    
    const{details}=props; 
    const{id,name1,value1}=details;  

    const[count,update]=useState(0); 

    const increaseCount=()=>{
        update(prevCount=>prevCount+1)
    }

    return(
        <li id={id}>

            <div className='li' >
                <div className='list'>

                    <div className='head'>
                        <h3>{name1}</h3>
                    </div>
                    <p className='value'>{value1}</p>
                    <button className='but1' type="button" onClick={increaseCount}>
                        <AiOutlineLike id="icon" />
                    </button>
                    <p className='para'>{count}</p>
                </div>

            </div>
        </li>

    )
}

export default Item;