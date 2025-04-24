import React, {useEffect, useState} from 'react';
import {Modal, Text, Pressable, View, Image, TextInput} from 'react-native';
import CustomDropdown from '../utils/CustomDropdown';
import {increase_more_data, Rate_worth_data} from '../../data/DummyData';
import styles from './styles';
import DecisionButtons from '../decision-buttons';
import {readData, saveData} from '../utils/functions/commonFunctions';
import MainHeader from '../partials/MainHeader';
import commonstyles from '../../styles/defultStyles';
import myColors from '../../styles/myColors';
import {myfonts} from '../../assets/Fonts';
import {AdjustPriceService} from '../../services/ProductService';
import {strings} from '../../i18n';

const EditPrice = props => {
	const [amount, setAmount] = useState(0);
	const [update_method, set_update_method] = useState(null);
	const [update_type, set_update_type] = useState(null);
	const {setrefreshPage} = props;

	const adjustPrice = () => {
		if (amount == '' || update_method == '' || update_type == '') {
			alert('Fill all ');
		} else {
			AdjustPriceService(
				{
					update_method: update_method, //1 : increase / decease by amount 2: increase / decease by percent
					update_type: update_type, //1 : increase 2: decrease
					amount: amount, // the amount to apply
				},
				onSuccess,
				onError,
			);
		}
	};

	onSuccess = () => {
		alert('success ');
		props.handlePress();
		setrefreshPage();
	};

	onError = () => {
		alert('error');
	};

	return (
		<Modal animationType="slide" onRequestClose={() => {}}>
			<View style={styles.container}>
				<MainHeader is_blured={true} />
				<View
					style={[
						styles.modalView,
						//{height: props.height ? props.height : 440},
					]}>
					<View style={{flexDirection: 'row'}}>
						<View style={{flex: 0.8}}>
							<Text
								style={{
									fontFamily: myfonts.Bold,
									fontSize: 18,
									//: 600,
									color: myColors.slate800,
									lineHeight: 27,
								}}>
								{strings('Edit Prices')}
							</Text>
						</View>
						<View style={{flex: 0.2, flexDirection: 'row-reverse'}}>
							{/* <Pressable onPress={() => props.handlePress(false)}>
								<Image
									source={require('../../../assets/images/close.png')}
									style={{
										width: 24,
										height: 24,
										left: 6.75,
									}}
								/>
							</Pressable> */}
						</View>
					</View>
					<View style={[{marginTop: 24}]}>
						<Text style={[commonstyles.mainTxt, {marginBottom: 8}]}> {strings('Value')} </Text>
						<TextInput style={commonstyles.input} onChangeText={data => setAmount(data)} />
					</View>
					<View style={{}}>
						<Text style={commonstyles.mainTxt}> {strings('Increase') + ' / ' + strings('Decrease')} </Text>
						<CustomDropdown data={increase_more_data} setSelectedItem={set_update_method} />
					</View>
					<View style={{marginBottom: 140}}>
						<Text style={commonstyles.mainTxt}> {strings('Fixed') + ' / ' + strings('Percentage')} </Text>
						<CustomDropdown data={Rate_worth_data} setSelectedItem={set_update_type} />
					</View>
					<DecisionButtons
						btnOk={strings('Adjust Price')}
						btnBack={strings('CANCEL')}
						handleOk={() => adjustPrice()}
						handlePress={() => props.handlePress()}
						bottom={40}
					/>
				</View>
			</View>
		</Modal>
	);
};

export default EditPrice;
