import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

import {strings} from '../../../i18n';

// Styles
import {styles} from './styles';

const ImagePicker = props => {
	console.log('ActionSheet props ===> ', props);

	const onClick = selectedPicker => {
		SheetManager.hide(props.sheetId, {
			payload: selectedPicker,
		});
	};

	return (
		<ActionSheet
			id={props.sheetId}
			useBottomSafeAreaPadding={true}
			containerStyle={{
				backgroundColor: '#F3F3F3',
			}}>
			<View style={styles.sheetContainer}>
				<View style={styles.content}>
					<View style={styles.buttonContainer}>
						<TouchableOpacity activeOpacity={0.8} style={[styles.primaryButton]} onPress={() => onClick('Gallery')}>
							<Text allowFontScaling={false} style={[styles.primaryButtonTxt]}>
								Gallery
							</Text>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.8} style={[styles.primaryButton]} onPress={() => onClick('Camera')}>
							<Text allowFontScaling={false} style={[styles.primaryButtonTxt]}>
								Camera
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ActionSheet>
	);
};

export default ImagePicker;
