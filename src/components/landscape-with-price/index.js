import React from 'react';
import {View, Text, Image} from 'react-native';

import listStyles from '../text-list-multiple/styles';
import {TextInput} from 'react-native';
import styles from '../../screens/edit-product-details/styles';
import commonstyles from '../../styles/defultStyles';
import landscapeStyles from './styles';
import ImageComponent from '../file-upload/ImageComponent';

const LandscapeWithPrice = props => {
	return (
		<View>
			<View style={listStyles.headerView}>
				<View
					style={[
						listStyles.headerView1,
						{
							height: 72,
						},
					]}>
					<Text style={listStyles.title}>Landscape Choice with Image-Title-Description-Price Badge</Text>
				</View>
			</View>
			<Image source={require('../../../assets/images/landscape-image.png')} style={landscapeStyles.landscapeImg} />
		</View>
	);
};

export default LandscapeWithPrice;
