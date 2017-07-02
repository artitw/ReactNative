/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {showPic: true};//initialization

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showPic: !previousState.showPic };
      });
    }, 1000);
  }

  render() {
    return (
      this.state.showPic &&
      <Image
          style={{width: 50, height: 50}}
          source={{uri: this.props.img_uri}}
        />
    )
  }
}