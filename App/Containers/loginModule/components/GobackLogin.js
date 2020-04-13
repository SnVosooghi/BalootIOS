import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
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

import {Icon} from 'react-native-elements';

import spinner from '../images/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class GobackLogin extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPressIn = this._onPressIn.bind(this);
  }

  _onPressIn() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);

    setTimeout(() => {
      Actions.secondScreen();
      this.setState({isLoading: false});
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);
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
          <TouchableOpacity
            containerStyle={{marginTop:'90%'}}
            style={styles.button}
            onPressIn={this.props.onPressIn}
            activeOpacity={1}>
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
                <View style={{flexDirection:'row'}}>
                <Icon containerStyle={{alignSelf:'center',position:'absolute',right:130}} name='arrow-back' size={26} color='#F47E30'/>
                <Text style={styles.text}>بازگشت به صفحه قبل</Text>
                </View>
            )}
          </TouchableOpacity>
        </Animated.View>

        <Text style={{color:'#6D6D6D',alignSelf:'center',fontSize:12,marginTop:.015*DEVICE_HEIGHT,fontFamily:"IRANYekanMobileFN"}}>تماس با پشتیبانی</Text>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:.015*DEVICE_HEIGHT}}>
        <Icon name='phone' size={16}/>
        <Text style={{color:'#6D6D6D',alignSelf:'center',fontFamily:"IRANYekanMobileFN",fontSize:14}}> 021 - 91008020</Text>
        </View>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:.015*DEVICE_HEIGHT}}>
        <Icon name='phone' size={16}/>
        <Text style={{color:'#6D6D6D',alignSelf:'center',fontFamily:"IRANYekanMobileFN",fontSize:14}}> 021 - 22221616</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:.03*DEVICE_HEIGHT,
    alignSelf:'center',
    height:43*DEVICE_HEIGHT/812,
  },
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor:'#F47E30',
    width:.65*DEVICE_WIDTH,
    height: '100%',
    borderRadius: 22,
    zIndex: 100,
    borderWidth:1
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F47E30',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F47E30',
  },
  text: {
    color: '#F47E30',
    alignSelf:'center',
    fontFamily:"IRANYekanMobileFN"
  },
  image: {
    width: 24,
    height: 24,
  },
});
