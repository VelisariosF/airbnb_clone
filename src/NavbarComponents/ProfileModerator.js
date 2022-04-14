import './ProfileModerator.css'
import '../Navbar.css'
export default function ProfileModerator(props){
    const profileModeratorStyle = {
      opacity : props.display ? 1 : 0
    }
    return (
      <div className='profile-moderator-ul' style={profileModeratorStyle}>
      <ul className='profile-moderator-credentials' >
          <li>Log in</li>
          <li>Sign up</li>
      </ul>
       <ul className='profile-moderator-rest'>
          <li>Host your home</li>
          <li>Host an experience</li>
          <li>Help</li>
       </ul>
        </div>
    )
}