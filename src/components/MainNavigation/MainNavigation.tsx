import classes from './MainNavigation.module.css'
import { Link } from 'react-router-dom'

const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header} data-test='navigation-header'>
      <div className={classes.logo}>React Meetups</div>
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
              My favorites <span className={classes.badge}>{0}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
