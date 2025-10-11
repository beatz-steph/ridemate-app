import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useAuthContext } from "@/hooks/use-auth-context";
import { store_keys } from "@/lib/constants";
import { retrieve_from_store } from "@/lib/secure-store";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

    const router = useRouter()
    const { profile } = useAuthContext()


    const get_onboaring_role = async () => {
        const onboarding_role = await retrieve_from_store(store_keys.onboarding_role)
    }

    useEffect(() => {
        get_onboaring_role()
    }, [])

    const on_log_out = async () => {
        await supabase.auth.signOut()
    }


    useEffect(() => {
        if (!profile?.home_institution_id) {
            router.replace("/location")
        }
    }, [profile])

    return <SafeAreaView className="flex-1">
        <Text>Home</Text>
        <Button onPress={on_log_out}>
            <Text></Text>
        </Button>
    </SafeAreaView>
}