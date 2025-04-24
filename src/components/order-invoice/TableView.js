import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {strings} from '../../i18n';

const TableView = () => {
  return (
    <View style={styles.tableView}>
      <View style={styles.flex25}>
        <Text style={styles.paraCenter}>{strings('Element')} </Text>
      </View>
      <View style={styles.flex25}>
        <Text style={styles.paraCenter}>{strings('Quantity')} </Text>
      </View>
      <View style={styles.flex25}>
        <Text style={styles.paraCenter}>{strings('Unit price')} </Text>
      </View>
      <View style={styles.flex25}>
        <Text style={styles.paraCenter}>{strings('Amount')} </Text>
      </View>
    </View>
  );
};
export default TableView;
