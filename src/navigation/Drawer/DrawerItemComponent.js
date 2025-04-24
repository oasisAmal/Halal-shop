import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {theme_color} from '../../mutils';
import styles from './styles';
import {strings} from '../../i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../utils/AsyncStorageKeys';

import {connect} from 'react-redux';
import {updateOrderBadgeCount} from '../../store/reducers';

let DrawerItemComponent = props => {
  const [localBadgeCount, setLocalCount] = React.useState(0);
  let focused =
    props.focused == props.labelName ||
    (props.focused == 'Orders' && props.labelName == 'طلباتى')
      ? true
      : false;

  React.useEffect(() => {
    //if (props.focused == 'Orders' && props.labelName == 'طلباتى') {
    //}
    // alert('mounted ');
  }, []);

  let bgcolor = focused ? theme_color : 'white';
  let fontColor = focused ? 'white' : 'black';
  let {expanded} = props;

  return (
    <View
      style={[
        styles.drawerItem,
        {
          backgroundColor: bgcolor,
          elevation: focused ? 4 : 0,
          //elevation: 6,
          //shadowColor: '#6E6AE380',
        },
      ]}>
      <View style={{flex: 0.1, flexDirection: 'row'}}>
        <Image style={styles.itemImg} source={props.iconName} />
        {/* <Text>{props.orderBadgeCount}</Text> */}
        {props.orderBadgeCount > 0 && props.labelName == strings('Orders') && (
          <View
            style={{
              backgroundColor: 'red',
              //  width: 24,
              height: 24,
              borderRadius: 50,
              marginTop: -1,
              marginRight: 6,
              marginLeft: -12,
              top: -4,
            }}>
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 4,
                paddingTop: 0,
                paddingBottom: 6,
                paddingLeft: 8,
              }}>
              {props.orderBadgeCount}
            </Text>
          </View>
        )}
      </View>
      <View style={{flex: 0.9}}>
        <Text style={{color: fontColor, textAlign: 'left', marginLeft: 16}}>
          {props.labelName}
          {/* {props.focused == props.labelName
            ? 'yes'
            : 'b ' + strings(props.focused) + ' is focused ' + props.labelName} */}
        </Text>
        {props.dropdownEnabled && (
          <Image
            style={styles.dropdownImg}
            source={
              focused
                ? expanded
                  ? require('../../../assets/images/drop-up-active.png')
                  : require('../../../assets/images/dropdown-active.png')
                : expanded
                ? require('../../../assets/images/dropup.png')
                : require('../../../assets/images/dropdown-inactive.png')
            }
          />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    orderBadgeCount: state.orderBadgeCount,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateOrderBadgeCount: orderBadgeCount =>
      dispatch(updateOrderBadgeCount(orderBadgeCount)),
  };
}

export default DrawerItemComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerItemComponent);
