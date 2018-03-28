//using react component.
import React, { Component } from 'react';
//provide is the bridge between react and redux
import { Provider } from 'react-redux';
//create store is the store handline and applyMiddleware is for redux thunk
import { createStore, applyMiddleware } from 'redux';
//using the google firebase which will provide the api to authenicate database
import firebase from 'firebase';

//async handling
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

//import Router from './Router';

class App extends Component {
  //This will call first before rendering rest of the components
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCurpmAk-fLj5_iMiMog6Kd-2bYkNdOdPg',
    authDomain: 'manager-24a61.firebaseapp.com',
    databaseURL: 'https://manager-24a61.firebaseio.com',
    projectId: 'manager-24a61',
    storageBucket: 'manager-24a61.appspot.com',
    messagingSenderId: '939467412833'
  };

  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    //const store = createStore(reducers);
    return (
      <Provider store={store}>

      <LoginForm/>
      </Provider>
    );
  }
}

export default App;
