import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import giftstyles from './styles';
import commonstyles from '../../styles/defultStyles';
import {myfonts} from '../../assets/Fonts';
import myColors from '../../styles/myColors';
import CreateButton from '../../components/create-button';
import SaveButton from '../../components/save-button';
import {ScrollView} from 'react-native-gesture-handler';
import {ListGiftProductsService, ListGiftService, CreateGiftService} from '../../services/GiftService';
import CustomDropdown from '../../components/utils/CustomDropdown';
import styles from './styles';
import {ListProductsService} from '../../services/ProductService';
import {toastMessage} from '../../components/utils/functions/commonFunctions';
import {strings} from '../../i18n';

const Gifts = props => {
	navigationOptions = ({navigation}) => {
		return {
			header: null,
		};
	};
	const [formData, setFormdata] = useState({});
	const [gifts, setGifts] = useState([]);
	const [giftType, setgiftType] = useState('');

	const [giftList, setgiftList] = useState([]);
	const [product_id, setproductid] = useState('');
	const [quantity, setquantity] = useState('');
	const [refreshNeeded, setrefreshNeeded] = useState(false);

	const GiftItem = props => {
		const {item} = props;
		return (
			<View
				style={[
					commonstyles.flewRow,
					{
						padding: 16,
						borderWidth: 1,
						borderColor: myColors.slate200,
						marginBottom: 16,
					},
				]}>
				<View style={{flex: 0.25}}>
					<Text style={giftstyles.smallTxt1}> {item.type ?? ''} </Text>
				</View>
				<View
					style={{
						flex: 0.25,
					}}>
					<Text style={giftstyles.smallTxt1}> {item.name ?? ''} </Text>
				</View>
				<View style={{flex: 0.25}}>
					<Text style={giftstyles.smallTxt1}> {item.quantity ?? ''} </Text>
				</View>
				<View style={{flex: 0.25}}>
					<Text style={giftstyles.smallTxt1}> 0 </Text>
				</View>
			</View>
		);
	};

	const onSucces = response => {
		console.log('response.data onSucces');
		console.log(response.data.data);
		setGifts(response.data.data);
		setrefreshNeeded(false);
	};
	const onFailure = e => {
		console.log(' error gifts ');
		console.log(e);
	};

	const onSuccesList = response => {
		console.log('response.data onSuccesList');
		console.log(response.data);
		// if (giftType == 'Product') {
		// 	setgiftList(response.data.data);
		// } else {
		// 	setgiftList(response.data);
		// }
		setgiftList(response.data.data);
	};
	const onFailureList = e => {
		console.log(' error ');
		console.log(e);
		setgiftList([]);
	};

	useEffect(() => {
		ListGiftService(onSucces, onFailure);
	}, []);

	useEffect(() => {
		if (refreshNeeded) {
			ListGiftService(onSucces, onFailure);
		}
	}, [refreshNeeded]);

	useEffect(() => {
		// ListGiftService(onSucces, onFailure);
		if (giftType == 'Product') {
			ListProductsService('shopapi/shops_app/products?page=1', onSuccesList, onFailureList);
		} else if (giftType == 'Gift') {
			ListGiftProductsService(onSuccesList, onFailureList);
		}
	}, [giftType]);

	const onSuccesSave = response => {
		//console.log('response.data onSucces');
		//console.log(response.data);
		//setGifts(response.data.data);
		setrefreshNeeded(true);
		toastMessage('Success');
	};
	const onFailureSave = e => {
		console.log(' error save  ');
		console.log(e);
	};

	const saveGift = e => {
		let data = {
			product_id: props.route.params.id,
			type: giftType == 'Gift' ? 'gift' : 'product',
			quantity: quantity,
			gift_id: product_id,
		};
		if (giftType == '' || product_id == '' || quantity == '') {
			toastMessage('Fill all the field');
		} else {
			CreateGiftService(data, onSuccesSave, onFailureSave);
		}

		console.log(data);
	};

	useEffect(() => {
		console.log('giftType => ' + giftType + ' product_id ' + product_id + ' quantity ' + quantity);
	}, [giftType, product_id, quantity]);
	return (
		<View style={[giftstyles.container, {}]}>
			<ScrollView>
				<Text style={giftstyles.orderTxt}>{strings('Gifts')} </Text>
				<View style={commonstyles.flewRow}>
					<Text style={giftstyles.subheader}>Home / Products / Active Products / Gifts</Text>
				</View>

				<View style={giftstyles.formView}>
					<View style={commonstyles.mb16}>
						<Text style={giftstyles.productName}>{strings('Gift Type')}</Text>
						<CustomDropdown
							setSelectedItemText={setgiftType}
							data={[
								{id: 1, name: 'Product'},
								{
									id: 2,
									name: 'Gift',
								},
							]}
						/>
					</View>
					<View style={commonstyles.mb16}>
						<Text style={giftstyles.productName}>{strings('Back Gifts')}</Text>
						<CustomDropdown setSelectedItem={setproductid} data={giftList} />
					</View>
					<View style={commonstyles.mb16}>
						<Text style={giftstyles.productName}>{strings('Quantity')}</Text>
						<TextInput style={giftstyles.input} placeholder="Type..." onChangeText={text => setquantity(text)} />
					</View>
					<SaveButton handlePress={() => saveGift()} />
					{/* <Pressable onPress={() => ''}>
						<View style={[commonstyles.longBtn, styles.resetBtn]}>
							<Text style={[commonstyles.longBtnTxt, styles.resetTxt]}>Reset</Text>
						</View>
					</Pressable> */}
					<View
						style={[
							commonstyles.flewRow,
							{
								backgroundColor: '#FAFAFA',

								height: 63,
								padding: 16,
								borderWidth: 1,
								borderColor: '#FAFAFA',
							},
						]}>
						<View style={{flex: 0.25}}>
							<Text style={giftstyles.smallTxt}>{strings('Gift Type')}</Text>
						</View>
						<View
							style={{
								flex: 0.25,
							}}>
							<Text style={giftstyles.smallTxt}> {strings('Gifts')}</Text>
						</View>
						<View style={{flex: 0.25}}>
							<Text style={giftstyles.smallTxt}>{strings('Quantity')} </Text>
						</View>
						<View style={{flex: 0.25}}>
							<Text style={giftstyles.smallTxt}> {strings('Action')} </Text>
						</View>
					</View>

					<View>{gifts && gifts.length > 0 && gifts.map((item, index) => <GiftItem item={item} key={index} />)}</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Gifts;
