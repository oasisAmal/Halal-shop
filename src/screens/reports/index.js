import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {strings} from '../../i18n';

import FormComponent from './FormComponent';
import ReportCardView from './ReportCardView';
import TotalOrders from './TotalOrders';

import IMGS from '../../../assets/images';
import {GET_MAIN_REPORT} from '../../services/ReportService';
import APIKit from '../../utils/APIKit';
import SubHeader from '../../components/partials/Subheader';
import Total from './Total';

const Reports = props => {
	const [isFetchingMoreData, setIsFetchingMoreData] = useState(false);

	const [listOfReports, setListOfReports] = useState([]);
	const [pagination, setPagination] = useState(undefined);
	const [nextPageLink, setNextPageLink] = useState(undefined);

	const [total, setTotal] = useState(0);

	const [submittedData, setSubmittedData] = useState(undefined);

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

	useEffect(() => {
		let totalPrice = 0;
		listOfReports.map(order => (totalPrice += parseFloat(order.orders_sum_total.replace(',', ''))));
		setTotal(totalPrice);
	}, [listOfReports]);

	const onSearch = data => {
		console.log(data);
		setSubmittedData(data);
		GET_MAIN_REPORT(
			data,
			response => {
				if (response && response.data) {
					setListOfReports(response.data.data);
					setPagination(response.data.meta);
					setNextPageLink(response.data.links.next);
				}

				setIsFetchingMoreData(false);
			},
			error => {
				console.log('GET_MAIN_REPORT error ==> ', error);
			},
		);
	};

	const fetchExtraData = async () => {
		try {
			setIsFetchingMoreData(true);

			const response = await APIKit.post(nextPageLink, submittedData);
			if (response && response.data) {
				setListOfReports(prevState => {
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
			// setPageNumber(prevState => prevState + 1);
		}
	};

	const renderHeader = useMemo(() => {
		console.log('Render Header');
		return (
			<View style={{marginHorizontal: 16}}>
				<SubHeader title={strings('Reports')} subtitle="Home / Reports" />
				<FormComponent onSearch={onSearch} />
				<TotalOrders total={pagination ? pagination.total : 0} />
			</View>
		);
	}, [pagination]);

	const renderItem = useCallback(
		({item, index}) => {
			console.log('Render Item');
			{
				/* <SaveButton
			label="More"
			handlePress={() =>
				props.navigation.push('ViewReport', {
					data: item,
				})
			}
		/> */
			}
			return (
				<ReportCardView key={index} order={item} submittedData={submittedData} index={index} navigation={props.navigation} />
			);
		},
		[submittedData],
	);

	return (
		<SafeAreaView style={{flex: 1}}>
			<FlatList
				data={listOfReports}
				ListHeaderComponent={renderHeader}
				keyExtractor={item => item.id}
				renderItem={renderItem}
				ListFooterComponent={() => {
					return (
						<View style={{marginHorizontal: 16}}>
							<Total total={total} />
							<View style={{marginHorizontal: 16, height: 60, alignItems: 'center', justifyContent: 'center'}}>
								{pagination && pagination.current_page < pagination.last_page && isFetchingMoreData ? (
									<ActivityIndicator color={'#000000'} size={'large'} />
								) : null}
							</View>
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
		</SafeAreaView>
	);
};

export default Reports;
