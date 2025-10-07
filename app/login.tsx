import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">Ride smarter, together</ThemedText>
        <Button>
          <Text>Login</Text>
        </Button>
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})