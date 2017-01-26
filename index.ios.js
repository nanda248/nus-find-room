/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

import Header from './src/components/header.js'

const App = () => {
    return (
        <Header headerText={"NUS VenueFinder"}/>
    );
}


AppRegistry.registerComponent('NUSFindRoom', () => App);
