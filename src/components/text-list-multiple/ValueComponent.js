import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from '../../styles/inputStyles';
import commonstyles from '../../styles/defultStyles';
import IMGS from '../../../assets/images';

const ValueComponent = props => {
	let {item, delete_value, updateValue, priceEnabled} = props;
	return (
		<>
			<TouchableOpacity style={{flexDirection: 'row-reverse'}} onPress={() => delete_value(props.item.id)}>
				<Image
					source={IMGS.Trash}
					style={{
						width: 28,
						height: 28,
						//flexDirection: 'row-reverse',
					}}
				/>
			</TouchableOpacity>
			<View style={commonstyles.mb16}>
				<Text style={styles.name}>The Value</Text>
				<TextInput style={styles.input} onChangeText={text => updateValue(item.id, 'name', text)} />
			</View>
			<View style={commonstyles.mb16}>
				<Text style={styles.name}>Value In English</Text>
				<TextInput style={styles.input} onChangeText={text => updateValue(item.id, 'name_en', text)} />
			</View>
		</>
	);
};

export default ValueComponent;
