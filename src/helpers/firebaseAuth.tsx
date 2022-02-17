import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import React, { createContext, useContext } from "react";

type ContextState = { user: User | null }

const FirebaseAuthContext = createContext<ContextState | undefined>(undefined)

const FirebaseAuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null)
  const value = { user }

  React.useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, setUser)
    return unsubscribe
  }, [])

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

function useFirebaseAuth() {
  const context = useContext(FirebaseAuthContext)
  if (context === undefined) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    )
  }
  return context.user
}

export { FirebaseAuthProvider, useFirebaseAuth }