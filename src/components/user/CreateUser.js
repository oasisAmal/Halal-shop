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
import {theme_color} from '../../mutils';
import DecisionButtonsSmall from '../decision-buttons-small';
import modalStyles from '../../styles/modalStyles';
import {CreateUserService} from '../../services/UserServices';
import inputStyles from '../../styles/inputStyles';
import {toastMessage} from '../utils/functions/commonFunctions';

const CreateUser = props => {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [mobile, setMobile] = useState('');

  // useEffect(() => {
  //   console.log('firstname is ' + mobile);
  // }, [firstName, lastName, mobile]);
  let saveUser = () => {
    let fd = {
      first_name: firstName,
      last_name: lastName,
      mobile: mobile,
    };
    CreateUserService(fd, onSuccess, onFailure);
  };
  let onSuccess = response => {
    //console.log('in success ' + response.data.status);
    toastMessage('Successfully saved');
    props.toggleModal(false);
  };

  let onFailure = error => {
    toastMessage('Something went wrong! Please try again later');
  };

  return (
    <View style={{marginHorizontal: 16, padding: 12, flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {}}>
        <View style={{marginTop: 100, marginHorizontal: 16}}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.8}}>
                <Text style={modalStyles.header}>Add A New User</Text>
              </View>
              <View style={{flex: 0.2, flexDirection: 'row-reverse'}}>
                <Pressable onPress={() => props.toggleModal(false)}>
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
            <View style={[commonstyles.mh16, {marginTop: 24}]}>
              <Text style={inputStyles.name}> First Name </Text>
              <TextInput
                style={commonstyles.input}
                onChangeText={firstName => setFirstName(firstName)}
              />
            </View>
            <View style={commonstyles.mh16}>
              <Text style={inputStyles.name}> Last Name </Text>
              <TextInput
                style={commonstyles.input}
                onChangeText={lastName => setLastName(lastName)}
              />
            </View>
            <View style={commonstyles.mh16}>
              <Text style={inputStyles.name}> Mobile </Text>
              <TextInput
                style={commonstyles.input}
                placeholder="+971-"
                paddingHorizontal={15}
                onChangeText={mobile => setMobile(mobile)}
              />
            </View>
            <DecisionButtonsSmall
              handlePress={() => props.toggleModal(false)}
              handleOk={() => saveUser()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 40,
  },
});

export default CreateUser;
