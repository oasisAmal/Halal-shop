import {StyleSheet} from 'react-native';
import {theme_color} from '../../mutils';
const styles = StyleSheet.create({
  modalView: {
    // minHeight: 434,
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: theme_color,
    shadowOffset: {
      //   width: 0,
      //   height: 2,
    },
    shadowOpacity: 1,
    //shadowRadius: 4,
    elevation: 4,
    marginBottom: 40,
  },
});
export default styles;
