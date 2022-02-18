import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { firebase } from "./firebase/firebase";
import { FirebaseProvider } from './helpers/firebaseAuth';

ReactDOM.render(
  firebase &&
  <FirebaseProvider>
    <GlobalStyles />
    <App />
  </FirebaseProvider>,
  document.getElementById('root')
)
