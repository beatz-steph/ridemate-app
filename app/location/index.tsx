import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function LocationSetup() {

    const router = useRouter()

    return <SafeAreaView className='flex-1 px-5 flex justify-between bg-white'>
        <View className="flex-1 relative items-center justify-center">
            <View>
                <Text className="max-w-[388px] mx-auto text-center text-[20px] font-light text-black">
                    We detected your closest campus as <Text className="font-bold text-[20px] text-black">University of Lagos</Text>. Would you like to set this as your location or change it
                </Text>
            </View>

        </View>
        <View className="flex flex-col gap-2.5">
            <Button size="4xl" variant="outline" onPress={() => { router.replace("/location/map") }}>
                <Text>Change</Text>
            </Button>
            <Button size="4xl" onPress={() => { router.navigate("/rider") }}>
                <Text>Set Location</Text>
            </Button>
        </View>
    </SafeAreaView>
}