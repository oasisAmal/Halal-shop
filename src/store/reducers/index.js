import {
	TOGGLE_BLUR,
	SET_TOKEN,
	SET_USER,
	SET_ORDERS,
	UPDATE_ORDER,
	UPDATE_ORDER_STATUS,
	UPDATE_ORDER_PRINT_STATUS,
	CHANGE_LANGUAGE,
	CHOOSE_COUNTRY,
	UPDATE_ORDER_COUNT,
	REDUCE_NEW_ORDER_COUNT,
	UPDATE_DRIVER_ASSIGNED_COUNT,
	UPDATE_ORDER_BADGE_COUNT,
	SET_SHOPS,
	SET_EMIRATES,
	UPDATE_EDIT_SHOP_DATA,
	SET_PRODUCTS,
	DELETE_PRODUCT,
	REFRESH_PRODUCT,
} from '../actionTypes';

const initialState = {
	enableBlur: false,
	token: '',

	user: {},
	latestOrders: [],
	country: '',
	language: 'en',
	orderCounts: {},
	orderBadgeCount: 0,
	shops: [],
	emirates: [],
	updateEditShop: false,
	products: [],
	refreshProducts: false,
};

export default function todo_reducer(state = initialState, action) {
	switch (action.type) {
		case SET_SHOPS:
			//alert(' here is ');
			// state.shops = action.shops;
			// console.log('state => ', state);
			return {
				...state,
				shops: action.shops,
			};
		case REFRESH_PRODUCT:
			//alert(' here is ');
			//state.refreshProducts = false;
			state.refreshProducts = action.status;
			console.log('state => refreshProducts IS  ', state.refreshProducts);
			return {
				...state,
				refreshProducts: action.status,
			};

		case DELETE_PRODUCT:
			let new_products = state.products.filter(item => item !== action.product);

			state.products = new_products;

			return {
				...state,
				products: state.products,
			};
		case SET_PRODUCTS:
			//alert(' here is ');
			// state.shops = action.shops;
			state.refreshProducts = false;
			return {
				...state,
				products: action.products,
			};

		case UPDATE_ORDER_BADGE_COUNT:
			//alert(' here is ');

			state.orderBadgeCount = action.orderBadgeCount;

			console.log(state.orderBadgeCount + ' orderBadgeCount ');

			return {
				...state,
				orderBadgeCount: state.orderBadgeCount,
			};

		case UPDATE_DRIVER_ASSIGNED_COUNT:
			//alert(indexOfUpdate + ' action quantity  ' + action.order.id);

			state.orderCounts.assign = state.orderCounts.assign + 1;
			state.orderCounts.un_assign = state.orderCounts.un_assign - 1;
			console.log(' order counts new_orders== ');
			console.log(state.orderCounts);

			return {
				...state,
				orderCounts: state.orderCounts,
			};

		case REDUCE_NEW_ORDER_COUNT:
			state.orderCounts.new_orders = state.orderCounts.new_orders - 1;

			return {
				...state,
				orderCounts: state.orderCounts,
			};
		case UPDATE_ORDER_COUNT:
			state.orderCounts = action.orderCounts;

			return {
				...state,
				orderCounts: state.orderCounts,
			};
		case CHOOSE_COUNTRY:
			state.country = action.country;

			return {
				...state,
				country: state.country,
			};

		case UPDATE_ORDER:
			let latestOrders = [...state.latestOrders];
			let indexOfUpdate = latestOrders.findIndex(item => {
				return item == action.order;
			});
			//alert(indexOfUpdate + ' action quantity  ' + action.order.id);

			latestOrders[indexOfUpdate].is_read = true;
			state.latestOrders = latestOrders;
			// console.log(' order counts new_orders== ');
			// console.log(state.orderCounts.new_orders);
			state.orderCounts.new_orders = state.orderCounts.new_orders - 1;
			// console.log(' order counts new_orders== ');
			// console.log(state.orderCounts.new_orders);
			latestOrders = [];
			indexOfUpdate = '';

			return {
				...state,
				latestOrders: state.latestOrders,
				orderCounts: state.orderCounts,
			};
		case UPDATE_ORDER_STATUS:
			let latestOrders1 = [...state.latestOrders];
			let indexOfUpdate1 = latestOrders1.findIndex(item => {
				return item.id == action.orderID;
			});

			latestOrders1[indexOfUpdate1].status = action.status;

			state.latestOrders = latestOrders1;
			latestOrders1 = [];
			indexOfUpdate1 = '';

			return {
				...state,
				latestOrders: state.latestOrders,
			};

		case UPDATE_ORDER_PRINT_STATUS:
			let latestOrders2 = [...state.latestOrders];
			let indexOfUpdate2 = latestOrders2.findIndex(item => {
				return item.id == action.orderID;
			});

			latestOrders2[indexOfUpdate2].is_printed = true;
			state.latestOrders = latestOrders2;
			latestOrders2 = [];
			indexOfUpdate2 = '';
			return {
				...state,
				latestOrders: state.latestOrders,
			};

		case TOGGLE_BLUR:
			state.enableBlur = action.status;

			return {
				...state,
				enableBlur: state.enableBlur,
			};
		case SET_ORDERS:
			state.latestOrders = action.latestOrders;

			return {
				...state,
				latestOrders: state.latestOrders,
			};

		case SET_TOKEN:
			state.token = action.token;

			return {
				...state,
				token: state.token,
			};
		case CHANGE_LANGUAGE:
			return {
				...state,
				language: state.language,
			};

		case SET_USER:
			state.user = action.user;

			return {
				...state,
				user: state.user,
			};
		case SET_EMIRATES:
			return {
				...state,
				emirates: action.data,
			};
		case UPDATE_EDIT_SHOP_DATA:
			return {
				...state,
				updateEditShop: action.status,
			};
		default:
			return state;
	}
}

