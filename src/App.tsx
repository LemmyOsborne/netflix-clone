import React from 'react';
import { Home, SignIn, SignUp, Browse } from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { RequireAuth, WithRedirectAuthUser } from './helpers/routes';
import { useFirebaseAuth } from './hooks';
// import { seedDataBase } from "./seed";
// import { db } from './firebase/firebase';


const App: React.FC = () => {

  //Comment call seedDataBase function after call it once for write data in Firestore sake

  // useEffect(() => {
  //    seedDataBase(db)
  // }, [])

  const user = useFirebaseAuth()

  return (

    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<WithRedirectAuthUser user={user}><Home /></WithRedirectAuthUser>} />
        <Route path={ROUTES.SIGNIN} element={<WithRedirectAuthUser user={user}><SignIn /></WithRedirectAuthUser>} />
        <Route path={ROUTES.SIGNUP} element={<WithRedirectAuthUser user={user}><SignUp /></WithRedirectAuthUser>} />
        <Route path={ROUTES.BROWSE} element={<RequireAuth user={user}><Browse /></RequireAuth>} />
      </Routes>
    </Router>
  )
}

export default App;
