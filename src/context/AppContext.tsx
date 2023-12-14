import { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import { IMeetup } from '../common/types'
import { useFetch } from '../hooks/useFetch'
import { IContextType } from './AppContext.types'

const INITIAL_STATE = {
  meetups: [],
  setMeetups: () => {},
}

// Being a small application, I use the context api for state management
const AppContext = createContext<IContextType>(INITIAL_STATE)

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [meetups, setMeetups] = useState<IMeetup[]>([])
  // I use the custom hook already developed for fetch data to obtain the initial data
  const { data } = useFetch({
    url: './data.json',
  })

  useEffect(() => {
    if (data) {
      // When I receive initial data I update the application context adding an attribute to the meetups for managing favorites
      const initialMeetups = data.map((meetup: IMeetup) => ({
        ...meetup,
        isFavorite: false,
      }))
      setMeetups(initialMeetups)
    }
  }, [data])

  return (
    <>
      {meetups.length && (
        <AppContext.Provider value={{ meetups, setMeetups }}>
          {children}
        </AppContext.Provider>
      )}
    </>
  )
}

export default AppProvider

export const useAppContext = () => useContext(AppContext)
