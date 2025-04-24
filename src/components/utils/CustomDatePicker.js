import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import {Card, CardItem} from 'native-base';
import datePickerStyles from '../../styles/datePickerStyles';
import {strings} from '../../i18n';

const CustomDatePicker = props => {
	const show = props.show;

	return (
		<View style={{marginHorizontal: 8}}>
			{show && (
				<Card style={datePickerStyles.cardView}>
					<DatePicker
						onSelectedChange={date => props.setSelectedDate(date)}
						options={datePickerStyles.optionStyles}
						mode="calendar"
						minuteInterval={30}
						style={datePickerStyles.dateStyle}
					/>
					<CardItem footer>
						<View style={datePickerStyles.cardItem}>
							<TouchableOpacity
								onPress={() => {
									props.changeShowStatus(false);
								}}>
								<Text style={datePickerStyles.textOk}>{strings('OK')}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									props.changeShowStatus(false);
								}}>
								<Text style={datePickerStyles.textCancel}>{strings('CANCEL')}</Text>
							</TouchableOpacity>
						</View>
					</CardItem>
				</Card>
			)}
		</View>
	);
};
export default CustomDatePicker;
