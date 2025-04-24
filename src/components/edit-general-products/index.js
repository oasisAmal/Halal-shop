import React from 'react';
import {Modal, Text, Pressable, View, Image} from 'react-native';
import CustomDropdown from '../utils/CustomDropdown';
import {products_data} from '../../data/DummyData';
import styles from './styles';
import DecisionButtons from '../decision-buttons';

const EditGeneralProducts = props => {
  return (
    <Modal animationType="slide" transparent={true} onRequestClose={() => {}}>
      <View style={styles.modalView}>
        <View style={styles.title}>
          <View style={{flex: 0.8}}>
            <Text style={styles.productTxt}>Edit General Products </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Pressable onPress={() => props.handlePress(false)}>
              <Image
                source={require('../../../assets/images/close.png')}
                style={styles.closeImg}
              />
            </Pressable>
          </View>
        </View>
        <Text style={styles.subTxt}>General Product </Text>
        <CustomDropdown data={products_data} defaultTxt="Choose a Product" />
        <DecisionButtons
          btnOk={'Modification'}
          btnBack="Cancel"
          handlePress={props.handlePress}
        />
      </View>
    </Modal>
  );
};

export default EditGeneralProducts;
