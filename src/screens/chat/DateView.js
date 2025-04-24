import React from 'react';
import {View, Text} from 'react-native';
import chatstyles from './styles';

const DateView = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={[
          {
            marginRight: 8,
          },
          chatstyles.hrDate,
        ]}></View>
      <View style={{flex: 0.2}}>
        <Text>Tue, 22/09 </Text>
      </View>
      <View style={[chatstyles.hrDate, {marginLeft: 8}]}></View>
    </View>
  );
};

export default DateView;
