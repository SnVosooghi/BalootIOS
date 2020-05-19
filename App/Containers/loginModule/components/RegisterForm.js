import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Text,
  Dimensions
} from 'react-native';
import { Input , ThemeProvider, Button , Divider, SocialIcon, CheckBox} from 'react-native-elements';

import ButtonSubmit from './ButtonSubmit';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  render() {
    return (
      <ThemeProvider >
        <Input
		  containerStyle={{paddingHorizontal : '15%',top:'20%'}}
          //source={usernameImg}
          secureTextEntry={this.state.showPass}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <Input
		  containerStyle={{paddingHorizontal : '15%',top:'20%'}}
          //source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <Input
		  containerStyle={{paddingHorizontal : '15%',top:'20%'}}
          //source={usernameImg}
          secureTextEntry={this.state.showPass}
          placeholder="Email"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <Input
		  containerStyle={{paddingHorizontal : '15%',top:'20%'}}
          //source={usernameImg}
          secureTextEntry={this.state.showPass}
          placeholder="Re-enter Password"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPressIn={this.showPass}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
        <CheckBox
          containerStyle={{paddingHorizontal : '15%',top:'20%'}}
          title='I agree with terms & conditions'
          checked={this.state.checked}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={1}>
          {this.state.isLoading ? (
            <Image source={spinner} style={styles.image} />
          ) : (
            <Text style={styles.text}>REGISTER</Text>
          )}
        </TouchableOpacity>
      </ThemeProvider>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerStyle:
    {
      paddingLeft : '40%' ,
      alignSelf:'center',
  },
  btnEye: {
    position: 'absolute',
    width : '75%',
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    top:'20%',
    width : '75%',
    height: '8%',
    borderRadius: 20,
    zIndex: 100,
  },
});
