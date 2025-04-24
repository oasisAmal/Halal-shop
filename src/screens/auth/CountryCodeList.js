import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import {theme_color} from '../../mutils';
import DecisionButtonsSmall from '../../components/decision-buttons-small';
import CloseImage from '../../components/common/CloseImage';
import modalStyles from '../../styles/modalStyles';
import {orders_data} from '../../data/DummyData';
import CountryCodeCardItem from './CountryCodeCardItem';
import {country_code_data} from '../../data/DropdownData';

const CountryCodeList = props => {
  const {handlePress} = props;
  return (
    <View style={{marginHorizontal: 16, padding: 12, flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {}}>
        <View style={{marginTop: 150, marginHorizontal: 16}}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row', marginBottom: 16}}>
              <View style={{flex: 0.9}}>
                <Text
                  style={[
                    modalStyles.header,
                    {
                      textAlign: 'left',
                      marginRight: 16,
                    },
                  ]}>
                  Select Country Code
                </Text>
              </View>
              <View style={{flex: 0.1, alignSelf: 'flex-end'}}>
                <Pressable onPress={handlePress}>
                  <CloseImage />
                </Pressable>
              </View>
            </View>
            {country_code_data.map((order, index) => {
              return <CountryCodeCardItem handlePress={handlePress} />;
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: theme_color,
    shadowOpacity: 1,
    elevation: 4,
    marginBottom: 40,
  },
});

export default CountryCodeList;
