'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

import {connect} from 'react-redux'

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var apiKey = "YOUR_API_KEY_HERE";

var vrScenes = {
    'ViroMediaPlayer': require('./js/ViroMediaPlayer/ViroTheatre'),

}





var Player = createReactClass({
  render: function() {

      return (
        <ViroVRSceneNavigator
          initialScene={{
            scene: vrScenes['ViroMediaPlayer'],
          }} />
      );

  }
});

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
