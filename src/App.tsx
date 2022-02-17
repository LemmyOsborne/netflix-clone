import React from 'react';
import { Home, SignIn, SignUp, Browse } from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { RequireAuth, WithRedirectAuthUser } from './helpers/routes';
// import { seedDataBase } from "./seed";
// import { db } from './firebase/firebase';


const App: React.FC = () => {

  //Comment call seedDataBase function after call it once for write data in Firestore sake

  // useEffect(() => {
  //    seedDataBase(db)
  // })


  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<WithRedirectAuthUser><SignIn /></WithRedirectAuthUser>} />
        <Route path={ROUTES.SIGNUP} element={<WithRedirectAuthUser><SignUp /></WithRedirectAuthUser>} />
        <Route path={ROUTES.BROWSE} element={<RequireAuth><Browse /></RequireAuth>} />
      </Routes>
    </Router>
  )
}

export default App;
