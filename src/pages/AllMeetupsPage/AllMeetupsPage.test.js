import { render } from '@testing-library/react'
import AllMeetupsPage from './AllMeetupsPage'
import AppProvider from '../../context/AppContext'

// Testing the AllMeetupsPage component using react-testing-library like Testing utility

describe('Test AllMeetupsPage Component', () => {
  test('renders AllMeetupsPage without crashing', () => {
    const { getByText } = render(
      <AppProvider>
        <AllMeetupsPage />
      </AppProvider>
    )
    // Check if children component, MeetupList, is rendered correctly
    expect(getByText(/All Meetups/i)).toBeInTheDocument()
    expect(getByText(/Loading.../i)).toBeInTheDocument()
  })
})
