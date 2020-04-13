import React, { Component } from "react";
import {View , Text , TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
class BuyButton extends Component(){
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
      {(!this.props.purchased && !this.props.added)?
        <TouchableOpacity style={styles.button1}  >
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon size={12} name='add' color={'white'}/>
          <Text style={{fontSize:8,color:'white',fontFamily:"IRANYekanMobileFN"}}>افزودن به سبد خرید</Text>
          </View>
        </TouchableOpacity>
        :<View/>
      }
      {this.props.added?
        <TouchableOpacity style={styles.button2}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon size={12} name='check' color={'#0D4BDB'}/>
          <Text style={{fontSize:8,color:'#0D4BDB',fontFamily:"IRANYekanMobileFN"}}>به سبد افزوده شده</Text>
          </View>
        </TouchableOpacity>
        :<View/>
      }
      {this.props.purchased?
        <TouchableOpacity style={styles.button3}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon size={12} name='turned-in-not' color={'white'}/>
          <Text style={{fontSize:8,color:'white',fontFamily:"IRANYekanMobileFN"}}>قبلا خریداری شده</Text>
          </View>
        </TouchableOpacity>
        :<View/>
      }
    </View>);
  }
}
