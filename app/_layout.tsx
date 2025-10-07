import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

import { SplashScreenController } from '@/components/splash-screen-controller';
import '@/global.css';
import { useAuthContext } from '@/hooks/use-auth-context';
import AuthProvider from '@/providers/auth-provider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: 'index',
};



function RootNavigator() {
  const { isLoggedIn } = useAuthContext()

  console.debug(isLoggedIn)
  return (
    <Stack>
      {/* <Stack.Protected guard={isLoggedIn}> */}
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack.Protected>
      {/* </Stack.Protected> */}
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name='onboarding' options={{ headerShown: false }} />
        <Stack.Screen name='auth' options={{ headerShown: false }} />
        <Stack.Screen name='location' options={{ headerShown: false }} />
      </Stack.Protected>

    </Stack>
  )
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <SplashScreenController />
          <RootNavigator />
          <PortalHost />
          <StatusBar style="auto" />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>

  );
}
