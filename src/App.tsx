import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
/*
For this application, lazy loading would not be necessary at the moment, but if it were necessary, the idea would be to load the 2 large lists of the application, postponing the loading of the component code until it is processed for the first time.
*/

// const AllMeetupsPage = lazy(() =>
//   import('./pages/AllMeetupsPage').then((module) => ({
//     default: module.AllMeetupsPage,
//   }))
// )
// const FavoritesPage = lazy(() =>
//   import('./pages/FavoritesPage').then((module) => ({
//     default: module.FavoritesPage,
//   }))
// )
import { NewMeetupsPage } from './pages/NewMeetupsPage'
import MainNavigation from './components/MainNavigation/MainNavigation'
import ScrollToTop from './components/utils/ScrollToTop'
import Loader from './components/ui/Loader/Loader'
import { FavoritesPage } from './pages/FavoritesPage'
import { AllMeetupsPage } from './pages/AllMeetupsPage'

const App: React.FC = () => {
  return (
    <div data-test='app'>
      <Suspense fallback={<Loader />}>
        <MainNavigation />
        <main>
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<AllMeetupsPage />} />
              <Route path='/new-meetup' element={<NewMeetupsPage />} />
              <Route path='/favorites' element={<FavoritesPage />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </ScrollToTop>
        </main>
      </Suspense>
    </div>
  )
}

export default App
