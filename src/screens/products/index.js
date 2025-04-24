import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ProductCardView from './ProductCardView';
import Filter from './Filter';
import EditPrice from '../../components/edit-product-price';
import {orders_data} from '../../data/DummyData';
import {theme_color} from '../../mutils';
import MainHeader from '../../components/partials/MainHeader';
import SaveButton from '../../components/save-button';

import {connect} from 'react-redux';
import {toggleBlur} from '../../store/reducers';
import {ListProductsService} from '../../services/ProductService';
import {strings} from '../../i18n';
import SearchBar from '../../components/orders/SearchBar';
import {toastMessage} from '../../components/utils/functions/commonFunctions';
import {setProducts} from '../../store/reducers';
import ProductCardViewNeedApproval from './ProductCardViewNeedApproval';
import {useNavigationState} from '@react-navigation/native';

let Products = props => {
	const navigationState = useNavigationState(state => state);

	const previousRouteNameRef = useRef();

	useEffect(() => {
		const currentRoute = navigationState.routes[navigationState.index];
		const currentRouteName = currentRoute.name;

		if (previousRouteNameRef.current && previousRouteNameRef.current !== currentRouteName) {
			// Route name changed, call your function
			console.log('Route name changed to:', currentRouteName);
			handleRouteNameChange(currentRouteName);
		}

		// Update the previous route name ref
		previousRouteNameRef.current = currentRouteName;
	}, [navigationState]);

	const handleRouteNameChange = newRouteName => {
		// Your function logic here
		console.log('Handling new route name:', newRouteName);
		loadProducts(newRouteName);
	};

	let {title, priceDisabled, createDisabled, type} = props;

	const [formdata, setFormdata] = React.useState({
		approved: type == 'approval' ? 0 : 1,
	});
	const [orders, setOrders] = React.useState(orders_data);
	const [filterVisible, setFilterVisible] = useState(false);

	const [isLoading, setIsLoading] = React.useState(false);
	const [editgeneralProducts, toggleEditProducts] = useState(false);
	const [specialCategories, setSpecialCategories] = useState(false);
	const [sortProduct, setsortProduct] = useState(false);
	const [editPrice, setEditPrice] = useState(false);

	const [products, setProducts] = React.useState([]);
	const [refreshPage, setrefreshPage] = React.useState(false);

	const [previous, setPrevious] = React.useState(null);
	const [next, setNext] = React.useState('');
	const [search, setSearch] = React.useState('');

	// let reduxProducts = useSelector(state => state.products);
	let url = '';

	if (type == 'approval') {
		url = `shopapi/shops_app/products?page=1&&approved=0`;
	} else {
		url = `shopapi/shops_app/products?page=1`;
	}

	const handleNextOrders = () => {
		//alert('next ');
		loadProducts(next);
	};
	const handlePreviousOrders = () => {
		loadProducts(previous);
	};
	// const  getBaseurl = async()=> {
	// 	let burl = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.BaseURL);
	// 	if (burl !== null) {
	// 		console.log(burl);
	// 	}
	// }

	let loadProducts = async (data = '') => {
		setIsLoading(true);
		//let url = '';
		if (data == null || data == '') {
			// if (type == 'approval') {
			// 	url = `shopapi/shops_app/products?page=1&&approved=0`;
			// } else {
			// 	url = `shopapi/shops_app/products?page=1`;
			// }
		} else {
			if (data == 'NeedApprovalProducts') {
				url = `shopapi/shops_app/products?page=1&&approved=0`;
			} else if (data == 'Products') {
				url = `shopapi/shops_app/products?page=1`;
			} else {
				var splitted = data.split('/shopapi'); //this will output ["1234", "56789"]
				url = 'shopapi' + splitted[1];
			}
		}
		try {
			console.log(' formdata');
			console.log(formdata);

			ListProductsService(url, onSuccess, onFailure);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	const handleEditPrice = () => {
		setEditPrice(!editPrice);
		props.toggleBlur(!editPrice);
	};
	const toggleFilter = status => {
		setFilterVisible(status);
	};

	const onSuccess = response => {
		// console.log(response.data);
		if (response?.data?.data && response.data.data.length > 0) {
			//setProducts(response.data.data);
			props.setProducts(response.data.data);

			console.log('products lists ');
			//console.log(response.data.data);
			console.log(response.data.data.length + ' length ');
			setPrevious(response?.data?.links?.prev);
			setNext(response?.data?.links?.next);
		} else {
			setPrevious('');
			setNext('');
			props.setProducts([]);
			//setProducts([]);
		}
		setIsLoading(false);
	};
	const onFailure = error => {
		setIsLoading(false);
		console.log('error in products list');
		console.log(error);
		setProducts([]);
		props.setProducts([]);
	};
	React.useEffect(() => {
		loadProducts();

		console.log('mount phase ');
	}, []);

	React.useEffect(() => {
		loadProducts();
	}, [type]);

	let handleFilterData = data => {
		setIsLoading(true);
		setFilterVisible(false);
		// let url = '';
		// if (type == 'approval') {
		// 	url = `shopapi/shops_app/products?page=1&&approved=0`;
		// } else {
		// 	url = `shopapi/shops_app/products?page=1`;
		// }

		if (data.sub_category_id) {
			url = url + '&&sub_category_id=' + data.sub_category_id;
		}
		if (data.category_id) {
			url = url + '&&category_id=' + data.category_id;
		}
		if (data.branch_id) {
			url = url + '&&branch_id=' + data.branch_id;
		}
		if (data.shop_id) {
			url = url + '&&shop_id=' + data.shop_id;
		}
		if (data.badges && data.badges.length > 0) {
			data.badges.map(item => {
				console.log('data.badges[item] ' + item);
				url = url + '&&badges[]=' + item;
			});
		}

		//setFormdata(fd);

		console.log(' filter form data  ');
		console.log(data);
		console.log(' url   ');
		console.log(url);
		ListProductsService(url, onSuccess, onFailure);
	};

	React.useEffect(() => {
		//alert(props.refreshProducts + '  props.refreshProducts');
		if (
			refreshPage ||
			// || props.refreshProducts == true
			props.route?.params?.refresh == true
		) {
			loadProducts();
		}
	}, [refreshPage, props.refreshProducts, props.route?.params?.refresh]);

	let handleSearch = () => {
		//setselectedStatus('');
		setFormdata({
			q: search,
			approved: type == 'approval' ? 0 : 1,
		});
		clearFilterKeys();
		if (search == '') {
			toastMessage(strings('Please type to search'));
		} else {
			setIsLoading(true);
			url = url + '&&q=' + search;
			console.log(url);
			ListProductsService(url, onSuccess, onFailure);
		}
	};
	const clearFilterKeys = () => {};

	return (
		<View>
			<MainHeader navigation={props.navigation} />
			<View style={[styles.container, {}]}>
				<ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 60}}>
					<Text style={styles.orderTxt}>{strings('Products')}</Text>
					<View style={{flexDirection: 'row'}}>
						<Text style={styles.subheader}>{title ?? 'Home / Products / Products'} </Text>
					</View>

					<View>
						{!createDisabled && (
							<TouchableOpacity onPress={() => props.navigation.navigate('CreateProduct')}>
								<View style={[styles.longBtn, {}]}>
									<View style={styles.next}>
										<Text style={styles.longBtnTxt}> {strings('Create')} </Text>
										<Image source={require('../../../assets/images/plusIcon.png')} style={styles.plusImg} />
									</View>
								</View>
							</TouchableOpacity>
						)}

						<SearchBar
							setModalVisible={setFilterVisible}
							openFilter={() => setFilterVisible(!filterVisible)}
							setSearch={setSearch}
							search={search}
							handleSearch={handleSearch}
						/>
						{!priceDisabled && (
							<View style={{flexDirection: 'row'}}>
								<ScrollView horizontal showsHorizontalScrollIndicator={false}>
									<View style={{}}>
										<TouchableOpacity onPress={() => handleEditPrice()}>
											<Text style={styles.btn}>{strings('Edit Prices')} </Text>
										</TouchableOpacity>
									</View>
									{editPrice && <EditPrice handlePress={() => handleEditPrice()} setrefreshPage={setrefreshPage} />}
								</ScrollView>
							</View>
						)}

						{filterVisible && (
							<Filter
								handleOk={
									data => handleFilterData(data)
									//console.log(data)
								}
								modalVisible={filterVisible}
								toggleModal={toggleFilter}
							/>
						)}
						{isLoading && <ActivityIndicator />}
						{!isLoading &&
							props.products &&
							props.products.map((product, index) => {
								return (
									<View key={index} style={styles.orderView}>
										{type && type == 'approval' ? (
											<ProductCardViewNeedApproval
												key={index}
												navigation={props.navigation}
												enableButtons={'true'}
												product={product}
												setrefreshPage={setrefreshPage}
											/>
										) : (
											<ProductCardView
												key={index}
												navigation={props.navigation}
												enableButtons={'true'}
												product={product}
												setrefreshPage={setrefreshPage}
											/>
										)}
									</View>
								);
							})}
						{props.products && props.products.length == 0 && (
							<Text
								style={{
									textAlign: 'center',
									fontSize: 16,
									marginVertical: 32,
								}}>
								{strings('No Data')}
							</Text>
						)}
						{props.products && props.products.length > 0 && previous !== null && !isLoading && (
							<SaveButton label={strings('Load Previous Page Data')} handlePress={() => handlePreviousOrders()} />
						)}
						{props.products && props.products.length > 0 && next !== null && !isLoading && (
							<SaveButton label={strings('Load Next Page Data')} handlePress={() => handleNextOrders()} />
						)}
						{type && type == 'approval' ? <View style={styles.mb200} /> : <View style={styles.mb100} />}
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	subheader: {
		textAlign: 'left',
		fontFamily: 'Inter-Regular',
		fontSize: 14,
		//: 400,
		lineHeight: 21,
		marginBottom: 24,
		color: '#475569',
	},
	container: {
		//flex: 1,
		marginHorizontal: 16,
	},
	longBtn: {
		backgroundColor: theme_color,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
		height: 48,
		//marginHorizontal: 16 ,
		marginBottom: 16,
		flexDirection: 'row',
	},
	btn: {
		marginTop: 16,
		marginBottom: 9,
		marginRight: 8,
		paddingVertical: 12,
		paddingHorizontal: 18,
		color: 'white',
		backgroundColor: theme_color,
		borderRadius: 6,
	},
	longBtnTxt: {
		fontFamily: 'Inter-Medium',
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		//: 500,
	},

	orderTxt: {
		textAlign: 'left',
		//paddingLeft: 16,
		paddingTop: 24,
		paddingBottom: 4,
		fontSize: 20,
		//: 600,
		color: 'black',
	},
	next: {
		flexDirection: 'row',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	plusImg: {
		width: 16,
		height: 16,
		marginLeft: 5,
		marginVertical: 4,
	},

	filter: {
		flex: 0.1,
		paddingVertical: 16,
		paddingHorizontal: 20,
		backgroundColor: 'white',
		marginRight: 8,
		//marginLeft:16,
		marginBottom: 8,
		borderRadius: 6,
	},
	search: {
		flex: 0.1,
		backgroundColor: 'white',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderBottomRightRadius: 6,
		borderTopRightRadius: 6,
		marginBottom: 8,
	},
	orderView: {
		marginBottom: 8,
		marginTop: 8,
	},
	mb100: {marginBottom: 100},
	mb200: {marginBottom: 200},
});

const mapStateToProps = state => {
	return {
		enableBlur: state.enableBlur,
		products: state.products,
		refreshProducts: state.refreshProducts,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		toggleBlur: cart_item => dispatch(toggleBlur(cart_item)),
		setProducts: products => dispatch(setProducts(products)),
	};
}

export default Products = connect(mapStateToProps, mapDispatchToProps)(Products);
