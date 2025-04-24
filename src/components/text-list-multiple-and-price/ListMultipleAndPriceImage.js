import React from 'react';
import {View, Text} from 'react-native';

import listPriceStyles from './styles';
import myColors from '../../styles/myColors';
import listStyles from '../text-list-multiple/styles';

import Option from './Option';

const ListMultipleAndPriceImage = props => {
	return (
		<>
			<View style={listStyles.headerView}>
				<View style={listStyles.headerView1}>
					<Text style={listStyles.title}>{props.title} </Text>
				</View>
				<View
					style={[
						{
							// height: 62,
							backgroundColor: myColors.clrWhite,
						},
						listStyles.item,
					]}>
					<Text style={listPriceStyles.title}>List Title</Text>
					<Text style={listPriceStyles.subtitle}>List Subtitle </Text>
				</View>
				<Option optionName={'Option 1'} price="+$1,2" />
				<Option optionName={'Option 2'} price="+$1,2" />
				<Option optionName={'Option 3'} price="+$1,2" />
			</View>
		</>
	);
};

export default ListMultipleAndPriceImage;
