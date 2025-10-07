import { Button, } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const back_arrow_image = require("@/assets/images/general/arrow_left.png")

const google_image = require("@/assets/images/general/google.png")

export default function Auth() {

    const router = useRouter()

    return <SafeAreaView className='flex-1 px-5 flex justify-between bg-white'>
        <View className="flex-1 relative">
            <Pressable onPress={() => { router.back() }} className="absolute top-5 left-0">
                <Image source={back_arrow_image} style={{ width: 30, height: 30 }} />
            </Pressable>
            <Text className="text-[25px] font-medium text-black text-center mt-16 mb-3">
                Enter your Email Address
            </Text>
            <Text className="text-[20px] font-light text-black text-center max-w-[388px] mb-[100px]">
                We’ll send you a one-time code to verify it’s really you.
            </Text>
            <View >
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>

                    <Input textContentType="emailAddress" placeholder="Email address" className="" />
                </KeyboardAvoidingView>

                <Text className="w-full text-center text-[20px] text-black font-light">or</Text>
                <Button onPress={() => { }}>
                    <Image source={google_image} style={{ width: 25, height: 25 }} />

                    <Text className="">Sign up with Google</Text>
                </Button>
            </View>
        </View>
        <Button onPress={() => { router.navigate("/auth/verify") }}>
            <Text>Verify</Text>
        </Button>
    </SafeAreaView>
}