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
  Alert,
  TextInput,
  I18nManager,
  Platform,
  Dimensions,
  AsyncStorage
} from 'react-native';
import {Spinner} from 'native-base';
import { Input , ThemeProvider, Button , Divider, SocialIcon,Icon} from 'react-native-elements';
import { query, mutation } from 'gql-query-builder'
import ButtonSubmit from './ButtonSubmit';
import { connect } from 'react-redux';
import ClassinoActions from '../../../Redux/ClassinoRedux';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';
import axios from 'axios'
import NetInfo from "@react-native-community/netinfo";
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
const routeApi='http://localhost:8000';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      mobile:'',
      password:'',
      token:'',
      reset:false,
      imageH:0,
      imageW:0,
      imageY:0,
      imageX:0,
      loadingButton:false,
    };
    this.showPass = this.showPass.bind(this);
    this.child = React.createRef();
    this.mobileRef=React.createRef();
    this.passwordRef=React.createRef();
    this.resetButton = this.resetButton.bind(this);
  }

  onSubmit() {
    NetInfo.fetch().then(state => {
      if(state.isConnected){
        if (this.props.formtype=='signin'){
          if(this.state.mobile=='' || this.state.password==''){
            Alert.alert('لطفا شماره موبایل و رمز عبور را به درستی وارد کنید');
          }
          else{
          this.fetchToken(this.state.mobile,this.state.password);
          }
        }
        else {
          if(this.state.mobile=='' ){
            Alert.alert('لطفا شماره موبایل را به درستی وارد کنید');
          }
          else{
          this.registerFetchToken(this.state.mobile,this.state.password);
          }
        }
      }
      else{
        Alert.alert('لطفا اتصال به اینترنت را بررسی فرمایید');
        console.log(state);
      }
      });
      this.child.current.qw();
    }
    fetchToken(mobile,password) {
            const userCredentials={
              email:mobile,
              password:password
            }
            axios.post(routeApi, query({
              operation: 'userLogin',
              variables: userCredentials,
              fields: ['user {name, email, role}', 'token']
            })).then(result=>{
                  console.log(result.data);
                  if(result.data.errors!=null){
                    Alert.alert(result.data.errors[0].message);
                  }
              })
        }
      resetButton(){
        console.log('reset');
        this.mobileRef.clear();
      }
      registerFetchToken(mobile,password) {
        const userDetails={
          name: 'testName',
          email : mobile,
          password: password
        }
        axios.post(routeApi, mutation({
          operation: 'userSignup',
          variables: userDetails,
          fields: ['id', 'name', 'email']
        })).then(result=>{
                console.log(result.data);
                if(result.data.errors!=null){
                  Alert.alert(result.data.errors[0].message);
                }
              })
          }

      setValue  (token) {
        try {
          AsyncStorage.setItem('userToken',token);
          this.props.setToken(token);
          this.props.navigation.navigate('MyDrawer');
        } catch(e) {
          // save error
          console.log(e);
        }


    }
    getMyValue = async () => {
      try {
        const value = await AsyncStorage.getItem('@token')
      } catch(e) {
        // read error
      }
    }
  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }
  changed(){
    this.setState({changed:!this.state.changed});
  }

  render() {
    const pagetype=this.props.formtype;
    forgetpassword=false;
    if (pagetype=='signin'){
      forgetpassword=true;
    }
    return (
      <View >
        <Text style={styles.newPasswordText}>{this.props.newPassword}</Text>
        <ThemeProvider >
          <KeyboardAvoidingView>
          <Input
            ref={ref=>this.mobileRef=ref}
  		      containerStyle={{paddingHorizontal : '17%'}}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={{color:'#858585',fontFamily:"IRANYekanMobileFN",marginLeft:10,fontSize:14,textAlign:'right'}}
            onChangeText={text => this.setState({ mobile: text })}
            placeholder={'شماره همراه'}
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType='numeric'
            leftIconContainerStyle={{}}
            leftIcon={
              <Icon name='smartphone' color='#858585'/>
            }
          />
          </KeyboardAvoidingView>
          <View style={{height:.015*DEVICE_HEIGHT}} />
          <Input
            ref={ref=>this.passwordRef=ref}
  		      containerStyle={{paddingHorizontal : '17%'}}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={{color:'#007AFF',fontFamily:"IRANYekanMobileFN",marginLeft:10,fontSize:14,textAlign:'right'}}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={this.state.showPass}
            placeholder={this.props.secondFormPlaceholder}
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
            leftIconContainerStyle={{left:-3}}
            leftIcon={
              <TouchableOpacity
                containerStyle={{}}
                activeOpacity={0.7}
                style={styles.btnEye}
                onPressIn={this.showPass}>
                <Image source={eyeImg} style={styles.iconEye} />
              </TouchableOpacity>
            }
          />
          {forgetpassword?
          <Text onPress={()=>this.props.onPressIn()} style={styles.forgetPasswordText}>رمز عبور خود را فراموش کردید؟</Text> : <View/>
          }
        </ThemeProvider>
        <View style={{position:'absolute',alignSelf:'center',top:.23*DEVICE_HEIGHT}}>
        <ButtonSubmit loadingButton={this.state.loadingButton} changed={()=>this.changed()} ref={this.child} loadable={true} onPressIn={this.onSubmit.bind(this)} notes={this.props.notes} text={this.props.formtype=='signin'?'ورود به پنل کاربری':'ثبت نام'}/>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  newPasswordText:{
    alignSelf:'center',color:'#F4762B',fontWeight:'bold',fontSize:16
  },
  inputContainerStyle:{
    alignItems:'center',borderRadius:10,backgroundColor:'#FFFFFF',borderColor:'white',paddingRight:15,marginTop:.02*DEVICE_HEIGHT,height:.06*DEVICE_HEIGHT,width:.78*DEVICE_WIDTH,alignSelf:'center'
  },
  btnEye: {
    width : '75%',
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: '#858585',
  },
  forgetPasswordText:{
    color:'#077AFF',paddingHorizontal:'7%',paddingTop:10,fontFamily:"IRANYekanMobileFN",textAlign:'left'
  }
});
function mapState(state) {
    const { token  } = state;
    return { token  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setToken : (token) => dispatch(ClassinoActions.setToken(token))
  }
}



export default connect(mapState, mapDispatchToProps)(Form);
