import React from 'react';
import {Text, Pressable, View} from 'react-native';
import styles from './styles';

const DecisionButtons = props => {
  const {btnOk, btnBack, handleOk, handlePress} = props;
  return (
    <View
      style={[
        styles.btnView,
        {
          marginBottom: props.marginBottom ? props.marginBottom : 20,
        },
      ]}>
      <View style={{}}>
        <Pressable onPress={() => (handleOk ? handleOk() : '')}>
          <View style={[styles.btn, styles.nextView]}>
            <Text style={[styles.clrWhite, styles.btnTxt]}> {btnOk} </Text>
          </View>
        </Pressable>
      </View>
      <View style={{marginRight: 16}}>
        <Pressable onPress={() => (handlePress ? handlePress() : '')}>
          <View style={[styles.btn, styles.backView]}>
            <Text style={[styles.backTxt, styles.btnTxt]}>{btnBack} </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default DecisionButtons;
