import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput, Alert, TouchableOpacity} from 'react-native';

import styles from '../../edit-product-details/styles';
import commonstyles from '../../../styles/defultStyles';
import myColors from '../../../styles/myColors';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import AvailableDaysComponent from '../../../components/available-days';
import {shipping_data} from '../../../data/DropdownData';
import DatePickerWithInput from '../../../components/datepicker-with-input';
import TimeWithInput from '../../../components/common/TimeWithInput';

import AvailableTimeSection from './AvailableTimeSection';
import CreateButton from '../../../components/create-button';
import CreateAppointmentInformation from './CreateAppointmentInformation';
import {strings} from '../../../i18n';
import APIKit from '../../../utils/APIKit';
import SaveButton from '../../../components/save-button';
import Toast from 'react-native-toast-message';

const Appointment = props => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [appointmentOpened, setAppointmentOpened] = useState(false);

	const [selectedShippingMethod, setSelectedShippingMethod] = useState(undefined);
	const [appointmentData, setAppointmentData] = useState(undefined);

	const [deliveryTimesData, setDeliveryTimesData] = useState([]);

	const [deliveryPrice, setDeliveryPrice] = useState('');
	const [hoursBeforeOrder, setHoursBeforeOrder] = useState('');
	const [deliveryDelay, setDeliveryDelay] = useState('');
	const [deliveryDelayExtra, setDeliveryDelayExtra] = useState('');
	const [deliveryDelayExtraTime, setDeliveryDelayExtraTime] = useState('');
	const [deliveryWeeks, setDeliveryWeeks] = useState([]);
	const [maxDate, setMaxDate] = useState('');
	const [maxDays, setMaxDays] = useState('');

	const fetchShippingMethods = async () => {
		try {
			const response = await APIKit.get(`api/shipping_methods`);
			if (response && response.data) {
				if (response.data.data.length > 0) {
					setSelectedShippingMethod(response.data.data[0]);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchShippingMethods();
	}, []);

	const fetchAppointments = async () => {
		try {
			const response = await APIKit.post(`shopapi/shops_app/account/shops/appointments/${props.shop.id}`, {
				shipping_method_id: selectedShippingMethod.id,
			});
			if (response && response.data) {
				setAppointmentData(response.data.data);

				if (response.data.data.delivery_times) {
					setDeliveryTimesData(response.data.data.delivery_times);
				}
			}

			// setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (selectedShippingMethod) {
			fetchAppointments();
		}
	}, [selectedShippingMethod]);

	const handleAppointment = () => {
		setAppointmentOpened(!appointmentOpened);
	};

	const onSelectShipping = selectedShipping => {
		setSelectedShippingMethod(selectedShipping);
		handleAppointment();
	};

	const onSubmit = async () => {
		// "payments": [
		// 	"1",
		// 	"2"
		// ],

		const data = {
			delivery_times: deliveryTimesData,
			delivery: deliveryPrice,
			// hours_before_order: hoursBeforeOrder ? hoursBeforeOrder : 0,
			delivery_delay: deliveryDelay ? deliveryDelay : 0,
			delivery_delay_extra: deliveryDelayExtra,
			delivery_delay_extra_time: deliveryDelayExtraTime,
			delivery_weeks: deliveryWeeks,
			date_style: 'date',
			max_date: maxDate,
			max_days: maxDays,
		};
		setIsSubmitting(true);
		try {
			await APIKit.post(`shopapi/shops_app/account/shops/update/appointments/${props.shop.id}`, {
				shipping_method_id: selectedShippingMethod.id,
				data: data,
			});
			setIsSubmitting(false);
			Toast.show({
				type: 'success',
				text1: strings('Data has been updated successfully'),
			});
		} catch (error) {
			console.log(error);
		}
	};

	const onDeleteAppointment = async () => {
		setSelectedShippingMethod(undefined);
		try {
			await APIKit.post(`shopapi/shops_app/account/shops/update/appointments/${props.shop.id}`, {
				shipping_method_id: selectedShippingMethod.id,
				data: null,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const onDelete = () => {
		Alert.alert(strings('CANCEL Appointment'), strings('Are you sure you want to cancel this appointment'), [
			{
				text: strings('CANCEL'),
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{text: strings('OK'), onPress: () => onDeleteAppointment(), style: 'destructive'},
		]);
	};

	const onNewTime = data => {
		setDeliveryTimesData(prevState => {
			return [...prevState, data];
		});
	};

	const onDeleteTime = index => {
		setDeliveryTimesData(prevState => prevState.filter((_, itemIndex) => itemIndex !== index));
	};

	return (
		<View style={{}}>
			<CreateButton mh={2} label={strings('Appointment')} handlePress={() => handleAppointment()} />
			{appointmentOpened && <CreateAppointmentInformation onSubmit={onSelectShipping} toggleModal={() => handleAppointment()} />}

			{selectedShippingMethod && appointmentData ? (
				<React.Fragment>
					<View style={styles.formView}>
						<View style={[]}>
							<Text
								style={[
									styles.productName,
									{
										color: myColors.slate800,
										marginBottom: 16,
									},
								]}>
								{selectedShippingMethod.name}
							</Text>
							<View style={[commonstyles.mb16]}>
								<Text style={[styles.productName, {}]}>{strings('Delivery Price')}</Text>
								<TextInput
									style={styles.input}
									placeholder="Type..."
									value={deliveryPrice}
									onChangeText={txt => setDeliveryPrice(txt)}
								/>
							</View>
							<View style={[commonstyles.mb16]}>
								<Text style={[styles.productName, {}]}>{strings('Request after how many days')}</Text>
								<TextInput
									style={styles.input}
									placeholder="Type..."
									value={deliveryDelay}
									onChangeText={txt => setDeliveryDelay(txt)}
								/>
								<Text style={{marginTop: 0}}>{strings('Set 0 to be able to order on the same day')}</Text>
							</View>
							<View style={commonstyles.mb16}>
								<Text style={[styles.productName, {}]}>{strings('Increase Days')}</Text>
								<TextInput
									style={styles.input}
									placeholder="Type..."
									value={deliveryDelayExtra}
									onChangeText={txt => setDeliveryDelayExtra(txt)}
								/>
							</View>
							<View
								style={{
									marginTop: -20,
									marginBottom: 8,
								}}>
								<TimeWithInput
									label={strings('After The Hour')}
									placeholder={deliveryDelayExtraTime ? deliveryDelayExtraTime : strings('Select Time')}
									bold={true}
									onSubmit={time => setDeliveryDelayExtraTime(time)}
								/>
							</View>
							<View style={commonstyles.flewRow}>
								<Text style={[styles.productName, {}]}>{strings('Available days in a week')}</Text>
							</View>
							<Text style={{marginBottom: 4}}>{strings('uncheck to get the value from the top level')}</Text>
							<View style={[{marginBottom: 8}]}>
								<AvailableDaysComponent
									onSelectDay={day => {
										if (deliveryWeeks.includes(day)) {
											setDeliveryWeeks(prevState => prevState.filter(dday => dday !== day));
										} else {
											setDeliveryWeeks(prevState => {
												return [...prevState, day];
											});
										}
									}}
									selectedDays={deliveryWeeks}
								/>
							</View>

							<View style={{}}>
								<Text style={[styles.productName, {marginBottom: 0}]}>{strings('The Maximum Order Date')}</Text>
								<DatePickerWithInput setSelectedDate={date => setMaxDate(date)} />
							</View>

							<Text style={{marginBottom: 0}}></Text>
							<View style={commonstyles.flewRow}>
								<Text style={[styles.productName, {}]}>
									{strings('Or the maximum number of days for the request')}
								</Text>
							</View>
							<TextInput
								style={styles.input}
								placeholder="Type..."
								value={maxDays}
								onChangeText={txt => setMaxDays(txt)}
							/>
							<Text style={{marginTop: 4, marginBottom: 16}}></Text>
						</View>
					</View>

					<View>
						<AvailableTimeSection
							deliveryTimesData={deliveryTimesData}
							onNewTime={onNewTime}
							onDeleteTime={onDeleteTime}
						/>
					</View>

					<TouchableOpacity
						activeOpacity={0.8}
						style={[
							styles.saveBtn,
							{
								backgroundColor: myColors.greenBtnBg,
							},
						]}
						onPress={onDelete}>
						<Text style={commonstyles.longBtnTxt}>{strings('Cancel Special Appointments')}</Text>
					</TouchableOpacity>

					<SaveButton isLoading={isSubmitting} handlePress={onSubmit} />
				</React.Fragment>
			) : null}
		</View>
	);
};

export default Appointment;
