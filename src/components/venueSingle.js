import React from 'react'
import {Text, View, TouchableHighlight} from 'react-native'

const VenueSingle = (props) => {
	return (
		<TouchableHighlight underlayColor="#dddddd" style={{height: 50}}>
			<View >
	        	<Text style={{fontSize: 15, color: "#333333"}} numberOfLines={1}>
	          		{props.venue.roomname} 
	        	</Text>
	        	<Text style={{fontSize: 10, color: "#dddddd"}} numberOfLines={1}>
	          	 	{props.venue.dept}
	        	</Text>
	        	<View style={{height: 1, backgroundColor: "#dddddd"}} />
	    	</View>
	    </TouchableHighlight>
    );
}



export default VenueSingle;