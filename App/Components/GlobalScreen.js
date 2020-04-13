import React, { Component } from "react";
import {  View , Image , Dimensions} from "react-native";
import HeaderTabBar from './HeaderTabBar';
import FooterNavBar from "./FooterNavBar";
import { Container} from "native-base";
const loadimg = require("./../../assets/logo-classino-loading.gif");
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;




export default class extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HeaderTabBar navigation={this.props.navigation} title={this.props.title} />
        {!this.props.props.fetching?
        <Container>
          {this.props.children}

          <FooterNavBar navigation={this.props.navigation} page={this.props.page}/>
        </Container>
        :<Image source={loadimg} style={{resizeMode:'contain' ,alignSelf:'center',width:.7*DEVICE_WIDTH}}/>}
      </View>
    )
  }
}
