import React from 'react';
import {Text, Pressable, View} from 'react-native';
import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import myColors from '../../styles/myColors';
import {theme_color} from '../../mutils';
import {strings} from '../../i18n';

const DecisionButtonsSmall = props => {
	const {btnOk, btnBack, handleOk, handlePress} = props;
	return (
		<View
			style={[
				commonstyles.flewRow,
				{
					marginTop: 40,
				},
			]}>
			<View
				style={[
					commonstyles.flex50,
					styles.btn,
					{
						backgroundColor: props.bgBackBtn ? props.bgBackBtn : 'transparent',
						borderColor: props.borderColor ? props.borderColor : myColors.slate500,
						borderWidth: 1,
						marginRight: 8,
					},
				]}>
				<Pressable onPress={handlePress}>
					<Text
						style={[
							commonstyles.longBtnTxt,
							{
								color: props.txtClr ? props.txtClr : myColors.slate500,
							},
						]}>
						{btnBack ? btnBack : strings('Back')}
					</Text>
				</Pressable>
			</View>
			<View
				style={[
					commonstyles.flex50,
					styles.btn,
					{
						backgroundColor: theme_color,
						marginLeft: 8,
					},
				]}>
				<Pressable onPress={handleOk ? handleOk : () => ''}>
					<Text style={commonstyles.longBtnTxt}>{btnOk ? btnOk : strings('Save')}</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default DecisionButtonsSmall;
