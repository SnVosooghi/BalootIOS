import React, { Component } from "react";
import {View, StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-elements';
import PickerBox from 'react-native-picker-box';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


export default class PickerBoxView extends Component{
  constructor(props){
    super(props);
    this.state={
      filterValues:['','',''],
    }
    this.myRefs=['','',''];
  }
  setRef(ref, index){
    var newFilterRefs=this.myRefs;
    newFilterRefs[index]=ref;
    this.myRefs=newFilterRefs;
  };
  setValue(value , index) {
    var newFilterValues=this.state.filterValues;
    newFilterValues[index]=value;
    this.setState({filterValues:newFilterValues});
  };
  topFilterShow(){
    console.log(this.state.filterValues);
    return(
      <View style={{marginTop:10,alignSelf:'center',zIndex:2,flexDirection:'row',width:.8*DEVICE_WIDTH}}>
        <View style={{flexDirection:'column',alignItems:'center'}}>
          <TouchableOpacity style={styles.searchButton} onPress={()=>this.myref1.openPicker()}>
            <Text style={styles.searchFilter}>{this.state.filterValues[0]==''?'انتخاب درس':this.state.filterValues[0]}</Text>
            <Icon containerStyle={{position:'absolute',right:0}} name='expand-more' color='#AAAAAA'/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'column',alignItems:'center',paddingHorizontal:10}}>
          <TouchableOpacity style={styles.searchButton} onPress={()=>this.myref2.openPicker()}>
            <Text style={styles.searchFilter}>{this.state.filterValues[1]==''?'انتخاب پایه':this.state.filterValues[0]}</Text>
            <Icon containerStyle={{position:'absolute',right:0}} name='expand-more' color='#AAAAAA'/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
        <TouchableOpacity style={styles.searchButton} onPress={()=>this.myref3.openPicker()}>
          <Text style={styles.searchFilter}>{this.state.filterValues[2]==''?'دوره ها':this.state.filterValues[0]}</Text>
          <Icon containerStyle={{position:'absolute',right:0}} name='expand-more' color='#AAAAAA'/>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
  render(){
    return(
      <React.Fragment>
      <PickerBox
        ref={ref => this.setRef(ref,0)}
        data={ this.props.lessons }
        onValueChange={(value) => this.setValue(value,0) }
        selectedValue={ this.state.filterValues[0] }
      />
      <PickerBox
        ref={ref => this.setRef(ref,1)}
        data={ this.props.grades }
        onValueChange={value => this.setValue(value,1) }
        selectedValue={ this.state.filterValues[1] }
      />
      <PickerBox
        ref={ref => this.setRef(ref,2)}
        data={ this.props.courses }
        onValueChange={value => this.setValue(value,2) }
        selectedValue={ this.state.filterValues[2] }
      />
      </React.Fragment>
    )
  }
}

const styles=StyleSheet.create({
  searchFilter:{
    alignSelf:'center',
    fontFamily:'IRANYEKANMobileFN',
    fontSize:10,
    color:'#666464',
    position:'absolute',
    left:5
  },
  searchButton:{
    backgroundColor:'white',
    width:DEVICE_WIDTH/4,
    height:DEVICE_HEIGHT/26,
    justifyContent: 'center',
    borderRadius:10,
    borderColor:'#A6A7A9',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
});
