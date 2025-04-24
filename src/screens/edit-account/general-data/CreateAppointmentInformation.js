import React, {useEffect, useState} from 'react';
import {Text, Pressable, View, TextInput, TouchableOpacity} from 'react-native';
import commonstyles from '../../../styles/defultStyles';
import DecisionButtonsSmall from '../../../components/decision-buttons-small';
import CloseImage from '../../../components/common/CloseImage';
import {ScrollView} from 'react-native-gesture-handler';
import CheckBox from '../../../components/common/CheckBox';
import modalStyles from '../../../styles/modalStyles';
import APIKit from '../../../utils/APIKit';

import CustomDropdown from '../../../components/utils/CustomDropdown';
import {strings} from '../../../i18n';
import Modal from 'react-native-modal';
import myColors from '../../../styles/myColors';
import {fullWidth} from '../../../utils/commonFunctions';

const CreateAppointmentInformation = props => {
	const [shippingMethods, setShippingMethods] = useState([]);
	const [shippingMethodsList, setShippingMethodsList] = useState([]);
	const [selectedShippingMethod, setSelectedShippingMethod] = useState(undefined);

	const fetchShippingMethods = async () => {
		try {
			const response = await APIKit.get(`api/shipping_methods`);
			if (response && response.data) {
				setShippingMethods(response.data.data);
				const list = response.data.data.map(shipping => shipping.name);
				setShippingMethodsList(list);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchShippingMethods();
	}, []);

	const onSubmit = () => {
		props.onSubmit(selectedShippingMethod);
	};

	return (
		<View style={{}}>
			<Modal isVisible={true} backdropColor={myColors.backdropColor}>
				<View style={modalStyles.centerModal}>
					<View style={[modalStyles.modalView, {width: fullWidth - 32}]}>
						<View style={{flexDirection: 'row'}}>
							<View style={{flex: 0.9}}>
								<Text style={modalStyles.header}>{strings('Create Appointment')}</Text>
							</View>
							<View style={{flex: 0.1, flexDirection: 'row-reverse'}}>
								<Pressable onPress={() => props.toggleModal(false)}>
									<CloseImage />
								</Pressable>
							</View>
						</View>
						<View style={[commonstyles.mh16, {marginTop: 24}]}>
							<CustomDropdown
								data={shippingMethods}
								defaultTxt={strings('Select Shipping')}
								setSelectedItemText={item => {
									const selectedItem = shippingMethods.filter(ship => ship.name === item);
									if (selectedItem.length > 0) {
										setSelectedShippingMethod(selectedItem[0]);
									}
								}}
							/>
						</View>
						<DecisionButtonsSmall handlePress={props.toggleModal} handleOk={onSubmit} btnOk={strings('Next')} />
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default CreateAppointmentInformation;
