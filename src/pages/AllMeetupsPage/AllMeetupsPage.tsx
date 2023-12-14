import { useAppContext } from '../../context/AppContext'
import MeetupList from '../../components/meetups/MeetupList/MeetupList'

const AllMeetupsPage: React.FC = () => {
  const { meetups } = useAppContext()
  return <MeetupList title='All Meetups' meetups={meetups} />
}

export default AllMeetupsPage
