import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetUpForm/NewMeetupForm'

const NewMeetupsPage: React.FC = () => {
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm />
    </section>
  )
}

export default NewMeetupsPage
