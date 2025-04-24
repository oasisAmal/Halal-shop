import React, {useState, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Image,
} from 'react-native';
import commonstyles from '../../styles/defultStyles';
import inputStyles from '../../styles/inputStyles';
import {screenwidth, theme_color} from '../../mutils';
import {ScrollView} from 'react-native-gesture-handler';
import MapExample from '../Maps';
import DecisionButtonsSmall from '../decision-buttons-small';
import modalStyles from '../../styles/modalStyles';
import {
  CreateAddressService,
  ListAddressService,
} from '../../services/AddressService';
import {toastMessage} from '../utils/functions/commonFunctions';
import CustomActivityIndicator from '../common/CustomActivityIndicator';

const CreateAddress = props => {
  let {emirate_id, region_id} = props;

  let [titleName, setTitleName] = useState('');
  let [address, setAddress] = useState('');
  let [street, setStreet] = useState('');
  let [houseNumber, setHouseNumber] = useState('');
  let [lat, setLatitude] = useState('');
  let [lng, setLongitude] = useState('');
  let [loading, setLoading] = useState(false);

  const handleMapPoints = (a, b) => {
    setLatitude(a);
    setLongitude(b);
  };
  let onSuccess = response => {
    toastMessage('successfully saved');
    setLoading(false);
    props.toggleAddressModal(false);
  };

  let onFailure = error => {
    setLoading(false);
    props.toggleAddressModal(false);
    console.log(error);
    //setAddresses([]);
  };

  const saveAddress = () => {
    setLoading(true);
    let fd = {
      user_id: 325,
      name: titleName,
      emirate_id: emirate_id,
      region_id: region_id,
      address: address,
      street_name: street,
      apartment_num: houseNumber,
      mobile: '0556789086',
      lat: lat,
      lng: lng,
      notes: 'optional ',
    };

    CreateAddressService(fd, onSuccess, onFailure);
  };

  return (
    <View style={{marginHorizontal: 16, padding: 12, flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.addressmodalVisible}
        onRequestClose={() => {}}>
        <ScrollView>
          <View style={{marginTop: 50, marginHorizontal: 16}}>
            <View style={styles.modalView}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.8}}>
                  <Text style={modalStyles.header}>Add A New Address</Text>
                </View>
                <View style={{flex: 0.2, flexDirection: 'row-reverse'}}>
                  <Pressable onPress={() => props.toggleAddressModal(false)}>
                    <Image
                      source={require('../../../assets/images/close.png')}
                      style={{
                        width: 24,
                        height: 24,
                        left: 6.75,
                      }}
                    />
                  </Pressable>
                </View>
              </View>
              {!loading && (
                <>
                  <View style={[commonstyles.mh16, {marginTop: 24}]}>
                    <Text style={inputStyles.name}> Title Name </Text>
                    <TextInput
                      style={commonstyles.input}
                      onChangeText={titleName => setTitleName(titleName)}
                    />
                  </View>
                  <View style={commonstyles.mh16}>
                    <Text style={inputStyles.name}> The Address </Text>
                    <TextInput
                      style={commonstyles.input}
                      onChangeText={address => setAddress(address)}
                    />
                  </View>
                  <View style={commonstyles.mh16}>
                    <Text style={inputStyles.name}> Street Name </Text>
                    <TextInput
                      style={commonstyles.input}
                      placeholder=" "
                      paddingHorizontal={15}
                      onChangeText={street => setStreet(street)}
                    />
                  </View>
                  <View style={commonstyles.mh16}>
                    <Text style={inputStyles.name}> House Number </Text>
                    <TextInput
                      style={commonstyles.input}
                      placeholder=" "
                      paddingHorizontal={15}
                      onChangeText={houseNumber => setHouseNumber(houseNumber)}
                    />
                  </View>
                  <View style={commonstyles.mh16}>
                    <Text style={inputStyles.name}> Select From Map </Text>
                    <TextInput
                      style={[
                        commonstyles.input,
                        {
                          borderColor: 'white',
                        },
                      ]}
                      paddingHorizontal={15}
                    />
                  </View>
                  <View style={[commonstyles.mh16, {marginTop: -58}]}>
                    <View
                      style={{
                        width: screenwidth - 32,
                        height: 164.5,
                        borderRadius: 6,
                        marginHorizontal: 16,
                      }}>
                      <MapExample
                        handlePress={(lat, long) => handleMapPoints(lat, long)}
                      />
                    </View>
                  </View>
                </>
              )}
              {loading && <CustomActivityIndicator />}

              <DecisionButtonsSmall
                handlePress={() => props.toggleAddressModal(false)}
                handleOk={() => saveAddress()}
              />
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 140,
    paddingVertical: 12,
    height: 45,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginVertical: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: 361,
  },
  modalView: {
    // minHeight: 434,
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: theme_color,
    shadowOffset: {
      //   width: 0,
      //   height: 2,
    },
    shadowOpacity: 1,
    //shadowRadius: 4,
    elevation: 4,
  },
});

export default CreateAddress;
