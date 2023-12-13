import React from 'react'
import MeetupItem from '../../components/meetups/MeetupItem/MeetupItem'
import classes from './AllMeetupsPage.module.css'
import { useAppContext } from '../../context/AppContext'
import { IMeetup } from '../../common/types'

const AllMeetupsPage: React.FC = () => {
  const { meetups } = useAppContext()
  console.log('meetups', meetups)

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {meetups.map((meetup: IMeetup) => (
          <MeetupItem
            key={meetup.id}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
            image={meetup.image}
            id={meetup.id}
          />
        ))}
      </ul>
    </section>
  )
}

export default AllMeetupsPage
