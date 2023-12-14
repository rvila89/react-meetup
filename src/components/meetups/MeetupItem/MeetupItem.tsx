import classes from './MeetupItem.module.css'
import { Card } from '../../ui/Card'
import { IMeetup } from '../../../common/types'
import { useAppContext } from '../../../context/AppContext'

const MeetupItem: React.FC<IMeetup> = ({
  id,
  title,
  address,
  description,
  image,
  isFavorite,
}) => {
  const { setMeetups } = useAppContext()

  const handleFavorites: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    // I modify the meetup to manage favorites and update the context
    e.preventDefault()
    setMeetups((meetups) => {
      return meetups.map((meetup) => {
        if (meetup.id === id) {
          return { ...meetup, isFavorite: !meetup.isFavorite }
        }
        return meetup
      })
    })
  }

  return (
    <li className={classes.item} data-test='meet-up-item' key={id}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleFavorites}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
