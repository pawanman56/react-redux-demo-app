import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Router from './Router';
import reducers from './reducers';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
