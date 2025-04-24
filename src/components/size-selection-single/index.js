import React from 'react';
import {View, Text} from 'react-native';
import listStyles from '../text-list-multiple/styles';
import sizePriceStyles from '../sizes-with-or-without-price/styles';
import singleStyles from './styles';

const SizeSelectionSingle = props => {
  return (
    <View>
      <View style={[sizePriceStyles.headerView, sizePriceStyles.headerView1]}>
        <Text style={listStyles.title}>Size Selection(Single)</Text>
      </View>
      <View style={singleStyles.mainView}>
        <View style={{flex: 1 / 3}}>
          <Text style={singleStyles.label}>Small</Text>
        </View>
        <View style={singleStyles.selectedView}>
          <Text style={singleStyles.selectedViewTxt}> Medium</Text>
        </View>
        <View style={{flex: 1 / 3}}>
          <Text style={singleStyles.label}> Large </Text>
        </View>
      </View>
    </View>
  );
};

export default SizeSelectionSingle;
