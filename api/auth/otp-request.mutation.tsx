import { useOnboardingContext } from "@/hooks/use-onboarding-context";
import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useForm } from 'react-hook-form';
import { z } from 'zod';


//------------ SCHEMA ---------//
const otp_verification_schema = z.object({
    email: z.email().toLowerCase(),
})

type Payload = z.infer<typeof otp_verification_schema>



//------------ MUTATION ---------//
export const use_otp_request_mutation = () => {
    const mutation = useMutation({
        mutationFn: async ({ email }: Payload) => {
            const { data, error } = await supabase.auth.signInWithOtp({
                email: email,
            })

            if (error) throw error;
            return data;
        },
    });

    return mutation
}


//------------- FORM HOOK ----------//
export const useOtpRequestForm = () => {
    const router = useRouter()
    const { set_email } = useOnboardingContext()
    const otp_request_mutation = use_otp_request_mutation()



    const form = useForm({
        resolver: zodResolver(otp_verification_schema)
    })


    const handle_submit = (data: Payload) => {
        otp_request_mutation.mutate(data, {
            onSuccess: () => {
                set_email(data.email)
                router.navigate("/auth/verify")
            }
        })
    }

    const on_submit = form.handleSubmit(handle_submit)


    return { form, on_submit, loading: otp_request_mutation.isPending }
}