import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import CustomDropdown from '../utils/CustomDropdown';
import {strings} from '../../i18n';
import styles from './styles';
import {
  StatusListService,
  StatusChangeService,
} from '../../services/OrdersServices';
import {toastMessage} from '../utils/functions/commonFunctions';
import {connect} from 'react-redux';
import {updateOrderStatus} from '../../store/reducers';

let ChangeStatus = props => {
  let [drivers, setDrivers] = React.useState([]);
  let [selectedDriverID, setSelectedDriverID] = React.useState(
    props.order.status ? props.order.status.id : '',
  );
  let [selectedOrderText, setselectedOrderText] = React.useState('');

  const handleAssignDriver = () => {
    if (selectedDriverID == '') {
      toastMessage(strings('Please select a status'));
    } else {
      StatusChangeService(
        {
          order_id: props.orderID,
          status: selectedDriverID,
        },
        onSuccessAssign,
        onFailureAssign,
      );
    }
  };

  const onSuccessAssign = response => {
    // console.log('response.data.onSuccessAssign' + response.data);
    // console.log(response.data.status);
    if (response.data.status == 200) {
      props.updateOrderStatus(props.orderID, {
        id: selectedDriverID,
        name: selectedOrderText,
      });
      props.handleSatusUpdate(true);
      toastMessage(strings('Success'));
    } else {
    }
    props.toggleDriver(false);
  };
  const onFailureAssign = error => {
    toastMessage(strings('Not Success'));
    //console.log('response.data.onFailureAssign ' + error);
  };
  const onSuccess = response => {
    //console.log('response.data.data');
    setDrivers(response.data.data);
  };
  const onError = error => {
    //console.log('response.data.data' + error);
  };
  const fetchDetails = () => {
    StatusListService(onSuccess, onError);
  };

  React.useEffect(() => {
    //let order_id = props.route.params.order_id;

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
            <Text style={styles.driverTxt}>{strings('Change Status')}</Text>
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
          defaultTxt={
            props.order.status ? props.order.status.name : strings('Select one')
          }
          setSelectedItem={id => {
            setSelectedDriverID(id);
            console.log(id);
          }}
          setSelectedItemText={
            text => {
              setselectedOrderText(text);
              // props.updateOrderStatus(props.orderID, {
              //   id: selectedDriverID,
              //   name: text,
              // });
            }
            //console.log(text + ' selected item text ')
          }
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
  return {
    //enableBlur: state.enableBlur,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateOrderStatus: (orderID, status) =>
      dispatch(updateOrderStatus(orderID, status)),
  };
}

export default ChangeStatus = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeStatus);
