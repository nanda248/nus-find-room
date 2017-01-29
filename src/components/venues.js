import React, { Component } from 'react'
import {Text, View, ListView} from 'react-native'

import VenueSingle from './venueSingle.js'


class Venues extends Component{

	constructor() {
	    super();
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      venues: ds.cloneWithRows([]),
	    };
	 } 

	componentWillMount(){
	    fetch('http://api.nusmods.com/venuesRaw.json')
	      .then((response) => response.json())
	      .then((responseJson) => {
	        this.setState({venues: this.state.venues.cloneWithRows(responseJson)})
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
			<ListView
		        dataSource={this.state.venues}
		        renderRow={(venue) => <VenueSingle key={venue.roomcode} venue={venue}/>}
		    />
    	);
	}


}

export default Venues;

