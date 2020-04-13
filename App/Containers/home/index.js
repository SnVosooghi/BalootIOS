//Gloabal imports
import React, { Component } from "react";
import { View, Image, Dimensions, StyleSheet, FlatList, TouchableOpacity, Alert, findNodeHandle} from "react-native";
import { Text, Content } from "native-base";
import { Card, Button, Icon} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { BlurView } from "@react-native-community/blur";
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation-locker';

//local imports
import GlobalScreen from './../../Components/GlobalScreen';
import ClassinoActions from '../../Redux/ClassinoRedux'

//assets
const ghestBanner = require("../../../assets/xdV2/20and7/Group-5.png");

//constans
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const screenUrl='desk/dashboard';

//Core Component
class Home extends Component {

  constructor(props){
    super(props)
    this.state={
      viewRef: null
    };
    this.props.getDashboard();
  }
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  componentWillUnmount() {

  }
  renderItem = ({item, index}) =>{
    const screenData=this.props.data[screenUrl];
      return (
          <View style={styles.carouselView}>
            <Text
              style={styles.carouselText}>
              {screenData.announcements[index%screenData.announcements.length].description}
            </Text>
          </View>
      );
  }
  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }
  content(){
    const screenData=this.props.data[screenUrl];
    return(
      <Content >
        <View >
          {screenData.announcements.length!=0?
          <View style={styles.announcementsView}>
            <Text style={styles.announcementsText}>اطلاعیه ها</Text>
          </View >
          :
          <View/>
          }
          <View style={styles.carousel}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={screenData.announcements}
              renderItem={this.renderItem}
              sliderWidth={DEVICE_WIDTH}
              itemWidth={.8*DEVICE_WIDTH}
              contentContainerCustomStyle={styles.carouselContentContainerCustomStyle}
              autoplay={true}
              autoplayInterval={5000}
              loop={true}
            />
          </View>
          {screenData.my_final_near_installments.length!=0?
          <View style={{...styles.installmentsView,marginTop:screenData.announcements.length==0?DEVICE_HEIGHT/25:-DEVICE_HEIGHT/35}}>
            <Text style={styles.installmentsFirstText}>سر رسید قسط های من</Text>
            <Image source={ghestBanner} style={styles.installmentsImage} />
            <Text style={styles.installmentsSecondText}>قسط {screenData.my_final_near_installments[0].expired_at}به مبلغ{screenData.my_final_near_installments[0].amount}ریال</Text>
            <View>
              <TouchableOpacity
                style={styles.installmentsButton}
                activeOpacity={1}>
                  <Text style={styles.installmentsButtonText}>پرداخت قسط</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View/>
          }
          <View style={styles.classesView}>
            <Text style={styles.classesText}>کلاس های امروز شما</Text>
            <View style={styles.fixDivider}/>
            {screenData.live_classes_product_today.length==0?
              <Card containerStyle={styles.containerStyle}>
                <TouchableOpacity  style={styles.centerRow}>
                  <Text style={styles.noClassesText}>شما امروز هیچ کلاسی ندارید</Text>
                </TouchableOpacity>
              </Card>
            :
            <FlatList
              data={screenData.live_classes_product_today}
              keyExtractor={(item, index) => item.key}
              windowSize={10}
              shouldComponentUpdate={false}
              renderItem={({item}) =>
                <Card containerStyle={item.key==1?styles.containerFirstStyle:styles.containerStyle} >
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Class',{classNo:item.class_id})} style={styles.cardButton}>
                    <Image
                    style={styles.cardImage}
                    resizeMode="cover"
                    source={{uri:item.image}}
                    />
                    <View>
                      <Text style={styles.text}>{item.course_name}</Text>
                      <Text style={styles.textHoldTime}>ساعت {item.time}</Text>
                    </View>
                  </TouchableOpacity>
                </Card>}
              />
            }
          </View>
        </View>
        <View style={styles.responsiveDivider}/>
      </Content>
    )
  }
  render() {
    return (
      <GlobalScreen navigation={this.props.navigation} state={this.state} props={this.props} title='میز مطالعه' page={'1'}>

        {!this.props.fetching?this.content():null}
      </GlobalScreen>
    );
  }
}
const styles=StyleSheet.create({
  carouselText:{
    alignSelf:'center',fontFamily:'IRANYEKANMobileFN',color:'#666464',position:'absolute',top:'10%',width:.7*DEVICE_WIDTH,textAlign:'left'
  },
  carouselView:{
    height:.16*DEVICE_HEIGHT,
    backgroundColor:'rgba(242, 242, 242, .25)',
    borderRadius:15,
    borderWidth:0.5,
    borderColor:'rgba(56,103,214,.25)'
  },
  announcementsView:{
    marginTop:DEVICE_HEIGHT/35,paddingHorizontal:DEVICE_WIDTH/12,zIndex:1
  },
  announcementsText:{
    fontFamily:'IRANYekanMobileFN',color:'#313131',textAlign:'left'
  },
  carousel:{
    alignItems:'center',marginTop:DEVICE_HEIGHT/40,shadowColor:'rgba(0,0,0,.3)',shadowOffset:{width:4,height:2},shadowRadius:5,shadowOpacity:.5
  },
  carouselContentContainerCustomStyle:{
    borderRadius:20
  },
  installmentsView:{
    paddingHorizontal:DEVICE_WIDTH/12
  },
  installmentsFirstText:{
    fontFamily:'IRANYekanMobileFN',color:'#C62828',textAlign:'left'
  },
  installmentsImage:{
    width:.833*DEVICE_WIDTH,height:DEVICE_HEIGHT/6,resizeMode:'stretch'
  },
  installmentsSecondText:{
    fontFamily:'IRANYEKANMobileFN',fontSize:11,color:'#C62828',position:'absolute',left:DEVICE_WIDTH/9,top:DEVICE_HEIGHT/25
  },
  installmentsButton:{
    backgroundColor:'#14261',
    position:'absolute',
    top:-DEVICE_HEIGHT/25,
    alignItems:'center',
    height:DEVICE_HEIGHT/30,
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#474747',
    borderColor:'#474747',
    elevation:5,
    width:.3*DEVICE_WIDTH,
    borderRadius: 32,
    zIndex: 100,
    borderWidth:1,
  },
  installmentsButtonText:{
    color: 'white',alignSelf:'center',fontFamily:'IRANYEKANMobileFN'
  },
  classesView:{
    top:20,paddingHorizontal:DEVICE_WIDTH/25
  },
  classesText:{
    paddingHorizontal:DEVICE_WIDTH/25,fontFamily:'IRANYekanMobileFN',color:'#313131',textAlign:'left'
  },
  fixDivider:{
    height:20
  },
  containerStyle:{
    padding:0,margin:0,borderWidth:.5,width:.87*DEVICE_WIDTH,alignSelf:'center'
  },
  centerRow:{
    alignSelf:'center',flexDirection:'row'
  },
  noClassesText:{
    fontFamily:'IRANYekanMobileFN',textAlign:'center',fontSize:14
  },
  containerFirstStyle:{
    padding:0,margin:0,borderWidth:.5,borderTopLeftRadius:15,borderTopRightRadius:15,width:.87*DEVICE_WIDTH,alignSelf:'center'
  },
  cardButton:{
    flexDirection:'row',alignItems:'center',justifyContent:'center',margin:5
  },
  cardImage:{
    right:0,width:60,height:60,borderRadius:10
  },
  text:{
    fontSize:11,marginLeft:20,marginTop:2,color:'#111111',width:DEVICE_WIDTH/1.8,fontFamily:'IRANYEKANMobileFN',lineHeight:21,textAlign:'left'
  },
  textHoldTime:{
    fontSize:11,marginLeft:20,marginTop:2,color:'#077AFF',width:DEVICE_WIDTH/1.8,fontFamily:'IRANYEKANMobileFN',lineHeight:21,textAlign:'left'
  },
  responsiveDivider:{
    width:DEVICE_WIDTH,height:DEVICE_HEIGHT/20
  },
});
function mapStateToProps(state) {
    const { data , fetching } = state.classino;
    return { data , fetching};
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDashboard : () => dispatch(ClassinoActions.getRequest(screenUrl))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
