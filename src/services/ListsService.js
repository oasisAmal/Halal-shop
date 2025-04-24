import APIKit from '../utils/APIKit';

export const GET_EMIRATES = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`api/emirates`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const GET_EMIRATES_WITH_REGIONS = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`api/emirates?with_regions=1`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const GET_REGIONS = async (emirateId, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`api/regions`, {
			emirate_id: emirateId,
		});
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
