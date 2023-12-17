import { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import { IMeetup } from '../common/types'
import { useFetch } from '../hooks/useFetch'
import { IContextType } from './AppContext.types'

const INITIAL_STATE = {
  meetups: [],
  setMeetups: () => {},
  isFirstLoading: true,
}

// Being a small application, I use the context api for state management
export const AppContext = createContext<IContextType>(INITIAL_STATE)

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [meetups, setMeetups] = useState<IMeetup[]>([])
  // I use the custom hook already developed for fetch data to obtain the initial data
  const {
    data,
    error,
    isLoading: isFirstLoading,
  } = useFetch({
    url: './data.json',
  })

  useEffect(() => {
    if (data) {
      // When I receive initial data I update the application context adding an attribute to the meetups for managing favorites
      const initialMeetups = data.map((meetup: IMeetup) => ({
        ...meetup,
        isFavorite: meetup.isFavorite ? meetup.isFavorite : false,
      }))
      setMeetups(initialMeetups)
    }
  }, [data])

  if (error) {
    return <p>Something went wrong. Please try again later.</p>
  }

  return (
    // For usability it is better to render something as soon as possible. In this case I use the loading of the fetch initial data
    <AppContext.Provider value={{ meetups, setMeetups, isFirstLoading }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

export const useAppContext = () => useContext(AppContext)
