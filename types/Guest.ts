export type Guest = Omit<WorkingGuest, 'familyId'>
// pick
export interface WorkingGuest {
  name: string
  isHead: number
  confirmed: number
  familyId: number
}
