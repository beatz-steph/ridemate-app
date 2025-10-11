import { Database } from '@/types/supabase'
import { Session } from '@supabase/supabase-js'
import { createContext, useContext } from 'react'

export type AuthData = {
  session?: Session | null
  profile?: Database["public"]["Tables"]["profiles"]["Row"] | null
  isLoading: boolean
  isLoggedIn: boolean
}

export const AuthContext = createContext<AuthData>({
  session: undefined,
  profile: undefined,
  isLoading: true,
  isLoggedIn: false,
})

export const useAuthContext = () => useContext(AuthContext)