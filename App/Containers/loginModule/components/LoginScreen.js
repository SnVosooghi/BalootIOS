import React, {Component} from 'react';
import {ImageBackground, Text, View,Image,Dimensions,KeyboardAvoidingView,StyleSheet,TouchableOpacity , SafeAreaView , findNodeHandle} from 'react-native'
import PropTypes from 'prop-types';
import Orientation from 'react-native-orientation-locker';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Logo from './Logo';
import Form from './Form';
import bgSrc from '../images/Mywallpaper.png';
import ButtonSubmit from './ButtonSubmit';
import GobackLogin from './GobackLogin';
import SignupSection from './SignupSection';

import orangeRectangular from '../../../../assets/LoginBackground.png';
import whiteRectangular from '../../../../assets/LogoClassinoRangi.png';

var {height, width} = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const MARGIN = 40;

export default class LoginScreen extends Component {
  state={
    formLogin:true,
    viewRef: null
  }
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('newPassword');
    return (
        <KeyboardAvoidingView style={styles.view} enabled>

          <Image
            style={styles.image}
            tintColor='white'
            source={orangeRectangular}
            ref={img => {this.backgroundImage = img;}}
            onLoadEnd={this.imageLoaded.bind(this)}
          />
          <BlurView
            style={styles.absolute}
            blurType="prominent"
            blurAmount={5}
          />
          <Logo />
          <View style={styles.formHeaderView}>
            <TouchableOpacity style={{...styles.formHeaderButton,borderBottomWidth:this.state.formLogin?2:0}} onPress={()=>this.setState({formLogin:true})}>
              <Text style={styles.formHeaderText}>ورود</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.formHeaderButton,borderBottomWidth:this.state.formLogin?0:2}} onPress={()=>this.setState({formLogin:false})}>
              <Text style={styles.formHeaderText}>ثبت نام</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formView}>
            {this.state.formLogin?
            <Form navigation={this.props.navigation} onPressIn={()=>this.props.navigation.navigate('ForgetPass1')} onPressInBack={()=>this.props.navigation.navigate('Wellcome')} text={'ورود به پنل کاربری'} notes={styles} firstText={'ورود اعضا'} secondFormText={'رمز عبور'} secondFormPlaceholder={'رمز عبور'} formtype={'signin'} newPassword={itemId}/>
            :
            <Form navigation={this.props.navigation} onPressIn={()=>this.props.navigation.navigate('ForgetPass1')} onPressInBack={()=>this.props.navigation.navigate('Wellcome')} text={'ورود به پنل کاربری'} notes={styles} firstText={'ورود اعضا'} secondFormText={'رمز عبور'} secondFormPlaceholder={'کد معرفتو وارد کن (الزامی نیست)'} formtype={'signup'} newPassword={itemId}/>
            }
          </View>
        </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  view:{
    flex:1,backgroundColor:'#EBEBEB'
  },
  image:{
    top:0,width:DEVICE_WIDTH,height:DEVICE_HEIGHT,position:'absolute'
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  formHeaderView:{
    flexDirection:'row',justifyContent:'space-evenly',marginTop:.05*DEVICE_HEIGHT,alignItems:'center',height:30
  },
  formHeaderButton:{
    height:'100%',borderColor:'#2D98DA',width:45,alignItems:'center'
  },
  formHeaderText:{
    color: '#666464',
    backgroundColor: 'transparent',
    fontSize:16,
    fontFamily:"IRANYekanMobileFN"
  },
  formView:{
    height:.38*height,width:.869*width,bottom:0,alignSelf:'center',backgroundColor:'#F6F8FC',borderRadius:15,borderWidth:.5,borderColor:'rgba(0,0,0,.1)',
    shadowColor:'rgba(0,0,0,.1)',
    shadowOffset:{height:5,width:0},
    shadowRadius: 5,
    shadowOpacity: 1
  },
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#077AFF',
    height:.06*DEVICE_HEIGHT,width:.78*DEVICE_WIDTH,
    borderRadius: 10,
    zIndex: 100,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize:16,
    fontFamily:"IRANYekanMobileFN"
  },
});
