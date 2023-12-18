import { useAppContext } from '../../context/AppContext'
import { useAnimationHeader } from '../../hooks/useAnimationHeader'
import classes from './MainNavigation.module.css'
import { Link } from 'react-router-dom'

const MainNavigation: React.FC = () => {
  const { meetups } = useAppContext()
  const favorites = meetups.filter((meetup) => meetup.isFavorite)
  // use custom hook to manage header animation
  const { scrollDirection } = useAnimationHeader()
  return (
    <header
      className={classes.header}
      // style={{ display: scrollDirection === 'down' ? 'none' : 'flex' }}
      style={{
        transform: `${
          scrollDirection === 'up' ? 'translateY(0)' : 'translateY(-100%)'
        }`,
        transition: 'transform 0.5s ease-in-out',
      }}
      data-test='navigation-header'
    >
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
              My favorites{' '}
              <span className={classes.badge}>{favorites.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
