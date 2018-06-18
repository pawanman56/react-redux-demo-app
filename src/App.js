import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentDidMount() {
    const firebase = require('firebase');

    const config = {
      apiKey: 'AIzaSyAJJyI6t8hOTlso-Qhqhp2lleyOpencTFw',
      authDomain: 'manager-b6670.firebaseapp.com',
      databaseURL: 'https://manager-b6670.firebaseio.com',
      projectId: 'manager-b6670',
      storageBucket: '',
      messagingSenderId: '1028610933637'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
