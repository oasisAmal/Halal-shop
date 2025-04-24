import * as React from 'react';
import {ViewStyle} from 'react-native';

import LocationDestination from './LocationDestination';
import LocationOrigin from './LocationOrigin';

export type Props = {
  source: 'LocationOrigin' | 'LocationDestination',

  width?: Number,
  height?: Number,
  color?: String,
  rotateDegree?: Number,
  opacity?: Number,
  style?: ViewStyle,
  selected: Boolean,
  onPress: Function,
};
export const SVGNames = {
  LocationOrigin: 'LocationOrigin',
  LocationDestination: 'LocationDestination',
};
function SVG(props: Props) {
  switch (props.source) {
    case 'LocationOrigin':
      return <LocationOrigin params={props} />;
    case 'LocationDestination':
      return <LocationDestination params={props} />;
    default:
      return null;
  }
}

export default SVG;
