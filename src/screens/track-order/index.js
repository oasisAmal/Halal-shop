import React from 'react';
import {Pressable, View, Image} from 'react-native';
import styles from './styles';
import TrackRoute from '../../components/track-route';

const TrackOrder = props => {
  return (
    <View style={styles.modalView}>
      <View style={styles.closeView}>
        <Pressable
          //onPress={() => props.navigation.navigate('OrderDetails')}
          onPress={() => props.setOpenTrackOrder(false)}>
          <Image
            source={require('../../../assets/images/close.png')}
            style={[styles.closeImg]}
          />
        </Pressable>
      </View>
      {props.setOpenTrackOrder && (
        <TrackRoute
          customerLocation={props.customerLocation}
          driver={props.driver}
        />
      )}
    </View>
  );
};

export default TrackOrder;
