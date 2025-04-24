import React from 'react';
import styles from '../../styles/inputStyles';
import {View, Text, TextInput} from 'react-native';

const InputWithLabel = props => {
  let {label, handlePress} = props;
  return (
    <View style={[styles.mb16, styles.mh16]}>
      <Text style={styles.name}>{label ? label : 'Name'}</Text>
      <TextInput style={styles.input} onChangeText={value => handlePress} />
    </View>
  );
};

export default InputWithLabel;
