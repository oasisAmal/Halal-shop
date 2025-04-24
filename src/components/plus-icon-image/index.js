import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import commonstyles from '../../styles/defultStyles';
import styles from './styles';

const PlusIconImage = props => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/plusIcon.png')}
        style={{
          width: props.width ? props.width : 20,
          height: props.height ? props.height : 20,
          marginTop: props.mt ? props.mt : 4,
        }}
      />
    </View>
  );
};

export default PlusIconImage;
