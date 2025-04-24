import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View, Text, FlatList, SafeAreaView, ActivityIndicator, TouchableOpacity, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CardDetails from './CardDetails';
import TotalOrders from '../TotalOrders';
import {GET_ORDER_REPORT} from '../../../services/ReportService';
import APIKit from '../../../utils/APIKit';

import {strings} from '../../../i18n';
import SubHeader from '../../../components/partials/Subheader';

const ViewReport = props => {
	const {submittedData, data} = props.route.params;

	const [listOfOrders, setListOfOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isFetchingMoreData, setIsFetchingMoreData] = useState(false);
	const [pagination, setPagination] = useState(undefined);
	const [nextPageLink, setNextPageLink] = useState(undefined);

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
						{strings('Reports')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => null,
		});
	}, []);

	const fetchOrders = () => {
		GET_ORDER_REPORT(
			{
				...submittedData,
				shop_id: data.id,
			},
			response => {
				if (response && response.data) {
					setListOfOrders(response.data.data);
					setPagination(response.data.meta);
					setNextPageLink(response.data.links.next);
				}
				setIsLoading(false);
			},
			error => {
				console.log('GET_ORDER_REPORT error ==> ', error);
				setIsLoading(false);
			},
		);
	};

	useEffect(() => {
		if (data) {
			fetchOrders();
		}
	}, [data]);

	const fetchExtraData = async () => {
		try {
			setIsFetchingMoreData(true);

			const response = await APIKit.post(nextPageLink, {
				...submittedData,
				shop_id: data.id,
			});
			if (response && response.data) {
				setListOfOrders(prevState => {
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
		}
	};

	const renderHeader = useMemo(() => {
		return (
			<View style={{marginHorizontal: 16}}>
				<SubHeader title={strings('Reports')} subtitle="Home / Reports / Orders" />
				<TotalOrders total={pagination ? pagination.total : 0} />
			</View>
		);
	}, [pagination]);

	const renderItem = useCallback(
		({item}) => (
			<View style={{marginHorizontal: 16}}>
				<CardDetails order={item} />
			</View>
		),
		[],
	);
	return (
		<SafeAreaView style={{flex: 1}}>
			{isLoading ? (
				<ActivityIndicator size={'large'} color={'#000000'} />
			) : (
				<FlatList
					ListHeaderComponent={renderHeader}
					data={listOfOrders}
					keyExtractor={item => item.id}
					renderItem={renderItem}
					ListFooterComponent={() => {
						return (
							<View style={{marginHorizontal: 16}}>
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
					initialNumToRender={3}
					maxToRenderPerBatch={5}
					updateCellsBatchingPeriod={5}
					windowSize={3}
				/>
			)}
		</SafeAreaView>
	);
};

export default ViewReport;
