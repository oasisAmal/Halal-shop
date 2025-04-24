import APIKit from '../utils/APIKit';

export const ListGiftService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/gifts`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const ListGiftProductsService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/gifts/gifts`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const CreateGiftService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/gifts`, formData);
		//console.log('in success and id is  ' + response.data.data.id);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
