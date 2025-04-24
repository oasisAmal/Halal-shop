import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import timeStyles from './styles';
import commonstyles from '../../styles/defultStyles';
import {theme_color} from '../../mutils';

const TimeView = props => {
	const {hour, setHour, minutes, setMinutes, meridiem, setMeridiem, onSubmit, onCancel} = props;
	return (
		<View style={timeStyles.timeView}>
			<View style={timeStyles.enterView}>
				<Text style={timeStyles.enterTxt}>ENTER TIME</Text>
			</View>
			<View style={[commonstyles.flewRow, {marginBottom: 24}]}>
				<View style={{flexDirection: 'column', marginLeft: 16}}>
					<View style={[{}, timeStyles.hour]}>
						<TextInput
							style={[timeStyles.hourTxt, timeStyles.inputfield]}
							defaultValue={hour ? hour : 1}
							value={hour ? hour : 1}
							onChangeText={txt => setHour(txt)}
						/>
					</View>
					<Text style={timeStyles.subTxt}>Hour</Text>
				</View>

				<View style={[{width: 20, height: 80, alignItems: 'center', justifyContent: 'center'}]}>
					<Text style={timeStyles.hourTxt}>:</Text>
				</View>
				<View style={{flexDirection: 'column'}}>
					<View style={[{}, timeStyles.hour]}>
						<TextInput
							style={[timeStyles.hourTxt, timeStyles.inputfield]}
							defaultValue={minutes}
							value={minutes}
							onChangeText={txt => setMinutes(txt)}
						/>
					</View>
					<Text style={timeStyles.subTxt}>Minutes</Text>
				</View>

				<View style={timeStyles.column}>
					<TouchableOpacity
						activeOpacity={0.8}
						style={[timeStyles.subColumn, meridiem === 'am' ? {backgroundColor: '#E7F0FE'} : {}]}
						onPress={() => setMeridiem('am')}>
						<Text style={[timeStyles.columnTxt, meridiem === 'am' ? {color: theme_color} : {}]}>AM</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.8}
						style={[timeStyles.subColumn, meridiem === 'pm' ? {backgroundColor: '#E7F0FE'} : {}]}
						onPress={() => setMeridiem('pm')}>
						<Text style={[timeStyles.columnTxt, meridiem === 'pm' ? {color: theme_color} : {}]}>PM</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={[{flexDirection: 'row-reverse'}]}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={[timeStyles.actionBtn, {}]}
					onPress={() => {
						onSubmit();
						onCancel();
					}}>
					<Text style={[timeStyles.actionBtnTxt, {}]}>OK</Text>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.8} style={[timeStyles.actionBtn, {}]} onPress={onCancel}>
					<Text style={[timeStyles.actionBtnTxt, {}]}>CANCEL</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TimeView;
