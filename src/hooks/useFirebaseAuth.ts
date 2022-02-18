import { useContext } from "react"
import { FirebaseAuthContext } from "../context/firebase-auth"

//Hook which return a user from firebase

export function useFirebaseAuth() {
    const context = useContext(FirebaseAuthContext)
    if (context === undefined) {
      throw new Error(
        "useFirebaseAuth must be used within a FirebaseAuthProvider"
      )
    }
    return context.user
  }