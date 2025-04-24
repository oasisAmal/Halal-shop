import {StyleSheet} from 'react-native';
import {myfonts} from '../assets/Fonts';
import myColors from './myColors';

const cardStyles = StyleSheet.create({
  container: {
    elevation: 0,
    borderColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
  },
  view1: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
  },
});

export default cardStyles;
