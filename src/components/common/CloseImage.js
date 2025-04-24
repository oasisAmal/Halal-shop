import React from 'react';
import {Image} from 'react-native';

const CloseImage = props => {
  return (
    <Image
      source={require('../../../assets/images/close.png')}
      style={{
        width: 24,
        height: 24,
        left: 6.75,
        marginRight: props.mr ? props.mr : 16,
      }}
    />
  );
};

export default CloseImage;
