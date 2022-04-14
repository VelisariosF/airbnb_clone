import React from 'react'
import NavbarExperiences from "./NavbarComponents/NavbarExperiences"
import NavbarPlacesToStay from "./NavbarComponents/NavbarPlacesToStay"
import ProfileModerator from "./NavbarComponents/ProfileModerator"
import logo_white from './images/airbnb_logo_white.png'
import logo from './images/airbnb_logo.png'
export default function Navbar() {
    const [displayPlacesToStayForm, setDisplayPlacesToStayForm] = React.useState (()=>true)
    const [displayExperiencesForm, setdisplayExperiencesForm] = React.useState(() =>false)
    const [logoState, setLogoState] = React.useState(logo_white)
    const [profileModeratorDisplay, setProfileModeratorDisplay] = React.useState(() => false)
   function handleFormsDisplay(id){
        if(id === 1){
            setDisplayPlacesToStayForm(true)
            setdisplayExperiencesForm(false)
        }else if(id === 2){
            setDisplayPlacesToStayForm(false)
            setdisplayExperiencesForm(true)
        }else if(id === 3){
            setProfileModeratorDisplay(prevState => !prevState)
        }
    }
    
    

    return (
        <nav className='main-nav'>
            <img src={logoState} className='logo' alt='logo'></img>
            <ul className='search-ul'>
                <li className='places-to-stay' style={{cursor:'pointer'}} onClick={() => handleFormsDisplay(1)}>
                    <NavbarPlacesToStay id={1} show={displayPlacesToStayForm} />
                </li>
                <li className='experiences' style={{cursor:'pointer'}} onClick={() => handleFormsDisplay(2)}>
                    <NavbarExperiences id={2} show={displayExperiencesForm}/>
                </li>
                <li>
                    <h3><a href='#'>Online Experiences</a></h3>
                </li>
            </ul>

            <ul className='widgets-ul'>
                <li>Become a host</li>
                <li>lng</li>
                <li className ='profile-moderator'>
                    <button className='profile-moderator-button' onClick={() => handleFormsDisplay(3)}><i style={{fontSize: '1.3em'}} className="fa fa-bars"></i><i  style={{color: 'grey'}}className="fa fa-user-circle" aria-hidden="true"></i></button>
                    <ProfileModerator display={profileModeratorDisplay} />
                </li>
            </ul>
        </nav>
    )
}