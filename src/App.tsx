import React from 'react';
import { Home, SignIn, SignUp, Browse } from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} />
      </Routes>
    </Router>
  )
}

export default App;
