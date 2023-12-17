import Enzyme from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom/extend-expect'

Enzyme.configure({ adapter: new EnzymeAdapter() })

// Mocking the Window Object for jest tests
Object.defineProperty(window, 'crypto', {
  value: {
    randomUUID: jest.fn(() => 'test-id'),
  },
})
