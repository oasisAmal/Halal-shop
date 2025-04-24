import React, {useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import giftstyles from '../gifts/styles';
import SaveButton from '../../components/save-button';
import MainHeader from '../../components/partials/MainHeader';
import SubHeader from '../../components/partials/Subheader';
import SliderCard from './SliderCard';
import {GET_ADS} from '../../services/AdsService';
import APIKit from '../../utils/APIKit';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {strings} from '../../i18n';

import IMGS from '../../../assets/images/';

const Advertisements = props => {
	const isFocused = useIsFocused();

	const [enableBlur, setEnableBlur] = React.useState(false);

	const [isFetchingMoreData, setIsFetchingMoreData] = useState(false);

	const [listOfAds, setListOfAds] = useState([]);
	const [pagination, setPagination] = useState(undefined);
	const [nextPageLink, setNextPageLink] = useState(undefined);

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

	const fetchAds = () => {
		GET_ADS(response => {
			if (response && response.data) {
				setListOfAds(response.data.data);
				setPagination(response.data.meta);
				setNextPageLink(response.data.links.next);
			}

			setIsFetchingMoreData(false);
		});
	};

	useEffect(() => {
		if (isFocused) {
			fetchAds();
		}
	}, [isFocused]);

	const fetchExtraData = async () => {
		try {
			setIsFetchingMoreData(true);

			const response = await APIKit.get(nextPageLink);
			if (response && response.data) {
				setListOfAds(prevState => {
					return [...prevState, ...response.data.data];
				});
				setPagination(response.data.meta);
				setNextPageLink(response.data.links.next);
			}

			setIsFetchingMoreData(false);
		} catch (error) {
			console.log(error);
		}
	};

	const loadMoreData = () => {
		if (!isFetchingMoreData && pagination && pagination.current_page < pagination.last_page) {
			fetchExtraData();
			setPageNumber(prevState => prevState + 1);
		}
	};

	const onItemDelete = item => {
		setListOfAds(prevState => prevState.filter(ad => ad.id !== item.id));
	};

	return (
		<SafeAreaView style={{flex: 1}}>
			<FlatList
				ListHeaderComponent={() => {
					return (
						<View style={{marginHorizontal: 16}}>
							<SubHeader title={strings('Advertisements')} subtitle="Home / Advertisement" />
						</View>
					);
				}}
				data={listOfAds}
				renderItem={({item}) => {
					return (
						<View style={{marginHorizontal: 16}}>
							<SliderCard
								item={item}
								onItemDelete={() => onItemDelete(item)}
								setEnableBlur={setEnableBlur}
								navigation={props.navigation}
							/>
						</View>
					);
				}}
				ListFooterComponent={() => {
					return (
						<View style={{marginHorizontal: 16}}>
							<SaveButton label={strings('Create Ad')} handlePress={() => props.navigation.navigate('CreateAd')} />
							{pagination && pagination.current_page < pagination.last_page && isFetchingMoreData ? (
								<View style={{height: 60, alignItems: 'center', justifyContent: 'center'}}>
									<ActivityIndicator color={'#000000'} size={'large'} />
								</View>
							) : (
								<View style={{height: 60}} />
							)}
						</View>
					);
				}}
				onEndReached={loadMoreData}
				onEndReachedThreshold={0.1}
				removeClippedSubviews={true}
				maxToRenderPerBatch={5}
				updateCellsBatchingPeriod={5}
				windowSize={3}
			/>
		</SafeAreaView>
	);
};

export default Advertisements;
