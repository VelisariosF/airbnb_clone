import React from 'react'
import Guests from './Guests'
import './NavbarPlacesToStay.css'
export default function NavbarPlacesToStay() {
    const [formData, setFormData] = React.useState({
        location: "",
        checkIn: "",
        checkOut: "",
        guests: 0
    })

    function handelSubmit() {
        //
    }

    function handleChange() {
        //
    }
    return (
        <form onSubmit={handelSubmit}>
            
            <label htmlFor='location'>location</label>
            <input
                type='text'
                name='location'
                placeholder='Where are you going?'
                value={formData.location}
                onChange={handleChange} />

            <label htmlFor='checkIn'>Check in</label>
            <input
                type='date'
                name='checkIn'
                placeholder='Add dates'
                value={formData.checkIn}
                onChange={handleChange} />

            <label htmlFor='checkOut'>Check out</label>
            <input
                type='date'
                name='checkOut'
                placeholder='Add dates'
                value={formData.checkOut}
                onChange={handleChange} />
               <Guests/>

        </form>
    )
}