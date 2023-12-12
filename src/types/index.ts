export interface IMeetup {
  id: string
  title: string
  address: string
  description: string
  image: string
}

export interface IContextType {
  meetups: IMeetup[]
  setMeetups: React.Dispatch<React.SetStateAction<IMeetup[]>>
}
