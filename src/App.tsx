import React from 'react';
import { Home, SignIn, SignUp, Browse } from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { useEffect } from 'react';
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
        <Route index element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} />
      </Routes>
    </Router>
  )
}

export default App;
