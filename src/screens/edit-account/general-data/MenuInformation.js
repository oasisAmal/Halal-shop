import React, {useState, useEffect} from 'react';
import {Text} from 'native-base';
import {Image, PixelRatio, View, Pressable, Alert} from 'react-native';
import ItemComponent from '../../reports/ItemComponent';
import styles from '../../../styles/itemStyles';
import {screenwidth, theme_color} from '../../../mutils';
import {orders_data} from '../../../data/DummyData';
import {ScrollView} from 'react-native-gesture-handler';
import CheckBox from '../../../components/common/CheckBox';

import CreateButton from '../../../components/create-button';
import CreateMenuInformation from './CreateMenuInformation';
import APIKit from '../../../utils/APIKit';
import {strings} from '../../../i18n';

const MenuInformationList = ({index, menu, onDelete}) => {
	let bgColor = 'white';

	const onDeleteRecord = () => {
		Alert.alert(strings('Delete'), strings('Are you sure you want to delete this data?'), [
			{
				text: strings('CANCEL'),
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{text: strings('Delete'), onPress: () => deleteRecord(), style: 'destructive'},
		]);
	};

	const deleteRecord = () => {
		onDelete(index);
	};

	return (
		<View
			style={{
				elevation: 0,
				borderColor: 'white',
				borderRadius: 8,
				marginBottom: 16,
				width: screenwidth - 80,
				marginRight: 8,
			}}>
			<View>
				<View
					style={{
						flex: 1,
						padding: 10,
						flexDirection: 'row',
						backgroundColor: bgColor,
						//marginBottom: 16
					}}>
					<View style={{flex: 0.5}}></View>
					<View style={{flexDirection: 'row-reverse', flex: 0.5}}>
						<Pressable onPress={onDeleteRecord}>
							<Image
								source={require('../../../../assets/images/Trash.png')}
								style={{
									width: PixelRatio.getPixelSizeForLayoutSize(12),
									height: PixelRatio.getPixelSizeForLayoutSize(10),
									marginRight: 12,
								}}
							/>
						</Pressable>
					</View>
				</View>

				<View style={{backgroundColor: bgColor}}>
					<View style={{flex: 1}}>
						<ItemComponent
							mainText1={strings('Name')}
							mainText2={strings('Name In English')}
							subText1={menu.name}
							subText2={menu.name_en}
						/>
						<ItemComponent mainText1={strings('Sort')} mainText2={''} subText1={menu.sort} subText2={''} />

						<View
							style={{
								flexDirection: 'row',
								marginBottom: 20,
								marginLeft: 16,
							}}>
							<View style={{flex: 0.5, marginRight: 16}}>
								<Text style={styles.mainTxt}>{strings('Active')}</Text>
								<View style={{marginStart: 3}}>
									<CheckBox ticked={menu.is_active} />
								</View>
							</View>
							<View style={{flex: 0.5, marginRight: 16}}></View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};
const MenuInformation = ({toggleBlur, shop}) => {
	const [menuopened, setMenuOpened] = useState(false);
	const [isFetching, setIsFetching] = useState(true);
	const [shopMenu, setShopMenu] = useState([]);

	const fetchMenuData = async () => {
		try {
			const response = await APIKit.post(`shopapi/shops_app/account/shops/menu/${shop.id}`);
			if (response && response.data) {
				setShopMenu(response.data.data);
			}

			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (shop) {
			fetchMenuData();
		}
	}, [shop]);

	const handleMenu = () => {
		setMenuOpened(!menuopened);
		// props.toggleBlur(!menuopened);
	};

	const onNewData = data => {
		setShopMenu(prevState => {
			return [...prevState, ...[data]];
		});
		handleMenu();
	};

	const onDelete = itemIndex => {
		setShopMenu(prevState => prevState.filter((_, index) => index !== itemIndex));
	};

	const updateShopMenu = async () => {
		try {
			await APIKit.post(`shopapi/shops_app/account/shops/update/menu/${shop.id}`, shopMenu);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (!isFetching) {
			updateShopMenu();
		}
	}, [shopMenu, isFetching]);

	return (
		<React.Fragment>
			<CreateButton mh={2} handlePress={() => handleMenu()} />
			{menuopened && <CreateMenuInformation onSubmit={onNewData} toggleModal={() => handleMenu()} />}

			<ScrollView horizontal>
				{shopMenu.map((menu, index) => {
					return <MenuInformationList key={index} menu={menu} index={index} onDelete={onDelete} />;
				})}
			</ScrollView>
		</React.Fragment>
	);
};
export default MenuInformation;
