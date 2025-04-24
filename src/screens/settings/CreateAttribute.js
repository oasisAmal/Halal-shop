import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import commonstyles from '../../styles/defultStyles';
import {theme_color} from '../../mutils';
import DecisionButtons from '../../components/decision-buttons';
import CloseImage from '../../components/common/CloseImage';
import {screenHeight} from '../../../config';
import CustomDropdown from '../../components/utils/CustomDropdown';
import {special_section_data} from '../../data/DropdownData';
import modalStyles from '../../styles/modalStyles';
import CheckboxWithText from '../../components/common/CheckboxWithText';

const CreateAttribute = props => {
  const {handlePress} = props;
  return (
    <View style={{marginHorizontal: 16, padding: 12, flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {}}>
        <View style={{marginTop: 0, marginRight: 16}}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.8}}>
                <Text style={modalStyles.header}>Create Attribute</Text>
              </View>
              <View style={{flex: 0.2, flexDirection: 'row-reverse'}}>
                <Pressable onPress={() => handlePress()}>
                  <CloseImage />
                </Pressable>
              </View>
            </View>
            <View style={[commonstyles.mh16, {marginTop: 24}]}>
              <Text style={commonstyles.mainTxt}>Name </Text>
              <TextInput style={commonstyles.input} />
            </View>
            <View style={[commonstyles.mh16]}>
              <Text style={commonstyles.mainTxt}>Name In English </Text>
              <TextInput style={commonstyles.input} />
            </View>
            <View style={[commonstyles.mh16]}>
              <Text style={commonstyles.mainTxt}>Backend Name </Text>
              <TextInput style={commonstyles.input} />
            </View>
            <View style={[commonstyles.mh16]}>
              <Text style={commonstyles.mainTxt}>Group </Text>
              <TextInput style={commonstyles.input} />
            </View>
            <CheckboxWithText label="Optimal / Needed" />
            <View style={{marginBottom: 16}}></View>
            <View style={[commonstyles.mh16]}>
              <Text style={modalStyles.subheader}>Special Sections </Text>
              <TextInput style={[commonstyles.input, {borderColor: 'white'}]} />
            </View>
            <View style={{marginBottom: -56}}></View>
            <CheckboxWithText label="Section For The Quantity of A Product" />
            <View style={{marginBottom: 16}}></View>
            <View style={[commonstyles.mh16]}>
              <Text style={commonstyles.mainTxt}>Section </Text>
              <CustomDropdown data={special_section_data} />
            </View>
            <DecisionButtons
              handlePress={() => handlePress()}
              btnOk="Save"
              btnBack="Back"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',

    padding: 35,
    alignItems: 'center',
    shadowColor: theme_color,
    height: screenHeight,
    shadowOpacity: 1,
    //shadowRadius: 4,
    elevation: 4,
    marginBottom: 40,
  },
});

export default CreateAttribute;
