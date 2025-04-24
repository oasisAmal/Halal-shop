import APIKit from '../utils/APIKit';

export const RequestFCMMessageService = async (fd, onSuccess, onFailure) => {
  try {
    const response = await APIKit.get('api/test');
    onSuccess && onSuccess(response);
  } catch (error) {
    onFailure && onFailure(error);
  }
};

export const UpdateFCMTokenService = async (token, onSuccess, onFailure) => {
  try {
    const response = await APIKit.post(
      'shopapi/shops_app/profile/update_token',
      {
        devivce_token: token,
      },
    );
    onSuccess && onSuccess(response);
  } catch (error) {
    onFailure && onFailure(error);
  }
};
