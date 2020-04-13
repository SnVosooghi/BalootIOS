import React ,{Component} from 'react';
import {Footer,FooterTab, Button , Icon} from 'native-base';
import {Text,Image,Animated,StyleSheet,View,Dimensions} from'react-native';
const homeDeactive=require('./../../assets/icons/ic_local_cafe_24px1.png');
const homeActive=require('./../../assets/icons/ic_local_cafe_24px.jpg');
const storeDeactive=require('./../../assets/icons/ic_store_mall_directory_241px.png');
const storeActive=require('./../../assets/icons/ic_store_mall_directory_24px.jpg');
const cartDeactive=require('./../../assets/icons/ic_shopping_cart_241px.png');
const cartActive=require('./../../assets/icons/ic_shopping_cart_24px.png');
const coursesDeactive=require('./../../assets/icons/ic_subscriptions_241px.png');
const coursesActive=require('./../../assets/icons/ic_subscriptions_24px.png');
const profileDeactive=require('./../../assets/icons/ic_account_circle_241px.png');
const profileActive=require('./../../assets/icons/ic_account_circle_24px.png');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class FooterNavBar extends Component {
  constructor(props){
    super(props);
    this.state = { fadeAnim: new Animated.Value(0.5) };
  }
  render() {
    return(
      <Footer >
      <FooterTab >
      <Button style={this.props.page=='5'?styles.buttonRightActive:styles.buttonRight} onPressIn={()=>this.props.navigation.navigate('Profile')} >
        {this.props.page=='5'?
        <View style={styles.innerView}>
          <Image style={styles.iconImage} source={profileActive} />
          <View style={{height:6}}/>
          <Text style={styles.text1}>پروفایل</Text>
        </View>
        :
        <View style={styles.innerView}>
        <Image style={styles.iconImage} source={profileDeactive} />
        <View style={{height:6}}/>
        <Text style={styles.text}>پروفایل</Text>
        </View>}
      </Button>
          <Button style={this.props.page=='4'?styles.buttonActive:styles.button} onPressIn={()=>this.props.navigation.navigate('MyCourses')} >
            {this.props.page=='4'?
            <View style={styles.innerView}>
              <Image style={styles.iconImage} source={coursesActive} />
              <View style={{height:6}}/>
              <Text style={styles.text1}>دوره های من</Text>
            </View>
            :
            <View style={styles.innerView}>
            <Image style={styles.iconImage} source={coursesDeactive} />
            <View style={{height:6}}/>
            <Text style={styles.text}>دوره های من</Text>
            </View>}
          </Button>
          <Button style={this.props.page=='3'?styles.buttonActive:styles.button} onPressIn={()=>this.props.navigation.navigate('Cart')} >
            {this.props.page=='3'?
            <View style={styles.innerView}>
              <Image style={styles.iconImage} source={cartActive} />
              <View style={{height:6}}/>
              <Text style={styles.text1}>سبد خرید</Text>
            </View>
            :
            <View style={styles.innerView}>
            <Image style={styles.iconImage} source={cartDeactive} />
            <View style={{height:6}}/>
            <Text style={styles.text}>سبد خرید</Text>
            </View>}
          </Button>
          <Button style={this.props.page=='2'?styles.buttonActive:styles.button} onPressIn={()=>this.props.navigation.navigate('Courses')} >
            {this.props.page=='2'?
            <View style={styles.innerView}>
              <Image style={styles.iconImage} source={storeActive} />
              <View style={{height:6}}/>
              <Text style={styles.text1}>دوره ها</Text>
            </View>
            :
            <View style={styles.innerView}>
            <Image style={styles.iconImage} source={storeDeactive} />
            <View style={{height:6}}/>
            <Text style={styles.text}>دوره ها</Text>
            </View>}
          </Button>
          <Button style={this.props.page=='1'?styles.buttonLeftActive:styles.buttonLeft} onPressIn={()=>this.props.navigation.navigate('Home')} >
            {this.props.page=='1'?
            <View style={styles.innerView}>
              <Image style={styles.iconImage} source={homeActive} />
              <View style={{height:6}}/>
              <Text style={styles.text1}>میز مطالعه</Text>
            </View>
            :
            <View style={styles.innerView}>
            <Image style={styles.iconImage} source={homeDeactive} />
            <View style={{height:6}}/>
            <Text style={styles.text}>میز مطالعه</Text>
            </View>}
          </Button>
          </FooterTab>
          </Footer>
    );
  }
}
const styles=StyleSheet.create({
  text:{
    color:"#A5B1C2",
    fontSize:DEVICE_HEIGHT<650?8:10,
    fontFamily:'IRANYEKANMobileFN',
  },
  text1:{
    color:"#077AFF",
    fontSize:DEVICE_HEIGHT<650?8:10,
    fontFamily:'IRANYEKANMobileFN'
  },
  buttonLeftActive:{
    backgroundColor:'#F9F9F9',width:DEVICE_WIDTH/5-2,flexDirection:'column',alignItems:'center',borderRadius:0
  },
  buttonRightActive:{
    backgroundColor:'#F9F9F9',width:DEVICE_WIDTH/5,flexDirection:'column',alignItems:'center',borderRadius:0
  },
  buttonActive:{
    backgroundColor:'#F9F9F9',width:DEVICE_WIDTH/5,flexDirection:'column',borderWidth:0,alignItems:'center',borderRadius:0
  },
  buttonLeft:{
    width:DEVICE_WIDTH/5-2,flexDirection:'column',backgroundColor:'#F9F9F9',alignItems:'center',borderRadius:0
  },
  buttonRight:{
    width:DEVICE_WIDTH/5,flexDirection:'column',backgroundColor:'#F9F9F9',alignItems:'center',borderRadius:0
  },
  button:{
    width:DEVICE_WIDTH/5,flexDirection:'column',backgroundColor:'#F9F9F9',alignItems:'center',borderRadius:0
  },
  iconImage:{
    height:DEVICE_HEIGHT<650?16:20,
    width:DEVICE_HEIGHT<650?16:20,
    alignSelf:'center'
  },
  innerView:{
    alignItems:'center',alignSelf:'center',
  }
});
