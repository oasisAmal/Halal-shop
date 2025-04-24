import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native';
import styles from '../../screens/edit-product-details/styles';
import commonstyles from '../../styles/defultStyles';
import ImageComponent from '../file-upload/ImageComponent';

const GiftPacking = props => {
  return (
    <View>
      <View style={commonstyles.mh16}>
        <View style={commonstyles.mb16}>
          <Text style={[styles.productName, {}]}>Headline</Text>
          <TextInput style={styles.input} placeholder="Type..." />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={[styles.productName, {}]}>Eng Headline</Text>
          <TextInput style={styles.input} placeholder="Type..." />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={[styles.productName, {}]}>The Price</Text>
          <TextInput style={styles.input} placeholder="Type..." />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={[styles.productName, {}]}>Sub Address</Text>
          <TextInput style={styles.input} placeholder="Type..." />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={[styles.productName, {}]}>Subtitle Eng</Text>
          <TextInput style={styles.input} placeholder="Type..." />
        </View>
        <ImageComponent />
      </View>
    </View>
  );
};

export default GiftPacking;
