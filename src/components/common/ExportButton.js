import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import buttonStyles from '../../styles/buttonStyles';
import {strings} from '../../i18n';

const ExportButton = props => {
  const {label, icon, handlePress} = props;
  return (
    <Pressable onPress={() => (handlePress ? handlePress() : '')}>
      <View style={buttonStyles.longBtn}>
        <View style={buttonStyles.export}>
          <Text style={buttonStyles.longBtnTxt}>
            {label ? label : strings('Export Data') + ' '}
          </Text>
          <Image
            source={
              icon ? icon : require('../../../assets/images/exportIcon.png')
            }
            style={{width: 24, height: 21, marginHorizontal: 8}}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default ExportButton;
