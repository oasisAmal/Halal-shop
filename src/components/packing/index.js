import React from 'react';
import {View, Image} from 'react-native';

import landscapeStyles from '../landscape-with-price/styles';

const Packing = props => {
	return (
		<View>
			<Image source={require('../../../assets/images/landscape-image.png')} style={landscapeStyles.landscapeImg} />
		</View>
	);
};

export default Packing;
