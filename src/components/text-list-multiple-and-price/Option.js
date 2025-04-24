import React from 'react';
import {View, Text, Image} from 'react-native';

import commonstyles from '../../styles/defultStyles';
import myColors from '../../styles/myColors';
import listStyles from '../text-list-multiple/styles';

const Option = props => {
  return (
    <View
      style={[
        {
          // height: 62,
          backgroundColor: myColors.clrWhite,
          borderColor: myColors.slate200,
          borderWidth: 1,
          flexDirection: 'row',
        },
        listStyles.item,
      ]}>
      <View style={[commonstyles.flex50]}>
        <Text style={[listStyles.itemTxt]}>{props.optionName} </Text>
      </View>
      <View
        style={[
          commonstyles.flex50,
          {
            flexDirection: 'row-reverse',
            marginLeft: 16,
          },
        ]}>
        <Text style={[listStyles.itemTxt]}>{props.price} </Text>
      </View>
    </View>
  );
};

export default Option;
