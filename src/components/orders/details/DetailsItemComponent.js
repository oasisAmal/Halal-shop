import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const DetailsItemComponent = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.leftView}>
        <Text style={styles.mainTxt}>{props.mainTxt1}</Text>
        <Text style={styles.subTxt}>{props.subTxt1}</Text>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.mainTxt}>{props.mainTxt2}</Text>
        <Text style={styles.subTxt}>{props.subTxt2} </Text>
      </View>
    </View>
  );
};

export default DetailsItemComponent;
