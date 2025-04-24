import React, {useState, memo} from 'react';
import {View, StyleSheet, AppState} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Filter from './Filter';
import OrderCreated from './OrderCreated';
import MainHeader from '../partials/MainHeader';

import SubHeader from '../partials/Subheader';
import OrderCountComponent from './order-counts';
import {OrderCounts, ListOrdersServiceWithoutQuery} from '../../services/OrdersServices';
import OrderLists from './OrderLists';
import {clearCache, setClientToken} from '../../utils/APIKit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../utils/AsyncStorageKeys';
import {ListOrdersService} from '../../services/OrdersServices';
import ExportOrders from './ExportOrders';
import {strings} from '../../i18n';
import {connect} from 'react-redux';
import {setOrders, updateOrderCounts, updateOrderBadgeCount} from '../../store/reducers';
import {toastMessage} from '../utils/functions/commonFunctions';
import {UpdateFCMTokenService} from '../../services/NotificationService';
import APIKit from '../../utils/APIKit';
import {removeOrderStatusChangedAlert, setOrderReceivedAlert} from '../../mutils';
import SaveButton from '../save-button';
import SelectedFilteredList from './SelectedFilteredList';
import SearchBar from './SearchBar';
import {updateOrderStatus, setToken} from '../../store/reducers';

import CreateButton from '../create-button';
import SearchBarNew from './SerachBarNew';
import {useDispatch} from 'react-redux';
import {useRef} from 'react';

