import React, { Component } from 'react'
import {Text, View, TouchableHighlight, TouchableWithoutFeedback, UIManager, LayoutAnimation, Platform} from 'react-native'
import {Card, CardSection} from './common'

class VenueAvailable extends Component{

	venueAvailability(venue, venueInfoData, daySelected){
		var times = ["0800", "0830", "0900", "0930", "1000", "1030", "1100", "1130", "1200", "1230", "1300", "1330", "1400", "1430", "1500", "1530", "1600", "1630", "1700", "1730", "1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300", "2330"]
		return times.map(time => <Text key={time}>{time}: {venueInfoData.venueInfo[venue][daySelected].availability[time]}</Text>)

	}

	render(){

		var venue = this.props.venue
		var venueInfoData = this.props.venueInfoData
		var daySelected = this.props.daySelected
		var timeSelected = this.props.timeSelected

		var availability = venueInfoData.venueInfo[venue][daySelected].availability[timeSelected]

		var dayWord = venueInfoData.venueInfo[venue][daySelected].day
		const {imageStyle , titleTextStyle, contentStyle, imageContainerStyle, imgStyle} = styles;

		return (

			<CardSection>
				<View style={contentStyle}>
					<Text style={titleTextStyle}>
						{venue} - {availability}
					</Text>
					{/*
					<Text>Venue Availability for {dayWord}</Text>
					{this.venueAvailability(venue, venueInfoData, daySelected)}
				*/}
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

