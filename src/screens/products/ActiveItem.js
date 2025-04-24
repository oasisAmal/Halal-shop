import React from 'react';
import {Text} from 'native-base';
import {View, StyleSheet, Image} from 'react-native';

function ActiveItem(props) {
	return (
		<View style={{flexDirection: 'row', marginBottom: 20, marginLeft: 16}}>
			<View style={{flex: 0.5, marginRight: 16}}>
				<Text style={styles.mainTxt}> {props.mainText1} </Text>
				<Image
					source={
						props.active == 1
							? require('../../../assets/images/success.png')
							: require('../../../assets/images/delete_icon.png')
					}
					style={{
						width: 24,
						height: 24,
						//top: 5,
						marginLeft: 6,
						marginTop: 4,
						//position:'absolute'
					}}
				/>
			</View>
			{/* <View style={{flex: 0.5, marginRight: 16}}>
        <Text style={styles.mainTxt}>{props.mainText2} </Text>
        <Image
          source={require('../../../assets/images/success.png')}
          style={{
            width: 24,
            height: 24,
            //top: 5,
            marginRight: 6,
            marginTop: 4,
            //position:'absolute'
          }}
        />
      </View> */}
		</View>
	);
}

export default ActiveItem;

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
