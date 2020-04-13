import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import React, {Component} from 'react';
export default class GoogleSign extends Component{
  render() {
    return(
  <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPressIn={this._signIn}
    disabled={this.state.isSigninInProgress} />
  );
}
}
