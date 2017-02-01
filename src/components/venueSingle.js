import React from 'react'
import {Text, View, TouchableHighlight} from 'react-native'

const VenueSingle = (props) => {
	return (
		<TouchableHighlight underlayColor="#dddddd" style={{height: 30}}>
			<View >
	        	<Text style={{fontSize: 15, color: "#333333"}} numberOfLines={1}>
	          		{props.venue}
	        	</Text>
	        	<View style={{height: 1, backgroundColor: "#dddddd"}} />
	    	</View>
	    </TouchableHighlight>
    );
}



export default VenueSingle;