import { useOnboardingContext } from "@/hooks/use-onboarding-context";
import { store_keys } from "@/lib/constants";
import { save_to_store } from "@/lib/secure-store";
import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useForm } from 'react-hook-form';
import { z } from 'zod';


//------------ SCHEMA ---------//
const otp_verification_schema = z.object({
    email: z.email(),
    token: z.string().length(6)
})

type Payload = z.infer<typeof otp_verification_schema>



//---------- MUTATION ------------//
export const use_otp_verification_mutation = () => {
    const { role } = useOnboardingContext()


    return useMutation({
        mutationFn: async ({ email, token }: Payload) => {
            await save_to_store(store_keys.onboarding_role, role || "")
            const { data, error } = await supabase.auth.verifyOtp({
                email,
                token,
                type: "email"
            })

            if (error) throw error;
            return data;
        },
    })
}




//------------ FORM HOOK -----------//
export const useOtpVerificationForm = () => {
    const router = useRouter()
    const { email } = useOnboardingContext()

    const otp_verification_mutation = use_otp_verification_mutation()


    const form = useForm({
        resolver: zodResolver(otp_verification_schema),
        defaultValues: {
            email
        }
    })



    const handle_submit = (data: Payload) => {

        otp_verification_mutation.mutate(data, {
            onSuccess: () => {
                router.replace("/location")
            }
        })

    }


    const on_submit = form.handleSubmit(handle_submit)

    console.log(form.formState.errors, email)

    return { form, on_submit, loading: otp_verification_mutation.isPending }
}