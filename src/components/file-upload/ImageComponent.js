import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from '../../screens/edit-product-details/styles';
import commonstyles from '../../styles/defultStyles';
import landscapeStyles from '../landscape-with-price/styles';
import FileUploadInput from './FileUploadInput';
import UploadedView from './UploadedView';

const ImageComponent = props => {
	return (
		<View style={commonstyles.mb16}>
			<Text style={[styles.productName, {}]}>{props.title ? props.title : 'Image'}</Text>
			<FileUploadInput setimage={props.setimage} />
			<UploadedView />
		</View>
	);
};

export default ImageComponent;
