import React from 'react';
import {View, Text} from 'react-native';

import listStyles from '../text-list-multiple/styles';
import myColors from '../../styles/myColors';
import sizePriceStyles from '../sizes-with-or-without-price/styles';

const SizesWithOrWithoutPrice = props => {
  return (
    <View>
      <View style={[sizePriceStyles.headerView, sizePriceStyles.headerView1]}>
        <Text style={listStyles.title}>Sizes With Or Without Price</Text>
      </View>
      <View style={[sizePriceStyles.view1]}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              sizePriceStyles.mainview,
              {marginLeft: 12, marginRight: 4},
            ]}>
            <Text style={sizePriceStyles.label}>10-13 KG 2-4 Yrs $100 </Text>
          </View>
          <View
            style={[
              sizePriceStyles.mainview,
              {marginHorizontal: 4, backgroundColor: myColors.darkGreen},
            ]}>
            <Text
              style={[
                sizePriceStyles.label,
                {
                  color: myColors.clrWhite,
                },
              ]}>
              10-13 KG 2-4 yRS $1000{' '}
            </Text>
          </View>
          <View
            style={[
              sizePriceStyles.mainview,
              {marginRight: 12, marginLeft: 4},
            ]}>
            <Text style={sizePriceStyles.label}>10-13 KG 2-4 Yrs $150 </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SizesWithOrWithoutPrice;
