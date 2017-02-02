import React, { Component } from 'react'
import {Text, View, TouchableHighlight, TouchableWithoutFeedback, UIManager, LayoutAnimation, Platform} from 'react-native'
import {Card, CardSection} from './common'

class VenueAvailable extends Component{

	render(){

		const {imageStyle , titleTextStyle, contentStyle, imageContainerStyle, imgStyle} = styles;


		var venue = this.props.venue;
		var availability = this.props.availability;

		console.log(availability)
		// if (availability === 'occupied')
		// 	return <View></View>

		return (
			<CardSection>
				<View style={contentStyle}>
					<Text style={titleTextStyle}>
						{venue} - {availability}
					</Text>
				</View>
			</CardSection>
    	);
	}
}


const styles = {
	contentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	titleTextStyle: {
		fontSize: 18 
	},
	imageStyle: {
		height: 50,
		width: 50
	},
	imageContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imgStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};	

export default VenueAvailable;

