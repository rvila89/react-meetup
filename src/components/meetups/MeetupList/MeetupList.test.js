import { render } from '@testing-library/react'
import MeetupList from './MeetupList'
import { AppContext } from '../../../context/AppContext'

// Testing the MeetupList component using react-testing-library like Testing utility
describe('Test MeetupList Component', () => {
  test('renders MeetupList without meetups', () => {
    const { getByText } = render(
      <AppContext.Provider value={{ isLoading: false }}>
        <MeetupList meetups={[]} title='Test List' />
      </AppContext.Provider>
    )
    expect(getByText(/Test List/i)).toBeInTheDocument()
    expect(getByText(/No meetups found./i)).toBeInTheDocument()
  })
  test('renders MeetupList with meetups', () => {
    const meetups = [
      {
        id: 'test-id',
        title: 'Test Meetup',
        image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        address: 'Test Address',
        description: 'Test Description',
        isFavorite: false,
      },
    ]
    const { getByText } = render(
      <AppContext.Provider value={{ isLoading: false }}>
        <MeetupList meetups={meetups} title='Test List' />
      </AppContext.Provider>
    )
    expect(getByText(/Test List/i)).toBeInTheDocument()
    // Check MeetupItem is rendered correctly
    expect(getByText(/Test Meetup/i)).toBeInTheDocument()
  })
})
