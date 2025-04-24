import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView, I18nManager, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../edit-product-details/styles';
import commonstyles from '../../../styles/defultStyles';
import SubHeader from '../../../components/partials/Subheader';
import {ScrollView} from 'react-native-gesture-handler';
import SaveButton from '../../../components/save-button';
import {products_data} from '../../../data/DummyData';
import orderstyles from './styles';
import APIKit from '../../../utils/APIKit';
import {strings} from '../../../i18n';
import Toast from 'react-native-toast-message';

let MaximumOrders = props => {
	const {shop} = props.route.params;

	const [isFetchingData, setIsFetchingData] = useState(true);

	const [isSubmitting, setIsSubmitting] = useState(false);

	const [maxOrders, setMaxOrders] = useState('');
	const [minPurchase, setMinPurchase] = useState('');

	useEffect(() => {
		props.navigation.setOptions({
			headerTitle: () => null,
			headerLeft: () => (
				<TouchableOpacity
					activeOpacity={0.8}
					style={{
						paddingStart: 16,
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
					}}
					onPress={() => {
						props.navigation.goBack();
					}}>
					<Icon name={I18nManager.isRTL ? 'arrow-forward-outline' : 'arrow-back-outline'} size={32} color="black" />
					<View style={{width: 10}} />
					<Text
						style={{
							//: 700,
							fontSize: 20,
							color: '#03050D',
						}}>
						{strings('Maximum Orders')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => null,
		});
	}, []);

	const fetchGeneralData = async () => {
		try {
			const response = await APIKit.get(`shopapi/shops_app/account/shops/${shop.id}`);
			if (response && response.data) {
				if (response.data.data.max_orders) {
					setMaxOrders(`${response.data.data.max_orders}`);
				}
				if (response.data.data.minimum_cart) {
					setMinPurchase(`${response.data.data.minimum_cart}`);
				}
			}

			setIsFetchingData(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (shop) {
			fetchGeneralData();
		}
	}, [shop]);

	const onSubmit = async () => {
		try {
			const postData = {
				max_orders: maxOrders,
				minimum_cart: minPurchase,
			};

			setIsSubmitting(true);
			await APIKit.post(`shopapi/shops_app/account/shops/update/general/${shop.id}`, postData);

			Toast.show({
				type: 'success',
				text1: strings('Data has been updated successfully'),
			});

			setIsSubmitting(false);
		} catch (error) {
			console.log(error);
			setIsSubmitting(false);
		}
	};

	return (
		<View style={[styles.container]}>
			<ScrollView>
				<SubHeader title={strings('Maximum Orders')} subtitle={`Home / Edit Shop Details / ${shop.name} / Maximum Orders`} />
				{!isFetchingData ? (
					<React.Fragment>
						<View style={styles.formView}>
							<View style={commonstyles.mb16}>
								<Text style={styles.productName}>{strings('Maximum Orders Per Day')}</Text>
								<TextInput
									placeholder="Type..."
									style={styles.input}
									value={maxOrders}
									onChangeText={txt => setMaxOrders(txt)}
								/>
							</View>
							<View style={commonstyles.mb16}>
								<Text style={styles.productName}>{strings('Minimum Purchase')}</Text>
								<TextInput
									placeholder="Type..."
									style={styles.input}
									value={minPurchase}
									onChangeText={txt => setMinPurchase(txt)}
								/>
							</View>
							{/* <View style={commonstyles.mb16}>
						<Text style={styles.productName}>Delivery Price </Text>
						<TextInput placeholder="Type..." style={styles.input} />
					</View> */}
						</View>
						<SaveButton isLoading={isSubmitting} handlePress={onSubmit} />
					</React.Fragment>
				) : null}
				{/* <View style={styles.formView}>
					<FlatList
						data={products_data}
						numColumns={2}
						renderItem={(item, index) => (
						<View
							style={{flex: 0.5, marginRight: 8, marginBottom: 16}}
							key={index}>
							<Text style={orderstyles.subtxt}> Barracuda {index} </Text>
							<TextInput placeholder="" style={styles.input} />
						</View>
						)}
						scrollEnabled={false}
					/>
					</View> */}
			</ScrollView>
		</View>
	);
};

export default MaximumOrders;
