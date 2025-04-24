import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput, FlatList, I18nManager, TouchableOpacity} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import {checkbox_data, time_slots_data} from '../../data/DummyData';
import myColors from '../../styles/myColors';
import CustomDropdown from '../../components/utils/CustomDropdown';
import TagItem from '../products/TagItem';
import AvailableDays from '../../components/available-days';
import {DeliveryMethodsService} from '../../services/ProductService';
import TimeWithInput from '../../components/common/TimeWithInput';
import TimeView from '../../components/available-time/TimeView';
import IMGS from '../../../assets/images';
import {strings} from '../../i18n';

const Appointment = props => {
	let tickedImg = require('../../../assets/images/checkbox-ticked.png');
	let untickedImg = require('../../../assets/images/checkbox.png');

	const [delivery, setDelivery] = React.useState(true);
	const [fastdelivery, setFastDelivery] = React.useState(false);
	const [vipdelivery, setVIPDelivery] = React.useState(false);
	const [bookticket, setBookTicket] = React.useState(true);
	const [sacrificedate, setSacrificeDate] = React.useState(false);

	const [daysSelectable, setdaysSelectable] = React.useState(false);

	const [orderLater, setorderLater] = React.useState(false);

	const [custommethods, setcustommethods] = React.useState([]);

	const [showdeliveryPrice, setshowdeliveryPrice] = React.useState(false);

	const {showAppointment, setshowAppointment, ada7y_days, set_ada7y_days, setselectedWeekdays, set_is_thirty_min, is_thirty_min} =
		props;

	let onSuccess = async response => {
		//setTags(response.data);

		let method_array = [];
		for (let index = 0; index < response.data.data.length; index++) {
			let element = response.data.data[index];
			let e1 = {
				id: element.id,
				name: element.name,
				name_en: element.name_en,
				selected: false,
			};
			method_array.push(e1);
		}
		setcustommethods(method_array);

		// console.log(response.data);
	};
	const onSelectEidDay = day => {
		if (ada7y_days?.includes(day)) {
			set_ada7y_days(prevState => prevState.filter(dday => dday !== day));
		} else {
			set_ada7y_days([...ada7y_days, day]);
		}
	};

	let onFailure = error => {
		console.log(error);
	};

	const fetchDeliveryMethods = () => {
		DeliveryMethodsService({}, onSuccess, onFailure);
	};

	useEffect(() => {
		fetchDeliveryMethods();
	}, []);

	// useEffect(() => {
	// 	console.log(' custommethods ');
	// 	console.log(custommethods);
	// }, [custommethods]);

	handleDeliveryMethod = item => {
		//let uindex = customtags.filter(item1 => item.id === item1.id);

		const counters = custommethods.map((c, i) => {
			if (c.id === item.id) {
				// Increment the clicked counter
				c.selected = !c.selected;
				return c;
			} else {
				// The rest haven't changed
				return c;
			}
		});
		setcustommethods(counters);
		//props.setselectedDeliveryMethods(nextCounters);
	};
	const {setdelivery, set_delivery_delay, set_delivery_delay_extra, set_delivery_delay_extra_time} = props;

	return (
		<View style={{}}>
			<Text style={styles.subheader}>{strings('Appointments')} </Text>
			{!showAppointment && (
				<TouchableOpacity
					onPress={() => setshowAppointment(!showAppointment)}
					style={[
						styles.saveBtn,
						{
							backgroundColor: myColors.greenBtnBg,
							marginBottom: 4,
						},
					]}>
					<Text style={commonstyles.longBtnTxt}> {strings('Add Appointments')} </Text>
				</TouchableOpacity>
			)}
			{showAppointment && (
				<TouchableOpacity
					onPress={() => setshowAppointment(!showAppointment)}
					style={[
						styles.saveBtn,
						{
							backgroundColor: myColors.greenBtnBg,
							marginBottom: 4,
						},
					]}>
					<Text style={commonstyles.longBtnTxt}>{strings('Cancel Special Appointments')} </Text>
				</TouchableOpacity>
			)}
			<TouchableOpacity onPress={() => set_is_thirty_min(!is_thirty_min)} style={[commonstyles.flewRow, {marginVertical: 12}]}>
				<Image
					source={is_thirty_min ? IMGS.CheckboxTicked : IMGS.Checkbox}
					style={{
						width: 24,
						height: 24,
					}}
				/>
				<Text style={styles.deliveryTxt}> {strings('Possibility of delivery in 30 minutes')} </Text>
			</TouchableOpacity>
			{showAppointment && (
				<View style={styles.formView}>
					<View style={commonstyles.mb16}>
						<CustomDropdown data={custommethods} setSelectedItem={id => props.set_shipping_method_id(id)} />
					</View>
					<Text
						style={[
							styles.productName,
							{
								marginTop: -16,
							},
						]}>
						Delivery
					</Text>
					<View style={{flex: 1}}>
						<FlatList
							numColumns={2}
							data={custommethods}
							renderItem={({item}) => (
								<TagItem
									title={I18nManager.isRTL ? item.name : item.name_en ? item.name_en : item.name}
									img={item.selected ? tickedImg : untickedImg}
									handlePress={() => handleDeliveryMethod(item)}
								/>
							)}
						/>
					</View>

					<View style={commonstyles.mb16}>
						<Text
							style={[
								styles.productName,
								{
									color: myColors.slate800,
									marginVertical: 16,
								},
							]}>
							{strings('Book a slaughter ticket')}
						</Text>
						<View style={commonstyles.flewRow}>
							<TouchableOpacity onPress={() => setshowdeliveryPrice(!showdeliveryPrice)}>
								<Image
									source={
										showdeliveryPrice
											? require('../../../assets/images/checkbox-ticked.png')
											: require('../../../assets/images/checkbox.png')
									}
									style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
								/>
							</TouchableOpacity>
							<View>
								<Text style={[styles.productName, {}]}>{strings('Delivery Price')}</Text>
							</View>
						</View>
						<TextInput
							editable={showdeliveryPrice ? true : false}
							selectTextOnFocus={showdeliveryPrice ? true : false}
							style={styles.input}
							placeholder="Type..."
							onChangeText={delivery => setdelivery(delivery)}
						/>
						<Text style={{marginTop: 4, marginBottom: 16}}>
							{strings('Remove the tag to get the value from top level')}
						</Text>

						<View style={commonstyles.flewRow}>
							<TouchableOpacity onPress={() => setorderLater(!orderLater)}>
								<Image
									source={orderLater ? tickedImg : untickedImg}
									style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
								/>
							</TouchableOpacity>
							<View>
								<Text style={[styles.productName, {}]}> {strings('Order after a few days')}</Text>
							</View>
						</View>
						<TextInput
							editable={orderLater ? true : false}
							style={styles.input}
							placeholder="Type..."
							onChangeText={delivery_delay => set_delivery_delay(delivery_delay)}
						/>
						<Text style={{marginTop: 4, marginBottom: 16}}>{strings('Set 0 to be able to order on the same day')}</Text>

						<View style={commonstyles.flewRow}>
							{/* <View>
								<Image
									source={require('../../../assets/images/checkbox.png')}
									style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
								/>
							</View> */}
							<View>
								<Text style={[styles.productName, {}]}> {strings('Day after hour')}</Text>
							</View>
						</View>
						<TextInput
							editable={orderLater ? true : false}
							style={[
								styles.input,
								{
									marginBottom: 16,
								},
							]}
							placeholder="Type..."
							onChangeText={delivery_delay_extra => set_delivery_delay_extra(delivery_delay_extra)}
						/>
						{/* <TimeWithInput label={''} placeholder={'Select Time'} bold={true} onSubmit={time => alert('hi ')} /> */}
						<View style={commonstyles.flewRow}>
							<TouchableOpacity onPress={() => setdaysSelectable(!daysSelectable)}>
								<Image
									source={daysSelectable ? IMGS.CheckboxTicked : IMGS.Checkbox}
									style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
								/>
							</TouchableOpacity>
							<View>
								<Text style={[styles.productName, {}]}> {strings('Available days in a week')}</Text>
							</View>
						</View>
						<Text style={{marginTop: 4, marginBottom: 16}}>{strings('uncheck to get the value from the top level')}</Text>
						<AvailableDays
							selectedDays={2}
							onSelectDay={() => console.log('hi ')}
							setselectedWeekdays={setselectedWeekdays}
							disabled={!daysSelectable}
						/>
						<View>
							<Text
								style={[
									styles.productName,
									{
										marginTop: 16,
									},
								]}>
								{' '}
								Visa
							</Text>
							<Text style={[styles.productName, {}]}> {strings('Eid Days')} </Text>
							<View style={commonstyles.flewRow}>
								<TouchableOpacity
									onPress={() => onSelectEidDay('1')}
									style={[
										commonstyles.flewRow,
										{
											marginRight: 16,
										},
									]}>
									<Image
										source={ada7y_days?.includes('1') ? tickedImg : untickedImg}
										style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
									/>
									<Text style={styles.productName}>1 </Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => onSelectEidDay('2')}
									style={[
										commonstyles.flewRow,
										{
											marginRight: 16,
										},
									]}>
									<Image
										source={ada7y_days?.includes('2') ? tickedImg : untickedImg}
										style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
									/>
									<Text style={styles.productName}>2 </Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => onSelectEidDay('3')}
									style={[
										commonstyles.flewRow,
										{
											marginRight: 16,
										},
									]}>
									<Image
										source={ada7y_days?.includes('3') ? tickedImg : untickedImg}
										style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
									/>
									<Text style={styles.productName}>3 </Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => onSelectEidDay('4')}
									style={[
										commonstyles.flewRow,
										{
											marginRight: 16,
										},
									]}>
									<Image
										source={ada7y_days?.includes('4') ? tickedImg : untickedImg}
										style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
									/>
									<Text style={styles.productName}>4 </Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			)}
		</View>
	);
};

export default Appointment;
