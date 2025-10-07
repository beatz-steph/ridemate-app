import { SelectCard } from "@/components/compound/select-card";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useOnboardingContext } from "@/hooks/use-onboarding-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const rider_image = require('@/assets/onboarding/rider.png');
const rider_alt_image = require('@/assets/onboarding/rider-alt.png');


const driver_image = require('@/assets/onboarding/driver.png');
const driver_alt_image = require('@/assets/onboarding/driver-alt.png');


export default function RoleSelection() {
    const { role, set_role } = useOnboardingContext()
    const router = useRouter();


    return (
        <SafeAreaView className='flex-1 px-5 flex justify-between bg-white'>
            <View className='flex-1'>
                <Text className="text-[25px] font-medium text-black text-center mt-16 mb-24">
                    How would you like to use RideMate?
                </Text>

                <View className="w-full flex-row gap-5 h-[185px] flex-1">
                    <SelectCard
                        title="Rider"
                        image={<Image source={rider_image} contentFit="contain" style={{ aspectRatio: 57 / 97.25, height: 97.5 }} />}
                        alt_image={<Image source={rider_alt_image} contentFit="contain" style={{ aspectRatio: 57 / 97.25, height: 97.5 }} />}
                        active={role === "rider"}
                        on_press={() => set_role("rider")}
                    />

                    <SelectCard
                        title="Driver"
                        image={<Image
                            source={driver_image}
                            contentFit="contain"
                            style={{ aspectRatio: 110.35 / 56, height: 56 }}
                        />}
                        alt_image={<Image source={driver_alt_image} contentFit="contain" style={{ aspectRatio: 110.35 / 56, height: 56 }} />}
                        active={role === "driver"}
                        on_press={() => set_role("driver")}
                    />
                </View>
            </View>
            <Button onPress={() => { router.navigate("/auth") }}>
                <Text>Continue</Text>
            </Button>

        </SafeAreaView>
    )
}