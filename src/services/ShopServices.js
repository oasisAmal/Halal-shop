import APIKit from '../utils/APIKit';

export const ListBranchService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/list/branches`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const GET_SHOP_GENERAL_DATA = async (shopId, onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/account/shops/${shopId}`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const UPDATE_SHOP_GENERAL_DATA = async (shopId, data, isMultipart, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(
			`shopapi/shops_app/account/shops/update/general/${shopId}`,
			data,
			isMultipart ? {headers: {'Content-Type': 'multipart/form-data'}} : {},
		);
		if (response && response.data) {
			onSuccess && onSuccess(response);
		}
	} catch (error) {
		onFailure && onFailure(error);
	}
};
