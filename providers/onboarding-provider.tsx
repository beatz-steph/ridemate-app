import { OnboardingContext } from "@/hooks/use-onboarding-context"
import { ReactNode, useState } from "react"

export function OnboardingProvider({ children }: { children: ReactNode }) {

    const [role, set_role] = useState<'rider' | 'driver'>('rider')
    const [email, set_email] = useState<string | undefined>(undefined)

    return <OnboardingContext.Provider value={{ role, set_role, email, set_email }}>
        {children}
    </OnboardingContext.Provider>

}