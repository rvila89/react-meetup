import { render, fireEvent } from '@testing-library/react'
import Modal from './Modal'
import { act } from 'react-dom/test-utils'

// Testing the Modal component using react-testing-library like Testing utility
describe('Test Modal Component', () => {
  test('renders Modal without crashing and check handleCloseModal when click button', async () => {
    const handleCloseModal = jest.fn()
    const { getByText } = render(<Modal handleCloseModal={handleCloseModal} />)
    expect(getByText(/Meetup añadido correctamente/i)).toBeInTheDocument()

    await act(async () => {
      const continueButton = getByText(/Continuar/i)
      fireEvent.click(continueButton)
    })
  })
})
