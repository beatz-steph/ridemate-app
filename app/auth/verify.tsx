import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const back_arrow_image = require("@/assets/images/general/arrow_left.png")



export default function OTPVerification() {
    const router = useRouter()


    return <SafeAreaView className='flex-1 px-5 flex justify-between bg-white'>
        <View className="flex-1 relative">
            <Pressable onPress={() => { router.back() }} className="absolute top-5 left-0">
                <Image source={back_arrow_image} style={{ width: 30, height: 30 }} />
            </Pressable>
            <Text className="text-[25px] font-medium text-black text-center mt-16 mb-3">
                Verify your Email
            </Text>
            <Text className="text-[20px] font-light text-black text-center max-w-[388px] mb-[100px]">
                We’ve sent a 4-digit code to your email. Enter it below to continue.
            </Text>
            <View className="w-[325px] mx-auto mb-8">
                <Input />
            </View>
            <View className="flex flex-row items-center mx-auto gap-2">
                <Text className="text-[20px] font-light text-black text-center">
                    Didn’t get the code?
                </Text>
                <Pressable><Text className="underline text-[20px] font-light text-black text-center">Resend in 45s</Text></Pressable>
            </View>
        </View>

        <Button onPress={() => { router.replace("/location") }}>
            <Text>Verify</Text>
        </Button>
    </SafeAreaView>
}