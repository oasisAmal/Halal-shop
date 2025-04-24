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
import {DELETE_BRANCH_APPOINTMENTS, GET_BRANCH_APPOINTMENTS, UPDATE_BRANCH_APPOINTMENTS} from '../../../services/BranchService';

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

	useEffect(() => {
		if (appointmentData) {
			if (appointmentData.delivery_times) {
				setDeliveryTimesData(appointmentData.delivery_times);
			}
			if (appointmentData.delivery) setDeliveryPrice(`${appointmentData.delivery}`);
			if (appointmentData.delivery_delay) setDeliveryDelay(`${appointmentData.delivery_delay}`);
			if (appointmentData.delivery_delay_extra) setDeliveryDelayExtra(`${appointmentData.delivery_delay_extra}`);
			if (appointmentData.delivery_delay_extra_time) setDeliveryDelayExtraTime(`${appointmentData.delivery_delay_extra_time}`);
			if (appointmentData.delivery_weeks) {
				setDeliveryWeeks(appointmentData.delivery_weeks);
			}
			if (appointmentData.max_date) setMaxDate(`${appointmentData.max_date}`);
			if (appointmentData.max_days) setMaxDays(`${appointmentData.max_days}`);
		}
	}, [appointmentData]);

	const fetchAppointments = async () => {
		try {
			GET_BRANCH_APPOINTMENTS(props.shop.id, props.branch.id, selectedShippingMethod.id, response => {
				if (response && response.data) {
					setAppointmentData(response.data.data);

					if (response.data.data.delivery_times) {
						setDeliveryTimesData(response.data.data.delivery_times);
					}
				}
			});
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

		UPDATE_BRANCH_APPOINTMENTS(
			props.shop.id,
			props.branch.id,
			selectedShippingMethod.id,
			data,
			() => {
				setIsSubmitting(false);
			},
			error => {
				console.log(error);
				setIsSubmitting(false);
			},
		);
	};

	const onDeleteAppointment = async () => {
		setSelectedShippingMethod(undefined);
		DELETE_BRANCH_APPOINTMENTS(
			props.shop.id,
			props.branch.id,
			selectedShippingMethod.id,
			() => {},
			error => {
				console.log('Error ==> ', error);
			},
		);
	};

	const onDelete = () => {
		Alert.alert('Delete Appointment', 'Are you sure you want to delete this appointment?', [
			{
				text: strings('CANCEL'),
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{text: strings('Delete'), onPress: () => onDeleteAppointment(), style: 'destructive'},
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

			{selectedShippingMethod ? (
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
								<DatePickerWithInput setSelectedDate={date => setMaxDate(date)} selectedDate={maxDate} />
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

					<View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
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

					<SaveButton isLoading={isSubmitting} handlePress={onSubmit} label={strings('Save Appointment')} />
				</React.Fragment>
			) : null}
		</View>
	);
};

export default Appointment;
