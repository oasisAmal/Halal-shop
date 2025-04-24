import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from '../common/styles';
import {ScrollView} from 'react-native-gesture-handler';
import CustomDropdown from '../../components/utils/CustomDropdown';
import {products_data} from '../../data/DummyData';
import CreateButton from '../../components/create-button';
import PictureComponent from '../common/PictureComponent';
import CookingComponent from '../common/CookingComponent';
import QuantityComponent from '../common/QuantityComponent';
import TagComponent from '../common/TagComponent';
import Appointment from '../common/AppointmentsComponent';
import Price from '../common/PriceComponent';
import SpecialSection from '../common/special-section';
import SaveButton from '../../components/save-button';
import AvailableTime from '../../components/available-time';
import MasterData from '../common/MasterData';
import {
	MainProductsService,
	CreateProductService,
	MenuListService,
	SectionListService,
	UpdateProductService,
} from '../../services/ProductService';
import {ListBranchService} from '../../services/ShopServices';
import CustomCheckbox from '../common/custom-checkbox';
import IMGS from '../../../assets/images';
import commonstyles from '../../styles/defultStyles';
import CreateSpecialSection from '../common/create-special-section';
import DropdownInput from '../common/custom-checkbox/DropdownInput';
import DropdownItem from '../common/custom-checkbox/DropdownItem';
import {strings} from '../../i18n';
import {refreshProduct} from '../../store/reducers';
import {useDispatch} from 'react-redux';

