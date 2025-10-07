import { Stack } from "expo-router";

export default function LocationLayout() {

    return (<Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="map" options={{ headerShown: false }} />
    </Stack>)
}