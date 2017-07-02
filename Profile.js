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


export default class ProfileText extends Component {
  render() {
    return (
      <Text>{this.props.statement}</Text>
    )
  }
}