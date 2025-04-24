import React, {useState, useReducer, useEffect} from 'react';

import {View, Text, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import {checkbox_data} from '../../../data/DummyData';
import SingleItem from '../../products/suggested-products/SingleItem';
import commonstyles from '../../../styles/defultStyles';
import dropdownStyles from '../../../styles/dropdownStyles';
import IMGS from '../../../../assets/images';

const DropdownItem = ({item, handleComplete}) => {
	return (
		<Pressable onPress={() => handleComplete()}>
			<View style={commonstyles.mainView}>
				<View style={{flex: 0.2}}>
					<Image style={styles.checkedImg} source={item.selected ? IMGS.CheckboxTicked : IMGS.Checkbox} />
				</View>
				<View style={{flex: 0.8}}>
					<Text style={dropdownStyles.rowTextStyle}>{item.name} </Text>
				</View>
			</View>
		</Pressable>
	);
};

export default DropdownItem;
