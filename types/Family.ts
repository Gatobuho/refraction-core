import type { Guest, WorkingGuest } from './Guest'

export interface Family extends WorkingFamily {
  id: number
  createdAt: string
  updatedAt: string
  uuid: string
  guests: Guest[]
}

export interface WorkingFamily {
  name: string
  songTitle: string
  comments: string
  group: string
  guests?: Guest[] | WorkingGuest[]
}
