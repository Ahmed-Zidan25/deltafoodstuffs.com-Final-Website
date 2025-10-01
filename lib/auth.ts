// Simple authentication utilities for admin login
export interface User {
  id: string
  email: string
  role: "admin" | "user"
}

// In a real app, this would be stored in a database
const ADMIN_CREDENTIALS = {
  email: "admin@deltafoodstuffs.com",
  password: "Zidan4321", // In production, this should be hashed
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  // Simple authentication check
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    return {
      id: "1",
      email: email,
      role: "admin",
    }
  }
  return null
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem("auth-token") !== null
}

export function getUser(): User | null {
  if (typeof window === "undefined") return null
  const userStr = localStorage.getItem("auth-user")
  return userStr ? JSON.parse(userStr) : null
}

export function setAuthData(user: User, token: string) {
  if (typeof window === "undefined") return
  localStorage.setItem("auth-token", token)
  localStorage.setItem("auth-user", JSON.stringify(user))
}

export function clearAuthData() {
  if (typeof window === "undefined") return
  localStorage.removeItem("auth-token")
  localStorage.removeItem("auth-user")
}
