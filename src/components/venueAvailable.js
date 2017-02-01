import React, { Component } from 'react'
import {Text, View, ListView} from 'react-native'


class VenueAvailable extends Component{

	render(){
		var venue = this.props.venue;
		var availability = this.props.availability;

		// if (availability === 'occupied')
		// 	return <View></View>

		return (
			<View>
				<Text>{venue} - {availability}</Text>
			</View>
    	);
	}


}

export default VenueAvailable;

