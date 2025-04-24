import {status_data} from '../data/DummyData';
import APIKit from '../utils/APIKit';

export const printInvoiceService = async (orderID, onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`/api/receipt/${orderID}`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const InvoiceDetailsService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders/receipt`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const LabelDetailsService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders/label`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const ListDriverService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/drivers`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const AddNoteService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders/add-note`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const AddUserNoteService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders/add-user-note`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const AssignDriverService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders/assign-driver`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const ListTimeService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/times`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const CreateOrderService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders/create`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const OrderCounts = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders/counts`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const ListAllOrders = async (onSuccess, onFailure) => {
	//console.log('ListAllOrders form ');
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders?page=1`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const ListOrdersServiceWithoutQuery = async (fd, onSuccess, onFailure) => {
	//console.log('ListOrdersServiceWithoutQuery form ');
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders?page=1`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
export const ListOrdersService = async (formData, onSuccess, onFailure) => {
	console.log(' typeof ');
	//{"dates": "2024/05/06|2024/05/06", "emirate_id": "", "is_printed": "", "payment_method": "", "region_id": "", "shop_id": "", "status": 1, "time": ""}

	console.log(typeof formData);
	console.log(formData);

	let fd1 = {
		status: formData.status ?? '',
		dates: formData.dates ?? '',
		emirate_id: formData.emirate_id ?? '',
		is_printed: formData.is_printed ?? '',
		payment_method: formData.payment_method ?? '',
		region_id: formData.region_id ?? '',
		shop_id: formData.shop_id ?? '',
		time: formData.time ?? '',
		q: formData.q ?? '',
	};
	console.log('JSON.stringify(fd1)');
	console.log(JSON.stringify(fd1));
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders`, JSON.stringify(fd1), {
			// headers: {
			// 	'Content-Type': 'application/json',
			// 	Authorization: 'Bearer 125090|8Mj80g0McXe4HInTffIRv8Rl5t1q1d1rkByFSORxedea7e25',
			// },
		});
		console.log(response.data);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const ListOrderDetailsService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders/details`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const EmiratesListService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`api/emirates`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
export const RegionListService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`api/regions`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
export const CategoriesListService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`api/categories`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
export const StatusListService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`api/orders_statuses`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
export const StatusChangeService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/orders/change-status`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const PaymentMethodsListService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`api/payment_methods`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
export const ShippingMethodsListService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`api/shipping_methods`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
