import React, { Component } from 'react'
import {Text, View, ListView} from 'react-native'


class VenueAvailable extends Component{

	venueAvailability(venue, venueInfoData, daySelected){
		var times = ["0800", "0830", "0900", "0930", "1000", "1030", "1100", "1130", "1200", "1230", "1300", "1330", "1400", "1430", "1500", "1530", "1600", "1630", "1700", "1730", "1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300", "2330"]
		return times.map(time => <Text>{time}: {venueInfoData.venueInfo[venue][daySelected].availability[time]}</Text>)

	}

	render(){


		var venue = this.props.venue
		var venueInfoData = this.props.venueInfoData
		var daySelected = this.props.daySelected
		var timeSelected = this.props.timeSelected

		var availability = venueInfoData.venueInfo[venue][daySelected].availability[timeSelected]

		var dayWord = venueInfoData.venueInfo[venue][daySelected].day

		// if (availability === 'occupied')
		// 	return <View></View>

		return (
			<View>
				<Text>{venue} - {availability}</Text>
				<Text> Availability for {dayWord}</Text>
				{this.venueAvailability(venue, venueInfoData, daySelected)}
			</View>
    	);
	}


}

export default VenueAvailable;

