import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image,Dimensions} from 'react-native';

import logoImg from '../images/NewLogo.png';
import logo1 from '../../../../assets/LogoClassinoRangi.png';
var {height, width} = Dimensions.get('window');
export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo1} style={styles.image} />
        <Text style={{color:'#077AFF',fontSize:14,fontFamily:'IRANYekanMobileFN',fontWeight:'400'}}>اولین آموزشگاه آنلاین کنکور و پایه</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:.18*height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height:.15*height,
    width:.469*width,
    resizeMode:'contain'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
