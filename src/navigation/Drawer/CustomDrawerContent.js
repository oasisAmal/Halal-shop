import * as React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import styles from './styles';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import DrawerItemComponent from './DrawerItemComponent';
import ProductMenu from './product-menu';
import EditAccountMenu from './edit-account-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../utils/AsyncStorageKeys';
import SettingsMenu from './settings-menu';
import LanguageMenu from './language-menu';
import {strings} from '../../i18n';
import {GET_PROFILE} from '../../services/ProfileService';
import {useDispatch} from 'react-redux';
import {SET_SHOPS} from '../../store/actionTypes';

function CustomDrawerContent(props) {
	const dispatch = useDispatch();

	const [focused, setFocused] = React.useState(strings('Orders'));
	const [subproductFocused, setSubproductFocused] = React.useState('Products');
	const [productExpanded, setProductExpanded] = React.useState(false);
	const [settingsExpanded, setSettingsExpanded] = React.useState(false);
	const [languageExpanded, setLanguageExpanded] = React.useState(false);
	const [editAccountExpanded, setEditAccountExpanded] = React.useState(false);

	const [editAccountShopFocused, setEditAccountShopFocused] = React.useState(undefined);

	const handlePress = screen => {
		setFocused(strings(screen));
		props.navigation.navigate(screen);
		// setProductExpanded(false);
		closeAllExpandedItems();
	};

	const handleChat = async screen => {
		setFocused(strings(screen));
		setProductExpanded(false);
		closeAllExpandedItems();
		let url = 'https://tawk.to/chat/61d6ee30f7cf527e84d0bf9c/1fonp4rc5';
		//let url = 'https://www.google.com';

		const supported = await Linking.canOpenURL(url);
		// alert(url + ' ' + supported + ' is supported ');

		if (supported) {
			// Opening the link with some app, if the URL scheme is "http" the web link should be opened
			// by some browser in the mobile
			await Linking.openURL(url);
		} else {
			alert(`Don't know how to open this URL: ${url}`);
		}
		url = '';
	};
	const closeAllExpandedItems = () => {
		setProductExpanded(false);
		setEditAccountExpanded(false);
		setSettingsExpanded(false);
		setLanguageExpanded(false);
	};

	const handleProducts = screen => {
		setProductExpanded(!productExpanded);
		setFocused(strings(screen));
		setSubproductFocused(screen);
	};
	const handleEditAccount = screen => {
		setEditAccountExpanded(!editAccountExpanded);
		setFocused(strings(screen));
		setSubproductFocused(screen);
	};
	const handleLanguage = screen => {
		setLanguageExpanded(!languageExpanded);
		setFocused(strings(screen));
		//setSubproductFocused(screen);
	};

	const handleSettings = screen => {
		setSettingsExpanded(!settingsExpanded);
		setFocused(strings(screen));
		//setSubproductFocused(screen);
	};
	const saveStorageData = async value => {
		try {
			await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.ProductSubmenu, value);
			//alert('Data successfully saved');
		} catch (e) {
			alert('Failed to save the data to the storage');
		}
	};

	const saveShopStorageData = async value => {
		try {
			await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.EditAccountSubmenu, JSON.stringify(value));
			//alert('Data successfully saved');
		} catch (e) {
			alert('Failed to save the data to the storage');
		}
	};

	const fetchProfile = () => {
		GET_PROFILE(
			repsonse => {
				//console.log('GET_PROFILE response ==> ', repsonse);
				dispatch({type: SET_SHOPS, shops: repsonse.data.data.shops});
			},
			error => {
				console.log('GET_PROFILE ==> ', error);
			},
		);
	};

	React.useEffect(() => {
		fetchProfile();
	}, []);

	return (
		<DrawerContentScrollView {...props}>
			<View
				style={{
					/*  dont change this  * */
					marginRight: -24,
					marginLeft: -16,
				}}>
				<View style={styles.drawerContent}>
					<View>
						<TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
							<Image source={require('../../../assets/images/close.png')} style={styles.closeImg} />
						</TouchableOpacity>
					</View>
					<View style={styles.menuTxt}>
						<Text
							style={{
								fontFamily: 'Inter-Bold',
								fontSize: 20,
								//: 600,
								color: '#1E293B',

								textAlign: 'right',
							}}>
							{strings('Menu')}
						</Text>
					</View>
				</View>
				<Text style={styles.hr}></Text>

				{/* <DrawerItemList {...props} /> */}

				<DrawerItem
					label={() => (
						<DrawerItemComponent
							focused={focused}
							labelName={strings('Orders')}
							iconName={
								focused == strings('Orders')
									? //             props.focused == props.labelName ||
									  //(focused == 'Orders' && strings('Orders') == 'طلباتى')
									  require('../../../assets/images/orders.png')
									: require('../../../assets/images/orders-inactive.png')
							}
						/>
					)}
					pressColor="transparent"
					onPress={() => handlePress('Orders')}
					options={{unmountOnBlur: true}}
				/>
				<DrawerItem
					label={() => (
						<DrawerItemComponent
							dropdownEnabled={true}
							expanded={productExpanded}
							focused={focused}
							labelName={strings('Products')}
							iconName={
								focused == strings('Products')
									? require('../../../assets/images/warehouse.png')
									: require('../../../assets/images/warehouse-inactive.png')
							}
						/>
					)}
					pressColor="transparent"
					onPress={() => handleProducts('Products')}
				/>
				{productExpanded && (
					<View
						style={{
							marginTop: -8,
							marginRight: 24,
							marginLeft: 20,
						}}>
						<ProductMenu
							navigation={props.navigation}
							handlePress={handlePress}
							setSubproductFocused={setSubproductFocused}
							subproductFocused={subproductFocused}
							saveStorageData={saveStorageData}
						/>
					</View>
				)}

				<DrawerItem
					label={() => (
						<DrawerItemComponent
							focused={focused}
							labelName={strings('Reports')}
							iconName={
								focused == strings('Reports')
									? require('../../../assets/images/report-active.png')
									: require('../../../assets/images/report.png')
							}
						/>
					)}
					pressColor="transparent"
					onPress={() => handlePress('Reports')}
				/>

				<DrawerItem
					label={() => (
						<DrawerItemComponent
							dropdownEnabled={true}
							expanded={editAccountExpanded}
							focused={focused}
							labelName={strings('Edit Shop Details')}
							iconName={
								focused == strings('Edit Shop Details')
									? require('../../../assets/images/edit-active.png')
									: require('../../../assets/images/edit.png')
							}
						/>
					)}
					pressColor="transparent"
					onPress={() => handleEditAccount('Edit Shop Details')}
				/>
				{editAccountExpanded ? (
					<View
						style={{
							marginTop: -8,
							marginRight: 24,
							marginLeft: 20,
						}}>
						<EditAccountMenu
							navigation={props.navigation}
							handlePress={handlePress}
							setEditAccountShopFocused={setEditAccountShopFocused}
							editAccountShopFocused={editAccountShopFocused}
							saveStorageData={saveShopStorageData}
						/>
					</View>
				) : null}

				{/* <DrawerItem
          label={() => (
            <DrawerItemComponent
              dropdownEnabled={true}
              expanded={settingsExpanded}
              focused={focused}
              labelName={strings('Settings')}
              iconName={
                focused == strings('Settings')
                  ? require('../../../assets/images/settings-active.png')
                  : require('../../../assets/images/settings.png')
              }
            />
          )}
          pressColor="transparent"
          onPress={() => handleSettings('Settings')}
        /> */}
				{/* {settingsExpanded && (
          <View
            style={{
              marginTop: -8,
              marginRight: 24,
              marginLeft: 20,
            }}>
            <SettingsMenu
              navigation={props.navigation}
              handlePress={() => setSettingsExpanded(!settingsExpanded)}
              setSubproductFocused={setSubproductFocused}
              subproductFocused={subproductFocused}
              saveStorageData={saveStorageData}
            />
          </View>
        )} */}

				<DrawerItem
					label={() => (
						<DrawerItemComponent
							focused={focused}
							dropdownEnabled={true}
							labelName={strings('Language')}
							expanded={languageExpanded}
							iconName={
								focused == strings('Language')
									? require('../../../assets/images/language-active.png')
									: require('../../../assets/images/language-box.png')
							}
						/>
					)}
					pressColor="transparent"
					onPress={() => handleLanguage('Language')}
				/>

				{languageExpanded && (
					<View
						style={{
							marginTop: -8,
							marginRight: 24,
							marginLeft: 20,
						}}>
						<LanguageMenu
							navigation={props.navigation}
							handlePress={handleLanguage}
							setLanguageExpanded={setLanguageExpanded}
							// subproductFocused={subproductFocused}
							// saveStorageData={saveStorageData}
						/>
					</View>
				)}

				<DrawerItem
					label={() => (
						<DrawerItemComponent
							focused={focused}
							labelName={strings('Chat with Admin')}
							iconName={
								focused == strings('Chat with Admin')
									? require('../../../assets/images/chat-active.png')
									: require('../../../assets/images/happy-chat.png')
							}
						/>
					)}
					pressColor="transparent"
					// onPress={() => handlePress('Chat with Admin')}
					onPress={() => handleChat('Chat with Admin')}
				/>

				<DrawerItem
					label={() => (
						<DrawerItemComponent
							focused={focused}
							labelName={strings('Advertisement')}
							iconName={
								focused == strings('Advertisement')
									? require('../../../assets/images/ad-active.png')
									: require('../../../assets/images/Advertisement.png')
							}
						/>
					)}
					pressColor="transparent"
					onPress={() => handlePress('Advertisement')}
				/>

				<DrawerItem
					label={() => (
						<DrawerItemComponent
							focused={focused}
							labelName={strings('Logout')}
							iconName={
								focused == strings('Logout')
									? require('../../../assets/images/logout-active.png')
									: require('../../../assets/images/Logout.png')
							}
						/>
					)}
					pressColor="transparent"
					onPress={() => handlePress('Logout')}
				/>
				<View style={{marginBottom: 100}}></View>
			</View>
		</DrawerContentScrollView>
	);
}
export default CustomDrawerContent;
