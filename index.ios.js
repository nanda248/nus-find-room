/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Header from './src/components/header.js';
import Venues from './src/components/venues.js';


const App = () => {
    return (
    	<View>
        	<Header headerText={"NUS VenueFinder"}/>
        	<Venues />
        </View>
    );
}


AppRegistry.registerComponent('NUSFindRoom', () => App);
