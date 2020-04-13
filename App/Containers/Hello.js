import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  I18nManager,
  Text,
} from 'react-native';
import ClassinoActions from '../Redux/ClassinoRedux';
import { connect } from 'react-redux';
import RNRestart from 'react-native-restart';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
    if(I18nManager.isRTL != true){
         I18nManager.forceRTL(true);
         RNRestart.Restart();
      }
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if(userToken!=null){
      this.props.setToken(userToken);
    }
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken!=null ? 'MyDrawer' : 'LoginNavigator');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setToken : (token) => dispatch(ClassinoActions.setToken(token))
  }
}


export default connect(null, mapDispatchToProps)(Hello);
