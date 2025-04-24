import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import daystyles from './styles';

import {strings} from '../../i18n';

const AvailableDaysComponent = props => {
	const tickedImg = require('../../../assets/images/checkbox-ticked.png');
	const untickedImg = require('../../../assets/images/checkbox.png');

	const [selectedDays, setSelectedDays] = useState(undefined);
	const {setselectedWeekdays, onSelectDay, disabled} = props;
	useEffect(() => {
		if (selectedDays?.length === 0) {
			setSelectedDays(props.selectedDays);
		}
	}, [props.selectedDays, selectedDays]);

	const onSelect = day => {
		if (selectedDays && selectedDays.length > 1 && selectedDays?.includes(day)) {
			setSelectedDays(prevState => prevState.filter(dday => dday !== day));
		} else {
			if (selectedDays && selectedDays.length >= 1) {
				setSelectedDays(prevState => {
					return [...prevState, day];
				});
			} else {
				setSelectedDays([day]);
			}
			//setSelectedDays([...selectedDays, day]);
		}

		onSelectDay && onSelectDay(day);
		setselectedWeekdays && setselectedWeekdays(selectedDays);
	};

	return (
		<View style={{}}>
			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity
					disabled={disabled}
					activeOpacity={0.8}
					onPress={() => onSelect('1')}
					style={[daystyles.mainview, {marginHorizontal: 0}]}>
					<Image
						source={selectedDays && selectedDays.length > 1 && selectedDays?.includes('1') ? tickedImg : untickedImg}
						style={daystyles.img}
					/>
					<Text style={daystyles.label}>{strings('Monday')}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					disabled={disabled}
					activeOpacity={0.8}
					onPress={() => onSelect('2')}
					style={[daystyles.mainview, {marginHorizontal: 8}]}>
					<Image
						source={selectedDays && selectedDays.length > 1 && selectedDays?.includes('2') ? tickedImg : untickedImg}
						style={daystyles.img}
					/>
					<Text style={daystyles.label}>{strings('Tuesday')}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					disabled={disabled}
					activeOpacity={0.8}
					onPress={() => onSelect('3')}
					style={[daystyles.mainview, {marginHorizontal: 0}]}>
					<Image
						source={selectedDays && selectedDays.length > 1 && selectedDays?.includes('3') ? tickedImg : untickedImg}
						style={daystyles.img}
					/>
					<Text style={daystyles.label}>{strings('Wednesday')}</Text>
				</TouchableOpacity>
			</View>
			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity
					disabled={disabled}
					activeOpacity={0.8}
					onPress={() => onSelect('4')}
					style={[daystyles.mainview, {marginHorizontal: 0}]}>
					<Image
						source={selectedDays && selectedDays.length > 1 && selectedDays?.includes('4') ? tickedImg : untickedImg}
						style={daystyles.img}
					/>
					<Text style={daystyles.label}>{strings('Thursday')}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					disabled={disabled}
					activeOpacity={0.8}
					onPress={() => onSelect('5')}
					style={[daystyles.mainview, {marginHorizontal: 8}]}>
					<Image
						source={selectedDays && selectedDays.length > 1 && selectedDays?.includes('5') ? tickedImg : untickedImg}
						style={daystyles.img}
					/>
					<Text style={daystyles.label}>{strings('Friday')}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					disabled={disabled}
					activeOpacity={0.8}
					onPress={() => onSelect('6')}
					style={[daystyles.mainview, {marginHorizontal: 0}]}>
					<Image
						source={selectedDays && selectedDays.length > 1 && selectedDays?.includes('6') ? tickedImg : untickedImg}
						style={daystyles.img}
					/>
					<Text style={daystyles.label}>{strings('Saturday')}</Text>
				</TouchableOpacity>
			</View>
			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity
					disabled={disabled}
					activeOpacity={0.8}
					onPress={() => onSelect('7')}
					style={[daystyles.mainview, {marginHorizontal: 0}]}>
					<Image
						source={selectedDays && selectedDays.length > 1 && selectedDays?.includes('7') ? tickedImg : untickedImg}
						style={daystyles.img}
					/>
					<Text style={daystyles.label}>{strings('Sunday')}</Text>
				</TouchableOpacity>
				<View style={[{marginHorizontal: 8}]}></View>
				<View style={[{marginHorizontal: 0}]}></View>
			</View>
		</View>
	);
};

export default AvailableDaysComponent;
