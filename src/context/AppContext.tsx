import { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import { IContextType, IMeetup } from '../types'
import { useFetch } from '../util-hooks/useFetch'

const INITIAL_STATE = {
  meetups: [],
  setMeetups: () => {},
}

const AppContext = createContext<any>(INITIAL_STATE)

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [meetups, setMeetups] = useState<IMeetup[] | null>(null)
  const { data } = useFetch({
    url: './data.json',
  })

  useEffect(() => {
    if (data) setMeetups(data)
  }, [data])

  return (
    <>
      {meetups && (
        <AppContext.Provider value={{ meetups, setMeetups }}>
          {children}
        </AppContext.Provider>
      )}
    </>
  )
}

export default AppProvider

export const useAppContext = () => useContext(AppContext)
