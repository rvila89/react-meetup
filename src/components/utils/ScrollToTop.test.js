import { render } from '@testing-library/react'
import ScrollToTop from './ScrollToTop'
import { MemoryRouter } from 'react-router-dom'

// Testing the ScrollToTop component using react-testing-library like Testing utility
global.scrollTo = jest.fn()

describe('Test ScrollToTop Component', () => {
  test('renders ScrollToTop without crashing', () => {
    expect(global.scrollTo).not.toHaveBeenCalled()
    render(
      <MemoryRouter initialEntries={['/']}>
        <ScrollToTop>
          <h1>Test ScrollToTop Component</h1>
        </ScrollToTop>
      </MemoryRouter>
    )
    expect(global.scrollTo).toHaveBeenCalled()
  })
})
