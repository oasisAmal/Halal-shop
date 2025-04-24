import React from 'react';
import {Modal, Text, Pressable, View, Image} from 'react-native';
import styles from './styles';
import Barcode from 'react-native-barcode-builder';

const CreateBarcode = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.createBarcodePressed}
      onRequestClose={() => {}}>
      <View style={styles.modalView}>
        <View style={styles.title}>
          <View style={{flex: 0.85}}>
            <Text style={styles.driverTxt}>Barcode </Text>
          </View>
          <View>
            <Pressable onPress={() => props.toggleCreateBarcode(false)}>
              <Image
                source={require('../../../assets/images/close.png')}
                style={styles.closeImg}
              />
            </Pressable>
          </View>
        </View>
        <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 185}}>
          <Barcode value="Zabehaty  " format="CODE128" />
        </View>

        <View style={styles.btnView}>
          <View style={{}}>
            <View style={[styles.btn, styles.nextView]}>
              <Text style={[styles.clrWhite, styles.btnTxt]}>Next</Text>
            </View>
          </View>
          <View style={{}}>
            <Pressable onPress={() => props.toggleCreateBarcode(false)}>
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

export default CreateBarcode;
