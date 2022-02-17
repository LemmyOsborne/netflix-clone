import { useContext } from "react"
import { FirebaseAuthContext } from "../../context/FirebaseAuthContext"

export function useFirebaseAuth() {
    const context = useContext(FirebaseAuthContext)
    if (context === undefined) {
      throw new Error(
        "useFirebaseAuth must be used within a FirebaseAuthProvider"
      )
    }
    return context.user
  }