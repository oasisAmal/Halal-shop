import React, {useEffect} from 'react';
import {Modal, Text, Pressable, View, Image, Alert} from 'react-native';
import CustomDropdown from '../utils/CustomDropdown';
import {products_data, special_categories_data} from '../../data/DummyData';
import styles from './styles';
import DecisionButtons from '../decision-buttons';
import {readData, saveData} from '../utils/functions/commonFunctions';
let TOKEN_STORAGE_KEY = 'is_blurred';
import MainHeader from '../partials/MainHeader';
const SpecialCategories = props => {
  // useEffect(() => {
  //   //clearStorage();
  //   let blurred = readData(TOKEN_STORAGE_KEY);
  //   //let blurred = saveData('@token', 'jbkjbjhhjvv');
  //   console.log(blurred);
  // }, []);

  return (
    <Modal animationType="slide" transparent={true} onRequestClose={() => {}}>
      <View style={styles.container}>
        <MainHeader is_blured={true} />
        <View
          style={[
            styles.modalView,
            {height: props.height ? props.height : 440},
          ]}>
          <View style={styles.title}>
            <View style={{flex: 0.8}}>
              <Text style={styles.productTxt}>Special Categories </Text>
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
          <Text style={styles.subTxt}>Choose your Group </Text>
          <CustomDropdown
            data={special_categories_data}
            defaultTxt="Choose"
            height={120}
          />
          <DecisionButtons
            btnOk={'Modification'}
            btnBack="Cancel"
            handlePress={props.handlePress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SpecialCategories;
