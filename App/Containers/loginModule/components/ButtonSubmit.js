import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View,
  Dimensions
} from 'react-native';


import spinner from '../images/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class ButtonSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      loadingButton:false
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPressIn = this._onPressIn.bind(this);
  }

  _onPressIn() {
    console.log(this.state.isLoading);
    if (this.state.isLoading) return;
    this.setState({isLoading: true});

  }
  qwe(){
    console.log('qwe');
    if(this.props.loadable){
      this.setState({isLoading:true});
    }
    this.setState({loadingButton:true});
    setTimeout(() => {
      this.setState({loadingButton:false})
    }, 3000);
    this.props.onPressIn();
  }
  qw(){
    console.log('qw');
    this.setState({isLoading:false});
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    return (
      <View style={styles.container}  >
        <Animated.View style={{width: changeWidth},{alignItems:'center'}} >
          {this.state.isLoading?
            <ActivityIndicator size="large" color="#0000ff" />:
            <TouchableOpacity
              containerStyle={{marginTop:'90%'}}
              style={this.props.notes.button}
              onPressIn={()=>this.qwe()}
              activeOpacity={1}>
                {!this.state.loadingButton?
                <Text style={this.props.notes.text}>{this.props.text}</Text>
                :<ActivityIndicator size="large" color="#0000ff" />}
            </TouchableOpacity>
          }
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:.0394*DEVICE_HEIGHT,
    alignSelf:'center',
    height:43*DEVICE_HEIGHT/812
  },
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#2B69FB',
    width:.65*DEVICE_WIDTH,
    height: '100%',
    borderRadius: 22,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#2B69FB',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#2B69FB',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    alignSelf:'center'
  },
  image: {
    width: 24,
    height: 24,
  },
});
