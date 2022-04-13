import React from 'react'
import './GuestCounter.css'
export default function GuestCounter(props){
   

    return (
     
          <div className='counter-element'>
              <div className='description-container'>
                  <p>Adults</p>
                   <p>Ages 13 or above</p>
                
              </div>
              <div className='counter'>
                  <button onClick={props.subtract}>-</button>
                  <p>{props.value}</p>
                  <button onClick={props.add}>+</button>
              </div>
          </div>
       
      
    )
}