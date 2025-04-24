import APIKit from '../utils/APIKit';

export const RequestDriverLocationService = async (
  driver_id,
  onSuccess,
  onFailure,
) => {
  try {
    const response = await APIKit.post('api/driver/track', {
      driver_id: driver_id ? driver_id : 3,
    });
    onSuccess && onSuccess(response);
  } catch (error) {
    onFailure && onFailure(error);
  }
};

export const DeleteDriverService = async (fd, onSuccess, onFailure) => {
  try {
    const response = await APIKit.post(
      'shopapi/shops_app/orders/remove-assign-driver',
      fd,
    );
    onSuccess && onSuccess(response);
  } catch (error) {
    onFailure && onFailure(error);
  }
};
