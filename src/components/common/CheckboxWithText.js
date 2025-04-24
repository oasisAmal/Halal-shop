import React from 'react';
import {Text, View} from 'react-native';
import commonstyles from '../../styles/defultStyles';
import CheckBox from './CheckBox';

const CheckboxWithText = props => {
  let {label} = props;
  return (
    <View style={[commonstyles.flewRow]}>
      <View style={{flex: 0.1, marginLeft: -8}}>
        <CheckBox />
      </View>
      <View style={{flex: 0.9}}>
        <Text> {label ? label : 'Optimal / Needed'} </Text>
      </View>
    </View>
  );
};

export default CheckboxWithText;
