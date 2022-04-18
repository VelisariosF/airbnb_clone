import React from 'react'
import './NavbarExperiences.css'
import '../Navbar.css'
export default function NavbarExperiences(props) {
  const formDisplayStyle = {
    opacity: props.show ? 1 : 0
  }
  const [formData, setFormData] = React.useState({
    location: '',
    date: ''
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit() {

  }


  return (
    <div>
      <h3 >Experiences</h3>
      <form style={formDisplayStyle} onSubmit={handleSubmit}>
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
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            name='date'
            placeholder='Add when you want to go'
            value={formData.date}
            onChange={handleChange} />
        </div>

        <button className='search-button' placeholder='Search'><i class="fa fa-search"><span>Search</span></i></button>

      </form>
    </div>
  )
}