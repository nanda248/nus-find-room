import React, { Component } from 'react'
import {Dimensions, Text, View, TouchableHighlight, TouchableWithoutFeedback, UIManager, LayoutAnimation, Platform} from 'react-native'
import {Card, CardSection} from './common'

var width = Dimensions.get('window').width * 0.93;


class VenueAvailable extends Component{

	venueAvailability(venue, venueInfoData, daySelected){
		var times = ["0800", "0830", "0900", "0930", "1000", "1030", "1100", "1130", "1200", "1230", "1300", "1330", "1400", "1430", "1500", "1530", "1600", "1630", "1700", "1730", "1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300"]
		return times.map(time => {if (venueInfoData.venueInfo[venue][daySelected].availability[time] === "vacant") {
										return <Text key={time} style={{color:"green"}}>{time}, </Text>;
									} else {
										return <Text key={time} style={{color:"red"}}>{time}, </Text>;
									}
								})

	}

	render(){

		const {card, imageStyle, titleTextStyle, byTextStyle, mapTextStyle, messageTextStyle, contentStyle, imageContainerStyle, imgStyle} = styles;

		var venue = this.props.venue
		var venueInfoData = this.props.venueInfoData
		var daySelected = this.props.daySelected
		var timeSelected = this.props.timeSelected

		var availability = venueInfoData.venueInfo[venue][daySelected].availability[timeSelected]

		var dayWord = venueInfoData.venueInfo[venue][daySelected].day

		return (

			<Card>
				<CardSection>
					<Text style={titleTextStyle}> {venue} - {availability}</Text>
				</CardSection>
				<CardSection>
					<View style={contentStyle}>
						<Text style={messageTextStyle}>Availability for {dayWord}:</Text>
						<Text style={messageTextStyle}>
							{this.venueAvailability(venue, venueInfoData, daySelected)}
							<Text  style={{color:"green"}}>2230 </Text>
						</Text>
					</View>
				</CardSection>
			</Card>

    	);
	}
}



const styles = {
	contentStyle: {
		marginTop: 5,
		width: width
	},
	messageTextStyle: {
		fontSize: 12,
		marginBottom: 5,
	},
	titleTextStyle: {
		fontSize: 12,
		fontWeight: 'bold',
	},
	mapTextStyle: {
		fontSize: 10,
		color: '#333333',
		alignItems: 'flex-end' 
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