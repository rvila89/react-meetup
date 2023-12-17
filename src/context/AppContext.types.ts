import { IMeetup } from '../common/types'

export interface IContextType {
  meetups: IMeetup[]
  setMeetups: React.Dispatch<React.SetStateAction<IMeetup[]>>
  isFirstLoading: boolean
}
