import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image, ScrollView} from 'react-native';

import {theme_color} from '../../mutils';

import {action_data} from '../../data/DummyData';
import {myfonts} from '../../assets/Fonts';
import myColors from '../../styles/myColors';
import DecisionButtons from '../decision-buttons';
import DatePickerWithLabel from '../common/DatePickerWithLabel';
import EmiratewithRegions from './dropdown-items/EmiratewithRegions';
import Status from './dropdown-items/Status';
import PaymentMethods from './dropdown-items/PaymentMethods';
import DropdownWithTimeIcon from '../utils/DropdownWithTimeIcon';
import DropdownWithLabel from '../common/DropdownWithLabel';
import modalStyles from '../../styles/modalStyles';
import {strings} from '../../i18n';
import {useDispatch, useSelector} from 'react-redux';

const Filter = props => {
	const dispatch = useDispatch();
	const shops = useSelector(state => state.shops);
	const [selectedDate, setSelectedDate] = useState('');
	const [emirateid, setEmirateId] = useState('');
	const [regionid, setRegionId] = useState('');
	const [statusId, setStatusId] = useState('');
	const [timeId, setTimeId] = useState('');
	const [paymentId, setPaymentId] = useState('');
	const [printedId, setPrintedId] = useState('');
	const [shopId, setshopId] = useState('');
	const [shop, setshop] = useState('');

	let handleEmiratesandRegions = (emirate_id, region_id) => {
		setEmirateId(emirate_id);
		setRegionId(region_id);
	};
	return (
		<View style={{marginHorizontal: 16, padding: 12, flex: 1}}>
			<Modal animationType="slide" transparent={true} visible={props.modalVisible} onRequestClose={() => {}}>
				<ScrollView>
					<View style={{marginRight: 16}}>
						<View style={styles.modalView}>
							<View style={{flexDirection: 'row'}}>
								<View style={{flex: 0.8}}>
									<Text
										style={[
											modalStyles.header,
											{
												marginLeft: -8,
											},
										]}>
										{strings('Filter')}
									</Text>
								</View>
								<Text
									style={{
										borderBottomColor: '#F5F5F5',
										borderBottomWidth: 1,
										marginTop: 8,
										marginBottom: 24,
									}}></Text>
								<View style={{flex: 0.2, flexDirection: 'row-reverse'}}>
									<Pressable onPress={() => props.toggleModal(false)}>
										<Image
											source={require('../../../assets/images/close.png')}
											style={{
												width: 24,
												height: 24,
												left: 6.75,
											}}
										/>
									</Pressable>
								</View>
							</View>
							<Status
								handlePress={statusId => {
									setStatusId(statusId);
								}}
								setSelectedItemText={status => {
									props.setselectedStatus(status);
								}}
							/>
							<DropdownWithTimeIcon
								setSelectedItem={timeId => {
									setTimeId(timeId);
								}}
							/>

							<DatePickerWithLabel
								label={strings('Date')}
								setSelectedDate={date => {
									setSelectedDate(date);
								}}
							/>
							<EmiratewithRegions
								handlePress={(emirate_id, region_id) => handleEmiratesandRegions(emirate_id, region_id)}
								setSelectedItemText={data => props.setselectedEmirate(data)}
								setselectedRegion={data => props.setselectedRegion(data)}
							/>
							<PaymentMethods
								setselectedPaymethod={data => props.setselectedPaymethod(data)}
								handlePress={paymentId => {
									setPaymentId(paymentId);
								}}
							/>
							<DropdownWithLabel
								label={strings('Printed')}
								data={action_data}
								defaultTxt={strings('Select one')}
								handlePress={item => setPrintedId(item)}
								is_printed={true}
							/>
							{shops && shops.length > 1 && (
								<DropdownWithLabel
									label={strings('Shop')}
									data={shops}
									defaultTxt={strings('Select one')}
									handlePress={item => setshopId(item)}
									setSelectedItemText={item => setshop(item)}
								/>
							)}

							<DecisionButtons
								marginBottom={10}
								btnOk={strings('Next')}
								btnBack={strings('Back')}
								handleOk={() =>
									props.handleOk({
										statusId: statusId,
										timeId: timeId,
										selectedDate: selectedDate,
										emirateid: emirateid,
										regionid: regionid,
										paymentId: paymentId,
										printedId: printedId,
										shopId: shopId,
										shop: shop,
									})
								}
								handlePress={() => props.toggleModal(false)}
							/>
						</View>
					</View>
				</ScrollView>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	space: {
		fontFamily: myfonts.Regular,
		fontSize: 16,
		//: 500,
		textAlign: 'left',
		color: myColors.slate600,
		flex: 0.7,
	},
	dateStyle: {
		fontFamily: myfonts.Regular,
		fontSize: 16,
		//: 500,
		textAlign: 'left',
		color: myColors.slate600,
		left: -56,
	},
	btn: {
		width: 140,
		//(Dimensions.get('window').width - 80)/2 ,
		paddingVertical: 12,
		height: 45,
		paddingHorizontal: 24,
		borderRadius: 6,
		marginVertical: 8,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
		width: 361,
	},
	modalView: {
		paddingBottom: 120,
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 35,
		alignItems: 'center',
		shadowColor: theme_color,
		shadowOffset: {
			//   width: 0,
			//   height: 2,
		},
		shadowOpacity: 1,
		//shadowRadius: 4,
		elevation: 4,
	},
});

export default Filter;
