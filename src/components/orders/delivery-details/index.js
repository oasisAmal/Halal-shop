import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import dstyles from './styles';
import {strings} from '../../../i18n';
import styles from '../../orders/styles';
import {toastMessage} from '../../utils/functions/commonFunctions';
import {DeleteDriverService} from '../../../services/DriverServices';

const DriverDetails = props => {
  const deleteDriver = () => {
    DeleteDriverService(
      {
        order_id: props.order_id,
        driver_id: props.driver.id,
      },
      onSuccess,
      onFailure,
    );
  };
  const onSuccess = response => {
    if (response.data.status == 200) {
      props.setdriverUpdated(true);
      toastMessage(strings('Success'));
    } else {
      //alert(' not 200 ');
    }
  };
  const onFailure = () => {
    alert('failure');
  };
  return (
    <View style={dstyles.cardView}>
      <View style={dstyles.mainView}>
        <View style={styles.leftView}>
          <Text style={dstyles.mainTxt}>{strings('Driver Name')}</Text>
          <Text style={dstyles.subTxt}>{props.driver?.name} </Text>
        </View>
        <View style={styles.rightView}>
          <Text style={dstyles.mainTxt}>{strings('Mobile Number')}</Text>
          <Text style={dstyles.subTxt}>{props.driver?.mobile}</Text>
        </View>
      </View>
      <View style={dstyles.mainView}>
        <View style={styles.leftView}>
          <Text style={dstyles.mainTxt}>{strings('Assigning Time')}</Text>
          <Text style={dstyles.subTxt}>{props.assigned_at}</Text>
        </View>
        <View style={styles.rightView}>
          <Text style={dstyles.mainTxt}>{strings('Arrival Time')}</Text>
          <Text style={dstyles.subTxt}>{props.delivered_at} </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 16,
          marginLeft: 16,
        }}>
        <TouchableOpacity onPress={() => deleteDriver()}>
          <View style={{flex: 0.5, flexDirection: 'column'}}>
            <Text style={[styles.acceptBtn, {backgroundColor: '#EA5455'}]}>
              {strings('Delete')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

let DeliveryDetails = props => {
  return (
    <View style={dstyles.container}>
      <Text style={dstyles.title}>Delivery Details</Text>
      <DriverDetails
        driver={props.driver}
        delivered_at={props.delivered_at}
        assigned_at={props.assigned_at}
        order_id={props.order_id}
        setdriverUpdated={props.setdriverUpdated}
      />
    </View>
  );
};

export default DeliveryDetails;
