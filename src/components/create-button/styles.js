import {Dimensions, StyleSheet} from 'react-native';
import {myfonts} from '../../assets/Fonts';
import {screenwidth} from '../../mutils';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#21DB74',
    flexDirection: 'row',
  },
  subview: {
    flexDirection: 'row',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  img: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});
export default styles;
