import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";

type Payload = { email: string, token: string }

export const use_otp_verification_mutation = () => {

    return useMutation({
        mutationFn: async ({ email, token }: Payload) => {
            const { data, error } = await supabase.auth.verifyOtp({
                email,
                token,
                type: "email"
            })

            if (error) throw error;
            return data;
        },
        onSuccess: () => { },
        onError: () => { }
    })
}