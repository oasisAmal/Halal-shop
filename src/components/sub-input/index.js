import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import commonstyles from '../../styles/defultStyles';
import styles from './styles';

const SubInput = props => {
  return (
    <Pressable onPress={() => props.handlePress()}>
      <View
        style={[
          commonstyles.longBtn,
          styles.mainView,
          {
            marginHorizontal: props.mh ? props.mh : 16,
          },
        ]}>
        <View style={styles.subview}>
          <Text style={commonstyles.longBtnTxt}>Create</Text>
          <Image
            source={require('../../../assets/images/plusIcon.png')}
            style={styles.img}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default SubInput;
