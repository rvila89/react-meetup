import { render } from '@testing-library/react'
import ErrorText from './ErrorText'
import { REQUIRED } from '../../../common/utils/constants'

// Testing the ErrorText component using react-testing-library like Testing utility
describe('Test ErrorText Component', () => {
  test('renders ErrorText without crashing', () => {
    const { getByText } = render(<ErrorText text={REQUIRED} />)
    expect(getByText(REQUIRED)).toBeInTheDocument()
  })
})
