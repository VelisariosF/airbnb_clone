import React from 'react'
import './GuestCounter.css'
export default function GuestCounter(props){
   

    return (
     
          <div className='counter-element'>
              <div className='description-container'>
                  <p><strong>Adults</strong></p>
                   <p>Ages 13 or above</p>
                
              </div>
              <div className='counter'>
                  <button onClick={props.subtract}><i class="fa fa-minus" aria-hidden="true"></i></button>
                  <p>{props.value}</p>
                  <button onClick={props.add}><i class="fa fa-plus" aria-hidden="true"></i></button>
              </div>
          </div>
       
      
    )
}