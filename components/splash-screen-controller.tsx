import { useAuthContext } from '@/hooks/use-auth-context'
import { SplashScreen } from 'expo-router'

// SplashScreen.preventAutoHideAsync()

export function SplashScreenController() {
  const { isLoading } = useAuthContext()

  console.debug({ isLoading })

  if (!isLoading) {
    SplashScreen.hideAsync()
  }

  return null
}