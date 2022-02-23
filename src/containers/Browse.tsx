import React, { useEffect, useRef, useState } from "react";
import { ProfilesContainer } from './Profiles';
import { HeaderContainer } from './Header';
import { useFirebaseAuth, useWindowSize } from "../hooks";
import { IRow, IProfile, ISlides } from "../types/types";
import { Loading, Player, Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { getAuth, signOut } from "firebase/auth";
import { FooterContainer } from "./Footer";
import { CardContainer } from "./Card";
import Fuse from "fuse.js";



export const BrowseContainer: React.FC<{ slides: ISlides }> = ({ slides }) => {
  const user = useFirebaseAuth()
  const [profile, setProfile] = useState<IProfile>({} as IProfile)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("series")
  const [slideRows, setSlideRows] = useState<IRow[]>([])

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
    const auth = getAuth()
    signOut(auth)
      .catch((error) => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    setSlideRows((slides as any)[category])
  }, [slides, category])

  //Search with fuse js
  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows((slides as any)[category])
    }
  }, [searchTerm])

  return profile?.displayName ? (
    <>
      {loading ? <Loading photoURL={user?.photoURL} /> : <Loading.ReleaseBody />}
      <Header src={src} bg={true}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink active={category === "series" ? true : false} onClick={() => setCategory("series")}>
              Series
            </Header.TextLink>
            <Header.TextLink active={category === "films" ? true : false} onClick={() => setCategory("films")}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {user?.photoURL
            ? <Header.Menu>
              <Header.Picture photoURL={user?.photoURL} alt="Menu" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture photoURL={user?.photoURL} alt="User" />
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
          <Player>
            <Player.Video src="/videos/trailers/witcher.mp4" />
            <Player.Button>Play</Player.Button>
          </Player>
        </Header.Feature>
      </Header>

      <CardContainer slideRows={slideRows} category={category} />

      <FooterContainer />
    </>
  ) : (
    <>
      <HeaderContainer bg={false} showSignInButton={false} />
      <ProfilesContainer user={{ displayName: user?.displayName, photoURL: user?.photoURL }} setProfile={setProfile} />
    </>
  )
}
