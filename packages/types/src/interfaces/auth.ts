export interface User {
  id: string
  email: string
  role: string
  firstName: string
  lastName: string
  avatar?: string  // Optional avatar URL
}

export interface AuthState {
  isAuthenticated: boolean
  token: string | null
  user: User | null
  login: (token: string, user: User) => void
  logout: () => void
}

export interface LoginCredentials {
  email: string
  password: string
}