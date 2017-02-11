import React from 'react';
import {Text,View} from 'react-native';

import { Header } from './components/common';
import Tabview from './components/tabview';

// import venuesTest from './components/venuesTest';


const App = () => {
    return (
    	<View>
        	<Header headerText={"NUS VenueFinder"}/>
        	<Tabview />
        </View>
    );
}

export default App;
