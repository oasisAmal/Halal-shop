import React, {useEffect, useState} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import giftstyles from './styles';
import styles from '../../reports/styles';
import {regions_with_emirates_data} from '../../../data/DropdownData';
import commonstyles from '../../../styles/defultStyles';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import TagItem from '../../products/TagItem';
import SaveButton from '../../../components/save-button';
import APIKit from '../../../utils/APIKit';
import {strings} from '../../../i18n';
import Toast from 'react-native-toast-message';

const ListItem = ({
	item,
	selectedRegions,
	selectedEmirates,
	removeAllRegions,
	selectAllRegions,
	selectRegion,
	deselectRegion,
	selectEmirate,
	deselectEmirate,
}) => {
	const checkboxTicked = require('../../../../assets/images/checkbox-ticked.png');
	const checkbox = require('../../../../assets/images/checkbox.png');

	const [isAllRegionsSelected, setIsAllRegionsSelected] = useState(false);

	useEffect(() => {
		if (item.regions && item.regions.length > 0) {
			let numberOfSelectedRegions = 0;
			item.regions.map(region => {
				if (selectedRegions && selectedRegions.includes(`${region.id}`)) {
					numberOfSelectedRegions++;
				}
			});

			if (numberOfSelectedRegions === item.regions.length) {
				setIsAllRegionsSelected(true);
			} else {
				setIsAllRegionsSelected(false);
			}
		}
	}, [selectedRegions, item]);

	const selectRegionAction = id => {
		if (selectedRegions.includes(`${id}`)) {
			deselectRegion(`${id}`);
		} else {
			selectRegion(`${id}`);
		}
	};

	const removeRegions = () => {
		const listOfRegions = item.regions.map(region => `${region.id}`);
		removeAllRegions(listOfRegions);
	};

	const selectRegions = () => {
		const listOfRegions = item.regions.map(region => `${region.id}`);
		selectAllRegions(listOfRegions);
	};

	const selectEmirateAction = id => {
		if (selectedEmirates && selectedEmirates.length > 0 && selectedEmirates.includes(`${id}`)) {
			deselectEmirate(`${id}`);
		} else {
			selectEmirate(`${id}`);
		}
	};

	return (
		<View>
			<TouchableOpacity activeOpacity={0.8} style={commonstyles.flewRow} onPress={() => selectEmirateAction(item.id)}>
				<View>
					<Image
						source={
							selectedEmirates && selectedEmirates.length > 0 && selectedEmirates.includes(`${item.id}`)
								? checkboxTicked
								: checkbox
						}
						style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
					/>
				</View>
				<View>
					<Text style={[styles.productName, {}]}> {item.name} </Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={[commonstyles.flewRow, {marginBottom: 8}]}
				activeOpacity={0.8}
				onPress={() => (isAllRegionsSelected ? removeRegions() : selectRegions())}>
				<View>
					<Image
						source={isAllRegionsSelected ? checkboxTicked : checkbox}
						style={{width: 20, height: 20, marginRight: 8, marginTop: 0}}
					/>
				</View>
				<View>
					<Text style={[giftstyles.subtitle, {}]}>{strings('Select All Regions')}</Text>
				</View>
			</TouchableOpacity>
			<View style={[styles.formView, {paddingBottom: 16, flex: 1}]}>
				<SafeAreaView style={{flex: 1}}>
					<FlatList
						data={item.regions}
						numColumns={2}
						renderItem={({item}) => (
							<TagItem
								title={item.name}
								img={
									selectedRegions && selectedEmirates.length > 0 && selectedRegions.includes(`${item.id}`)
										? checkboxTicked
										: checkbox
								}
								handlePress={() => selectRegionAction(item.id)}
							/>
						)}
						keyExtractor={item => item.id}
						scrollEnabled={false}
					/>
				</SafeAreaView>
			</View>
		</View>
	);
};
const List = ({shop}) => {
	const [loading, setLoading] = useState(true);

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [emirates, setEmirates] = useState([]);

	const [selectedEmirates, setSelectedEmirates] = useState({});
	const [selectedRegions, setSelectedRegions] = useState({});

	const fetchRegions = async () => {
		try {
			const response = await APIKit.get(`shopapi/shops_app/account/regions/${shop.id}`);
			if (response && response.data) {
				setSelectedRegions(response.data.data.region_ids);
				setSelectedEmirates(response.data.data.emirate_ids);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchAllEmirates = async () => {
		try {
			const response = await APIKit.get(`api/emirates?with_regions=1`);
			if (response && response.data) {
				setEmirates(response.data.data);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (shop) {
			fetchRegions();
		}

		fetchAllEmirates();
	}, [shop]);

	const removeAllRegions = regionsList => {
		const filtered = selectedRegions.map(region => !regionsList.includes(region));
		setSelectedRegions(filtered);
	};

	const selectAllRegions = regionsList => {
		setSelectedRegions(prevState => {
			return [...prevState, ...regionsList];
		});
	};

	const selectRegion = regionId => {
		setSelectedRegions(prevState => {
			return [...prevState, regionId];
		});
	};

	const deselectRegion = regionId => {
		setSelectedRegions(prevState => prevState.filter(region => region != regionId));
	};

	const selectEmirate = emirateId => {
		setSelectedEmirates(prevState => {
			return [...prevState, emirateId];
		});
	};

	const deselectEmirate = emirateId => {
		setSelectedEmirates(prevState => prevState.filter(emirate => emirate != emirateId));
	};

	const submitChanges = async () => {
		try {
			const postData = {
				emirate_ids: selectedEmirates,
				region_ids: selectedRegions,
			};

			setIsSubmitting(true);
			const response = await APIKit.post(`shopapi/shops_app/account/shops/region/${shop.id}`, postData);
			if (response && response.data) {
				// setShopData(response.data.data);

				Toast.show({
					type: 'success',
					text1: strings('Data has been updated successfully'),
				});
			}

			setIsSubmitting(false);
		} catch (error) {
			console.log(error);
			setIsSubmitting(false);
		}
	};

	return (
		<View>
			{!loading ? (
				<React.Fragment>
					{emirates.map((emirate, index) => {
						return (
							<ListItem
								item={emirate}
								selectedRegions={selectedRegions}
								selectedEmirates={selectedEmirates}
								key={index}
								removeAllRegions={removeAllRegions}
								selectAllRegions={selectAllRegions}
								selectRegion={selectRegion}
								deselectRegion={deselectRegion}
								selectEmirate={selectEmirate}
								deselectEmirate={deselectEmirate}
							/>
						);
					})}
					<SaveButton isLoading={isSubmitting} handlePress={submitChanges} />
				</React.Fragment>
			) : null}
		</View>
	);
};

export default List;
