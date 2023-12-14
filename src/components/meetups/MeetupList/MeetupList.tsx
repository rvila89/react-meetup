import { IMeetup } from '../../../common/types'
import { MeetupItem } from '../MeetupItem'
import { IMeetupList } from './MeetupList.types'

import classes from './MeetupList.module.css'

const MeetupList: React.FC<IMeetupList> = ({ meetups, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <ul className={classes.list}>
        {meetups.length === 0 ? (
          <li>No meetups found.</li>
        ) : (
          meetups.map((meetup: IMeetup) => (
            <MeetupItem
              key={meetup.id}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
              image={meetup.image}
              id={meetup.id}
              isFavorite={meetup.isFavorite}
            />
          ))
        )}
      </ul>
    </section>
  )
}

export default MeetupList
