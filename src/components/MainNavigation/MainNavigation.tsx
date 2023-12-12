import './MainNavigation.css'
import { Link } from 'react-router-dom'

const MainNavigation: React.FC = () => {
  return (
    <header className='header' data-test='navigation-header'>
      <div className='logo'>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>

          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My favorites <span className='badge'>{0}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
