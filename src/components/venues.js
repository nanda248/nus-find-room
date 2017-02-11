import React, { Component } from 'react'
import {Text, View, ListView, ScrollView} from 'react-native'
import {Card, CardSection} from './common'

import VenueSingle from './venueSingle.js'
import VenueAvailable from './venueAvailable.js'

import venueInfoData from '../data/venueInfoData.js'

var moment = require('moment');

class Venues extends Component{

	conmponentWillMount() {
	    // super();
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      venues: ds.cloneWithRows([]),
	      venueInfo: []
	    };
	 } 

	// componentWillMount(){
	//     fetch('http://api.nusmods.com/2016-2017/2/venues.json')
	//       .then((response) => response.json())
	//       .then((responseJson) => {
	//         this.setState({venues: this.state.venues.cloneWithRows(responseJson)})
	//       })
	//       .catch((error) => {
	//         console.error(error);
	//     });

	//     fetch('http://api.nusmods.com/2016-2017/2/venueInformation.json')
	//       .then((response) => response.json())
	//       .then((responseJson) => {
	//       	var room = "LT17"
	//         this.setState({venueInfo: responseJson[room]})
	//       })
	//       .catch((error) => {
	//         console.error(error);
	//     });
	    
	// }

	getAvailableVenues(){
		var currDay = moment().format('d') - 1 
		var currHour = moment().format('HH')
		var currMin = moment().format('mm') < 30 ? "00" : "30"
		var currTimeStart = currHour + currMin 

		var timeSelected = currTimeStart
		var daySelected = currDay

		var venues = this.props.venues

		return venues.map(venue => <VenueAvailable key={venue} venue={venue} venueInfoData={venueInfoData} daySelected={daySelected} timeSelected={timeSelected} availability={venueInfoData.venueInfo[venue][currDay].availability[currTimeStart]} />)

	}


	render(){

		const {page, bottomSpace} = styles;

		var currHour = moment().format('HH')
		var currMin = moment().format('mm') < 30 ? "00" : "30"
		var currTimeStart = currHour + currMin 

		return (
				<ScrollView  style={page}>
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
  },
  bottomSpace: {
  	marginBottom: 80
  }

};	

export default Venues;

