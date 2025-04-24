import React from 'react';
import {Text} from 'native-base';
import {View, I18nManager} from 'react-native';
import styles from '../../styles/itemStyles';
import { strings } from '../../i18n';
function ItemComponent(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 20,
        // marginLeft: I18nManager.isRTL ? 0 : 8,
        // marginRight: I18nManager.isRTL ? 8 : 0,
      }}>
      <View style={{flex: 0.5, marginLeft: 16}}>
        <Text style={styles.mainTxt}> {props.mainText1} </Text>
        <Text style={styles.subTxt}> {props.subText1} </Text>
      </View>
      <View style={{flex: 0.5, marginRight: 16}}>
        <Text style={styles.mainTxt}>{props.mainText2} </Text>
        <Text style={styles.subTxt}>
          {props.subText2}
          {props.mainText2 == strings('User Name') && props.isVIPUser && (
            <Text style={{color: '#EA5455'}}>(VIP ) </Text>
          )}
        </Text>
      </View>
    </View>
  );
}

export default ItemComponent;
