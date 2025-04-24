import React from 'react';
import {Image} from 'react-native';
import styles from '../../screens/products/styles';

const CheckBox = props => {
  return (
    <Image
      source={
        props.ticked
          ? require('../../../assets/images/checkbox-ticked.png')
          : require('../../../assets/images/checkbox.png')
      }
      style={[
        styles.tagImg,
        {
          marginTop: props.mt ? props.mt : 0,
        },
      ]}
    />
  );
};

export default CheckBox;
