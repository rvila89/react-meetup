import { render } from '@testing-library/react'
import Card from './Card'

// Testing the Card component using react-testing-library like Testing utility
describe('Test Card Component', () => {
  test('renders Card without crashing', () => {
    const { getByText } = render(
      <Card>
        <h1>Test Card Component</h1>
      </Card>
    )
    expect(getByText(/Test Card Component/i)).toBeInTheDocument()
  })
})