let Orders = props => {
	const [orders, setOrders] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);
	const [refreshed, setrefreshed] = React.useState(false);

	const [modalVisible, setModalVisible] = useState(false);
	const [modalOrderCreatedVisible, setModalOrderCreatedVisible] = useState(false);
	const [orderCounts, setOrderCounts] = React.useState([]);
	const [search, setSearch] = React.useState('');
	const [orderReceived, setorderReceived] = React.useState(false);
	const [selectedStatus, setselectedStatus] = React.useState('');
	const [selectedTimeSlot, setselectedTimeSlot] = React.useState('');
	const [selectedDateSlot, setselectedDateSlot] = React.useState('');
	const [selectedEmirate, setselectedEmirate] = React.useState('');
	const [selectedRegion, setselectedRegion] = React.useState('');
	const [selectedPaymethod, setselectedPaymethod] = React.useState('');
	const [isPrinted, setisPrinted] = React.useState(false);
	const [currentPage, setcurrentPage] = React.useState(1);
	const [previous, setPrevious] = React.useState(null);
	const [next, setNext] = React.useState('');
	const [printSelected, setprintSelected] = React.useState(false);
	const [formdata, setFormdata] = React.useState({});
	const [shopId, setshopId] = useState('');

	const [shop, setshop] = useState('');
	const dispatch = useDispatch();

	const clearFilterKeys = () => {
		setselectedStatus('');
		setselectedTimeSlot('');
		setselectedDateSlot('');
		setselectedEmirate('');
		setselectedRegion('');
		setselectedPaymethod('');
		setisPrinted(false);
	};

	const handleNextOrders = () => {
		loadOrders(next);
	};
	const handlePreviousOrders = () => {
		loadOrders(previous);
	};

	React.useEffect(() => {
		if (refreshed == true) {
			loadOrders();
		}
	}, [refreshed]);

	const handleScrollView = event => {
		//alert('scroll e');
		checkNeworderStatus();
		// fetchOrderCounts();
		checkorderStatusChanges();
	};
	const handleScroll = event => {
		// Check if the event and nativeEvent are defined
		if (event && event.nativeEvent) {
			const offsetY = event.nativeEvent.contentOffset.y;
			//alert("You've reached the top! " + offsetY);
			// Check if the user has scrolled to the top
			if (offsetY <= 0) {
				//alert("You've reached the top!");
				loadOrders();
			}
		}
	};

	const checkNeworderStatus = async () => {
		try {
			const value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.OrderReceivedAlert);
			if (value !== null) {
				if (value == 'true') {
					setorderReceived(true);
					setModalOrderCreatedVisible(true);
					//alert('value !== null checkNeworderStatus ');
					// if (AppState.currentState.match(/active/)) {
					fetchOrderCounts();
					loadOrders();
					// }
				} else {
					setModalOrderCreatedVisible(false);
				}
				// fetch user details and set
			} else {
				setModalOrderCreatedVisible(false);
				//alert('no NewOrdersCount ');
			}
		} catch (e) {
			alert('Failed to fetch the input from storage');
		}
	};

	const checkorderStatusChanges = async () => {
		try {
			const value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.OrderStatusChanged);
			if (value !== null) {
				//if (value == 'true') {
				if (AppState.currentState.match(/active/)) {
					loadOrders();
					// console.log('JSON.parse(value)');
					// console.log(JSON.parse(value));
					// let data = JSON.parse(value);
					// // only update the order in redux ....
					// props.updateOrderStatus(data.order_id, {
					//   id: data.order_id,
					//   name: data.status,
					// });

					removeOrderStatusChangedAlert();
					//data = {};
				}
				// }
			}
		} catch (e) {
			alert('Failed to fetch the input from storage');
		}
	};

	const toggleModal = status => {
		setModalVisible(status);
	};

	let updateDeviceToken = async () => {
		let token = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.DeviceToken);
		if (token) {
			UpdateFCMTokenService(
				token,
				response => {
					console.log(' success updateDeviceToken from home ');
					//alert(' success updateDeviceToken from home ');
				},
				e => {
					console.log(e);
				},
			);
		}
	};
	const toggleOrderCreatedModal = status => {
		setModalOrderCreatedVisible(status);
	};
	let onSuccess = async response => {
		let d = response.data.data;
		setOrderCounts(d);

		updateCounts(d);
		//triggerLocalnotification();
		d = {};
	};
	let updateCounts = d => {
		props.updateOrderCounts({
			assign: d.assign,
			in_the_way: d.in_the_way,
			delivered: d.delivered,
			un_assign: d.un_assign,
			in_progress: d.in_progress,
			canceled: d.canceled,
			new_orders: d.new_orders,
			orders_count: d.orders_count,
		});
	};

	let onFailure = () => {
		//toastMessage('something went wrong');
	};
	const fetchOrderCounts = async () => {
		//alert('called ');
		OrderCounts(onSuccess, onFailure);
	};
	React.useEffect(() => {
		checkAuthStatus();
	}, []);

	React.useEffect(() => {
		if (props.token !== null && props.token !== '') {
			fetchOrderCounts();
			loadOrders();
		} else {
			dispatch(setToken(''));
			clearCache();
		}
	}, [props.token]);

	let onSuccessOrdersList = async response => {
		if (response.data && response.data.data && response.data.data.length > 0) {
			//alert('here ');
			props.setOrders(response.data.data);
			setPrevious(response.data.links.prev);
			//alert(response.data.links.next);
			setNext(response.data.links.next);
		} else {
			//alert('here  else ');
			setPrevious('');
			setNext('');
			props.setOrders([]);
		}
		setModalVisible(false);
		setIsLoading(false);
	};

	let onFailureOrdersList = error => {
		toastMessage(error);
		setPrevious('');
		setNext('');
		props.setOrders([]);
		setModalVisible(false);
		setIsLoading(false);
	};

	let handleSearch = async () => {
		//setselectedStatus('');
		setFormdata({
			q: search,
		});
		clearFilterKeys();
		if (search == '') {
			toastMessage(strings('Please type to search'));
		} else {
			//alert('befre 2000');
			setIsLoading(true);
			let orderUrl = 'shopapi/shops_app/orders?q=' + search;
			try {
				const response = await APIKit.post(orderUrl);
				//console.log(response.data);
				onSuccessOrdersList && onSuccessOrdersList(response);
			} catch (error) {
				onFailureOrdersList && onFailureOrdersList(error);
			}
		}
	};
	let loadOrders = async (data = '') => {
		setIsLoading(true);
		let url = '';
		if (data == null || data == '') {
			url = `shopapi/shops_app/orders?page=1`;
		} else {
			var splitted = data.split('/shopapi'); //this will output ["1234", "56789"]
			url = 'shopapi' + splitted[1];
		}
		try {
			// const response = await APIKit.post(url, formdata);
			const response = await APIKit.post(url);
			if (response.data.data && response.data.data.length > 0) {
				props.setOrders(response.data.data);
				setPrevious(response.data.links.prev);
				setNext(response.data.links.next);
				setIsLoading(false);
			} else {
				setPrevious('');
				setNext('');
				props.setOrders([]);
			}

			getOrderBadgeCount();
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
		setrefreshed(false);
		//alert('current page ' + currentPage);
	};

	const checkAuthStatus = async () => {
		try {
			const value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.AuthToken);
			if (value !== null) {
				//alert('here im  ' + value);
				setClientToken(value);
				fetchOrderCounts();
				ListOrdersServiceWithoutQuery({}, onSuccessOrdersList, onFailureOrdersList);
				updateDeviceToken();
			} else {
				// alert('here im ');
				// props.navigation.navigate('AuthStack');
			}
		} catch (e) {
			alert('Failed to fetch the input from storage');
		}
	};
	const openFilter = () => {
		clearFilterKeys();
		setSearch('');
		setModalVisible(true);
	};
	let handleFilterData = async data => {
		let orderUrl = 'shopapi/shops_app/orders?';
		console.log('handleFilterData raw data');
		console.log(data);
		setIsLoading(true);
		setModalVisible(false);
		let emirate_id_arr = [];
		let region_id_arr = [];

		emirate_id_arr.push(data.emirateid);
		region_id_arr.push(data.regionid);
		setselectedTimeSlot(data.timeId ? data.timeId : '');
		setselectedDateSlot(data.selectedDate ? data.selectedDate : '');
		setshopId(data.shopId);
		setshop(data.shop);
		//alert(isPrinted + ' isPrinted');
		if (data.printedId !== '') {
			setprintSelected(true);
			setisPrinted(data.printedId == 0 ? false : true);
		} else {
			setprintSelected(false);
		}
		//alert(isPrinted + 'after  isPrinted');
		setSearch('');

		if (data?.statusId) {
			orderUrl = orderUrl + '&&status=' + data.statusId;
		}
		if (data?.timeId) {
			orderUrl = orderUrl + '&&time=' + data.timeId;
		}
		if (data?.paymentId) {
			orderUrl = orderUrl + '&&payment_method=' + data.paymentId;
		}
		if (data?.selectedDate) {
			orderUrl = orderUrl + '&&dates=' + data.selectedDate + '|' + data.selectedDate;
		}
		if (data?.emirateid) {
			orderUrl = orderUrl + '&&emirate_id[]=' + data.emirateid;
		}
		if (data?.regionid) {
			orderUrl = orderUrl + '&&region_id[]=' + data.regionid;
		}
		//console.log('data?.printedId ' + data.printedId);
		if (data.printedId == 0 || data.printedId == 1) {
			orderUrl = orderUrl + '&&is_printed=' + data.printedId;
		}
		if (data?.shopId) {
			orderUrl = orderUrl + '&&shop_id=' + data.shopId;
		}

		//setFormdata(fd);

		try {
			const response = await APIKit.post(orderUrl);
			//console.log(response.data);
			onSuccessOrdersList && onSuccessOrdersList(response);
		} catch (error) {
			onFailureOrdersList && onFailureOrdersList(error);
		}

		emirate_id_arr = [];
		region_id_arr = [];
	};

	let handleOrders = () => {
		// remove local storage count
		//removeNewOrdersCount();
		setOrderReceivedAlert('false');
		setModalOrderCreatedVisible(false);
	};

	const getOrderBadgeCount = async () => {
		try {
			// ===============================================
			// check for current order count, if there increse it by 1
			let value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.OrderBadgeCount);
			if (value !== null && parseInt(value) > 0) {
				props.updateOrderBadgeCount(value);

				//alert(value + ' value ');
			} else {
			}
			value = '';
			// alert('success count saved ');
		} catch (e) {
			alert('Failed to get the data from the storage');
		}
	};
	const {latestOrders} = props;
	return (
		<View
			style={[
				styles.container,
				{
					opacity: modalOrderCreatedVisible || modalVisible ? 0.2 : null,
				},
			]}>
			<MainHeader navigation={props.navigation} mh={-16} />

			<View>
				<ScrollView
					scrollEventThrottle={6} // Control the frequency of scroll events
					onScroll={handleScroll}
					showsVerticalScrollIndicator={false}
					onScrollEndDrag={() => handleScrollView()}>
					{/* <PrintData /> */}
					<SubHeader title={strings('Orders')} subtitle={strings('Home') + ' / ' + strings('Orders')} />

					{modalOrderCreatedVisible && (
						<OrderCreated
							modalOrderCreatedVisible={modalOrderCreatedVisible}
							toggleOrderCreatedModal={toggleOrderCreatedModal}
							handleOk={() => handleOrders()}
						/>
					)}
					{orderCounts && <OrderCountComponent c={orderCounts} orderCounts={orderCounts} />}
					<View>
						{latestOrders && latestOrders.length > 0 && <ExportOrders orders={latestOrders} />}

						<SearchBar
							setModalVisible={setModalVisible}
							openFilter={openFilter}
							setSearch={setSearch}
							search={search}
							handleSearch={handleSearch}
						/>

						<SelectedFilteredList
							selectedStatus={selectedStatus}
							selectedTimeSlot={selectedTimeSlot}
							selectedDateSlot={selectedDateSlot}
							selectedEmirate={selectedEmirate}
							selectedRegion={selectedRegion}
							selectedPaymethod={selectedPaymethod}
							isPrinted={printSelected ? (isPrinted == 1 ? strings('Printed') : strings('Not Printed')) : ''}
							shop={shop}
						/>
						{modalVisible && (
							<Filter
								modalVisible={modalVisible}
								toggleModal={toggleModal}
								setselectedStatus={setselectedStatus}
								setselectedEmirate={setselectedEmirate}
								setselectedRegion={setselectedRegion}
								setselectedPaymethod={setselectedPaymethod}
								handleOk={
									data => handleFilterData(data)
									//console.log(data)
								}
							/>
						)}
						{/* {props.latestOrders && (
              <OrderLists navigation={props.navigation} orders={orders} />
            )} */}

						<OrderLists
							navigation={props.navigation}
							orders={orders}
							isLoading={isLoading}
							fetchOrderCounts={() => fetchOrderCounts()}
							setrefreshed={setrefreshed}
						/>
						{latestOrders && latestOrders.length > 0 && previous !== null && !isLoading && (
							<SaveButton label={strings('Load Previous Page Data')} handlePress={() => handlePreviousOrders()} />
						)}
						{latestOrders && latestOrders.length > 0 && next !== null && !isLoading && (
							<SaveButton label={strings('Load Next Page Data')} handlePress={() => handleNextOrders()} />
						)}

						<View style={styles.mb100}></View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 16,
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
});

const mapStateToProps = state => {
	return {
		latestOrders: state.latestOrders,
		token: state.token,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		setOrders: latestOrders => dispatch(setOrders(latestOrders)),
		updateOrderStatus: (orderID, status) => dispatch(updateOrderStatus(orderID, status)),
		updateOrderCounts: orderCounts => dispatch(updateOrderCounts(orderCounts)),
		updateOrderBadgeCount: orderBadgeCount => dispatch(updateOrderBadgeCount(orderBadgeCount)),
	};
}

Orders = connect(mapStateToProps, mapDispatchToProps)(Orders);
export default memo(Orders);
