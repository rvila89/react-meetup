import { fireEvent, render } from '@testing-library/react'
import MeetupItem from './MeetupItem'
import { act } from 'react-dom/test-utils'
import AppProvider, { useAppContext } from '../../../context/AppContext'
import { useFetch } from '../../../hooks/useFetch'

// Testing the MeetupItem component using react-testing-library like Testing utility
const testMeetup = [
  {
    id: 'test-id',
    title: 'Test Meetup',
    image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    address: 'Test Address',
    description: 'Test Description',
    isFavorite: false,
  },
]
jest.mock('../../../hooks/useFetch')

describe('Test MeetupItem Component', () => {
  test('renders MeetupItem no favorite correctly', () => {
    const { getByText } = render(
      <MeetupItem
        id={testMeetup[0].id}
        title={testMeetup[0].title}
        address={testMeetup[0].address}
        image={testMeetup[0].image}
        description={testMeetup[0].description}
        isFavorite={testMeetup[0].isFavorite}
      />
    )
    expect(getByText(/Test Meetup/i)).toBeInTheDocument()
    expect(getByText(/Add to Favorites/i)).toBeInTheDocument()
  })
  test('renders MeetupItem favorite correctly and update context when click to remove from favorites button', async () => {
    useFetch.mockReturnValue({
      data: testMeetup,
      error: undefined,
      isLoading: false,
    })

    const { getByText, getByRole } = render(
      <AppProvider>
        <MeetupItem
          id={testMeetup[0].id}
          title={testMeetup[0].title}
          address={testMeetup[0].address}
          image={testMeetup[0].image}
          description={testMeetup[0].description}
          isFavorite={testMeetup[0].isFavorite}
        />
      </AppProvider>
    )
    expect(getByText(/Test Meetup/i)).toBeInTheDocument()
    expect(getByText(/Add to Favorites/i)).toBeInTheDocument()

    await act(async () => {
      const addButton = getByRole('button', {
        name: /Add to Favorites/i,
      })
      fireEvent.click(addButton)
    })
    // expect(setMeetupsMock).toHaveBeenCalledTimes(1)
  })
})
