import React from 'react';
import {Text,View} from 'react-native';

import { Header } from './components/common';
import Venues from './components/venues';
// import venuesTest from './components/venuesTest';


const App = () => {
    return (
    	<View>
        	<Header headerText={"NUS VenueFinder"}/>
        	<Venues />
        </View>
    );
}

export default App;
