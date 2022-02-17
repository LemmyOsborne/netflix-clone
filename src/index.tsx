import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { firebase } from "./firebase/firebase";
import { FirebaseAuthProvider } from './helpers/firebaseAuth';

ReactDOM.render(
  firebase &&
  <FirebaseAuthProvider>
    <GlobalStyles />
    <App />
  </FirebaseAuthProvider>,
  document.getElementById('root')
)
