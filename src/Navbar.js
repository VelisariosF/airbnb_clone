import React from 'react'
import NavbarExperiences from "./NavbarComponents/NavbarExperiences"
import NavbarPlacesToStay from "./NavbarComponents/NavbarPlacesToStay"
import ProfileModerator from "./NavbarComponents/ProfileModerator"
export default function Navbar() {
    const [displayPlacesToStayForm, setDisplayPlacesToStayForm] = React.useState(true)
    const [displayExperiencesForm, setdisplayExperiencesForm] = React.useState(true)
    

    function handleFormsDisplay(id){
        
    }
    return (
        <nav className='main-nav'>
            <div className='logo'></div>
            <ul className='search-ul'>
                <li className='places-to-stay'>
                    <NavbarPlacesToStay id={1} show={showPlacesToStay} />
                </li>
                <li className='experiences'>
                    <NavbarExperiences id={2} show={choosePlacesToStay}/>
                </li>

            </ul>

            <ul className='widgets-ul'>
                <li>Become a host</li>
                <li>lng</li>
                <li className='profile-moderator'>
                    <ProfileModerator/>
                </li>
            </ul>
        </nav>
    )
}