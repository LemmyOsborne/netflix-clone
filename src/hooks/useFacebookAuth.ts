import { FacebookAuthProvider, getAuth, signInWithPopup, User } from "firebase/auth";
import { useCallback, useState } from "react";


export function useFacebookAuth() {
    /**
    * Returns an object, which contains a logged user, async function for login by facebook, 
    * error message and boolean variable loading.
    */
    const auth = getAuth()
    const provider = new FacebookAuthProvider()
    const [facebookError, setFacebookError] = useState<string>()
    const [loading, setLoading] = useState(false)
    const [facebookUser, setFacebookUser] = useState<User | null>(JSON.parse(`${localStorage.getItem("authUser")}`))

    /**
     * This function checks if someone already logged in by default firebase with the same email
     * and, if it's true, replace facebook user info by firebase user info.
     * If both of them logged in and have different emails, facebook user will be add in local storage and exist along
     * with firebase one.
     */

    const facebookSignIn = useCallback(async () => {
        try {
            setLoading(true)
            const { user } = await signInWithPopup(auth, provider)
            if (user) {
                setLoading(false)
                setFacebookUser(user)
                localStorage.setItem("authUser", JSON.stringify(user))
            } else {
                localStorage.removeItem("authUser")
                setFacebookUser(null)
            }
        } catch (error: any) {
            setFacebookError(error.message)
        }
    }, [auth])

    return { facebookUser, facebookSignIn, facebookError, loading }
}
