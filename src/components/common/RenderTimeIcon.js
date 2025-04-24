import React from 'react';

import {Image} from 'react-native';

const RenderTimeIcon = props => {
  const {image} = props;
  return (
    <Image
      source={require('../../../assets/images/time.png')}
      style={{
        width: 24,
        height: 24,
        left: 6,
      }}
    />
  );
};
export default RenderTimeIcon;
