import React from 'react';
import styles from '../../styles/inputStyles';
import {View, Text} from 'react-native';
import DatePickerWithInput from '../datepicker-with-input';

const DatePickerWithLabel = props => {
  let {label, setSelectedDate, defaultTxt} = props;
  return (
    <View style={[styles.mh16, styles.mb16]}>
      <Text style={[styles.name, {marginBottom: 8}]}>
        {label ? label : 'Name'}
      </Text>
      <DatePickerWithInput setSelectedDate={setSelectedDate} />
    </View>
  );
};

export default DatePickerWithLabel;
