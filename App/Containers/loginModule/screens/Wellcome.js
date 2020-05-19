import React, {Component} from 'react';
import ButtonSubmit from '../components/ButtonSubmit';

import {Image,Text,StyleSheet,Dimensions,View} from 'react-native';
 import Orientation from 'react-native-orientation-locker';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

const logo1=require('../../../../assets/xdV2/Logo-classino-Rangi.png');
export default class Wellcome extends React.Component{
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  componentWillUnmount() {


  }
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:2,alignItems:'center',bottom:'55%',position:'absolute',alignSelf:'center'}}>
          <Image source={logo1}/>
          <Text style={{color:'#0296F9',fontFamily:'IRANYekanMobileFN',top:16}}>اولین آموزشگاه آنلاین کنکور و پایه</Text>
        </View>
        <View style={{flex:2,alignItems:'center',top:'50%',position:'absolute',alignSelf:'center'}}>
          <ButtonSubmit onPressIn={()=>this.props.navigation.navigate('SignUp')} notes={styles1} text={'ثبت نام'}/>
          <ButtonSubmit onPressIn={()=>this.props.navigation.navigate('LoginScreen')} notes={styles2} text={'ورود'}/>
        </View>
      </View>
    )
  }
}
const styles1 = StyleSheet.create({
  container: {
    alignSelf:'center',
    height:43*DEVICE_HEIGHT/812
  },
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#FBB12B',
    width:.65*DEVICE_WIDTH,
    height: '100%',
    borderRadius: 22,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#2B69FB',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#2B69FB',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    alignSelf:'center',
    fontFamily:"IRANYekanMobileFN"
  },
  image: {
    width: 24,
    height: 24,
  },
});
const styles2 = StyleSheet.create({
  container: {
    alignSelf:'center',
    height:43*DEVICE_HEIGHT/812
  },
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width:.65*DEVICE_WIDTH,
    height: '100%',
    borderRadius: 22,
    borderColor: '#FBB12B',
    zIndex: 100,
    borderWidth:1
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#FBB12B',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#2B69FB',
  },
  text: {
    color: '#F47E30',
    alignSelf:'center',
    fontFamily:"IRANYekanMobileFN",
    fontWeight:'600'
  },
  image: {
    width: 24,
    height: 24,
  },
});
