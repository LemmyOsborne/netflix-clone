import React, { useEffect, useRef, useState } from "react";
import { ProfilesContainer } from './Profiles';
import { HeaderContainer } from '../containers/Header';
import { useFirebaseAuth, useWindowSize } from "../hooks";
import { IProfile, ISlides } from "../types/types";
import { Loading } from "../components/Loading/Loading";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { getAuth, signOut } from "firebase/auth";


export const BrowseContainer: React.FC<{ slides: ISlides }> = ({ slides }) => {
  const user = useFirebaseAuth()
  const [profile, setProfile] = useState<IProfile>({} as IProfile)
  const [loading, setLoading] = useState(true)

  //If window width smaller than 1270px change the background image to small
  const { width } = useWindowSize()
  let src = "browse-page-bg"
  if (width < 1270) {
    src = "browse-page-bg-medium"
  }

  //Imitate login user after select profile to be able to show a spinner
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    setInterval(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  //Method to sign out user
  const signOutHandler = () => {
    const auth = getAuth();
    signOut(auth)
    .catch((error) => {
        console.log(error.message)
    })
}

  return profile?.displayName ? (
    <>
      {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}
      <Header src={src} bg={true}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          {user?.photoURL
            ? <Header.Menu>
              <Header.Picture src={`/images/users/${user?.photoURL}.png`} alt="Menu" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={`/images/users/${user?.photoURL}.png`} alt="User" />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={signOutHandler}>Sign Out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Menu>
            : null
          }

        </Header.Frame>
        <Header.Feature>
          <Header.Title>Watch Witcher Now</Header.Title>
          <Header.Text>
            Geralt of Rivia is a witcher, a mutant with special powers who kills monsters for money.
            The land is in a state of turmoil, due to the empire of Nilfgaard seeking to enlarge its territory.
            Among the refugees of this struggle is Cirilla, the Princess of Cintra, one of Nilfgaard's victims.
            She and Geralt share a destiny. Meanwhile, another figure looms large in Geralt's adventures: Yennefer, a sorceress.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <>
      <HeaderContainer bg={false} />
      <ProfilesContainer user={{ displayName: user?.displayName, photoURL: user?.photoURL }} setProfile={setProfile} />
    </>
  )
}
