import APIKit from '../utils/APIKit';

//branch_id,
export const GET_BRANCHES = async (shopId, onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/account/shops/${shopId}/branches`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const CREATE_BRANCH = async (shopId, data, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/account/shops/${shopId}/branches/create`, data);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const UPDATE_BRANCH = async (shopId, id, data, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/account/shops/${shopId}/branches/update/${id}`, data);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const DELETE_BRANCH = async (shopId, id, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/account/shops/${shopId}/branches/delete/${id}`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const GET_BRANCH_APPOINTMENTS = async (shopId, branchId, shippingMethodId, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/account/shops/${shopId}/branches/appointments/${branchId}`, {
			shipping_method_id: shippingMethodId,
		});
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const UPDATE_BRANCH_APPOINTMENTS = async (shopId, branchId, shippingMethodId, data, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/account/shops/${shopId}/branches/appointments/update/${branchId}`, {
			shipping_method_id: shippingMethodId,
			data: data,
		});
		console.log('response ===> ', response);
		onSuccess && onSuccess(response);
	} catch (error) {
		console.log('error ===> ', error);
		onFailure && onFailure(error);
	}
};

export const DELETE_BRANCH_APPOINTMENTS = async (shopId, branchId, shippingMethodId, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/account/shops/${shopId}/branches/appointments/update/${branchId}`, {
			shipping_method_id: shippingMethodId,
			data: null,
		});
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
