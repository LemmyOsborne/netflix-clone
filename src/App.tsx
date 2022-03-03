import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { RequireAuth, WithRedirectAuthUser } from './helpers/routes';
import { useFirebaseAuth } from './hooks';
const Home = lazy(() => import("./pages/Home"))
const Browse = lazy(() => import("./pages/Browse"))
const SignIn = lazy(() => import("./pages/SignIn"))
const SignUp = lazy(() => import("./pages/SignUp"))
const NotFoundPage = lazy(() => import("./pages/NotFound"))
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
      <Suspense fallback={""}>
        <Routes>
          <Route path={ROUTES.HOME} element={<WithRedirectAuthUser user={user}><Home /></WithRedirectAuthUser>} />
          <Route path={ROUTES.SIGNIN} element={<WithRedirectAuthUser user={user}><SignIn /></WithRedirectAuthUser>} />
          <Route path={ROUTES.SIGNUP} element={<WithRedirectAuthUser user={user}><SignUp /></WithRedirectAuthUser>} />
          <Route path={ROUTES.BROWSE} element={<RequireAuth user={user}><Browse /></RequireAuth>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
