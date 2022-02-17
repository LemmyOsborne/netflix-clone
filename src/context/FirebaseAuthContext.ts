import { User } from "firebase/auth";
import { createContext } from "react";

export const FirebaseAuthContext = createContext<{ user: User | null } | undefined>(undefined)
