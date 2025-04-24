import React from 'react';
import styles from '../../styles/inputStyles';
import {View, Text} from 'react-native';
import CustomDropdown from '../utils/CustomDropdown';

const DropdownWithLabel = props => {
  let {
    label,
    data,
    defaultTxt,
    handlePress,
    buttonTextAfterSelection,
    rowTextForSelection,
    is_printed,
    setSelectedItemText,
  } = props;

  return (
    <View style={[styles.mh16]}>
      <Text style={[styles.name, {marginBottom: 0}]}>
        {label ? label : 'Name'}
      </Text>
      <CustomDropdown
        data={data}
        defaultTxt={defaultTxt}
        setSelectedItem={handlePress}
        buttonTextAfterSelection={buttonTextAfterSelection}
        rowTextForSelection={rowTextForSelection}
        is_printed={is_printed}
        setSelectedItemText={setSelectedItemText}
      />
    </View>
  );
};

export default DropdownWithLabel;
