import * as React from 'react';
import Svg, {G, Circle, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={38}
    fill="none"
    {...props}>
    <G filter="url(#a)">
      <Circle cx={18} cy={16} r={7} fill="#6366F1" />
      <Circle cx={18} cy={16} r={12.5} stroke="#6366F1" />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgComponent;
