import APIKit from '../utils/APIKit';

export const GET_MAIN_REPORT = async (data, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/report/main`, data);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const GET_ORDER_REPORT = async (data, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/report/orders`, data);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
