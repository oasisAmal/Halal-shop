import React from 'react';
import {View, Text, Image} from 'react-native';

import commonstyles from '../../styles/defultStyles';
import myColors from '../../styles/myColors';
import listStyles from '../text-list-multiple/styles';
import listSingleStyles from './styles';

const Option = props => {
  let {enableImg} = props;
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
        <Text
          style={enableImg ? listSingleStyles.selectedTxt : listStyles.itemTxt}>
          {props.optionName}{' '}
        </Text>
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
        {props.enableImg ? (
          <Image
            style={{
              width: 24,
              height: 24,
              marginRight: 64,
              marginLeft: 64,
            }}
            source={require('../../../assets/images/success.png')}
          />
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

export default Option;
