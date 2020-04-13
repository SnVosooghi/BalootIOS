import React, { Component } from "react";
import { Image,ImageBackground,Dimensions,View,Text,I18nManager,TouchableOpacity,Linking } from "react-native";
import {
  Content,
  List,
  ListItem,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import { Avatar ,Icon} from 'react-native-elements';
import styles from "./style";
import { connect } from 'react-redux';
import axios from 'axios';
const banner = require("../../../assets/xdV2/20and7/Group-9.png");
const logo1 = require("../../../assets/xdV2/20and7/ic_slow_motion_video_24px.png");
const logo2 = require("../../../assets/xdV2/20and7/ic_event_24px.png");
const logo3 = require("../../../assets/xdV2/20and7/ic_add_box_24px.png");
const logo6 = require("../../../assets/xdV2/20and7/ic_forum_24px.png");
const logo4 = require("../../../assets/xdV2/20and7/ic_redeem_24px.png");
const logo5 = require("../../../assets/xdV2/20and7/ic_local_library_24px.png");
const tik = require("../../../assets/xdV2/20and7/verify_tick.png");
const circ = require("../../../assets/xdV2/20and7/Ellipse-5.png");
const exit = require("../../../assets/xdV2/20and7/ic_exit_to_app_24px.png");
const storeActive=require('../../../assets/icons/ic_store_mall_directory_24px.png');
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import RNRestart from 'react-native-restart';
import {AsyncStorage} from 'react-native';
const mySize=deviceWidth/42;
const mySize1=deviceWidth/32;
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      imageH:0,
      imageW:0,
      imageY:0,
      imageX:0,
    };
    console.log(deviceHeight);
  }
  componentDidMount(){
    if(I18nManager.isRTL == true){
         I18nManager.allowRTL(false);
      }
  }
  async exitApp(){
    try {
     await AsyncStorage.removeItem('userToken');
    } catch (e) {
      console.log(e);
    }
    axios.get('https://clone.classino.com/api/logout',
        {headers:{Accept:'application/json',Authorization:this.props.token}}
    ).then(this.props.navigation.navigate('Hello'));

  }
  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <ImageBackground source={banner} style={styles.drawerCover}>
            <Icon onPress={()=>this.props.navigation.closeDrawer()} containerStyle={{position:'absolute',top:10,left:20}} color='white'name='close' type='antdesign'

            />
            <Image source={circ} style={{position:'absolute',height:this.state.imageH+5,width:this.state.imageW+5,top:this.state.imageY-2.5,right:this.state.imageX-2.5}} />
            <Avatar
              rounded
              source={{uri:this.props.image}}
              size='medium'
              avatarStyle={{padding:10}}
              onLayout={event => {
                const layout = event.nativeEvent.layout;
                this.setState({imageH: layout.height});
                this.setState({imageW: layout.width});
                this.setState({imageX: layout.x});
                this.setState({imageY: layout.y});
              }}
            />
            <View style={{flexDirection:'column',paddingHorizontal:10}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:"IRANYekanMobileFN",color:'white'}}>{this.props.name}</Text>
                <Image source={tik} style={{width:20,height:20,marginLeft:10}}/>
              </View>
              <Text style={{fontFamily:'IRANYEKANMobileFN',color:'white',fontSize:10}}>شماره: {this.props.phoneNumber}</Text>
              <Text style={{fontFamily:'IRANYEKANMobileFN',color:'white',fontSize:10}}>اعتبار: {this.props.credit} ریال</Text>
            </View>

          </ImageBackground>
          <TouchableOpacity onPressIn={()=>this.props.navigation.navigate("SingleClass")} style={{alignItems:'center',paddingHorizontal:10,flexDirection:'row',height:deviceHeight/15,borderBottomWidth:1,borderBottomColor:'#C9C9C6'}}>
            <Image source={logo1} style={styles.rearImage}/>
            <View style={styles.rearText}>
              <Text style={{fontFamily:"IRANYekanMobileFN",fontSize:mySize1}}>تک جلسات</Text>
              <Text style={{fontFamily:'IRANYEKANMobileFN',fontSize:mySize}}>مشاهده لیست دروس تک جلسه</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={()=>this.props.navigation.navigate("Courses")} style={{alignItems:'center',paddingHorizontal:10,flexDirection:'row',height:deviceHeight/15,borderBottomWidth:1,borderBottomColor:'#C9C9C6'}}>
            <Image source={storeActive} style={styles.rearImage}/>
            <View style={styles.rearText}>
              <Text style={{fontFamily:"IRANYekanMobileFN",fontSize:mySize1}}>دوره ها</Text>
              <Text style={{fontFamily:'IRANYEKANMobileFN',fontSize:mySize}}>لیست دوره های کلاسینو</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={()=>this.props.navigation.navigate("WeeklySchedule")} style={{alignItems:'center',paddingHorizontal:mySize,flexDirection:'row',height:deviceHeight/15,borderBottomWidth:1,borderBottomColor:'#C9C9C6'}}>
              <Image source={logo2} style={styles.rearImage}/>
              <View style={styles.rearText}>
                <Text style={{fontFamily:"IRANYekanMobileFN",fontSize:mySize1}}>برنامه هفتگی من</Text>
                <Text style={{fontFamily:'IRANYEKANMobileFN',fontSize:mySize}}>مشاهده برنامه کلاس های طی هفته</Text>
              </View>
            </TouchableOpacity>
          <TouchableOpacity onPressIn={()=>this.props.navigation.navigate("AddCredit")} style={{alignItems:'center',paddingHorizontal:mySize,flexDirection:'row',height:deviceHeight/15,borderBottomWidth:1,borderBottomColor:'#C9C9C6'}}>
            <Image source={logo3} style={styles.rearImage}/>
            <View style={styles.rearText}>
              <Text style={{fontFamily:"IRANYekanMobileFN",fontSize:mySize1}}>افزایش اعتبار و تاریخچه تراکنش ها</Text>
              <Text style={{fontFamily:'IRANYEKANMobileFN',fontSize:mySize}}>درخواست افزایش اعتبار و مشاهده تاریخچه تراکنش ها</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={()=>this.props.navigation.navigate('GiftCredit')} style={{alignItems:'center',paddingHorizontal:mySize,flexDirection:'row',height:deviceHeight/15,borderBottomWidth:1,borderBottomColor:'#C9C9C6'}}>
            <Image source={logo4} style={styles.rearImage}/>
            <View style={styles.rearText}>
              <Text style={{fontFamily:"IRANYekanMobileFN",fontSize:mySize1}}>اعتبار هدیه</Text>
              <Text style={{fontFamily:'IRANYEKANMobileFN',fontSize:mySize}}>دوستان خود را معرفی کنید و اعتبار هدیه دریافت کنید</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center',paddingHorizontal:mySize,flexDirection:'row',height:deviceHeight/15,borderBottomWidth:1,borderBottomColor:'#C9C9C6'}}>
            <Image source={logo5} style={styles.rearImage}/>
            <View style={styles.rearText}>
              <Text style={{fontFamily:"IRANYekanMobileFN",fontSize:mySize1}}>آموزش استفاده از نرم افزار</Text>
              <Text style={{fontFamily:'IRANYEKANMobileFN',fontSize:mySize}}>راهنمای استفاده از نرم افزار کلاسینو</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={()=>Linking.openURL('tel:021-22221616')} style={{alignItems:'center',paddingHorizontal:mySize,flexDirection:'row',height:deviceHeight/15,borderBottomWidth:1,borderBottomColor:'#C9C9C6'}}>
            <Image source={logo6} style={styles.rearImage}/>
            <View style={styles.rearText}>
              <Text style={{fontFamily:"IRANYekanMobileFN",fontSize:mySize1}}>ارتباط با پشتیبانی</Text>
              <Text style={{fontFamily:'IRANYEKANMobileFN',fontSize:mySize}}>تماس با پشتیبانی کلاسینو 021-22221616</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={()=>this.exitApp()} style={{alignItems:'center',paddingHorizontal:10,flexDirection:'row',height:deviceHeight/15,borderBottomWidth:1,borderBottomColor:'#C9C9C6'}}>
            <Image source={exit} style={styles.rearImage}/>
            <View style={styles.rearText}>
              <Text style={{fontFamily:"IRANYekanMobileFN",fontSize:mySize1}}>خروج</Text>
            </View>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

function mapState(state) {
    const { date , image ,name , credit , phoneNumber , token} = state.AuthReducers;
    return { date , image , name , credit , phoneNumber , token};
}


export default connect(mapState, null)(SideBar);
