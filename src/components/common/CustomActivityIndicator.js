import React from 'react';
import styles from '../../styles/inputStyles';
import {View, Image, Text, ActivityIndicator} from 'react-native';
import {strings} from '../../i18n';

// const CustomActivityIndicator = props => {
//   let [count, setCount] = React.useState(0);
//   let [degreeTxt, setDegreeTxt] = React.useState('90deg');
//   React.useEffect(() => {
//     //Implementing the setInterval method
//     const interval = setInterval(() => {
//       setCount(count => count + 1);
//       setDegreeTxt(count * 45 + 'deg');
//     }, 10);
//     //Clearing the interval
//     return () => clearInterval(interval);
//     // }
//   }, [count]);
//   return (
//     <View style={[styles.mh16, styles.mb16, {marginTop: 250}]}>
//       <Text
//         style={[
//           styles.name,
//           {
//             alignSelf: 'center',
//           },
//         ]}>
//         {strings('Please wait')}
//       </Text>
//       <Image
//         source={require('../../../assets/images/pending.png')}
//         style={{
//           marginRight: 'auto',
//           marginLeft: 'auto',
//           transform: [{rotate: degreeTxt}],
//         }}
//       />
//     </View>
//   );
// };

const CustomActivityIndicator = props => {
  return <ActivityIndicator style={{marginTop: 200}} />;
};

export default CustomActivityIndicator;
