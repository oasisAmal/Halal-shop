import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import ListItem from '../edit-product/ListItem';
import styles from '../edit-product/styles';
import commonstyles from '../../styles/defultStyles';
import MainHeader from '../../components/partials/MainHeader';
import ASYNC_STORAGE_KEYS from '../../utils/AsyncStorageKeys';

import {UPDATE_EDIT_SHOP_DATA} from '../../store/actionTypes';
import {strings} from '../../i18n';
import IMGS from '../../../assets/images';

const EditAccount = props => {
	const dispatch = useDispatch();
	const updateShopData = useSelector(state => state.updateEditShop);

	useEffect(() => {
		props.navigation.setOptions({
			headerTitle: () => null,
			headerLeft: () => (
				<View
					style={{
						paddingStart: 16,
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
					}}>
					<Image
						source={IMGS.Logo}
						style={{
							width: 40,
							height: 40,
						}}
					/>
					<View style={{width: 10}} />
					<Text
						style={{
							//: 700,
							fontSize: 20,
							color: '#03050D',
						}}>
						{strings('Zabehaty')}
					</Text>
				</View>
			),
			headerRight: () => (
				<View
					style={{
						paddingEnd: 16,
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
					}}>
					<TouchableOpacity
						activeOpacity={0.8}
						style={{
							width: 44,
							height: 44,
							justifyContent: 'center',
							alignItems: 'center',
						}}
						onPress={() => {
							props.navigation.openDrawer();
						}}>
						<Icon name="menu-outline" size={32} color="black" />
					</TouchableOpacity>
				</View>
			),
		});
	}, []);

	const [selectedShop, setSelectedShop] = useState(undefined);
	const [activeLabel, setActiveLabel] = React.useState('General Data');

	const handleClick = screen => {
		setActiveLabel(screen);
		props.navigation.navigate(screen, {shop: selectedShop});
	};
	//const isActiveLabel =

	const checkSelectedShop = async () => {
		try {
			const selectedObj = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.EditAccountSubmenu);
			if (selectedObj) {
				const jsonObj = JSON.parse(selectedObj);
				setSelectedShop(jsonObj);
			}
		} catch (e) {
			alert('Failed to save the data to the storage');
			console.log(e);
		}
	};

	useEffect(() => {
		if (updateShopData) {
			checkSelectedShop();
			dispatch({type: UPDATE_EDIT_SHOP_DATA, status: false});
		}
	}, [updateShopData]);

	useEffect(() => {
		checkSelectedShop();
	}, []);

	return (
		<View style={[styles.container, {}]}>
			{/* <MainHeader mh={-16} navigation={props.navigation} /> */}
			<ScrollView>
				<Text style={styles.orderTxt}>{strings('Edit Shop Details')}</Text>
				<View style={commonstyles.flewRow}>
					<Text style={styles.subheader}>Home / Edit Shop Details / {selectedShop?.name}</Text>
				</View>
				<View>
					<ListItem
						i="1"
						label={strings('General Data')}
						activeLabel={activeLabel}
						handleClick={() => handleClick('General Data')}
					/>
					<ListItem i="2" label={strings('Regions')} activeLabel={activeLabel} handleClick={() => handleClick('Regions')} />
					<ListItem
						i="3"
						label={strings('Shop Branches')}
						activeLabel={activeLabel}
						handleClick={() => handleClick('Shop Branches')}
					/>
					{/* <ListItem
						i="4"
						label={strings('Special Products')}
						activeLabel={activeLabel}
						handleClick={() => handleClick('Special Products')}
					/> */}
					<ListItem
						i="5"
						label={strings('Rating and Comments')}
						activeLabel={activeLabel}
						handleClick={() => handleClick('Rating and Comments')}
					/>
					<ListItem
						i="6"
						label={strings('Maximum Orders')}
						activeLabel={activeLabel}
						handleClick={() => handleClick('Maximum Orders')}
					/>
					<ListItem
						i="7"
						label={strings('Notification content')}
						activeLabel={activeLabel}
						handleClick={() => handleClick('Notification content')}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

export default EditAccount;
