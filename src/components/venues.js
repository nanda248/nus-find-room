import React, { Component } from 'react'
import {Dimensions, Text, View, ListView, ScrollView} from 'react-native'
import {Card, CardSection} from './common'

import VenueAvailable from './venueAvailable.js'

import venueInfoData from '../data/venueInfoData.js'

var moment = require('moment');

height = Dimensions.get('window').height

class Venues extends Component{

	conmponentWillMount() {
	    // super();
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      venues: ds.cloneWithRows([]),
	      venueInfo: []
	    };
	 } 


	getAvailableVenues(){
		var currDay = moment().format('d') - 1 

		var currHour = moment().format('HH')
		var currMin = moment().format('mm') < 30 ? "00" : "30"
		var currTimeStart = currHour + currMin 

		var timeSelected = currTimeStart
		var daySelected = currDay

		var venues = this.props.venues

		if (daySelected < 0)
			return <Card ><CardSection ><View style={{height: 100, justifyContent: "center", alignItems: 'center', flex: 1}}><Text style={{fontWeight: "bold", textAlign: 'center'}}>Not Available on Sundays</Text></View></CardSection></Card>
		return venues.map(venue => <VenueAvailable key={venue} venue={venue} venueInfoData={venueInfoData} daySelected={daySelected} timeSelected={timeSelected} availability={venueInfoData.venueInfo[venue][daySelected].availability[timeSelected]} />)
		// return venues.map(venue => <VenueAvailable key={venue} venue={venue} venueInfoData={venueInfoData} daySelected={daySelected} timeSelected={timeSelected} availability={venueInfoData.venueInfo[venue][currDay].availability[currTimeStart]} />)

	}


	render(){

		const {page, bottomSpace} = styles;

		var currHour = moment().format('HH')
		var currMin = moment().format('mm') < 30 ? "00" : "30"
		var currTimeStart = currHour + currMin 

		return (
				<ScrollView style={page}>
					{/*<Text>Day: {moment().format('d')-1}</Text>
					<Text>Time: {currTimeStart}</Text>*/}
					{this.getAvailableVenues()}
					<View style={bottomSpace}>
					</View>
				</ScrollView>
			
    	);
	}


}

const styles = {
  page: {
    backgroundColor: '#ddd',
    height: height
  },
  bottomSpace: {
  	marginBottom: 80
  }

};	

export default Venues;

