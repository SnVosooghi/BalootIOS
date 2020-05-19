import React, {Component} from 'react';
import ButtonSubmit from '../components/ButtonSubmit';
 
import {Image,Text,StyleSheet,Dimensions,View,ImageBackground,KeyboardAvoidingView} from 'react-native';
 import Orientation from 'react-native-orientation-locker';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
import { Input , ThemeProvider, Button , Divider, SocialIcon,Icon} from 'react-native-elements';
const logo1=require('../../../../assets/xdV2/Logo-classino-Sefid.png');
const logo2=require('../../../../assets/xdV2/asset1.png');
const logo3=require('../../../../assets/xdV2/Ellipse-2.png');
import backImage from '../../../../assets/xdV2/bkimg.png';

import axios from 'axios';
export default class ForgetPass1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mobile:'',
      response:'',
      code:'',
    }
  }
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  componentWillUnmount() {

     
  }
  onSubmit() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('mobile', 'NO-ID');
        this.fetchToken(this.state.code,itemId);


    }
    fetchToken(code,itemId) {
            axios.post('https://clone.classino.com/api/forgetPassSMSPost',{
                mobile:itemId,
                token:code,
              },{headers:{Accept:'application/json'}}
            ).then(result=>{
              this.state.response=result.data;
              //dispath to store later
              console.log(this.state.response.message);
              this.props.navigation.navigate('LoginScreen',{newPassword:this.state.response.message})
            })

        }
  render(){
    return(
      <KeyboardAvoidingView style={{flex:1,backgroundColor:'#EBEBEB'}} enabled>
      <Image source={backImage}  style={{top:0,left:0,position:'absolute',height:'100%',width:'100%'}}/>

      <View style={{top:40,alignItems:'center',alignSelf:'center'}}>
      <Image source={logo1}/>
      <View style={{flex:2,alignItems:'center',top:DEVICE_HEIGHT/10}}>
        <Image style={{}} source={logo2}/>
        <Image style={{position:'absolute'}} source={logo3}/>

      <Text style={{color:'white'}}>لطفا کد ارسال شده را وارد کنید</Text>
      </View>
      </View>
      <View style={{flex:2,alignItems:'center',top:'50%',position:'absolute',alignSelf:'center'}}>
      <ThemeProvider >
        <Input
          containerStyle={{}}
          inputContainerStyle={{backgroundColor:'#EBEBEB',borderBottomColor:'#0296F9',paddingLeft:15}}
          //source={usernameImg}
          onChangeText={text => this.setState({ code: text })}
          placeholder='_ _ _ _ _'
          textAlign={'center'}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          labelStyle={{color:'#0296F9'}}
        />
      </ThemeProvider>
      <ButtonSubmit onPressIn={this.onSubmit.bind(this)} notes={styles2} text={'ادامه'}/>
      <View style={{marginTop:'40%'}}>
        <Text style={{color:'white',alignSelf:'center',fontWeight:'bold',fontSize:12,marginTop:.015*DEVICE_HEIGHT}}>تماس با پشتیبانی</Text>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:.015*DEVICE_HEIGHT}}>
          <Icon name='phone' color='white' size={16}/>
          <Text style={{color:'white',alignSelf:'center',fontWeight:'bold',fontSize:14}}> 021 - 91008020</Text>
        </View>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:.015*DEVICE_HEIGHT}}>
          <Icon name='phone' color='white' size={16}/>
          <Text style={{color:'white',alignSelf:'center',fontWeight:'bold',fontSize:14}}> 021 - 22221616</Text>
        </View>
      </View>
      </View>


      </KeyboardAvoidingView>
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
    alignSelf:'center'
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
    color: 'black',
    alignSelf:'center'
  },
  image: {
    width: 24,
    height: 24,
  },
});
