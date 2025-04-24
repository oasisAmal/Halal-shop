import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {theme_color} from '../../mutils';
import DecisionButtonsSmall from '../../components/decision-buttons-small';
import CloseImage from '../../components/common/CloseImage';
import modalStyles from '../../styles/modalStyles';
import {orders_data} from '../../data/DummyData';
import CountryCardItem from './CountryCardItem';
import {country_code_data} from '../../data/DropdownData';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../utils/AsyncStorageKeys';
import {connect} from 'react-redux';
import {chooseCountry} from '../../store/reducers';
import {changeURL} from '../../utils/APIKit';
import SaveButton from '../../components/save-button';
import {fullHeight, fullWidth} from '../../utils/commonFunctions';

let ChooseCountry = props => {
  let setChosenCountry = async (country, code) => {
    //alert('setChosenCountry functopn  ' + country + code);
    //await ASYNC_STORAGE_KEYS.clear();
    try {
      //await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.CurrentCountry);
      // console.log('emoved item before ');
      await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.CurrentCountry, code);
      // props.navigation.push('Login');
    } catch (e) {
      alert('Failed to save CurrentCountry to the storage');
    }
    //alert(country);
    props.chooseCountry('UAE');
    changeURL(country);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 300,
          backgroundColor: 'white',
          marginTop: 160,
          borderRadius: 8,
        }}>
        <Text
          style={[
            modalStyles.header,
            {
              textAlign: 'center',
              //marginRight: 16,
              marginTop: 16,
            },
          ]}>
          Select Your Country
        </Text>
        <View style={{marginTop: 16}}>
          <CountryCardItem
            handlePress={(country, code) => setChosenCountry(1, 'OM')}
            label="OMAN"
            source={require('../../../assets/images/Oman-flag.png')}
          />
          <CountryCardItem
            handlePress={(country, code) => setChosenCountry(2, 'SA')}
            label="SAUDI ARABIA"
            source={require('../../../assets/images/SaudiArabia.png')}
          />
          <CountryCardItem
            handlePress={(country, code) => setChosenCountry(3, 'UAE')}
            label="UAE"
            source={require('../../../assets/images/flag-AE.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    // padding: 35,
    alignItems: 'center',
    shadowColor: theme_color,
    shadowOpacity: 1,
    elevation: 4,
    marginBottom: 40,
    height: 350,
    alignSelf: 'center',
    width: fullWidth,
    marginTop: 100,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => {
  return {
    // token: state.token,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    chooseCountry: country => dispatch(chooseCountry(country)),
  };
}

export default ChooseCountry = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseCountry);
