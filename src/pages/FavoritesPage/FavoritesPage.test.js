import { render } from '@testing-library/react'
import FavoritesPage from './FavoritesPage'
import AppProvider from '../../context/AppContext'
import { useFetch } from '../../hooks/useFetch'

// Testing the FavoritesPage component using react-testing-library like Testing utility
const initialDataMeetUpFavorites = [
  {
    id: 'm1',
    title: 'This is a favorite meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first favorite meetup!',
    isFavorite: true,
  },
]
jest.mock('../../hooks/useFetch')

describe('Test FavoritesPage Component', () => {
  test('renders FavoritesPage without crashing', () => {
    const { getByText } = render(<FavoritesPage />)
    // Check if children component, MeetupList, is rendered correctly
    expect(getByText(/Favorites Page/i)).toBeInTheDocument()
  })
  test('renders FavoritesPage with meetup favorites', () => {
    useFetch.mockReturnValue({
      data: initialDataMeetUpFavorites,
      error: undefined,
      isLoading: false,
    })

    const { getByText } = render(
      <AppProvider>
        <FavoritesPage />
      </AppProvider>
    )
    // Check if children component, MeetupList, is rendered correctly
    expect(getByText(/Favorites Page/i)).toBeInTheDocument()
    expect(getByText(/This is a favorite meetup/i)).toBeInTheDocument()
  })
})
