export type Message = {
  id: number
  sender: 'user' | Persona
  content: string
  time: string
}

export type Persona = 'hitesh' | 'piyush'

export type PersonaInfo = {
  name: string
  profileImg: string
}

export const PERSONA_DETAILS: Record<Persona, PersonaInfo> = {
  hitesh: {
    name: 'Hitesh Choudhary',
    profileImg: "https://avatars.githubusercontent.com/u/11613311?v=4",
  },
  piyush: {
    name: 'Piyush Garg',
    profileImg: "https://avatars.githubusercontent.com/u/44976328?v=4",
  },
}
