import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Text,
  Dimensions
} from 'react-native';
import {Spinner} from 'native-base';
import { Input , ThemeProvider, Button , Divider, SocialIcon,Icon} from 'react-native-elements';
import ButtonSubmit from '../components/ButtonSubmit';
 
import { connect } from 'react-redux';
 import Orientation from 'react-native-orientation-locker';
import { bindActionCreators } from 'redux';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';
import orangeRectangular from '../../../../assets/xdV2/Rectangle-13.png';
import axios from 'axios'
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      nameFa:'',
      nameEn:'',
      pass:'',
      repass:'',
    };
    this.showPass = this.showPass.bind(this);
    const { navigation } = this.props;
    const itemId = navigation.getParam('token', 'NO-ID');
    this.getMyValue();
  }
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  componentWillUnmount() {


  }
  getMyValue = async () => {
  try {
    const value = await AsyncStorage.getItem('@token')
    console.log(value);
  } catch(e) {
    // read error
  }



  }

  onSubmit() {
      this.fetchToken(this.state.nameFa,this.state.nameEn,this.state.pass,this.state.repass);
    }
    fetchToken(nameFa,nameEn,pass,repass) {
      console.log(this.props.token);
      const { navigation } = this.props;
      const itemId = navigation.getParam('token', 'NO-ID');
            axios.post('https://clone.classino.com/api/newUserForm',{
                name:nameFa,
                name_english:nameEn,
                password:pass,
                password_confirmation:repass,
              },
              {
                headers:{
                  Authorization:this.props.token,
                  Accept:"application/json"
                }
              }
            ).then(result=>{

              console.log(result.data.message);
              this.props.navigation.navigate('Home');
            }).catch(function (error){
              console.log(error.request._response);
            });

        }


  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  render() {
    const pagetype=this.props.formtype;
    forgetpassword=false;
    if (pagetype=='signin'){
      forgetpassword=true;
    }
    return (
      <View>
      <Image style={styles.topImage} source={orangeRectangular} />
      <Text style={styles.topText}>تکمیل اطلاعات</Text>
      <KeyboardAvoidingView enabled>
      <View style={{marginTop:DEVICE_HEIGHT/5}}>
        <ThemeProvider >
          <Input
  		      containerStyle={{paddingHorizontal : '17%'}}
            inputContainerStyle={{backgroundColor:'#EBEBEB',borderBottomColor:'#0296F9',paddingLeft:15}}
            //source={usernameImg}
            onChangeText={text => this.setState({ nameFa: text })}
            placeholder="09********"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            label='نام و نام خانوادگی(به فارسی)'
            labelStyle={{color:'#0296F9'}}

          />
          <View style={{height:.015*DEVICE_HEIGHT}} />
          <Input
  		      containerStyle={{paddingHorizontal : '17%'}}
            inputContainerStyle={{backgroundColor:'#EBEBEB',borderBottomColor:'#0296F9',paddingLeft:15}}
            //source={passwordImg}
            onChangeText={text => this.setState({ nameEn: text })}
            placeholder={this.props.secondFormPlaceholder}
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
            label='نام و نام خانوادگی(به انگلیسی)'
            labelStyle={{color:'#0296F9'}}

          />
          <View style={{height:.015*DEVICE_HEIGHT}} />
          <Input
  		      containerStyle={{paddingHorizontal : '17%'}}
            inputContainerStyle={{backgroundColor:'#EBEBEB',borderBottomColor:'#0296F9',paddingLeft:15}}
            //source={usernameImg}
            onChangeText={text => this.setState({ pass: text })}
            placeholder="09********"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            label='رمز عبور'
            labelStyle={{color:'#0296F9'}}

          />
          <View style={{height:.015*DEVICE_HEIGHT}} />
          <Input
            containerStyle={{paddingHorizontal : '17%'}}
            inputContainerStyle={{backgroundColor:'#EBEBEB',borderBottomColor:'#0296F9',paddingLeft:15}}
            //source={usernameImg}
            onChangeText={text => this.setState({ repass: text })}
            placeholder="09********"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            label='تکرار رمز عبور'
            labelStyle={{color:'#0296F9'}}

          />
          <TouchableOpacity
            containerStyle={{marginTop:'90%'}}
            style={styles.button}
            onPressIn={this.onSubmit.bind(this)}
            activeOpacity={1}>
              <Text style={{color:'white'}}>ذخیره اطلاعات</Text>
          </TouchableOpacity>
        </ThemeProvider>
      </View>
      </KeyboardAvoidingView>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  containerStyle:
    {
      justifyContent : 'center',
      paddingLeft : '40%' ,
      position:'absolute',
      alignSelf:'center',
  },
  btnEye: {
    width : '75%',
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  container: {
    marginTop:.0394*DEVICE_HEIGHT,
    alignSelf:'center',
    height:43*DEVICE_HEIGHT/812
  },
  button: {
    marginTop:'10%',
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#2B69FB',
    width:.65*DEVICE_WIDTH,
    height: '10%',
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
  topImage:{
    top:0,resizeMode:'stretch',width:DEVICE_WIDTH,height:DEVICE_HEIGHT/6.4,position:'absolute'
  },
  topText:{
    alignSelf:'center',
    color:'white',
    fontSize:26,
    top:DEVICE_HEIGHT/14
  }
});
function mapState(state) {
    const { token  } = state;
    return { token  };
}


export default connect(mapState, null)(Information);
