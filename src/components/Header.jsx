import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='container header'>
        <div>
            <Link className='link' to={'/'}>Siubella App</Link>
        </div>
        <ul>
            <li>
                <Link  className='link' to={'/login'}> <FaSignInAlt/> Login </Link>
            </li>
                <Link className='link' to={'/register'}> <FaUser/> Register </Link>
            <li>

            </li>
        </ul>
    </header>
  )
}

export default Header