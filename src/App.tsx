import { AllMeetupsPage } from './pages/AllMeetupsPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { NewMeetupsPage } from './pages/NewMeetupsPage'
import MainNavigation from './components/MainNavigation/MainNavigation'
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div data-test='app'>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/new-meetup' element={<NewMeetupsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
