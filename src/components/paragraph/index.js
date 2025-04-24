import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import listStyles from '../text-list-multiple/styles';
import listPriceStyles from '../text-list-multiple-and-price/styles';
import myColors from '../../styles/myColors';
import textareaStyles from '../text-area/styles';
import {TextInput} from 'react-native';
import styles from '../../screens/edit-product-details/styles';

const Paragraph = props => {
	const [name, setname] = useState('');
	const [nameEn, setnameEn] = useState('');

	useEffect(() => {
		props.setAvailablevalues([{value: name, value_en: nameEn}]);
		//console.log(name, nameEn);
	}, [name, nameEn]);

	return (
		<View>
			<View style={listStyles.headerView}>
				<View style={listStyles.headerView1}>
					<Text style={listStyles.title}>Title</Text>
				</View>
				<View
					style={[
						listStyles.headerView1,
						{
							backgroundColor: myColors.clrWhite,
						},
					]}>
					<Text style={listPriceStyles.subtitle}>Text</Text>
				</View>
			</View>
			<Text
				style={[
					styles.productName,
					{
						marginHorizontal: 16,
					},
				]}>
				Paragraph
			</Text>
			<TextInput style={textareaStyles.input} onChangeText={text => setname(text)} placeholder="Type..." />
			<Text
				style={[
					styles.productName,
					{
						marginHorizontal: 16,
					},
				]}>
				Paragraph in English
			</Text>
			<TextInput style={textareaStyles.input} placeholder="Type..." onChangeText={text => setnameEn(text)} />
		</View>
	);
};

export default Paragraph;
