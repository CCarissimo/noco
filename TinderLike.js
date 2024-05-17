// TinderLike.js
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

const Foods = [
  { id: "1", uri: require('./assets/splash.png') },
  { id: "2", uri: require('./assets/splash.png') },
  { id: "3", uri: require('./assets/splash.png') },
  { id: "4", uri: require('./assets/splash.png') },
  { id: "5", uri: require('./assets/splash.png') },
];

render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60 }}>
        </View>
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
        </View>
        <View style={{ height: 60 }}>
        </View>
      </View>
  );
};

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

