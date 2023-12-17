import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import App from './App'
import { MainNavigation } from './components/MainNavigation'
import { Route } from 'react-router-dom'

// Testing the App component using enzyme like Testing utility
describe('Test App Component', () => {
  let AppComponent

  beforeEach(() => {
    AppComponent = shallow(<App />)
  })

  test('renders App without crashing', () => {
    expect(AppComponent.exists()).toBe(true)
    expect(AppComponent.find('[data-test="app"]').length).toBe(1)
  })

  test('renders the navigation component', () => {
    expect(AppComponent.find(MainNavigation).exists()).toBe(true)
  })

  test('check the app have 4 exact routes', () => {
    const AppRoutes = AppComponent.find(Route)
    expect(AppRoutes.length).toBe(4)
    expect(AppRoutes.find('Route[path="/"]').exists()).toBe(true)
    expect(AppRoutes.find('Route[path="/new-meetup"]').exists()).toBe(true)
    expect(AppRoutes.find('Route[path="/favorites"]').exists()).toBe(true)
    expect(AppRoutes.find('Route[path="*"]').exists()).toBe(true)
  })
})
