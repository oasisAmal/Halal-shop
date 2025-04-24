import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const {width, height} = Dimensions.get('window');

export default function MapExample(props) {
  let [lat, setLat] = React.useState(35.6762);
  let [long, setLongitude] = React.useState(139.6503);

  const tokyoRegion = {
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        marginHorizontal: 16,
        // alignItems:'center', justifyContent:'center'
      }}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        zoomEnabled={true}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        mapType="hybrid"
        onRegionChange={data => {
          setLat(data.latitude);
          setLongitude(data.longitude);
          props.handlePress(data.latitude, data.longitude);
        }}
        //mapType="satellite"
        region={tokyoRegion}>
        <Marker coordinate={tokyoRegion} />
      </MapView>
    </View>
  );
}
