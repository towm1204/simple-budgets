import React, { Component } from 'react'; //import React Component
import DashBoard from './DashBoard';
import AboutPage from './AboutPage';

import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { Route, Switch } from 'react-router-dom';


import 'whatwg-fetch';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets: {},
      expenses:{},
      accounts:{},
      stats:{},
      hist:[],
      settingsShow:false,
      loading:true
    }
  }

  uiConfig = {
    signInOptions:[
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName:true
      },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    credentialHelper: 'none',
    signInFlow:'popup',
    callbacks: {
      signInSuccessWithAuthResult: (authResult) => {
        if(authResult.additionalUserInfo.isNewUser) {
          this.setState({isNewUser:true, settingsShow:authResult.additionalUserInfo.isNewUser});
        }
      }
    }
  }

  componentDidMount() {
    this.authUnregFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
        if(firebaseUser) {
          let userRef = firebase.database().ref('users').child(firebaseUser.uid);
          if (this.state.isNewUser) {
            userRef.set (
              {
                budgets: "",
                expenses:"",
                accounts:"",
                hist:"",
                stats:{
                  accounttotal: {name:"Account Total", data:0.00},
                  budgetspent: {name:"Budget Spent", data:0.00},
                  remainingbudget: {name:"Remaining Budget", data:0.00},
                  remainingexpense: {name:"Remaining Expense", data:0.00},
                  pendingincome: {name:"Pending Income", data:0.00},
                  netsavings: {name:"Net Savings", data:0.00}
                }
              })
            .catch(err => console.log(err));
          }
          userRef.on('value', (snapshot) => {
            let userValue = snapshot.val();
            this.setState({loading:false, user:firebaseUser, stats:userValue.stats, budgets:userValue.budgets, accounts:userValue.accounts, expenses:userValue.expenses, hist:userValue.hist})
          });
        } else {
          this.setState({user:null, loading:false});
        }
    })
  }

  componentWillUnmount() {
    this.authUnregFunc()
  }

  toggleModal = (event) => {
    this.setState((currentState) => {
      let result= {settingsShow:!currentState.settingsShow}
      return result;
    })
  }

  render() {
    if(this.state.loading) {
      return (
        <div className="text-center">
          <i className="fa fa-spinner fa-spin fa-3x" style={{color: "#2d5986"}} aria-label="Connecting..."></i>
        </div>
      );
    }
    if(!this.state.user) { //if logged out, show signup form
      return (<StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />);
    }


    return (
      <Switch>
        <Route exact path='/' render={(routerProps) => {
          return (<DashBoard s={this.state} toggleModal={this.toggleModal} />);
        }} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
    );
  }

}
