import React, { Component } from 'react';
import {
  Button,
  Card,
  CardSection,
  Input
} from './common/index';

export default class LoginForm extends Component {
  render() {
    return(
      <Card>
        <CardSection>
          <Input />
        </CardSection>

        <CardSection>
          <Input />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}
