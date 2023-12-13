import { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import { IMeetup } from '../common/types'
import { useFetch } from '../hooks/useFetch'
import { IContextType } from './AppContext.types'

const INITIAL_STATE = {
  meetups: [],
  setMeetups: () => {},
}

const AppContext = createContext<IContextType>(INITIAL_STATE)

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [meetups, setMeetups] = useState<IMeetup[]>([])
  const { data } = useFetch({
    url: './data.json',
  })

  useEffect(() => {
    if (data) setMeetups(data)
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
