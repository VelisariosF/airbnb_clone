import React from 'react'
export default function Guests(props){
    const [guestsData, setGuestsData] = React.useState({
        adults : 0,
        children: 0,
        infants: 0,
        pets : 0,
        sum : function(){
            return this.adults + this.children + this.infants + this.pets
        }
    })


    return (
        <>
        
<label htmlFor="guets">Guests</label>
            <br />
            <select 
                id="guests" 
                placeholder='Add guests'
                value={guestsData.sum()}
                onChange={props.handleChange}
                name="guests"
            >
                <option value="red" placeholder='Ages 13 or above'><strong>Adutls</strong>Ages 13 or above</option>
                <option value="orange" placeholder='Ages 2-12'>Children</option>
                <option value="yellow" placeholder='Under 2'>Infants</option>
                <option value="yellow" placeholder='Under 2'>Pets</option>
               
            </select></>
    )
}