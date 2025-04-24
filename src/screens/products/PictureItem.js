import React from 'react';
import {Text} from 'native-base';
import {View, StyleSheet, Image} from 'react-native';

function PictureItem(props) {
	return (
		<View style={{flexDirection: 'row', marginBottom: 20, marginLeft: 16}}>
			<View style={{flex: 0.5, marginRight: 16}}>
				<Text style={styles.mainTxt}> {props.mainText1} </Text>
				<Text style={styles.subTxt}> {props.subText1} </Text>
			</View>
			<View style={{flex: 0.5, marginRight: 16}}>
				<Text style={styles.mainTxt}>{props.mainText2} </Text>
				<Image
					source={{uri: props.image}}
					//source={{uri: props.image}}
					style={{
						width: 103,
						height: 53,
						//top: 5,
						marginRight: 6,
						marginTop: 4,
						//position:'absolute'
					}}
				/>
			</View>
		</View>
	);
}

export default PictureItem;

const styles = StyleSheet.create({
	mainTxt: {
		fontFamily: 'Inter',
		textAlign: 'left',
		fontSize: 16,
		//: 500,
		margin: 4,
		color: '#334155',
	},
	subTxt: {
		fontFamily: 'Inter',
		textAlign: 'left',
		fontSize: 14,
		//: 400,
		margin: 4,
		color: '#64748B',
	},
});
