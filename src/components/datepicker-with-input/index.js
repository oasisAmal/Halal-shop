import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import CustomDatePicker from '../utils/CustomDatePicker';
import commonstyles from '../../styles/defultStyles';
import styles from './styles';
import {strings} from '../../i18n';

const DatePickerWithInput = props => {
	const [show, setShow] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState(false);

	useEffect(() => {
		if (props.selectedDate) {
			setSelectedDate(props.selectedDate);
		}
	}, [props.selectedDate]);

	let handleDate = date => {
		setSelectedDate(date);
		props.setSelectedDate && props.setSelectedDate(date);
	};

	return (
		<View style={{}}>
			<View style={[commonstyles.input, {flexDirection: 'row', marginBottom: 0}]}>
				<View style={{flex: 0.9}}>
					<Text
						style={{
							fontFamily: 'Inter-Medium',
							fontSize: 12,
							//: 400,
							marginHorizontal: 16,
							marginVertical: 12,
							textAlign: 'left',
							// flexDirection: 'row-reverse',
						}}>
						{selectedDate ? selectedDate : strings('Select Date')}
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => {
						setShow(!show);
					}}>
					<View style={{}}>
						<Image source={require('../../../assets/images/calender.png')} style={styles.calender} />
					</View>
				</TouchableOpacity>
			</View>
			<CustomDatePicker changeShowStatus={() => setShow(!show)} show={show} setSelectedDate={date => handleDate(date)} />
		</View>
	);
};
export default DatePickerWithInput;
