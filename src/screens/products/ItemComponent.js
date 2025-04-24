import React from 'react';
import {Text} from 'native-base';
import {View, StyleSheet} from 'react-native';

function ItemComponent(props) {
	return (
		<View style={{flexDirection: 'row', marginBottom: 20, marginLeft: 16}}>
			<View style={{flex: 0.5, marginRight: 16}}>
				<Text style={styles.mainTxt}> {props.mainText1} </Text>
				<Text style={styles.subTxt}> {props.subText1} </Text>
			</View>
			<View style={{flex: 0.5, marginRight: 16}}>
				<Text style={styles.mainTxt}>{props.mainText2} </Text>
				<Text style={styles.subTxt}> {props.subText2}</Text>
			</View>
		</View>
	);
}

export default ItemComponent;

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
