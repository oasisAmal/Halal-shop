import APIKit from '../utils/APIKit';

export const GET_ADS = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/advertisements`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const CREATE_AD = async (data, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/advertisements`, data);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const UPDATE_AD = async (id, data, onSuccess, onFailure) => {
	try {
		const response = await APIKit.put(`shopapi/shops_app/advertisements/${id}`, data);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const GET_AD = async (id, onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/advertisements/${id}`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const DELETE_AD = async (id, onSuccess, onFailure) => {
	try {
		const response = await APIKit.delete(`shopapi/shops_app/advertisements/${id}`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
