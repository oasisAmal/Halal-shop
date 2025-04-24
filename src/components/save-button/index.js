import React from 'react';
import {View, Text, Image, Pressable, ActivityIndicator} from 'react-native';

import commonstyles from '../../styles/defultStyles';
import styles from './styles';
import {theme_color} from '../../mutils';
import {strings} from '../../i18n';

const SaveButton = props => {
	const {handlePress, bgcolor, disabled, isLoading = false} = props;
	return (
		<Pressable disabled={disabled} onPress={() => (!isLoading && handlePress ? handlePress() : '')}>
			<View
				style={[
					//styles.longBtn,
					styles.mainView,
					{
						marginBottom: props.mb ? props.mb : 16,
						backgroundColor: bgcolor ? bgcolor : theme_color,
					},
				]}>
				{isLoading ? (
					<ActivityIndicator size={'large'} color={'#FFFFFF'} />
				) : (
					<Text style={commonstyles.longBtnTxt}>{props.label ? props.label : strings('Save')}</Text>
				)}
			</View>
		</Pressable>
	);
};

export default SaveButton;
