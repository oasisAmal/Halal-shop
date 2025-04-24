import React from 'react';

import {Image} from 'react-native';

const RenderDropdownIcon = props => {
  const {image} = props;
  return (
    <Image
      source={
        image == 'dropdown'
          ? require('../../../assets/images/dropdown.png')
          : require('../../../assets/images/dropup.png')
      }
      style={{
        width: 7.18,
        height: 4.59,
        left: 15.58,
      }}
    />
  );
};
export default RenderDropdownIcon;
