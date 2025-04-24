import React from 'react';
import {View, Text} from 'react-native';

import listStyles from '../text-list-multiple/styles';

import Option from './Option';

const TextListSingle = props => {
  return (
    <View style={listStyles.headerView}>
      <View style={listStyles.headerView1}>
        <Text style={listStyles.title}>Text List Single</Text>
      </View>
      <Option optionName={'Option 1'} />
      <Option optionName={'Option 2'} enableImg={'true'} />
      <Option optionName={'Option 3'} />
    </View>
  );
};

export default TextListSingle;
