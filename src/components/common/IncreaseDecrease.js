import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import giftstyles from '../../screens/gifts/styles';
import buttonStyles from '../../styles/buttonStyles';

const IncreaseDecrease = props => {
	const {value = 1, minValue = 0, maxValue, icon, onValueChange = () => {}} = props;

	const [count, setCount] = useState(1);

	useEffect(() => {
		setCount(value);
	}, [value]);

	useEffect(() => {
		if (value !== count) {
			onValueChange(count);
		}
	}, [value, count]);

	const onIncrease = () => {
		if (maxValue) {
			if (count < maxValue) {
				setCount(prevState => prevState + 1);
			}
		} else {
			setCount(prevState => prevState + 1);
		}
	};

	const onDecrease = () => {
		if (value > minValue) {
			setCount(prevState => prevState - 1);
		}
	};

	return (
		<View style={{}}>
			<View style={buttonStyles.counterContainer}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={onIncrease}
					style={{width: 39, alignItems: 'center', justifyContent: 'center'}}>
					<Image source={icon ? icon : require('../../../assets/images/plus.png')} style={buttonStyles.opBtn} />
				</TouchableOpacity>
				<View style={{height: '100%', width: 1, backgroundColor: '#000000'}} />
				<Text style={giftstyles.countValueTxt}>{count}</Text>
				<View style={{height: '100%', width: 1, backgroundColor: '#000000'}} />
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={onDecrease}
					style={{width: 39, alignItems: 'center', justifyContent: 'center'}}>
					<Image source={icon ? icon : require('../../../assets/images/minus.png')} style={buttonStyles.opBtn} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default IncreaseDecrease;
