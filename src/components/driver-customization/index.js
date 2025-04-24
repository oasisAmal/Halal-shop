import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import CustomDropdown from '../utils/CustomDropdown';
import {strings} from '../../i18n';
import styles from './styles';
import {connect} from 'react-redux';
import {updateDriverAssignedCounts} from '../../store/reducers';
import {
  AssignDriverService,
  ListDriverService,
} from '../../services/OrdersServices';
import {toastMessage} from '../utils/functions/commonFunctions';

let DriverCustomization = props => {
  let [drivers, setDrivers] = React.useState([]);
  let [selectedDriverID, setSelectedDriverID] = React.useState(
    props.driver ? props.driver.id : '',
  );

  const handleAssignDriver = () => {
    if (selectedDriverID == '') {
      toastMessage(strings('Please select a driver'));
    } else {
      AssignDriverService(
        {
          order_id: props.orderID,
          driver_id: selectedDriverID,
        },
        onSuccessAssign,
        onFailureAssign,
      );
    }
  };

  const onSuccessAssign = response => {
    //console.log('response.data.onSuccessAssign' + response.data);
    //console.log(response.data.status);
    if (response.data.status == 200) {
      props.setdriverUpdated(true);
      if (props.driver == null) {
        props.updateDriverAssignedCounts('');
      } else {
        //alert('im driver not null ');
      }
      toastMessage(strings('Success'));
    } else {
      //alert(' not 200 ');
    }
    props.toggleDriver(false);
  };
  const onFailureAssign = error => {
    //console.log('response.data.onFailureAssign ' + error);
  };
  const onSuccess = response => {
    //console.log('response.data.data');
    setDrivers(response.data.data);
  };
  const onError = error => {
    console.log('response.data.data' + error);
  };
  const fetchDetails = () => {
    ListDriverService(onSuccess, onError);
  };

  React.useEffect(() => {
    //let order_id = props.route.params.order_id;
    // alert(props.driverId + ' driver id ');
    fetchDetails();
    return () => {
      //order_id = null;
    };
  }, []);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.driverCusPressed}
      onRequestClose={() => {}}>
      <View style={styles.modalView}>
        <View style={styles.title}>
          <View style={{flex: 0.85}}>
            <Text style={styles.driverTxt}>
              {strings('Driver Customization')}
            </Text>
          </View>
          <View>
            <Pressable onPress={() => props.toggleDriver(false)}>
              <Image
                source={require('../../../assets/images/close.png')}
                style={styles.closeImg}
              />
            </Pressable>
          </View>
        </View>
        <CustomDropdown
          data={drivers}
          defaultTxt={props.driver ? props.driver.name : strings('Select one')}
          setSelectedItem={id => {
            setSelectedDriverID(id);
            console.log(id);
          }}
        />
        <View style={styles.btnView}>
          <View style={{}}>
            <Pressable onPress={() => handleAssignDriver()}>
              <View style={[styles.btn, styles.nextView]}>
                <Text style={[styles.clrWhite, styles.btnTxt]}>
                  {strings('Next')}
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={{}}>
            <Pressable onPress={() => props.toggleDriver(false)}>
              <View style={[styles.btn, styles.backView]}>
                <Text style={[styles.backTxt, styles.btnTxt]}>
                  {strings('Back')}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    updateDriverAssignedCounts: order =>
      dispatch(updateDriverAssignedCounts(order)),
  };
}

export default DriverCustomization = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DriverCustomization);
