import React, { useEffect, useState } from "react";
import { SelectProfileContainer } from '../containers/SelectProfile';
import { HeaderContainer } from '../containers/Header';
import { useFirebaseAuth } from "../hooks";
import { User } from "firebase/auth";

export interface IProfile {
  displayName: string | null | undefined
  photoURL: string | null | undefined
}

export const BrowseContainer: React.FC = () => {
    const user = useFirebaseAuth()
    const [profile, setProfile] = useState<IProfile>({} as IProfile)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      console.log("profile: ", profile)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }, [profile.displayName])
    
    return (
        <>
            <HeaderContainer bg='true' />
            <SelectProfileContainer user={{displayName: user?.displayName, photoURL: user?.photoURL}} setProfile={setProfile}/>
        </>
    )
}
