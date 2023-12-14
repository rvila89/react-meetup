import MeetupList from '../../components/meetups/MeetupList/MeetupList'
import { useAppContext } from '../../context/AppContext'

const FavoritesPage: React.FC = () => {
  const { meetups } = useAppContext()
  const favorites = meetups.filter((meetup) => meetup.isFavorite)

  return <MeetupList title='Favorites Page' meetups={favorites} />
}

export default FavoritesPage
