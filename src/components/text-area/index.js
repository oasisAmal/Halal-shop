import React from 'react';
import {View, Text} from 'react-native';

import listStyles from '../text-list-multiple/styles';
import listPriceStyles from '../text-list-multiple-and-price/styles';
import myColors from '../../styles/myColors';
import textareaStyles from './styles';
import {TextInput} from 'react-native';

const TextArea = props => {
  return (
    <View>
      <View style={listStyles.headerView}>
        <View style={listStyles.headerView1}>
          <Text style={listStyles.title}>Text Box (Free Text)</Text>
        </View>
        <View
          style={[
            listStyles.headerView1,
            {
              backgroundColor: myColors.clrWhite,
            },
          ]}>
          <Text style={listPriceStyles.subtitle}>Box Title</Text>
        </View>
      </View>
      <TextInput style={textareaStyles.input} placeholder="Type..." />
    </View>
  );
};

export default TextArea;
