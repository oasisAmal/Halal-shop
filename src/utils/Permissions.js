import Permission from 'react-native-permissions';
import {Platform, PermissionsAndroid} from 'react-native';
import {toastMessage} from '../components/utils/functions/commonFunctions';

export const locationPermission = (onSuccess, onFailuer) => {
  const {
    PERMISSIONS: {IOS, ANDROID},
  } = Permission;

  const PERMISSIONNAME =
    Platform.OS == 'ios'
      ? IOS.LOCATION_WHEN_IN_USE
      : ANDROID.ACCESS_FINE_LOCATION;

  Permission.request(PERMISSIONNAME)
    .then(result => {
      if (result == 'granted') {
        onSuccess && onSuccess();
      } else {
        onFailuer && onFailuer(result);
      }
    })
    .catch(err => {
      onFailuer && onFailuer(err);
    });
};

export const writeFilePermission = (onSuccess, onFailuer) => {
  const {
    PERMISSIONS: {IOS, ANDROID},
  } = Permission;
  if (Platform.OS == 'android') {
    Permission.request(ANDROID.READ_MEDIA_IMAGES)
      .then(result => {
        if (result == 'granted') {
          onSuccess && onSuccess();
        } else {
          onFailuer && onFailuer(result);
        }
      })
      .catch(err => {
        onFailuer && onFailuer(err);
      });
  } else {
    onSuccess && onSuccess();
  }
};

export const notificationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,

        {
          title: 'Zabehty App needs access to your camera ',
          message:
            'Zabehty App needs access to your camera so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //setGranted(true);
        //console.log('You can use the POST_NOTIFICATIONS ');
      } else {
        toastMessage('POST_NOTIFICATIONS permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  } else {
    console.warn('else');
  }
};
