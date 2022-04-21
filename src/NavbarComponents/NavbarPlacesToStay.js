import React from 'react'
import GuestCounter from './GuestsFromExperiences/GuestCounter'
import './NavbarPlacesToStay.css'
import '../Navbar.css'
export default function NavbarPlacesToStay(props) {
    const formDisplayStyle ={
        opacity: props.show ? 1 : 0
    }

    const [guestsCounters, setGuestsCounters] = React.useState(() => [0, 0, 0, 0])
   // const [guestsSum, setGuestsSum] = React.useState(() => 0)
     
    const [formData, setFormData] = React.useState({
        location: "",
        checkIn: "",
        checkOut: "",
        guests: 0
    })


    const [formElementClicked, setFormElementClicked] = React.useState(false)


   /* const formSubmitButtonStyle = {
        if(formElementClicked){
            return {
                width: '6em',
                borderRadius: '20%',
            }
        }    
    }*/

    const [displayGuestsContainer, setDisplayGuestsContainer] = React.useState(false)
     
    function handleDisplayGuestsContainer(){
        setDisplayGuestsContainer(prevState => !prevState)
    }
  

    const guest_counter_container_style = {
        opacity: displayGuestsContainer ? 1 : 0
    
    }


    const guest_counter_elements = guestsCounters.map((value, index) => {
        return (
            <GuestCounter
                value={value}
                add={() => add(index)}
                subtract={() => subtract(index)} />
        )
    })
    
     
    function updateGuestsSum(add) {
        setFormData(prevFormData => {
            let newFormData = { ...prevFormData }
            if (add) {
                newFormData.guests += 1
            }

            else {
                if (formData.guests !== 0) {
                    newFormData.guests -= 1
                }
            }


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
        if (formData.guests !== 0) {
            const countersCopy = [...guestsCounters];
            countersCopy[index] -= 1;
            setGuestsCounters(countersCopy);
            updateGuestsSum(false)
        }

    }


    function handelSubmit() {
        //
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })

        setFormElementClicked(true)

        
    }
    /*
         <label  htmlFor='guests' onClick={handleDisplayGuestsContainer}>Guests</label>
    <input 
    type='text'
    name='guests'
    value={formData.guests}
    onChange={handleChange}
    />*/
    return (
        <div>
            <h3>Places to stay</h3>
                <div className='pl_form'style={formDisplayStyle}>
                <form onSubmit={handelSubmit}  className='places-to-stay-form'>
                    <div className='form-element'>
                        <label htmlFor='location'>Location</label>
                        <input
                            type='text'
                            name='location'
                            placeholder='Where are you going?'
                            value={formData.location}
                            onChange={handleChange} />

                    </div>
                    <div className='separator-line'></div>
                    <div className='form-element'>
                        <label htmlFor='checkIn'>Check in</label>
                        <input
                            type='date'
                            name='checkIn'
                            placeholder='Add dates'
                            value={formData.checkIn}
                            onChange={handleChange} />
                    </div>
                    <div className='separator-line'>  </div> 
                    <div className='form-element'>
                        <label htmlFor='checkOut'>Check out</label>
                        <input
                            type='date'
                            name='checkOut'
                            placeholder='Add dates'
                            value={formData.checkOut}
                            onChange={handleChange} />
                    </div>
                    <div className='separator-line'></div>
                    <div className='form-flex-element'>
                        <div className='form-element-guests'  onClick={handleDisplayGuestsContainer}>
                        <h3 className='label'>Guests</h3>
                        <h3 className='data'>{formData.guests === 0 ? "Add guests" : formData.guests}</h3>
                     
                        </div>
                       
                     
                            <button className='search-button'  placeholder='Search'><i className="fa fa-search"><span>Search</span></i></button>
            
                    </div>

                       </form>
               
            
            <div className='counters-container'  style={guest_counter_container_style} >
                    
                    {guest_counter_elements}
           
             
          </div>
                </div>
              
        </div>



    )
}