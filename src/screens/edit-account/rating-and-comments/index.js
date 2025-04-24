import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList, ActivityIndicator, I18nManager, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../edit-product-details/styles';
import commonstyles from '../../../styles/defultStyles';
import SubHeader from '../../../components/partials/Subheader';
import SaveButton from '../../../components/save-button';
import CommentsCard from './List';
import APIKit from '../../../utils/APIKit';
import {strings} from '../../../i18n';

let RatingAndComments = props => {
	const {shop} = props.route.params;

	const [isFetchingMoreData, setIsFetchingMoreData] = useState(false);

	const [ratings, setRatings] = useState([]);
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
						{strings('Rating and Comments')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => null,
		});
	}, []);

	const fetchRatings = async () => {
		try {
			const response = await APIKit.get(`shopapi/shops_app/account/shops/${shop.id}/ratings`);
			if (response && response.data) {
				setRatings(response.data.data);
				setPagination(response.data.meta);
				setNextPageLink(response.data.links.next);
			}

			setIsFetchingMoreData(false);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchExtraRatings = async () => {
		try {
			setIsFetchingMoreData(true);

			const response = await APIKit.get(nextPageLink);
			if (response && response.data) {
				setRatings(prevState => {
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
			fetchExtraRatings();
			setPageNumber(prevState => prevState + 1);
		}
	};

	useEffect(() => {
		if (shop) {
			fetchRatings();
		}
	}, [shop]);

	return (
		<View style={[styles.container]}>
			<FlatList
				data={ratings}
				ListHeaderComponent={() => (
					<React.Fragment>
						<SubHeader
							title={strings('Rating and Comments')}
							subtitle={`Home / Edit Shop Details / ${shop.name} / Rating and Comments`}
						/>
						{/* <SaveButton label="Evaluation Page" /> */}
						{/* <View style={styles.formView}>
							<View style={commonstyles.mb16}>
								<Text style={styles.productName}>ID</Text>
								<TextInput placeholder="Type..." style={styles.input} />
							</View>
							<View style={commonstyles.mb16}>
								<Text style={styles.productName}>Mobile </Text>
								<TextInput placeholder="Type..." style={styles.input} />
							</View>
							<View style={commonstyles.mb16}>
								<Text style={styles.productName}>Comment </Text>
								<TextInput placeholder="Type..." style={styles.input} />
							</View>
							<SaveButton label="Sort" />
							</View> */}
					</React.Fragment>
				)}
				renderItem={({item}) => {
					return <CommentsCard item={item} />;
				}}
				ListFooterComponent={() => {
					return (
						<React.Fragment>
							{pagination && pagination.current_page < pagination.last_page && isFetchingMoreData ? (
								<View style={{height: 60, alignItems: 'center', justifyContent: 'center'}}>
									<ActivityIndicator color={'#000000'} size={'large'} />
								</View>
							) : (
								<View style={{height: 60}} />
							)}
						</React.Fragment>
					);
				}}
				onEndReached={loadMoreData}
				onEndReachedThreshold={0.1}
				removeClippedSubviews={true}
				maxToRenderPerBatch={5}
				updateCellsBatchingPeriod={5}
				windowSize={3}
			/>
		</View>
	);
};

export default RatingAndComments;
