import React from 'react'
import GuestCounter from './GuestsFromExperiences/GuestCounter'
import './NavbarPlacesToStay.css'
export default function NavbarPlacesToStay() {
    
    const [guestsCounters, setGuestsCounters] = React.useState(() => [0, 0, 0, 0])
    const [guestsSum, setGuestsSum] = React.useState(() => 0)
    const [formData, setFormData] = React.useState(  {
        location: "",
        checkIn: "",
        checkOut: "",
        guests: 0
    })

    const [showGuestsContainer, setShowGuestContainer] = React.useState(true)

    const guest_counter_elements = guestsCounters.map((value, index) => {
        return (
           <GuestCounter 
           value ={value} 
           add ={() => add(index)}
           subtract ={() => subtract(index)}/>
        )
    })

    const guest_counter_container_style = {
        opacity : showGuestsContainer ? 1 : 0
    }

   

    function updateGuestsSum(add){
        setFormData(prevFormData => {
            let newFormData = {...prevFormData}
            if(add)
              newFormData.guests += 1
            else 
              newFormData.guests -= 1
            
            return newFormData
        })
      /*  if(add){
            setGuestsSum(guestsSum + 1)
        }else{
            setGuestsSum(guestsSum - 1)
        }*/
        
       
    }
    function add(index) {
       const countersCopy = [...guestsCounters];
             countersCopy[index] += 1;
             setGuestsCounters(countersCopy);
             updateGuestsSum(true)
   }
   
   function subtract(index) {
        const countersCopy = [...guestsCounters];
             countersCopy[index] -= 1;
             setGuestsCounters(countersCopy);
             updateGuestsSum(false)
   }


    function handelSubmit() {
        //
    }

    function handleChange(event) {
        const {name, value, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }
    return (
       <div className='places-to-stay-form'>
        <form onSubmit={handelSubmit}>
            <div className='form-element'>
                <label htmlFor='location'>location</label>
                <input
                    type='text'
                    name='location'
                    placeholder='Where are you going?'
                    value={formData.location}
                    onChange={handleChange} />

            </div>
            <div className='form-element'>
                <label htmlFor='checkIn'>Check in</label>
                <input
                    type='date'
                    name='checkIn'
                    placeholder='Add dates'
                    value={formData.checkIn}
                    onChange={handleChange} />
            </div>
            <div className='form-element'>
                <label htmlFor='checkOut'>Check out</label>
                <input
                    type='date'
                    name='checkOut'
                    placeholder='Add dates'
                    value={formData.checkOut}
                    onChange={handleChange} />
            </div>

            <div className='form-element'>
                <label htmlFor='guests'>Guests</label>
                <input 
                type='textarea' 
                name='guests' 
                placeholder={formData.guests === 0 ? "Add guests" : formData.guests}
                value={formData.guests} 
                onChange={handleChange} />
            </div>
            
            <button className='search-button' placeholder='Search'><i class="fa fa-search"><span>Search</span></i></button>
        </form>
       <div className='counters-container' style={guest_counter_container_style} >
               {guest_counter_elements}
       </div>
       </div>

       
    )
}