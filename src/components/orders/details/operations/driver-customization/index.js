import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import {drivers_data} from '../../../components/utils/data/DummyData';
import {
  ListDriverService,
  AssignDriverService,
} from '../../../../../services/OrdersServices';
import styles from './styles';

const DriverCustomization = props => {
  let [drivers, setDrivers] = React.useState([]);

  const handlePress = (screen, color) => {
    // setPressed(true);
    // setShadowClr(color);
  };

  const onSuccess = response => {
    console.log('response.data.data');
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
          <View style={{}}>
            <Text style={styles.driverTxt}>Customization of Driver new f</Text>
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
        <CustomDropdown data={drivers_data} defaultTxt="Choose a Driver" />
        <View style={styles.btnView}>
          <View style={{}}>
            <View style={[styles.btn, styles.nextView]}>
              <Text style={[styles.clrWhite, styles.btnTxt]}>Next</Text>
            </View>
          </View>
          <View style={{}}>
            <Pressable onPress={() => props.toggleDriver(false)}>
              <View style={[styles.btn, styles.backView]}>
                <Text style={[styles.backTxt, styles.btnTxt]}>Back</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DriverCustomization;
