import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  ImageBackground,
  Text,
} from 'react-native';

import logoImg from '../images/NewLogo.png';
import bgSrc from '../images/Mywallpaper.png';
import arrowImg from '../images/left-arrow.png';

const SIZE = 40;

export default class SecondScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };
    this._onPressIn=this._onPressIn.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  const
  _onPressIn() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();


}
  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={bgSrc}>
      <View style={styles.container}>
        <Image source={logoImg} style={{bottom:'30%'}}/>
        <TouchableOpacity
          onPressIn={()=>{
            this._onPressIn,
            setTimeout(() => {
              Actions.loginScreen();
            }, 500);
          }}
          style={styles.button}
          activeOpacity={1}>
          <Text style={styles.text} >SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPressIn={()=>{
          this._onPressIn,
          setTimeout(() => {
            Actions.registerScreen();
          }, 500);
        }}
          activeOpacity={1}>
          <Text style={styles.text} >REGISTER</Text>
        </TouchableOpacity>

      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    width : '70%',
    height: '9%',
    borderRadius: 20,
    zIndex: 100,
    margin: 15
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  }
});
