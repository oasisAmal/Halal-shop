import {StyleSheet} from 'react-native';
import myColors from '../../styles/myColors';

export default styles = StyleSheet.create({
  bannerView: {
    width: 239.06,
    height: 100,
    borderRadius: 4,
  },
  fishStallImg: {
    width: 100,
    height: 142,
  },
  closeImg: {width: 24, height: 24},
  imgViewFish: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 16,
  },
  noFileTxt: {
    textAlign: 'center',
    color: myColors.slate500,
    marginTop: 2,
  },
  chooseView: {
    height: 30,
    width: 100,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: myColors.selected_background_light,
  },
  imgView: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: myColors.slate200,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  landscapeImg: {
    width: 235.04,
    height: 170.54,
    borderRadius: 6.56,
    //marginHorizontal: 34,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 16,
  },
});
