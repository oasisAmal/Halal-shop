import React from 'react';
import {Text} from 'native-base';
import {View} from 'react-native';
import styles from '../../styles/itemStyles';

function ItemComponent(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 16,
        marginLeft: props.marginLeft ? -props.marginLeft : 16,
      }}>
      <View style={{flex: 0.5, marginRight: 16}}>
        <Text style={styles.mainTxt}> {props.mainText1} </Text>
        <Text style={styles.subTxt}> {props.subText1} </Text>
      </View>
      <View style={{flex: 0.5, marginRight: 16}}>
        <Text style={styles.mainTxt}>{props.mainText2} </Text>
        <Text style={styles.subTxt}>{props.subText2}</Text>
      </View>
    </View>
  );
}

export default ItemComponent;
