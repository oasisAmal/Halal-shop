import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../edit-product-details/styles';
import commonstyles from '../../../styles/defultStyles';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import {section_data} from '../../../data/DummyData';
import SubHeader from '../../../components/partials/Subheader';
import {ScrollView} from 'react-native-gesture-handler';
import genDataStyles from '../general-data/styles';
import Appointment from './Appointment';
import SaveButton from '../../../components/save-button';
import {GET_EMIRATES, GET_REGIONS} from '../../../services/ListsService';
import {CREATE_BRANCH, UPDATE_BRANCH} from '../../../services/BranchService';
import {strings} from '../../../i18n';
import {useDispatch, useSelector} from 'react-redux';
import {SET_EMIRATES} from '../../../store/actionTypes';
import {toastMessage} from '../../../components/utils/functions/commonFunctions';

const CreateBranch = props => {
	const {shop, branch} = props.route.params;

	const dispatch = useDispatch();

	const emiratesState = useSelector(state => state.emirates);

	const [isSubmitting, setIsSubmitting] = useState(false);

	const [name, setName] = useState('');
	const [selectedEmirate, setSelectedEmirate] = useState(undefined);
	const [selectedEmirateName, setSelectedEmirateName] = useState(undefined);
	const [selectedRegion, setSelectedRegion] = useState(undefined);
	const [selectedRegionName, setSelectedRegionName] = useState(undefined);
	const [minCart, setMinCart] = useState('');

	const [listOfEmirates, setListOfEmirates] = useState([]);
	const [listOfRegions, setListOfRegions] = useState([]);

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
						{branch ? strings('Update a Branch') : strings('Create a Branch')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => null,
		});
	}, []);

	useEffect(() => {
		if (branch) {
			setName(branch.name);
			setSelectedEmirate(branch.emirate ? branch.emirate.id : undefined);
			setSelectedEmirateName(branch.emirate ? branch.emirate.name : undefined);
			setSelectedRegion(branch.region ? branch.region.id : undefined);
			setSelectedRegionName(branch.region ? branch.region.name : undefined);
			if (branch.minmum_cart) setMinCart(`${branch.minmum_cart}`);
		}
	}, [branch]);

	const fetchEmirates = () => {
		GET_EMIRATES(response => {
			setListOfEmirates(response.data.data);

			dispatch({type: SET_EMIRATES, data: response.data.data});
		});
	};

	useEffect(() => {
		if (emiratesState.length > 0) {
			setListOfEmirates(emiratesState);
		} else {
			fetchEmirates();
		}
	}, [emiratesState]);

	const fetchRegions = () => {
		GET_REGIONS(selectedEmirate, response => {
			setSelectedRegion(undefined);
			setListOfRegions(response.data.data);
		});
	};

	useEffect(() => {
		if (selectedEmirate) {
			fetchRegions();
		}
	}, [selectedEmirate]);

	const onSubmitForm = () => {
		try {
			const data = {
				name: name,
				emirate_id: selectedEmirate,
				region_id: selectedRegion,
				minmum_cart: minCart,
			};
			if (name !== '' || selectedEmirate !== '' || selectedRegion !== '' || minCart !== '') {
				setIsSubmitting(true);
				if (branch) {
					UPDATE_BRANCH(
						shop.id,
						branch.id,
						data,
						response => {
							setIsSubmitting(false);
						},
						error => {
							console.log(error);
							setIsSubmitting(false);
						},
					);
				} else {
					CREATE_BRANCH(
						shop.id,
						data,
						response => {
							setIsSubmitting(false);
							toastMessage(strings('Success'));
							props.navigation.navigate('Shop Branches', {
								shop: shop,
							});
						},
						error => {
							console.log(error);
							setIsSubmitting(false);
						},
					);
				}
			} else {
				toastMessage(strings('Please fill all the  fields'));
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={[styles.container]}>
			<ScrollView>
				{branch ? (
					<SubHeader
						title={strings('Update a Branch')}
						subtitle={`Home / Edit Shop Details / ${shop.name} / Shop Branches / Update a Branch`}
					/>
				) : (
					<SubHeader
						title={strings('Create a Branch')}
						subtitle={`Home / Edit Shop Details / ${shop.name} / Shop Branches / Create a Branch`}
					/>
				)}
				<View style={styles.formView}>
					<View style={commonstyles.mb16}>
						<Text style={styles.productName}>{strings('Name')}</Text>
						<TextInput style={styles.input} value={name} onChangeText={txt => setName(txt)} />
					</View>
					<View style={commonstyles.mb16}>
						<Text style={styles.productName}>{strings('Emirate')}</Text>
						<CustomDropdown
							data={listOfEmirates}
							setSelectedItem={item => {
								setSelectedEmirate(item);
								setSelectedEmirateName(undefined);
							}}
							defaultTxt={selectedEmirateName}
						/>
					</View>
					<View style={commonstyles.mb16}>
						<Text style={styles.productName}>{strings('Region')}</Text>
						<CustomDropdown
							data={listOfRegions}
							setSelectedItem={item => {
								setSelectedRegion(item);
								setSelectedRegionName(undefined);
							}}
							defaultTxt={selectedRegionName}
						/>
					</View>
					<View style={commonstyles.mb16}>
						<Text style={styles.productName}>{strings('Minimum Purchase')}</Text>
						<TextInput placeholder="Type..." style={styles.input} value={minCart} onChangeText={txt => setMinCart(txt)} />
					</View>
				</View>
				<SaveButton handlePress={onSubmitForm} isLoading={isSubmitting} />

				{branch ? (
					<React.Fragment>
						<View style={{marginBottom: 12}}>
							<Text
								style={[
									genDataStyles.title,
									{
										marginLeft: 4,
									},
								]}>
								{strings('Appointments')}
							</Text>
						</View>
						<Appointment shop={shop} branch={branch} />
					</React.Fragment>
				) : null}
			</ScrollView>
		</View>
	);
};

export default CreateBranch;
