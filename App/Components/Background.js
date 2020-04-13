import React,{Component} from 'react';
import {Header,Icon} from 'react-native-elements';
import {Text,Dimensions,Image,TouchableOpacity,View,StyleSheet,findNodeHandle} from 'react-native';
import { BlurView } from "@react-native-community/blur";
const backgroundimage =require( './../../assets/LoginBackground.png');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class extends Component{
  constructor(props){
    super(props);
    this.state = { viewRef: null };
  }
  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }
  render(){
    return(
    <View style={{}}>

        <Image ref={img => {
            this.backgroundImage = img;
          }} source={backgroundimage} style={{position:'absolute',width:DEVICE_WIDTH,height:DEVICE_HEIGHT,resizeMode:'contain'}} onLoadEnd={this.imageLoaded.bind(this)} blurRadius={300}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    width:DEVICE_WIDTH,
    height:DEVICE_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
