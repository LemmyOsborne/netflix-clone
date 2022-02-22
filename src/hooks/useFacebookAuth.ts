import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { useState } from "react"


export function useFacebookAuth() {
    /**
    * Returns an object, which contains async function for login by facebook, 
    * error message and boolean variable loading.
    */
    const auth = getAuth()
    const provider = new FacebookAuthProvider()
    const [facebookError, setFacebookError] = useState<string>()
    const [loading, setLoading] = useState(false)
    
    const facebookSignIn = async () => {
        try {
            setLoading(true)
            const result = await signInWithPopup(auth, provider)
            if (result) {
                localStorage.setItem("authUser", JSON.stringify(result.user))
                setLoading(false)
            } else {
                localStorage.removeItem("authUser")
            }
        } catch (error: any) {
            setFacebookError(error.message)
        }
    }

    return { facebookSignIn, facebookError, loading }
}
