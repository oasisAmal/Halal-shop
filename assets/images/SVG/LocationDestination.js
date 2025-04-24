import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={46}
    fill="none"
    {...props}>
    <G filter="url(#a)">
      <Path
        fill="#EA352B"
        d="M16.6 39S4 22.566 4 15.6a12.6 12.6 0 1 1 25.2 0c0 6.966-12.6 23.4-12.6 23.4Zm0-19.8a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgComponent;
