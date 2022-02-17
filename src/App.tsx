import React, { useEffect } from 'react';
import { Home, SignIn, SignUp, Browse } from './pages';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { useFirebaseAuth } from './helpers/firebaseAuth';
// import { seedDataBase } from "./seed";
// import { db } from './firebase/firebase';


const App: React.FC = () => {

  //Comment call seedDataBase function after call it once for write data in Firestore sake

  // useEffect(() => {
  //    seedDataBase(db)
  // })

  const user = useFirebaseAuth()

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.BROWSE} element={user ? <Browse /> : <Navigate to={ROUTES.HOME} />} />
      </Routes>
    </Router>
  )
}

export default App;
