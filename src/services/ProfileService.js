import APIKit from '../utils/APIKit';

//branch_id,
export const GET_PROFILE = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/profile`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
