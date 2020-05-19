import React, {Component} from 'react';
import ButtonSubmit from '../components/ButtonSubmit';
 
import {Image, Text, StyleSheet ,Dimensions,View, ImageBackground, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import {Input, Icon}from 'react-native-elements';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

import Orientation from 'react-native-orientation-locker';
const logo1=require('../../../../assets/xdV2/Logo-classino-Sefid.png');
const logo2=require('../../../../assets/xdV2/asset1.png');
const logo3=require('../../../../assets/xdV2/Ellipse-2.png');
const backImage=require('../../../../assets/xdV2/bkimg.png');

import axios from 'axios';
export default class ForgetPass1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mobile:'',
      response:''
    }
    this.getMyValue();
  }
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  componentWillUnmount() {


  }
  getMyValue = async () => {
  try {
    const value = await AsyncStorage.getItem('@token');
  } catch(e) {
    // read error
  }


}
  onSubmit() {
        this.fetchToken(this.state.mobile);
        const mobile=this.state.mobile;
        this.props.navigation.navigate('ForgetPass2',{mobile:mobile});
    }
    fetchToken(mobile) {
            axios.post('https://clone.classino.com/api/forgetPassSMS',{mobile:mobile},{headers:{Accept:'application/json'}}
            ).then(result=>{
              this.state.response=result.data;
              //dispath to store later
            })

        }
  render(){
    return(
      <KeyboardAvoidingView style={{flex:1,backgroundColor:'#EBEBEB'}} enabled>
      <Image source={backImage}  style={{top:0,left:0,position:'absolute',height:'100%',width:'100%'}}/>

      <View style={{top:40,alignItems:'center',alignSelf:'center'}}>
      <Image source={logo1}/>
      <View style={{flex:2,alignItems:'center',top:DEVICE_HEIGHT/50}}>
        <Image style={{}} source={logo2}/>
        <Image style={{position:'absolute'}} source={logo3}/>

      <Text style={{color:'white',fontFamily:'IRANYEKANMobileFN'}}>برای بازیابی رمز عبور، لطفا شماره خود را وارد کنید</Text>
      </View>
      </View>
      <View style={{flex:2,alignItems:'center',top:'50%',position:'absolute',alignSelf:'center'}}>
        <Input
          containerStyle={{}}
          inputContainerStyle={{backgroundColor:'white',borderBottomColor:'#0296F9',paddingRight:15}}
          inputStyle={{fontFamily:"IRANYekanMobileFN"}}
          onChangeText={text => this.setState({ mobile: text })}
          placeholder='شماره همراه'
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          labelStyle={{color:'#0296F9'}}
          leftIconContainerStyle={{left:1}}
          leftIcon={<Icon color='#AFAFAF' name='phone-android'/>}
        />
      <ButtonSubmit onPressIn={this.onSubmit.bind(this)} notes={styles2} text={'ادامه'}/>
      <View style={{marginTop:'40%'}}>
        <Text style={{color:'white',alignSelf:'center',fontFamily:"IRANYekanMobileFN",fontSize:12,marginTop:.015*DEVICE_HEIGHT}}>تماس با پشتیبانی</Text>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:.015*DEVICE_HEIGHT}}>
          <Icon name='phone' color='white' size={16}/>
          <Text style={{color:'white',alignSelf:'center',fontFamily:"IRANYekanMobileFN",fontSize:14}}> 021 - 91008020</Text>
        </View>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:.015*DEVICE_HEIGHT}}>
          <Icon name='phone' color='white' size={16}/>
          <Text style={{color:'white',alignSelf:'center',fontFamily:"IRANYekanMobileFN",fontSize:14}}> 021 - 22221616</Text>
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
    alignSelf:'center',
    fontFamily:'IRANYEKANMobileFN'
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
    alignSelf:'center',
    fontFamily:'IRANYEKANMobileFN'
  },
  image: {
    width: 24,
    height: 24,
  },
});
