import { AllMeetupsPage } from './pages/AllMeetupsPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { NewMeetupsPage } from './pages/NewMeetupsPage'
import MainNavigation from './components/MainNavigation/MainNavigation'
import { Navigate, Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div data-test='app'>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/new-meetup' element={<NewMeetupsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
