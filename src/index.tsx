import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { firebase } from "./firebase/firebase";
import { FirebaseContext } from "./context/firebase"


ReactDOM.render(
  <FirebaseContext.Provider value={firebase}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
)
