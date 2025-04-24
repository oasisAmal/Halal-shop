import React from 'react';
import {View, Text} from 'react-native';

import listStyles from './styles';
import Option from './Option';

const TextListMultipleFile = props => {
	return (
		<View style={listStyles.headerView}>
			<View style={listStyles.headerView1}>
				<Text style={listStyles.title}>Text List Multiple</Text>
			</View>
			<Option optionName={'Option 1'} />
			<Option optionName={'Option 2'} />
			<Option optionName={'Option 3'} />
		</View>
	);
};

export default TextListMultipleFile;
