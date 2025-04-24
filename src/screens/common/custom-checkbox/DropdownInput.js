import React, {useState, useReducer, useEffect} from 'react';

import {View, Text, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import {checkbox_data} from '../../../data/DummyData';
import SingleItem from '../../products/suggested-products/SingleItem';
import commonstyles from '../../../styles/defultStyles';
import dropdownStyles from '../../../styles/dropdownStyles';
import DropdownItem from './DropdownItem';
import {strings} from '../../../i18n';

const DropdownInput = props => {
	let {data, dropdownOpened, onPress} = props;
	// const [cookingMethods, setCookingMethods] = useState(data);

	// const handleComplete = item => {
	// 	//dispatch({type: 'COMPLETE', id: item.id});

	// 	setCookingMethods(prevSate =>
	// 		prevSate.map(todo => {
	// 			if (todo.id === item.id) {
	// 				return {...todo, selected: !todo.selected};
	// 			} else {
	// 				return todo;
	// 			}
	// 		}),
	// 	);
	// };

	return (
		<Pressable onPress={onPress}>
			<View style={styles.buttonStyle}>
				<Text style={styles.buttonTextStyle}>{strings('All Sections')} </Text>
				<Image
					source={
						dropdownOpened
							? require('../../../../assets/images/dropup.png')
							: require('../../../../assets/images/dropdown.png')
					}
					style={{
						marginTop: 16,
						width: 7.18,
						height: 4.59,
						right: 24,
						position: 'absolute',
					}}
				/>
			</View>
		</Pressable>
	);
};

export default DropdownInput;
