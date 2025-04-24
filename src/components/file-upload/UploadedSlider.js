import React from 'react';
import {View, Image} from 'react-native';

import landscapeStyles from '../landscape-with-price/styles';
import CloseImage from '../common/CloseImage';
import {screenwidth} from '../../mutils';

const UploadedSlider = props => {
  return (
    <View style={landscapeStyles.imgViewFish}>
      <View style={{}}>
        <Image
          source={require('../../../assets/images/meat.png')}
          style={{
            //marginHorizontal: 16,
            borderRadius: 4,
            // width: '100%',
            // height: '100%',
            width: screenwidth * 0.7,
            height: 157,
          }}
        />
      </View>
      <View style={{paddingRight: 8}}>
        <CloseImage />
      </View>
    </View>
  );
};

export default UploadedSlider;
