import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';

const QuantityComponent = props => {
  return (
    <View style={{}}>
      <Text style={styles.subheader}>Quantity </Text>
      <View style={styles.formView}>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}> Less Amount </Text>
          <TextInput style={styles.input} placeholder="Price..." />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}>
            {' '}
            The Amount Increase Each Time{' '}
          </Text>
          <TextInput style={styles.input} placeholder="Type..." />
        </View>
      </View>
    </View>
  );
};

export default QuantityComponent;
