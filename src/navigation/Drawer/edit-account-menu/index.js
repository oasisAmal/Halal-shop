import * as React from 'react';

import {View, Text, Pressable} from 'react-native';
import styles from '../../../styles/submenuStyles';
import myColors from '../../../styles/myColors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../../utils/AsyncStorageKeys';
import {useDispatch, useSelector} from 'react-redux';
import {UPDATE_EDIT_SHOP_DATA} from '../../../store/actionTypes';

const EditAccountMenu = props => {
	const dispatch = useDispatch();
	const shops = useSelector(state => state.shops);

	console.log('Selector ==> ', shops);

	const [selectedShop, setSelectedShop] = React.useState(undefined);

	const handleSubmenu = shop => {
		// props.handlePress('Edit Shop Details');
		props.setEditAccountShopFocused(shop.id);
		setSelectedShop(shop.id);
		props.saveStorageData(shop);
		props.navigation.navigate('Edit Shop Details', {shop: shop});

		dispatch({type: UPDATE_EDIT_SHOP_DATA, status: true});
	};

	// React.useEffect(() => {
	//   readData();
	// }, []);

	// const readData = async () => {
	//   try {
	//     const value = await AsyncStorage.getItem(
	//       ASYNC_STORAGE_KEYS.ProductSubmenu,
	//     );

	//     if (value !== null) {
	//       setSubFocused(value);
	//     } else {
	//       props.saveStorageData(props.subproductFocused);
	//     }
	//   } catch (e) {
	//     alert('Failed to fetch the input from storage');
	//   }
	// };

	return (
		<View style={styles.mainView}>
			{shops.map(shop => {
				return (
					<Pressable key={shop.id} onPress={() => handleSubmenu(shop)}>
						<View
							style={[
								styles.menuView,
								{
									backgroundColor: selectedShop == shop.id ? myColors.selected_background_light : 'white',
								},
							]}>
							<Text style={styles.menutxt}>{shop.name}</Text>
						</View>
					</Pressable>
				);
			})}
		</View>
	);
};

export default EditAccountMenu;
