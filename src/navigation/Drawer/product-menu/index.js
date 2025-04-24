import * as React from 'react';

import {View, Text, Pressable} from 'react-native';
import styles from '../../../styles/submenuStyles';
import myColors from '../../../styles/myColors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../../utils/AsyncStorageKeys';
import {strings} from '../../../i18n';

function ProductMenu(props) {
	const [subfocused, setSubFocused] = React.useState('');

	const handleSubmenu = subscreen => {
		props.handlePress('Products');
		props.setSubproductFocused(subscreen);
		setSubFocused(subscreen);
		props.saveStorageData(subscreen);
		props.navigation.navigate(subscreen, {type: subscreen});
	};

	React.useEffect(() => {
		readData();
	}, []);

	const readData = async () => {
		try {
			const value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.ProductSubmenu);

			if (value !== null) {
				setSubFocused(value);
			} else {
				props.saveStorageData(props.subproductFocused);
			}
		} catch (e) {
			alert('Failed to fetch the input from storage');
		}
	};

	return (
		<View style={styles.mainView}>
			<Pressable onPress={() => handleSubmenu('Products')}>
				<View
					style={[
						styles.menuView,
						{
							backgroundColor: subfocused == 'Products' ? myColors.selected_background_light : 'white',
						},
					]}>
					<Text style={styles.menutxt}>{strings('Products')}</Text>
				</View>
			</Pressable>
			<Pressable onPress={() => handleSubmenu('NeedApprovalProducts')}>
				<View
					style={[
						styles.menuView,
						{
							backgroundColor: subfocused == 'NeedApprovalProducts' ? myColors.selected_background_light : 'white',
						},
					]}>
					<Text style={[styles.menutxt]}>{strings('Need Approval Products')}</Text>
				</View>
			</Pressable>
		</View>
	);
}
export default ProductMenu;
