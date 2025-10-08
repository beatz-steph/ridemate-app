import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";

type Payload = { email: string }

export const use_otp_request_mutation = () => {

    return useMutation({
        mutationFn: async ({ email }: Payload) => {
            const { data, error } = await supabase.auth.signInWithOtp({
                email: email,
            })

            if (error) throw error;
            return data;
        },
        onSuccess: () => { },
        onError: () => { }
    })

}