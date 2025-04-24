import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from '../../styles/defultStyles';
import commonstyles from '../../styles/defultStyles';
import IMGS from '../../../assets/images';

const ValueComponentPrice = props => {
	let {item, delete_value, updateValue} = props;
	return (
		<>
			<TouchableOpacity style={{flexDirection: 'row-reverse'}} onPress={() => delete_value(props.item.id)}>
				<Image
					source={IMGS.Trash}
					style={{
						width: 28,
						height: 28,
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
			<View style={commonstyles.mb16}>
				<Text style={styles.name}>Price</Text>
				<TextInput style={styles.input} onChangeText={text => updateValue(item.id, 'price', text)} />
			</View>
		</>
	);
};

export default ValueComponentPrice;