export function updateDriverAssignedCounts(orderCounts) {
	return {
		type: UPDATE_DRIVER_ASSIGNED_COUNT,
		orderCounts,
	};
}

export function updateOrderCounts(orderCounts) {
	return {
		type: UPDATE_ORDER_COUNT,
		orderCounts,
	};
}
export function reduceNewOrderCounts(new_orders) {
	return {
		type: REDUCE_NEW_ORDER_COUNT,
		new_orders,
	};
}

export function updateOrder(order) {
	return {
		type: UPDATE_ORDER,
		order,
	};
}
export function updateOrderStatus(orderID, status) {
	return {
		type: UPDATE_ORDER_STATUS,
		orderID,
		status,
	};
}
export function updateOrderPrintStatus(orderID) {
	return {
		type: UPDATE_ORDER_PRINT_STATUS,
		orderID,
	};
}
export function setOrders(latestOrders) {
	return {
		type: SET_ORDERS,
		latestOrders,
	};
}
export function toggleBlur(status) {
	return {
		type: TOGGLE_BLUR,
		status,
	};
}
export function setToken(token) {
	return {
		type: SET_TOKEN,
		token,
	};
}
export function setUser(user) {
	return {
		type: SET_USER,
		user,
	};
}
export function changeLanguage(language) {
	return {
		type: CHANGE_LANGUAGE,
		language,
	};
}

export function chooseCountry(country) {
	return {
		type: CHOOSE_COUNTRY,
		country,
	};
}
// export function updateOrderBadgeCount(actiontype, count) {
//   return {
//     type: UPDATE_ORDER_BADGE_COUNT,
//     actiontype,
//     count,
//   };
// }
export function updateOrderBadgeCount(orderBadgeCount) {
	return {
		type: UPDATE_ORDER_BADGE_COUNT,
		orderBadgeCount,
	};
}
export function setShops(shops) {
	return {
		type: SET_SHOPS,
		shops,
	};
}

export function setProducts(products) {
	return {
		type: SET_PRODUCTS,
		products,
	};
}

export function deleteProduct(product) {
	return {
		type: DELETE_PRODUCT,
		product,
	};
}
export function refreshProduct(status) {
	return {
		type: REFRESH_PRODUCT,
		status,
	};
}
