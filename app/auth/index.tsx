import { useOtpRequestForm } from "@/api/auth/otp-request.mutation";
import { FormInput } from "@/components/form/input";
import { Button, } from "@/components/ui/button";
import { Icon } from '@/components/ui/icon';
import { Text } from "@/components/ui/text";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Loader2 } from 'lucide-react-native';
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const back_arrow_image = require("@/assets/images/general/arrow_left.png")

const google_image = require("@/assets/images/general/google.png")

export default function Auth() {

    const router = useRouter()

    const { form, on_submit, loading, } = useOtpRequestForm()


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
            <View className="flex flex-col gap-8" >
                <View>
                    <FormInput name="email" form={form} textContentType="emailAddress" placeholder="Email address" loading={loading} />
                </View>

                <Text className="w-full text-center text-[20px] text-black font-light">or</Text>
                <Button disabled={loading} size="4xl" variant="secondary" onPress={() => { }}>
                    <Image source={google_image} style={{ width: 25, height: 25 }} />

                    <Text >Sign up with Google</Text>
                </Button>
            </View>
        </View>
        <Button disabled={loading} size="4xl" onPress={on_submit}>
            {loading ? <View className="pointer-events-none animate-spin">
                <Icon as={Loader2} className="text-white" size={20} />
            </View> :
                <Text>Verify</Text>}
        </Button>
    </SafeAreaView>
}