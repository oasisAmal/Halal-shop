import APIKit from '../utils/APIKit';

export const SpecialSectionListService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/list/attributes`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const AdjustPriceService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/products/updateprice`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const ImageUploadService = async (formData, headers, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/upload`, formData, headers);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const SectionListService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/list/sections`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const MenuListService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/list/menus`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const ListShopsService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/profile`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const DeleteProductService = async (id, onSuccess, onFailure) => {
	try {
		const response = await APIKit.delete(`shopapi/shops_app/products/${id}`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const UpdateProductService = async (formData, onSuccess, onFailure) => {
	try {
		console.log(formData.id + ' formData id ');
		const response = await APIKit.post(`shopapi/shops_app/products/${formData.id}`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
export const CreateProductService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/products`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const DeliveryMethodsService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/list/deliverymethods`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const TagsService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/list/tags`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const CookingService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/list/cookings`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const MainProductsService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/list/mainproducts`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const ListProductsService = async (url = '', onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(url ?? `shopapi/shops_app/products?page=1`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const ListSubProductsService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/sub_products`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const SuggestedProductsService = async (id, onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/products/suggestedproducts/${id}`);
		// console.log('response.data SuggestedProductsService');
		// console.log(response.data);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const SaveSuggestedProductsService = async (formData, onSuccess, onFailure) => {
	try {
		const response = await APIKit.post(`shopapi/shops_app/products/suggestedproducts/${formData.id}`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const AllSectionListService = async (onSuccess, onFailure) => {
	try {
		const response = await APIKit.get(`shopapi/shops_app/list/categorytree`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
