import { render } from '@testing-library/react'
import NewMeetupsPage from './NewMeetupsPage'
import { BrowserRouter } from 'react-router-dom'

// Testing the NewMeetupsPage component using react-testing-library like Testing utility
describe('Test NewMeetupsPage Component', () => {
  test('renders NewMeetupsPage without crashing', () => {
    const { getByText } = render(<NewMeetupsPage />, {
      wrapper: BrowserRouter,
    })
    expect(getByText(/Add New Meetup/i)).toBeInTheDocument()
  })
})
