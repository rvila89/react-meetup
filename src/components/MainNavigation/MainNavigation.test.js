import { fireEvent, render, screen } from '@testing-library/react'
import MainNavigation from './MainNavigation'
import { BrowserRouter } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

// Testing the MainNavigation component using react-testing-library like Testing utility
describe('Test MainNavigation Component', () => {
  test('renders MainNavigation without crashing', () => {
    const { getByText } = render(<MainNavigation />, {
      wrapper: BrowserRouter,
    })

    // useAnimationHeader.mockReturnValue({ scrollDirection: 'eo' })
    expect(getByText(/React Meetups/i)).toBeInTheDocument()
    expect(getByText(/All Meetups/i)).toBeInTheDocument()
    expect(getByText(/Add New Meetup/i)).toBeInTheDocument()
    expect(getByText(/My Favorites/i)).toBeInTheDocument()
  })
  test('renders favorites length in header', () => {
    const value = {
      meetups: [
        {
          id: 'test-id',
          title: 'Test Meetup',
          image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          address: 'Test Address',
          description: 'Test Description',
          isFavorite: true,
        },
      ],
      setMeetups: jest.fn(),
    }
    const { container } = render(
      <AppContext.Provider value={value}>
        <BrowserRouter>
          <MainNavigation />
        </BrowserRouter>
      </AppContext.Provider>
    )
    expect(container.querySelector('.badge')).toHaveTextContent('1')
  })
  test('check hide component when scroll down', async () => {
    const { container } = render(<MainNavigation />, {
      wrapper: BrowserRouter,
    })
    await fireEvent.scroll(window, { target: { scrollY: 300 } })
    expect(container.querySelector('header')).toHaveStyle('display: none')
  })
})
