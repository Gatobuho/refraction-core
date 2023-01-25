export enum Role {
  ADMIN,
  USER,
}

export interface User {
  id: string
  name?: string
  email?: string
  verifiedAt?: Date
  role?: Role
  createdAt: Date
  updatedAt: Date
}
