import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/headerStyles';

let SubHeader = props => {
  return (
    <View
      style={{
        marginHorizontal: props.mh ? props.mh : 4,
        marginTop: props.mt ? props.mt : 16,
      }}>
      <Text style={styles.title}>{props.title ? props.title : 'Products'}</Text>
      <Text style={styles.subtitle}>
        {props.subtitle ? props.subtitle : 'Home / Products / Active Products'}{' '}
      </Text>
    </View>
  );
};

export default SubHeader;
