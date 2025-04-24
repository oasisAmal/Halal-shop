import React from 'react';
import {View, Image} from 'react-native';

import commonstyles from '../../styles/defultStyles';
import cuttingStyles from './styles';

const Cutting = props => {
	return (
		<View>
			<Image source={require('../../../assets/images/youtube.png')} style={[cuttingStyles.ytimg, commonstyles.center]} />
		</View>
	);
};

export default Cutting;
