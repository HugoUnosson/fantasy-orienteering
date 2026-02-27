import { createContext, useContext, useEffect, useState } from "react"
import type { Session, User } from "@supabase/supabase-js"
import { supabase } from "../helper/supabaseClient";

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signup: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession()     // Unpackes the data directly
      setSession(data.session)
      setUser(data.session?.user ?? null)
      setIsLoading(false)
    }

    fetchSession()

    // Listen for auth changes
    const { data: authListiner } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
      }
    )

    // Unsubscribe after the session has been updated
    return () => {
      authListiner.subscription.unsubscribe()
    }
  }, [])

  const signup = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({email, password})
    if (error) throw error
  }

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({email, password})
    if (error) throw error
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return (
    <AuthContext.Provider
      value={{ user, session, isLoading, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }
  return context
}