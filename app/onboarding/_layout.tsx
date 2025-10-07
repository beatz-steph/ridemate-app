import { OnboardingProvider } from "@/providers/onboarding-provider";
import { Stack } from "expo-router";

export default function OnboardingLayout() {

    return (
        <OnboardingProvider>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="role-selection" options={{ headerShown: false }} />
            </Stack>
        </OnboardingProvider>
    )
} ``