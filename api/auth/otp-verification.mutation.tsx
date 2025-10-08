import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from 'react-hook-form';
import { z } from 'zod';


//------------ SCHEMA ---------//
const otp_verification_schema = z.object({
    email: z.email(),
    token: z.string().length(4)
})

type Payload = z.infer<typeof otp_verification_schema>



//---------- MUTATION ------------//
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
    })
}




//------------ FORM HOOK -----------//
export const useOtpVerificationForm = () => {

    const form = useForm({
        resolver: zodResolver(otp_verification_schema)
    })


    const otp_verification_mutation = use_otp_verification_mutation()

    const handle_submit = (data: Payload) => {

        otp_verification_mutation.mutate(data,)

    }


    const on_submit = form.handleSubmit(handle_submit)

    return { form, on_submit, loading: otp_verification_mutation.isPending }
}