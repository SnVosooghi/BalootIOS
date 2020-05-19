import React, {Component} from 'react';
import {ImageBackground, Text, View,Image,Dimensions,KeyboardAvoidingView,StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
 import Orientation from 'react-native-orientation-locker';
import Logo from '../components/Logo';
import Form from '../components/Form';
import bgSrc from '../images/Mywallpaper.png';
import ButtonSubmit from '../components/ButtonSubmit';
 

import { connect } from 'react-redux';
import orangeRectangular from '../../../../assets/RectangleOrange1.png';
import whiteRectangular from '../../../../assets/Rectangle-47.png';
var {height, width} = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
//import GoogleSign from './GoogleSign';
// import OAuthManager from 'react-native-oauth';
// const manager = new OAuthManager('firestackexample')
// manager.configure({
//   google: {
//     callback_url: `io.fullstack.FirestackExample:/oauth2redirect`,
//     client_id: '855718719287-sk2f73qcu3m1t045efmlci7b412k3md7.apps.googleusercontent.com',
//     client_secret: 'jCntud05N9iIiSXoN_x3Ylcu'
//   }
// });
// manager.authorize('google', {scopes: 'profile email'})
// .then(resp => console.log('Your users ID'))
// .catch(err => console.log('There was an error'));
export default class SignUp extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            token:'',
        };
    }
    componentDidMount() {
      Orientation.lockToPortrait();
    }
    componentWillUnmount() {


    }
  render() {
    return (
        <KeyboardAvoidingView style={{flex:1,backgroundColor:'#EBEBEB'}} enabled>

        <Image style={{borderBottomLeftRadius:30,borderBottomRightRadius:30,top:0,width:width,position:'absolute'}} source={orangeRectangular} />
        <Logo />
        <Image style={{borderTopRightRadius:20,borderTopLeftRadius:20,bottom:0,width:width-30,position:'absolute',alignSelf:'center',height:570*height/812}} source={whiteRectangular} />
        <View style={{position:'absolute',height:570*height/812,width:width,bottom:0,alignSlef:'center'}}>
        <Form navigation={this.props.navigation} onPressInBack={()=>this.props.navigation.navigate('Wellcome')} onPressInSumbit={(ind)=>{this.props.navigation.navigate('Information'),this.onSubmit.bind(this)}} notes={styles} firstText={'ثبت نام عضو جدید'} secondFormText={'کد معرف (اختیاری)'} secondFormPlaceholder={'کد معرف (اختیاری)'} formtype={'signup'}/>
        </View>
        </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:.0394*DEVICE_HEIGHT,
    alignSelf:'center',
    height:43*DEVICE_HEIGHT/812
  },
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#2BFB39',
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
