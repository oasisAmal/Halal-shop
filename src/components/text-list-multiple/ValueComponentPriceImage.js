import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from '../../styles/inputStyles';
import commonstyles from '../../styles/defultStyles';
import IMGS from '../../../assets/images';
import ImageComponent from '../file-upload/ImageComponent';

const ValueComponentPriceImage = props => {
	let {item, delete_value, updateValue, videoEnabled, descriptionEnabled} = props;
	const [image, setimage] = useState('');

	useEffect(() => {
		console.log(image);
		updateValue(item.id, 'image', image);
	}, [image]);
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
			{descriptionEnabled && (
				<>
					<View style={commonstyles.mb16}>
						<Text style={styles.name}>The Description</Text>
						<TextInput style={styles.input} onChangeText={text => updateValue(item.id, 'description', text)} />
					</View>
					<View style={commonstyles.mb16}>
						<Text style={styles.name}>Description In English</Text>
						<TextInput style={styles.input} onChangeText={text => updateValue(item.id, 'description_en', text)} />
					</View>
				</>
			)}
			<ImageComponent setimage={setimage} />
			{videoEnabled && (
				<View style={commonstyles.mb16}>
					<Text style={styles.name}>Video</Text>
					<TextInput style={styles.input} onChangeText={text => updateValue(item.id, 'vidro', text)} />
				</View>
			)}
		</>
	);
};

export default ValueComponentPriceImage;
