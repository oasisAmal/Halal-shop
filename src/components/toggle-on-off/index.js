import React from 'react';
import {View, Text} from 'react-native';

import listStyles from '../text-list-multiple/styles';
import Option from './Option';

const ToggleOnOff = props => {
  return (
    <View style={listStyles.headerView}>
      <View style={listStyles.headerView1}>
        <Text style={listStyles.title}>Toggle On / Off</Text>
      </View>
      <Option optionName={'Option 1'} enableOn={true} />
      <Option optionName={'Option 2'} enableOn={false} />
    </View>
  );
};

export default ToggleOnOff;
