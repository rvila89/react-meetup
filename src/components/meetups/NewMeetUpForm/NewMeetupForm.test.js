import { fireEvent, render } from '@testing-library/react'
import NewMeetupForm from './NewMeetupForm'
import { BrowserRouter } from 'react-router-dom'
import user from '@testing-library/user-event'
import { AppContext } from '../../../context/AppContext'
import * as constants from '../../../common/utils/constants'
import { act } from 'react-dom/test-utils'

const customRender = (ui, setMeetupsMock) => {
  const ProviderWrapper = ({ children }) => {
    const value = {
      meetups: [],
      setMeetups: setMeetupsMock,
    }
    return (
      <AppContext.Provider value={value}>
        <BrowserRouter>{children}</BrowserRouter>
      </AppContext.Provider>
    )
  }
  return render(ui, { wrapper: ProviderWrapper })
}

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

// Testing the NewMeetUpForm component using react-testing-library like Testing utility
describe('Test NewMeetUpForm Component', () => {
  test('should render the basic fields', () => {
    const { getByText, getByRole } = render(<NewMeetupForm />, {
      wrapper: BrowserRouter,
    })
    expect(getByText(/Meetup Title/i)).toBeInTheDocument()
    expect(getByText(/Address/i)).toBeInTheDocument()
    expect(getByText(/Description/i)).toBeInTheDocument()
    expect(getByText(/Image/i)).toBeInTheDocument()
    expect(getByRole('button', { name: /Add Meetup/i })).toBeInTheDocument()
  })
  test('check NewMeetUpForm validations', async () => {
    const { getAllByText, getByRole } = render(<NewMeetupForm />, {
      wrapper: BrowserRouter,
    })
    await act(async () => {
      const submitButton = getByRole('button', { name: /Add Meetup/i })
      fireEvent.submit(submitButton)
    })

    expect(getAllByText(constants.REQUIRED).length).toBe(4)
  })
  test('integration test. Add new meetup. Check open modal, check update context, check navigate to home page', async () => {
    const setMeetupsMock = jest.fn()
    const { getByText, getByRole } = customRender(
      <NewMeetupForm />,
      setMeetupsMock
    )

    await act(async () => {
      const meetupTitle = getByRole('textbox', { name: /Meetup Title/i })
      user.type(meetupTitle, 'White House')
      const meetupAddress = getByRole('textbox', { name: /Address/i })
      user.type(
        meetupAddress,
        '1450 Pennsylvania Avenue NW, Washington, DC 20004, EE. UU'
      )
      const meetupDescription = getByRole('textbox', { name: /Description/i })
      user.type(
        meetupDescription,
        'The White House is the official residence and workplace of the president of the United States'
      )
      const meetupImage = getByRole('textbox', { name: /Meetup Image/i })
      user.type(
        meetupImage,
        'https://lh3.googleusercontent.com/p/AF1QipNp5xLlWB6XdmXHiiUDmPacAso7CLvdcLy6Jp4o=s1360-w1360-h1020'
      )
    })

    await act(async () => {
      const submitButton = getByRole('button', { name: /Add Meetup/i })
      fireEvent.submit(submitButton)
    })

    expect(window.crypto.randomUUID).toHaveBeenCalledTimes(1)
    expect(getByText(/Meetup añadido correctamente/i)).toBeInTheDocument()
    expect(setMeetupsMock).toHaveBeenCalledTimes(1)

    await act(async () => {
      const continueButton = getByRole('button', { name: /Continuar/i })
      fireEvent.click(continueButton)
    })

    expect(mockedUsedNavigate).toBeCalled()
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/')
  })
})
