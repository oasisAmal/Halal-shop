import React, {useState} from 'react';
import {Image, Text, View, Button, Linking, Share, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SaveButton from '../save-button';
import SVG from '../../../assets/images/SVG';

export default AddressOnMap = props => {
  const [customerLatitude, setCustomerLatitude] = useState(null);
  const [customerLongitude, setCustomerLongitude] = useState(null);
  const [isAvailableAddress, setisAvailableAddress] = useState(false);

  const shareLocation = async () => {
    try {
      const result = await Share.share({
        // Create a Google Maps link using the user's location
        message: `https://www.google.com/maps/search/?api=1&query=${customerLatitude},${customerLongitude}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of ', result.activityType);
        } else {
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (error) {
      // Show an alert if there's an error while sharing location
      Alert.alert(
        'GeeksforGeeks',
        'Something went wrong while sharing location',
        [
          {
            text: 'Close',
            onPress: () => console.log('Close Pressed'),
            style: 'destructive',
          },
        ],
      );
    }
  };

  React.useEffect(() => {
    if (props.customerLocation && props.customerLocation !== null) {
      setisAvailableAddress(true);
      setCustomerLatitude(props.customerLocation.lat);
      setCustomerLongitude(props.customerLocation.lng);
    } else {
    }
  }, []);

  if (customerLatitude != null && customerLongitude != null) {
    return (
      <View style={[styles.container, {}]}>
        <View style={{flexDirection: 'row', margin: 16}}>
          <Text style={commonstyles.label}>Customer Current Location </Text>
          <TouchableOpacity onPress={() => props.setShowMap(false)}>
            <Image
              source={require('../../../assets/images/delete_icon.png')}
              style={{
                width: 26,
                height: 26,
                left: 100,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 16,
          }}>
          <SaveButton handlePress={shareLocation} label="Share Location" />
        </View>

        <MapView
          style={styles.maps}
          mapType="standard"
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: customerLatitude,
            longitude: customerLongitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: customerLatitude,
              longitude: customerLongitude,
            }}
            // coordinate={coordinates[1]}
            // image={require('../../../assets/images/location-destination.png')}
            // style={{
            //   width: 25.2,
            //   height: 36,
            // }}
          >
            <SVG source="LocationDestination" />
          </Marker>
        </MapView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginHorizontal: 32,
            marginTop: 100,
          }}>
          Sorry No valid coordinates found
        </Text>
      </View>
    );
  }
};
