import React, {useEffect, useState} from 'react';
import {Text, Pressable, View, Image} from 'react-native';
import commonstyles from '../../styles/defultStyles';
import timeStyles from '../available-time/styles';
import TimeView from '../available-time/TimeView';
import {myfonts} from '../../assets/Fonts';
import inputStyles from '../../styles/inputStyles';

const TimeWithInput = props => {
	const [openTime, setTimeOpened] = React.useState(false);
	const {label, bold} = props;

	const [hour, setHour] = useState(1);
	const [minutes, setMinutes] = useState(0);
	const [meridiem, setMeridiem] = useState('am');

	const validateHour = () => {
		if (!/^[0-9]*$/.test(hour)) return setHour(0);
	};
	useEffect(() => {
		if (hour) {
			validateHour();
		}
	}, [hour]);

	const validateMinutes = () => {
		if (!/^[0-9]*$/.test(minutes)) return setMinutes(0);
	};
	useEffect(() => {
		if (minutes) {
			validateMinutes();
		}
	}, []);

	const onSubmit = () => {
		if (meridiem === 'pm') {
			const totalTime = `${parseInt(hour) + 12}:${minutes}`;
			props.onSubmit(totalTime);
		} else {
			const totalTime = `${hour}:${minutes}`;
			props.onSubmit(totalTime);
		}
	};
	return (
		<View style={[{marginTop: 10}]}>
			<Text
				style={[
					inputStyles.name,
					{
						fontFamily: bold ? myfonts.Medium : myfonts.Regular,
						marginBottom: props.mb ? props.mb : 0,
					},
				]}>
				{label ? label : ''}
			</Text>
			<Pressable onPress={() => setTimeOpened(!openTime)}>
				<View
					style={[
						commonstyles.input,
						timeStyles.input,
						{
							marginBottom: openTime ? -16 : 8,
						},
					]}>
					<Text style={timeStyles.timeTxt}>{props.placeholder ? props.placeholder : 'Select Time'}</Text>

					<Image source={require('../../../assets/images/time.png')} style={timeStyles.img} />
				</View>
			</Pressable>
			{openTime && (
				<TimeView
					hour={hour}
					setHour={setHour}
					minutes={minutes}
					setMinutes={setMinutes}
					meridiem={meridiem}
					setMeridiem={setMeridiem}
					onSubmit={onSubmit}
					onCancel={() => setTimeOpened(false)}
				/>
				// <Text>hi </Text>
			)}
		</View>
	);
};

export default TimeWithInput;
