import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import CustomCheckbox from './custom-checkbox';
import {checkbox_data} from '../../data/DummyData';
import {CookingService} from '../../services/ProductService';
import {strings} from '../../i18n';

const CookingComponent = props => {
	const [cookingMethods, setMethods] = useState([]);
	const [showcooking, setshowcooking] = useState(false);

	const {set_has_cookings, set_enough_for_from, set_enough_for_to, set_cookings} = props;

	let onSuccess = async response => {
		setMethods(response.data.data);
		// console.log(response.data);
	};

	let onFailure = error => {
		console.log(error);
	};

	const fetchMethods = () => {
		CookingService({}, onSuccess, onFailure);
	};

	useEffect(() => {
		fetchMethods();
	}, []);
	useEffect(() => {
		console.log(cookingMethods);
	}, [cookingMethods]);

	const handleCooking = () => {
		setshowcooking(!showcooking);
		set_has_cookings(!showcooking);
	};

	return (
		<View style={{}}>
			<Text style={styles.subheader}>{strings('Cooking')}</Text>
			<TouchableOpacity style={[commonstyles.flewRow, {marginBottom: 12}]} onPress={() => handleCooking()}>
				<Image
					source={
						showcooking
							? require('../../../assets/images/checkbox-ticked.png')
							: require('../../../assets/images/checkbox.png')
					}
					style={{
						width: 24,
						height: 24,
					}}
				/>
				<Text style={styles.deliveryTxt}>{strings('Possibility of cooking')}</Text>
			</TouchableOpacity>

			{showcooking && (
				<View style={styles.formView}>
					<View style={commonstyles.mb16}>
						<Text style={styles.productName}> {strings('Cooking Method')}</Text>
						<CustomCheckbox data={cookingMethods} getselectedList={true} set_data={set_cookings} />
					</View>
					<View style={commonstyles.mb16}>
						<Text style={styles.productName}> {strings('Enough For One Person From')} </Text>
						<TextInput
							style={styles.input}
							placeholder={strings('Type')}
							onChangeText={from => set_enough_for_from(from)}
						/>
					</View>
					<View style={commonstyles.mb16}>
						<Text style={styles.productName}> {strings('Enough For One Person To')}</Text>
						<TextInput style={styles.input} placeholder={strings('Type')} onChangeText={to => set_enough_for_to(to)} />
					</View>
				</View>
			)}
		</View>
	);
};

export default CookingComponent;
