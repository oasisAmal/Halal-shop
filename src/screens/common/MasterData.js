import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import CustomDropdown from '../../components/utils/CustomDropdown';
import {ListShopsService} from '../../services/ProductService';
import CustomCheckbox from './custom-checkbox';
import {sort_data} from '../../data/DummyData';
import IMGS from '../../../assets/images';
import {MainProductsService} from '../../services/ProductService';
import {strings} from '../../i18n';
import DropdownItem from './custom-checkbox/DropdownItem';
import DropdownInput from './custom-checkbox/DropdownInput';

const MasterData = props => {
	const [dropdownOpened, setDropDowOpened] = useState(false);

	const [shops, setShops] = useState([]);
	const [mainproducts, setmainproducts] = useState([]);
	const {setProductName, setProductNameEn, setDescription, setDescriptionEn, setBrief, setBriefEn, set_is_bundle, is_bundle} = props;

	const getShops = () => {
		ListShopsService(onSuccess, onError);
	};
	const onSuccess = response => {
		//console.log(' shops');
		//console.log(response.data.shops);
		setShops(response.data.data.shops);
	};
	const onError = () => {};

	const onSuccessProducts = response => {
		//console.log(' shops');
		//console.log(response.data.shops);
		setmainproducts(response.data.data);
	};
	const onFailureProducts = () => {};
	const {isActive, setisActive, set_max_order, productName, productNameEn} = props;
	useEffect(() => {
		getShops();
		MainProductsService({}, onSuccessProducts, onFailureProducts);
		console.log('productName  ' + productName);
		console.log('productNameEn ' + productNameEn);
	}, []);

	const handleComplete = item => {
		//dispatch({type: 'COMPLETE', id: item.id});

		setmainproducts(prevSate =>
			prevSate.map(todo => {
				if (todo.id === item.id) {
					//console.log(todo.selected, ' todo.selected');
					if (todo.selected == undefined) {
						return {...todo, selected: true};
					} else return {...todo, selected: !todo.selected};
				} else {
					return todo;
				}
			}),
		);
	};

	useEffect(() => {
		props.setmainProductId(mainproducts?.filter(item => item.selected).map(item => item.id));
	}, [mainproducts]);

	return (
		<View>
			<Text style={styles.subheader}>{strings('Master Data')}</Text>
			<View style={styles.formView}>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Product Name')}</Text>
					<TextInput style={styles.input} value={productName} onChangeText={productName => setProductName(productName)} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Product Name')} In English </Text>
					<TextInput
						style={styles.input}
						value={productNameEn}
						onChangeText={productNameEn => setProductNameEn(productNameEn)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Shop')} </Text>
					<CustomDropdown defaultTxt={props.defaultShopName} data={shops} setSelectedItem={id => props.setshopId(id)} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Product Status')} </Text>
					<TouchableOpacity style={[commonstyles.flewRow]} onPress={() => setisActive(!isActive)}>
						<Image
							source={isActive ? IMGS.CheckboxTicked : IMGS.Checkbox}
							style={{
								width: 24,
								height: 24,
							}}
						/>
						<Text style={styles.deliveryTxt}>{isActive ? 'Active' : 'Not Active'}</Text>
					</TouchableOpacity>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Maximum Per Day')} </Text>
					<TextInput
						keyboardType="numeric"
						placeholder="Type..."
						style={styles.input}
						onChangeText={max_order => set_max_order(max_order)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Description')} </Text>
					<TextInput
						multiline={true}
						placeholder="Type..."
						style={styles.textarea}
						onChangeText={description => setDescription(description)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Description')} In English </Text>
					<TextInput
						multiline={true}
						placeholder="Type..."
						style={styles.textarea}
						onChangeText={descriptionEn => setDescriptionEn(descriptionEn)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>Brief </Text>
					<TextInput
						multiline={true}
						placeholder="Type..."
						style={styles.textarea}
						onChangeText={brief => setBrief(brief)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Brief')} In English</Text>
					<TextInput
						multiline={true}
						placeholder="Type..."
						style={styles.textarea}
						onChangeText={briefEn => setBriefEn(briefEn)}
					/>
				</View>
				<View style={[commonstyles.formView, {minHeight: 200}]}>
					<View style={commonstyles.mb16}>
						<Text style={styles.productName}>{strings('Main Product')}</Text>
						<DropdownInput dropdownOpened={dropdownOpened} onPress={() => setDropDowOpened(!dropdownOpened)} />
						{dropdownOpened && (
							<View
								style={[
									commonstyles.dropdownStyle,
									{
										marginTop: 4,
									},
								]}>
								<ScrollView>
									{mainproducts &&
										mainproducts.map((item, index) => (
											<DropdownItem key={index} item={item} handleComplete={() => handleComplete(item)} />
										))}
								</ScrollView>
							</View>
						)}
					</View>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('A set of products')} </Text>
					<TouchableOpacity style={[commonstyles.flewRow]} onPress={() => set_is_bundle(!is_bundle)}>
						<Image
							source={is_bundle ? IMGS.CheckboxTicked : IMGS.Checkbox}
							style={{
								width: 24,
								height: 24,
							}}
						/>
						<Text style={styles.deliveryTxt}>{is_bundle ? strings('Active') : strings('Not Active')}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default MasterData;
