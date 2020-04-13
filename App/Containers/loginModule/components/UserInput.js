import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Image, Dimensions} from 'react-native';

export default class UserInput extends Component {
  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor="#B7B7B7"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

UserInput.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input: {
    fontFamily:"IRANYekanMobileFN",
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: .66*DEVICE_WIDTH,
    height: 40,
    borderRadius: 23,
    borderColor:'#C2C2C2',
    borderWidth:1,
    color: '#007AFF',
    position:'absolute',
    left:-20,
    top:-10
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
});
