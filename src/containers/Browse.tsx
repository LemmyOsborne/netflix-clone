import React, { useEffect, useState } from "react";
import { ProfilesContainer } from './Profiles';
import { HeaderContainer } from '../containers/Header';
import { useFirebaseAuth } from "../hooks";
import { IProfile } from "../types/types";
import { Loading } from "../components/Loading/Loading";



export const BrowseContainer: React.FC = () => {
  const user = useFirebaseAuth()
  const [profile, setProfile] = useState<IProfile>({} as IProfile)
  const [loading, setLoading] = useState(true)
  console.log("profile: ", profile)
  //Imitate uploading a profile image to the page from server
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return profile?.displayName ? (
    <>
      {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}
      <HeaderContainer bg='true' />
      <ProfilesContainer user={{ displayName: user?.displayName, photoURL: user?.photoURL }} setProfile={setProfile} />
    </>
  ) : (
    <>
      <HeaderContainer bg='true' />
      <ProfilesContainer user={{ displayName: user?.displayName, photoURL: user?.photoURL }} setProfile={setProfile} />
    </>
  )
}
