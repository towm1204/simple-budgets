import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { BrowserRouter } from 'react-router-dom';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAasGvJ7Oj-tpuxeGqORg7kWZEYqtkD2RI",
  authDomain: "simple-budget-711ba.firebaseapp.com",
  databaseURL: "https://simple-budget-711ba.firebaseio.com",
  projectId: "simple-budget-711ba",
  storageBucket: "simple-budget-711ba.appspot.com",
  messagingSenderId: "599792837193",
  appId: "1:599792837193:web:52bc783427d8f927d75598",
  measurementId: "G-K9Q7S5RDBD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
