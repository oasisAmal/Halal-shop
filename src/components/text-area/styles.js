import {StyleSheet} from 'react-native';
import myColors from '../../styles/myColors';

const textareaStyles = StyleSheet.create({
  input: {
    //width: Fill (305px)
    height: 146,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    marginHorizontal: 16,
    borderColor: myColors.slate200,
    marginBottom: 16,
    paddingBottom: 80,
  },
});
export default textareaStyles;
