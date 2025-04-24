import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../edit-product-details/styles';
import commonstyles from '../../styles/defultStyles';
import ExportButton from '../../components/common/ExportButton';

let AttributeForm = props => {
  return (
    <View style={styles.formView}>
      <View style={commonstyles.mb16}>
        <Text style={styles.productName}>#</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={commonstyles.mb16}>
        <Text style={styles.productName}>Name </Text>
        <TextInput style={styles.input} />
        <Text style={commonstyles.underlinedata}>
          Set 0 to be able to order on the same day
        </Text>
      </View>
      <View style={commonstyles.mb16}>
        <Text style={styles.productName}>Backend Name</Text>
        <TextInput style={styles.input} />
        <Text style={commonstyles.underlinedata}>
          Set 0 to be able to order on the same day
        </Text>
      </View>
      <View style={commonstyles.mb16}>
        <Text style={styles.productName}>Group</Text>
        <TextInput style={styles.input} />
      </View>
      <ExportButton
        label="Filter "
        icon={require('../../../assets/images/filter-white.png')}
      />
    </View>
  );
};

export default AttributeForm;
