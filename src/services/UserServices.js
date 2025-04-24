import APIKit from '../utils/APIKit';

export const CreateUserService = async (formData, onSuccess, onFailure) => {
  try {
    //setClientToken('331|LwjfTSijVJmaOiQTFAhfvvQK0c1hQdaNq9FoMXj0b01c1581');
    const response = await APIKit.post(`shops_app/users/create`, formData);
    onSuccess && onSuccess(response);
  } catch (error) {
    onFailure && onFailure(error);
  }
};

export const ListUserService = async (formData, onSuccess, onFailure) => {
  try {
    const response = await APIKit.post(`shops_app/users`, formData);

    onSuccess && onSuccess(response);
  } catch (error) {
    onFailure && onFailure(error);
  }
};
