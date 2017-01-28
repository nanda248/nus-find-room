import React, { Component } from 'react'
import {Text, View} from 'react-native'

import VenueSingle from './venueSingle.js'


class Venues extends Component{

	state = {venues: []}

	componentWillMount(){
	    fetch('http://api.nusmods.com/venuesRaw.json')
	      .then((response) => response.json())
	      .then((responseJson) => {
	        this.setState({venues: responseJson})
	      })
	      .catch((error) => {
	        console.error(error);
	    });
	}

	renderVenues(){
		return this.state.venues.map(venue => <VenueSingle key={venue.roomcode} venue={venue}/>)
	}

	render(){
		console.log('try')
		return (
			<View>
				{this.renderVenues()}
	    	</View>
    	);
	}


}

export default Venues;

