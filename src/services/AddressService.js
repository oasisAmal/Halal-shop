import APIKit from '../utils/APIKit';

export const CreateAddressService = async (formData, onSuccess, onFailure) => {
  try {
    const response = await APIKit.post(
      `shops_app/users/address/create`,
      formData,
    );
    //console.log('in success and id is  ' + response.data.data.id);
    onSuccess && onSuccess(response);
  } catch (error) {
    onFailure && onFailure(error);
  }
};
export const ListAddressService = async (formData, onSuccess, onFailure) => {
  try {
    const response = await APIKit.post(`shops_app/users/addresses`, {
      user_id: 325,
    });
    onSuccess && onSuccess(response);
  } catch (error) {
    onFailure && onFailure(error);
  }
};
export const AddressDetailsService = async (formData, onSuccess, onFailure) => {
  try {
    const response = await APIKit.post(
      `shops_app/users/address/details`,
      formData,
    );
    onSuccess && onSuccess(response);
  } catch (error) {
    onFailure && onFailure(error);
  }
};
