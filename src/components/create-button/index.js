import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import commonstyles from '../../styles/defultStyles';
import styles from './styles';
import {strings} from '../../i18n';

const CreateButton = props => {
	const {handlePress} = props;
	return (
		<Pressable onPress={() => (handlePress ? handlePress() : '')}>
			<View
				style={[
					commonstyles.longBtn,
					styles.mainView,
					{
						marginHorizontal: props.mh ? props.mh : 0,
						//borderRadius: 6,
					},
				]}>
				<View style={styles.subview}>
					<Text style={commonstyles.longBtnTxt}>{props.label ? props.label : strings('Create')}</Text>
					{props.hideImg ? '' : <Image source={require('../../../assets/images/plusIcon.png')} style={styles.img} />}
				</View>
			</View>
		</Pressable>
	);
};

export default CreateButton;
