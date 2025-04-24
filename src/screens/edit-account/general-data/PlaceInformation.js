import React, {useState, useEffect} from 'react';
import {Image, PixelRatio, View, Pressable, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import APIKit from '../../../utils/APIKit';

import CreateButton from '../../../components/create-button';
import CreatePlaceInformation from './CreatePlaceInformation';
import ItemComponent from '../../reports/ItemComponent';

import {screenwidth, theme_color} from '../../../mutils';
import {strings} from '../../../i18n';

const PlaceInformationList = ({index, info, onDelete}) => {
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
			<View
				style={{
					flex: 1,
					padding: 10,
					flexDirection: 'row',
					backgroundColor: bgColor,
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
						mainText1={strings('Field')}
						mainText2={strings('Field in English')}
						subText1={info.key}
						subText2={info.key_en}
					/>
					<ItemComponent
						mainText1={strings('Value')}
						mainText2={strings('Value In English')}
						subText1={info.value}
						subText2={info.value_en}
					/>
					{/* <View
						style={{
							flexDirection: 'row',
							marginBottom: 20,
							marginLeft: 16,
						}}>
						<View style={{flex: 0.5, marginRight: 16}}>
							<Text style={styles.mainTxt}>Icon </Text>
							<Text style={styles.subTxt}>0.00 </Text>
						</View>
						<View style={{flex: 0.5, marginRight: 16}}></View>
					</View> */}
				</View>
			</View>
		</View>
	);
};

const PlaceInformation = ({toggleBlur, shop}) => {
	const [createplaceopened, setCreatePlaceOpened] = useState(false);
	const [isFetching, setIsFetching] = useState(true);
	const [shopInfo, setShopInfo] = useState([]);

	const fetchInfoData = async () => {
		try {
			const response = await APIKit.post(`shopapi/shops_app/account/shops/info/${shop.id}`);
			if (response && response.data) {
				setShopInfo(response.data.data);
			}

			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (shop) {
			fetchInfoData();
		}
	}, [shop]);

	const handleCreatePlace = () => {
		setCreatePlaceOpened(!createplaceopened);
		// toggleBlur(!createplaceopened);
	};

	const onNewData = data => {
		setShopInfo(prevState => {
			return [...prevState, ...[data]];
		});
		handleCreatePlace();
	};

	const onDelete = itemIndex => {
		setShopInfo(prevState => prevState.filter((_, index) => index !== itemIndex));
	};

	const updateShopInfo = async () => {
		try {
			await APIKit.post(`shopapi/shops_app/account/shops/update/info/${shop.id}`, shopInfo);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (!isFetching) {
			updateShopInfo();
		}
	}, [shopInfo, isFetching]);

	return (
		<React.Fragment>
			<CreateButton mh={2} handlePress={() => handleCreatePlace()} />
			{createplaceopened && <CreatePlaceInformation onSubmit={onNewData} toggleModal={() => handleCreatePlace()} />}

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{shopInfo.map((info, index) => {
					return <PlaceInformationList key={index} index={index} info={info} onDelete={onDelete} />;
				})}
			</ScrollView>
		</React.Fragment>
	);
};
export default PlaceInformation;
