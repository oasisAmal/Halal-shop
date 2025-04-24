import React, {useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';

import {RequestDriverLocationService} from '../../services/DriverServices';
import {toastMessage} from '../utils/functions/commonFunctions';
import CustomActivityIndicator from '../common/CustomActivityIndicator';
import SVG from '../../../assets/images/SVG';

export default TrackRoute = props => {
  const [customerLatitude, setCustomerLatitude] = useState(0);
  const [customerLongitude, setCustomerLongitude] = useState(0);

  const [driverLatitude, setDriverLatitude] = useState(0);
  const [driverLongitude, setDriverLongitude] = useState(0);
  const [isAvailableAddress, setisAvailableAddress] = useState(false);

  React.useEffect(() => {
    // Geolocation.getCurrentPosition(info => {
    //   // console.log('info');
    //   // console.log(info?.coords?.latitude + ' lat ');
    //   // console.log(info?.coords?.longitude + ' longitude ');
    //   // setShopLatitude(info?.coords?.latitude);
    //   // setShopLongitude(info?.coords?.longitude);

    //   //console.log(shopLatitude + ' shopLatitude ');
    // });
    //alert(props.customerLocation + ' id ');
    if (props.customerLocation && props.customerLocation !== null) {
      fetchDriverLocation();
      setCustomerLatitude(props.customerLocation.lat);
      setCustomerLongitude(props.customerLocation.lng);
    } else {
      // setisAvailableAddress(true);
      // setCustomerLatitude(props.customerLocation.lat);
      // setCustomerLongitude(props.customerLocation.lng);
    }
  }, []);

  let fetchDriverLocation = () => {
    RequestDriverLocationService(props?.driver?.id, onSuccess, onFailure);
  };
  let onSuccess = async response => {
    //setOrderCounts(response.data.data);
    // alert(
    //   'hi success ' +
    //     response.data.data.lat +
    //     ' and lng ' +
    //     response.data.data.lng,
    // );

    setDriverLatitude(response.data.data.lat);
    setDriverLongitude(response.data.data.lng);
    setisAvailableAddress(true);
  };

  let onFailure = error => {
    //toastMessage('something went wrong');
  };

  React.useEffect(() => {
    //Implementing the setInterval method

    const interval = setInterval(() => {
      fetchDriverLocation();
    }, 10000);
    //Clearing the interval
    return () => clearInterval(interval);
    // }
  }, []);

  const [coordinates] = useState([
    {
      latitude: 24.4539,
      longitude: 54.3773,
    },
    {
      latitude: 25.3562,
      longitude: 55.4272,
    },
  ]);
  if (isAvailableAddress) {
    return (
      <View style={styles.container}>
        {/* <Text>RequestDriverLocationService </Text> */}
        <MapView
          style={styles.maps}
          mapType="standard"
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: driverLatitude,
            longitude: driverLongitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0121,
          }}>
          <MapViewDirections
            // driver location
            origin={{
              longitude: driverLongitude,
              latitude: driverLatitude,
            }}
            // customer location
            destination={{
              longitude: customerLongitude,
              latitude: customerLatitude,
            }}
            strokeWidth={4}
            //strokeColor={theme_color}
            apikey="AIzaSyBFCnlrpNKXtVn8YROYBO8N52SRzOhP8JA"
          />
          <Marker
            // coordinate={{
            //   latitude: driverLatitude,
            //   longitude: driverLongitude,
            // }}
            //coordinate={coordinates[0]}
            coordinate={{
              longitude: driverLongitude,
              latitude: driverLatitude,
            }}
            // image={require('../../../assets/images/SVG/LocationOrigin')}
            // image={require()}
            style={
              {
                // width: 26,
                // height: 26,
              }
            }>
            <SVG source="LocationOrigin" />
          </Marker>
          <Marker
            coordinate={{
              latitude: customerLatitude,
              longitude: customerLongitude,
            }}
            // coordinate={coordinates[1]}
            //  image={require('../../../assets/images/location-destination.png')}
            style={
              {
                // width: 25.2,
                // height: 36,
              }
            }>
            <SVG source="LocationDestination" />
          </Marker>
        </MapView>
      </View>
    );
  } else if (
    driverLatitude == customerLatitude &&
    driverLongitude == customerLongitude
  ) {
    return (
      <Text
        style={{
          marginHorizontal: 32,
          marginTop: 100,
        }}>
        It seems driver and customer in same location
      </Text>
    );
  } else {
    return (
      // <Text
      //   style={{
      //     marginHorizontal: 32,
      //     marginTop: 100,
      //   }}>
      //   Sorry No valid address found
      // </Text>
      <CustomActivityIndicator />
    );
  }
};