const CreateProduct = props => {
	const dispatch = useDispatch();
	navigationOptions = ({navigation}) => {
		return {
			header: null,
		};
	};
	const {title, id, product} = props;

	const [has_quantity, set_has_quantity] = React.useState(0);
	const [showAppointment, setshowAppointment] = React.useState(false);
	const [timeOpened, setTimeOpened] = React.useState(false);

	const [productName, setProductName] = useState(product ? product.name : '');
	const [productNameEn, setProductNameEn] = useState(product ? product.name_en : '');
	const [description, setDescription] = useState('');
	const [descriptionEn, setDescriptionEn] = useState('');
	const [brief, setBrief] = useState('');
	const [briefEn, setBriefEn] = useState('');
	const [branches, setBranches] = useState([]);
	const [selectedTags, setselectedTags] = useState([]);
	const [selectedDeliveryMethods, setselectedDeliveryMethods] = useState([]);

	const [shopId, setshopId] = useState(product ? product.shop?.id : '');
	const [mainProductId, setmainProductId] = useState([]);
	const [isActive, setisActive] = useState(1);
	const [branchId, setbranchId] = useState([]);

	const [price, setprice] = useState(null);
	const [old_price, set_old_price] = useState(null);
	const [stock, setstock] = useState(null);
	const [has_limited_offer, set_has_limited_offer] = useState(null);
	const [limited_offer_expired_at, set_limited_offer_expired_at] = useState(null);

	const [quantity_min, set_quantity_min] = useState(1);
	const [quantity_step, set_quantity_step] = useState(1);

	const [image, setimage] = useState(product ? product.image : null);
	const [images, setimages] = useState([]);

	const [shipping_method_id, set_shipping_method_id] = useState(null);
	const [delivery, setdelivery] = useState(null); // delivery price
	const [delivery_delay, set_delivery_delay] = useState(null);
	const [delivery_delay_extra, set_delivery_delay_extra] = useState(null);
	const [delivery_delay_extra_time, set_delivery_delay_extra_time] = useState(null);

	const [ada7y_days, set_ada7y_days] = useState([]);
	const [selectedWeekdays, setselectedWeekdays] = useState([]);
	const [max_order, set_max_order] = useState(undefined);

	const [has_cookings, set_has_cookings] = useState(0);
	const [enough_for_from, set_enough_for_from] = useState(undefined);
	const [enough_for_to, set_enough_for_to] = useState(undefined);
	const [cookings, set_cookings] = useState(undefined);

	const [sub_products, set_sub_products] = useState(undefined);

	const [menus, set_menus] = useState([]);
	const [shop_menu_id, set_shop_menu_id] = useState(undefined);
	const [is_bundle, set_is_bundle] = useState(0);
	const [allow_donate, set_allow_donate] = useState(0);
	const [allow_gift, set_allow_gift] = useState(0);
	const [product_branch, set_product_branch] = useState(undefined);
	const [last_id, set_last_id] = useState(0);
	const [is_thirty_min, set_is_thirty_min] = useState(0);

	const [availableTimes, setAvailableTimes] = useState(undefined);

	const [sections, set_sections] = useState([]);
	const [specialsections, set_special_sections] = useState([]);
	const [last_sepcial_id, set_last_sepcial_id] = useState(0);

	const [categoryId, setCategoryId] = useState(null);
	const [has_sub_products, set_has_sub_products] = useState(false);
	const [dropdownOpened, setDropDowOpened] = useState(false);

	const handleAdditionalImages = image => {
		setimages(images => [...images, image]);
	};

	const updateSubProduct = (id, field, value) => {
		console.log(id, field, value);

		set_sub_products(
			sub_products.map(todo => {
				if (todo.id === id) {
					if (field == 'is_active') {
						return {...todo, is_active: !todo.is_active};
					} else {
						if (field == 'weight') {
							return {...todo, weight: value};
						} else if (field == 'age') {
							return {...todo, age: value};
						} else if (field == 'price') {
							return {...todo, price: value};
						} else if (field == 'old_price') {
							return {...todo, old_price: value};
						} else if (field == 'enough_for_from') {
							return {...todo, enough_for_from: value};
						} else if (field == 'enough_for_to') {
							return {...todo, enough_for_to: value};
						} else {
							return todo;
						}
					}
				} else {
					return todo;
				}
			}),
		);

		//console.log(sub_products);
	};

	const updateSpecialSection = (index, field, value, values = []) => {
		console.log(index, field, value);

		set_special_sections(
			specialsections.map(todo => {
				if (todo.index === index) {
					if (field == 'is_required') {
						return {...todo, is_required: todo.is_required == 0 ? 1 : 0};
					} else {
						if (field == 'name') {
							return {...todo, name: value, values: values};
						} else if (field == 'name_en') {
							return {...todo, name_en: value};
						} else if (field == 'section_name') {
							return {...todo, section_name: value};
						} else {
							return todo;
						}
					}
				} else {
					return todo;
				}
			}),
		);

		console.log(specialsections);
	};

	const handleSubProduct = (index, field = '') => {
		createSubProduct();
	};
	const createSubProduct = () => {
		let new_id = parseInt(last_id) + 1;
		console.log(new_id + ' new_id ');
		let empty_data = {
			weight: 0,
			age: null,
			price: 0,
			old_price: 0,
			stock: 0,
			enough_for_from: 0,
			enough_for_to: 0,
			is_active: false,
			id: sub_products && sub_products.length >= 1 ? new_id : 1,
		};
		// set_last_id(last_id => last_id + 1);
		set_last_id(last_id => {
			return last_id + 1;
		});

		if (sub_products && sub_products.length > 0) {
			set_sub_products([...sub_products, empty_data]);
		} else {
			set_sub_products([empty_data]);
		}
	};

	const createSpecialSection = () => {
		let new_id = parseInt(last_sepcial_id) + 1;
		console.log(new_id + ' new_id ');
		let empty_data = {
			section_name: null,
			is_required: 0,
			name: null,
			name_en: null,
			index: specialsections && specialsections.length >= 1 ? new_id : 1,
		};
		// set_last_id(last_id => last_id + 1);
		set_last_sepcial_id(last_id => {
			return last_id + 1;
		});

		if (specialsections && specialsections.length > 0) {
			set_special_sections([...specialsections, empty_data]);
		} else {
			set_special_sections([empty_data]);
		}
	};

	// useEffect(() => {
	// 	let branch_list = [];
	// 	branches &&
	// 		branches.map(item => {
	// 			if (item.selected) {
	// 				//branch_list.push(item.id);
	// 				if (product_branch?.length > 0) {
	// 					const userFound = product_branch.find(pid => pid === item.id);
	// 					if (userFound) {
	// 						set_product_branch(product_branch.filter(pid => pid !== item.id));
	// 					} else {
	// 						set_product_branch([...product_branch, item.id]);
	// 					}
	// 				} else {
	// 					set_product_branch([item.id]);
	// 				}
	// 			}
	// 		});
	// }, [branches]);

	const toggleTimeOpened = () => {
		setTimeOpened(!timeOpened);
	};

	let onSuccessSave = async response => {
		console.log('response.data ==========================> ');
		console.log(response.data);
		if (response.data && response.data.status == 200) {
			dispatch(refreshProduct('true'));
			alert('successfully saved');
		} else {
			alert('Not success  ');
		}
		props.navigation.navigate('ActiveProducts', {
			refresh: true,
		});
	};

	let onFailureSave = error => {
		console.log(error);
		console.log(error.message);
	};

	let onSuccessBranch = async response => {
		// console.log(response.data.data);

		setBranches(response.data.data);
	};

	let onFailureBranch = error => {
		console.log(error);
	};

	const fetchMainProducts = () => {
		// MainProductsService({}, onSuccess, onFailure);
		ListBranchService(onSuccessBranch, onFailureBranch);
		MenuListService(
			response => set_menus(response.data),
			error => console.log(error),
		);
		SectionListService(
			response => set_sections(response.data.data),
			error => console.log(error),
		);
	};

	const toggleSubProductStatus = index => {};
	const validateInputs = () => {
		if (
			shopId == '' ||
			productName == '' ||
			productNameEn == '' ||
			categoryId == '' ||
			image == '' ||
			quantity_min == '' ||
			quantity_step == ''
		) {
			return false;
		} else {
			return true;
		}
	};

	const saveProduct = () => {
		//console.log(' main product id ' + mainProductId);

		let data1 = {
			appointment: {
				//	shipping_method_id: shipping_method_id ?? '1',
				delivery_times: {
					times: availableTimes ?? [],
				},
				delivery_weeks: {
					week: selectedWeekdays ?? [],
				},
				// hours_before_order: '0',
				delivery_delay: delivery_delay ?? '',
				delivery_delay_extra: delivery_delay_extra ?? '',
				delivery_delay_extra_time: delivery_delay_extra_time ?? '',
				// date_style: 'date',
				// max_date: null,
				// max_days: '0',
				// payments: '[2]',
				// delivery: '35',
				ada7y_days: ada7y_days ?? '',
				// ada7y_order_counts: '',
				// not_available_dates: '',
			},

			product_branch: branches?.filter(item => item.selected).map(item => item.id),
			cookings: cookings ?? [],
			sub_product: sub_products ?? [],

			has_cookings: has_cookings ?? 0,
			category_id: categoryId ?? 8, // 183,
			shop_id: shopId ?? null,
			shop_menu_id: shop_menu_id ?? null,
			name: productName ?? '',
			name_en: productNameEn ?? '',
			description: description ?? '',
			description_en: descriptionEn ?? '',
			brief: brief ?? null,
			brief_en: briefEn ?? null,
			image: image ?? 'undefined',
			images: images ?? [],
			quantity_min: quantity_min ?? '1',
			quantity_step: quantity_step ?? '1',
			price: price ?? null,
			old_price: old_price ?? null,
			stock: stock ?? null,
			has_limited_offer: has_limited_offer ?? 0,
			limited_offer_expired_at: limited_offer_expired_at ?? null,
			is_active: isActive ?? 0,

			has_quantity: has_quantity ?? 0,
			has_sub_products: has_sub_products ?? false,

			is_thirty_min: is_thirty_min ?? 0,

			enough_for_from: enough_for_from ?? null,
			enough_for_to: enough_for_to ?? null,

			main_product_id: mainProductId ?? null,
			is_bundle: is_bundle ?? 0,
			// attribute_group_id: null,
			allow_gift: allow_gift ?? 0,
			allow_donate: allow_donate ?? 0,

			supplier_id: null,
			max_order: max_order ?? null,
			section: specialsections ?? [],
		};
		if (shipping_method_id) {
			data1.appointment.shipping_method_id = shipping_method_id;
		}
		console.log('data is below ');

		console.log(data1);
		console.log(data1.product_branch);

		let validated = validateInputs();
		if (validated) {
			if (id) {
				data1.id = id;
				UpdateProductService(data1, onSuccessSave, onFailureSave);
			} else {
				CreateProductService(data1, onSuccessSave, onFailureSave);
			}
		} else {
			alert('Some fields missing ');
		}
	};

	useEffect(() => {
		fetchMainProducts();
	}, []);

	// useEffect(() => {
	// 	console.log('image');
	// 	console.log(image);
	// 	console.log('images');
	// 	console.log(images);
	// }, [image, images]);

	let delete_sub_product = index => {
		console.log('index is =>>>>> ' + index);
		set_sub_products(prevState => prevState.filter(product => product.id != index));
	};
	let delete_special_section = index => {
		console.log(' delete_special_sectionindex is =>>>>> ' + index);
		console.log(specialsections);
		set_special_sections(prevState => prevState.filter(item => item.index != index));
	};

	const handleComplete = item => {
		//dispatch({type: 'COMPLETE', id: item.id});

		setBranches(prevSate =>
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
	return (
		<ScrollView>
			<View style={[styles.container, {marginBottom: 40, opacity: timeOpened ? 0.2 : 1}]}>
				<Text style={styles.editTxt}>{title ?? strings('Create Product')} </Text>
				<MasterData
					setProductName={setProductName}
					setProductNameEn={setProductNameEn}
					setDescription={setDescription}
					setDescriptionEn={setDescriptionEn}
					setBrief={setBrief}
					setBriefEn={setBriefEn}
					setshopId={setshopId}
					setmainProductId={setmainProductId}
					setisActive={setisActive}
					isActive={isActive}
					set_max_order={set_max_order}
					set_is_bundle={set_is_bundle}
					is_bundle={is_bundle}
					productName={productName}
					productNameEn={productNameEn}
					defaultShopName={product?.shop?.name}
				/>
				<Text style={styles.subheader}>{strings('Section')}</Text>
				<View style={styles.formView}>
					<CustomDropdown data={sections} setSelectedItem={setCategoryId} />
					{/* <Image source={require('../../../assets/images/section.png')} resizeMode="stretch" style={styles.sectionImg} />
					<Text style={styles.sectionTxt}> Fish</Text> */}
				</View>
				{menus && menus.length > 0 && (
					<View style={styles.formView}>
						<Text style={styles.subheader}>{strings('Menu')}</Text>

						<CustomDropdown data={menus} setSelectedItem={set_shop_menu_id} />
					</View>
				)}
				<View></View>
				<Text style={styles.subheader}>{strings('Branch')}</Text>
				<View style={[styles.formView, {minHeight: 200}]}>
					<Text style={styles.productName}>{strings('Store Branches')}</Text>
					<DropdownInput dropdownOpened={dropdownOpened} onPress={() => setDropDowOpened(!dropdownOpened)} />
					{dropdownOpened && (
						<View style={commonstyles.dropdownStyle}>
							<ScrollView>
								{branches &&
									branches.map((item, index) => (
										<DropdownItem key={index} item={item} handleComplete={() => handleComplete(item)} />
									))}
							</ScrollView>
						</View>
					)}
				</View>
				<Price
					set_has_sub_products={set_has_sub_products}
					has_sub_products={has_sub_products}
					setprice={setprice}
					set_old_price={set_old_price}
					setstock={setstock}
					set_has_limited_offer={set_has_limited_offer}
					set_limited_offer_expired_at={set_limited_offer_expired_at}
					has_limited_offer={has_limited_offer}
					handleSubProduct={handleSubProduct}
					sub_products={sub_products}
					delete_sub_product={delete_sub_product}
					createSubProduct={createSubProduct}
					updateSubProduct={updateSubProduct}
				/>
				<PictureComponent setimage={setimage} handleAdditionalImages={handleAdditionalImages} image={image} />
				<CookingComponent
					set_has_cookings={set_has_cookings}
					set_enough_for_from={set_enough_for_from}
					set_enough_for_to={set_enough_for_to}
					set_cookings={set_cookings}
				/>
				<Text style={styles.subheader}>{strings('Donate')}</Text>
				<View style={styles.formView}>
					<TouchableOpacity
						style={[commonstyles.flewRow, {marginBottom: 12}]}
						onPress={() => set_allow_donate(!allow_donate)}>
						<Image
							source={allow_donate ? IMGS.CheckboxTicked : IMGS.Checkbox}
							style={{
								width: 24,
								height: 24,
							}}
						/>
						<Text style={styles.deliveryTxt}> {strings('Allow Donate')}</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.subheader}>{strings('Gifts')}</Text>
				<View style={styles.formView}>
					<TouchableOpacity style={[commonstyles.flewRow, {marginBottom: 12}]} onPress={() => set_allow_gift(!allow_gift)}>
						<Image
							source={allow_gift ? IMGS.CheckboxTicked : IMGS.Checkbox}
							style={{
								width: 24,
								height: 24,
							}}
						/>
						<Text style={styles.deliveryTxt}> {strings('Allow Gift')}</Text>
					</TouchableOpacity>
				</View>

				<QuantityComponent set_quantity_min={set_quantity_min} set_quantity_step={set_quantity_step} />

				<Appointment
					showAppointment={showAppointment}
					setshowAppointment={setshowAppointment}
					setselectedDeliveryMethods={setselectedDeliveryMethods}
					set_shipping_method_id={set_shipping_method_id}
					setdelivery={setdelivery}
					set_delivery_delay={set_delivery_delay}
					set_delivery_delay_extra={set_delivery_delay_extra}
					set_delivery_delay_extra_time={set_delivery_delay_extra_time}
					ada7y_days={ada7y_days}
					set_ada7y_days={set_ada7y_days}
					setselectedWeekdays={setselectedWeekdays}
					set_is_thirty_min={set_is_thirty_min}
					is_thirty_min={is_thirty_min}
				/>
				{/* <TagComponent setselectedTags={setselectedTags} /> */}
				{showAppointment && (
					<CreateButton hideImg={'true'} label="Available Time" mh={4} handlePress={() => setTimeOpened(true)} />
				)}

				{timeOpened && (
					<AvailableTime onSubmit={setAvailableTimes} handlePress={toggleTimeOpened} toggleModal={toggleTimeOpened} />
				)}

				<SpecialSection
					specialsections={specialsections}
					set_special_sections={set_special_sections}
					createSpecialSection={createSpecialSection}
					set_has_quantity={set_has_quantity}
					has_quantity={has_quantity}
				/>
				<View style={styles.formView}>
					{specialsections &&
						specialsections.length > 0 &&
						specialsections.map((item, index) => (
							<CreateSpecialSection
								item={item}
								key={index}
								delete_special_section={delete_special_section}
								updateSpecialSection={updateSpecialSection}
							/>
						))}
				</View>

				<View style={{marginTop: 40}}>
					<SaveButton handlePress={() => saveProduct()} />
				</View>
			</View>
		</ScrollView>
	);
};

export default CreateProduct;
