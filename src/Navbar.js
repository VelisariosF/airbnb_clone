import NavbarExperiences from "./NavbarComponents/NavbarExperiences"
import NavbarPlacesToStay from "./NavbarComponents/NavbarPlacesToStay"
import ProfileModerator from "./NavbarComponents/ProfileModerator"
export default function Navbar() {
    return (
        <nav className='main-nav'>
            <div className='logo'></div>
            <ul className='search-ul'>
                <li className='places-to-stay'>
                    <NavbarPlacesToStay />
                </li>
                <li className='experiences'>
                    <NavbarExperiences />
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