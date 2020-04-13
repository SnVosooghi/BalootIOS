import React,{Component} from 'react';
import {Text,Dimensions,Image,TouchableOpacity,View , StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class extends Component{
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    return(
      <View style={styles.view}>
      <Image source={{uri:this.props.image}} style={styles.image}/>
      <View style={styles.countdownView}>
        <CountDown
          size={23}
          until={10000}
          onFinish={() => console.log('finished')}
          style={{flexDirection:'column'}}
          digitStyle={{backgroundColor: 'transparent',height:23,width:40,top:-5 }}
          digitTxtStyle={{color: '#666464',fontFamily:'IRANYEKANMobileFN'}}
          timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
          separatorStyle={{color: '#666464',fontFamily:'IRANYEKANMobileFN',top:-5}}
          timeToShow={['M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
        />
        <Text style={styles.text}>تا شروع کلاس باقی مانده</Text>
      </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  view:{
    height:.093*DEVICE_HEIGHT,width:.595*DEVICE_WIDTH,backgroundColor:'#F8F8F8',top:-(0.093*.5*DEVICE_HEIGHT),flexDirection:'row',alignItems:'center',justifyContent:'space-around',alignSelf:'flex-end',right:8,borderRadius:15,borderColor:'rgba(0,0,0,.1)',borderWidth:.5,shadowColor:'rgba(0,0,0,.1)',shadowOffset:{width:0,height:5},shadowRadius:10,shadowOpacity:1
  },
  countdownView:{
    alignItems:'center'
  },
  image:{
    width:.068*DEVICE_HEIGHT,height:.068*DEVICE_HEIGHT,borderRadius:.5*.068*DEVICE_HEIGHT
  }
});
