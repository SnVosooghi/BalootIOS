import React,{Component} from 'react';
import {Header,Icon} from 'react-native-elements';
import {Text,Dimensions,Image,TouchableOpacity,View} from 'react-native';
const img=require("./../../assets/xdV2/20and7/Rectangle-71.png");
const menu=require("./../../assets/xdV2/Group-3.png")
const logo=require("./../../assets/LogoClassinoRangi.png")
const circle = require("./../../assets/xdV2/20and7/Group-8.png");
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Header containerStyle={{height:.12*DEVICE_HEIGHT,backgroundColor:'#F6F8FC',borderColor:'rgba(0,0,0,0.1)',borderWidth:1}}
        leftComponent={
          <Icon hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }} onPress={()=>this.props.navigation.openDrawer()} size={24} name='dehaze' color="#2D98DA" />}
        centerComponent={<View>
        {this.props.text!=null?
          <Text>{this.props.text}</Text>:
          <Image source={logo} style={{height:.07*DEVICE_WIDTH,resizeMode:'contain',width:.2*DEVICE_WIDTH}} onPress={()=>console.log('1')}/>}
        </View>}
        rightComponent={<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'#077AFF',fontSize:15,fontFamily:'IRANYEKANMobileFN'}} onPress={()=>this.props.navigation.goBack(null)}>بازگشت</Text>
          <Icon name='chevron-left' color='#077AFF' onPress={()=>this.props.navigation.goBack(null)}/>
        </View>}
      />
    )
  }
}
