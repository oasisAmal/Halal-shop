import React, {useEffect, useState} from 'react';
import {Alert, FlatList, I18nManager, View, TouchableOpacity, Text} from 'react-native';
import giftstyles from './styles';
import CreateButton from '../../../components/create-button';
import SubHeader from '../../../components/partials/Subheader';
import BranchCard from './BranchCard';
import {DELETE_BRANCH, GET_BRANCHES} from '../../../services/BranchService';
import Icon from 'react-native-vector-icons/Ionicons';

import {useIsFocused} from '@react-navigation/native';
import {strings} from '../../../i18n';

const ShopBranches = props => {
	const {shop} = props.route.params;

	const isFocused = useIsFocused();

	const [listOfBranches, setListOfBranches] = useState([]);

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
						{strings('Shop Branches')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => null,
		});
	}, []);

	const fetchBranches = () => {
		GET_BRANCHES(
			shop.id,
			response => {
				setListOfBranches(response.data.data);
			},
			error => {
				console.log('Errors', error);
			},
		);
	};

	useEffect(() => {
		if (isFocused && shop) {
			fetchBranches();
		}
	}, [shop, isFocused]);

	const onDeleteRecord = item => {
		Alert.alert(strings('Delete'), strings('Are you sure you want to delete this data?'), [
			{
				text: strings('CANCEL'),
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{text: strings('Delete'), onPress: () => deleteRecord(item), style: 'destructive'},
		]);
	};

	const deleteRecord = item => {
		DELETE_BRANCH(shop.id, item.id, () => {
			setListOfBranches(prevState => prevState.filter(branch => branch.id !== item.id));
		});
	};

	return (
		<View style={[giftstyles.container, {}]}>
			<FlatList
				ListHeaderComponent={() => {
					return (
						<React.Fragment>
							<SubHeader
								title={strings('Shop Branches')}
								subtitle={`Home / Edit Shop Details / ${shop.name} / Shop Branches`}
							/>
							<CreateButton
								handlePress={() =>
									props.navigation.navigate('Create Branch', {
										shop: shop,
									})
								}
							/>
							<View style={{height: 8}} />
						</React.Fragment>
					);
				}}
				data={listOfBranches}
				renderItem={({item}) => {
					return (
						<View style={styles.orderView}>
							<BranchCard
								item={item}
								navigation={props.navigation}
								enableButtons={'true'}
								onEdit={() =>
									props.navigation.navigate('Create Branch', {
										shop: shop,
										branch: item,
									})
								}
								onDelete={() => {
									onDeleteRecord(item);
								}}
							/>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default ShopBranches;
