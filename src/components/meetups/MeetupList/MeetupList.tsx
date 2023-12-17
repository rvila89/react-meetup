import { IMeetup } from '../../../common/types'
import { MeetupItem } from '../MeetupItem'
import { IMeetupList } from './MeetupList.types'

import classes from './MeetupList.module.css'
import { useAppContext } from '../../../context/AppContext'
import Loader from '../../ui/Loader/Loader'

const MeetupList: React.FC<IMeetupList> = ({ meetups, title }) => {
  const { isFirstLoading } = useAppContext()
  return (
    <section>
      <h1>{title}</h1>
      {isFirstLoading ? (
        <Loader />
      ) : meetups.length === 0 ? (
        <p>No meetups found.</p>
      ) : (
        <ul className={classes.list}>
          {meetups.map((meetup: IMeetup) => (
            <MeetupItem
              key={meetup.id}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
              image={meetup.image}
              id={meetup.id}
              isFavorite={meetup.isFavorite}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default MeetupList
