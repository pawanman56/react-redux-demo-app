import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/index';
import {
  Button,
  Card,
  CardSection,
  Input
} from './common/index';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  RenderError() {
    if (this.props.error) {
      return(
        <View style={{ backgroundColor: '#FFF' }}>
          <Text style={styles.textErrorStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.RenderError()}

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textErrorStyle: {
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
    color: 'red',
    margin: 7,
  },
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
