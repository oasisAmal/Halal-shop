import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import CustomCheckbox from './custom-checkbox';
import {checkbox_data} from '../../data/DummyData';

const CookingComponent = props => {
  return (
    <View style={{}}>
      <Text style={styles.subheader}>Cooking</Text>
      <View style={styles.formView}>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}> Cooking Method</Text>
          <CustomCheckbox data={checkbox_data} />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}> Enough For One Person From </Text>
          <TextInput style={styles.input} placeholder="Price..." />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}> Enough For One Person To</Text>
          <TextInput style={styles.input} placeholder="Type..." />
        </View>
      </View>
    </View>
  );
};

export default CookingComponent;
