import { createContext, useContext } from 'react'

type role = 'rider' | 'driver' | undefined

type OnboardingContext = {
    role: role,
    set_role: (role: role) => void,
    email?: string,
    set_email: (email?: string) => void,
}

export const OnboardingContext = createContext<OnboardingContext>({
    role: 'rider',
    set_role: () => { },
    email: undefined,
    set_email: () => { },

})

export const useOnboardingContext = () => {

    const ctx = useContext(OnboardingContext)

    if (!ctx) throw new Error("useOnboardingContext must be used within OnboardingProvider");


    return ctx
}
