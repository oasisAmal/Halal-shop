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
          flexDirection: 'row',
        },
        listStyles.item,
      ]}>
      <View style={[commonstyles.flex50]}>
        <Text style={[listStyles.itemTxt]}>{props.optionName} </Text>
      </View>
      <View
        style={[
          listStyles.itemTxt,
          commonstyles.flex50,
          {
            marginRight: 'auto',
            marginLeft: 'auto',
          },
        ]}>
        <Image
          style={{
            width: 36,
            height: 20,
            marginHorizontal: 64,
          }}
          source={
            props.enableOn
              ? require('../../../assets/images/toggle-on.png')
              : require('../../../assets/images/toggle-off.png')
          }
        />
      </View>
    </View>
  );
};

export default Option;
