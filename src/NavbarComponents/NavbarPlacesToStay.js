import React from 'react'
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

<label htmlFor="guets">Guests</label>
            <br />
            <select 
                id="favColor" 
                placeholder='Add guests'
                value={formData.guests}
                onChange={handleChange}
                name="guests"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

        </form>
    )
}