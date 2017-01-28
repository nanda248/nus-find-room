import React from 'react'
import {Text, View} from 'react-native'

const VenueSingle = (props) => {
	return (
		<View >
        	<Text>
          		{props.venue.roomname} | {props.venue.dept}
        	</Text>
    	</View>
    );
}



export default VenueSingle;