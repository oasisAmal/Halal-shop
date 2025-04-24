import React from 'react';
import giftstyles from '../gifts/styles';
import {Modal, Text, Pressable, View} from 'react-native';
import styles from './styles';
import DecisionButtonsSmall from '../../components/decision-buttons-small';
import CloseImage from '../../components/common/CloseImage';
import modalStyles from '../../styles/modalStyles';
import SaveButton from '../../components/save-button';
import {connect} from 'react-redux';
import {toggleBlur, setToken, setOrders, setShops} from '../../store/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../utils/AsyncStorageKeys';
import {strings} from '../../i18n';
import Login from '../auth/Login';

let Logout = props => {
  const [openLogout, setOpenLogout] = React.useState(true);

  const handlePress = async () => {
    setOpenLogout(!openLogout);
    props.toggleBlur(!openLogout);
  };
  const handleOk = async () => {
    await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.AuthToken);
    setOpenLogout(!openLogout);
    props.setToken('');
    props.setOrders([]);
    props.setShops([]);

    //console.log('last ');
    props.navigation.navigate('Orders');
  };
  return (
    <View
      style={[
        giftstyles.container,
        {
          opacity: openLogout ? 0.2 : 1,
        },
      ]}>
      {!openLogout && (
        <View style={{marginTop: 200}}>
          <SaveButton
            label={strings('Logout')}
            handlePress={() => handlePress()}
          />
        </View>
        // <Login />
      )}

      {openLogout && (
        <View style={{marginHorizontal: 16, padding: 12, flex: 1}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {}}>
            <View style={{marginTop: 200, marginHorizontal: 16}}>
              <View style={styles.modalView}>
                <View style={{flexDirection: 'row', marginBottom: 16}}>
                  <View style={{flex: 0.9, marginLeft: -16}}>
                    <Text style={modalStyles.subheader}>
                      {strings('Logout')}
                    </Text>
                  </View>
                  <View style={{flex: 0.1, flexDirection: 'row-reverse'}}>
                    <Pressable onPress={handlePress}>
                      <CloseImage />
                    </Pressable>
                  </View>
                </View>
                <DecisionButtonsSmall
                  handlePress={() => handlePress()}
                  handleOk={() => handleOk()}
                  btnOk={strings('OK')}
                  btnBack={strings('No')}
                />
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    enableBlur: state.enableBlur,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    toggleBlur: cart_item => dispatch(toggleBlur(cart_item)),
    setToken: token => dispatch(setToken(token)),
    setOrders: latestOrders => dispatch(setOrders(latestOrders)),
    setShops: shops => dispatch(setShops(shops)),
  };
}

export default Logout = connect(mapStateToProps, mapDispatchToProps)(Logout);
