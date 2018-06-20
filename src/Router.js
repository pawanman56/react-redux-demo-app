import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';

export default RouterComponent = () => {
  return(
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>
    </Router>
  ); 
};