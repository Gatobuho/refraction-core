export interface Guest extends WorkingGuest {
  id: number
  createdAt: string
  updatedAt: string
}
// pick
export interface WorkingGuest {
  name: string
  isHead: number
  confirmed: number
  familyId?: number
}
