import React from 'react';
import {Image} from 'react-native';

const ToggleOn = props => {
  return (
    <Image
      style={{
        width: 36,
        height: 20,
        marginLeft: props.ml ? props.ml : 0,
        marginRight: props.mr ? props.mr : 0,
        marginTop: props.mt ? props.mt : 0,
      }}
      source={
        props.enableOn
          ? require('../../../assets/images/toggle-on.png')
          : require('../../../assets/images/toggle-off.png')
      }
    />
  );
};

export default ToggleOn;
