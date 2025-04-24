import React from 'react';
import {View, Image, TextInput, Text, Pressable} from 'react-native';
import loginstyles from '../../screens/auth/styles';
import CountryCodeList from './CountryCodeList';
import {connect} from 'react-redux';
import {toggleBlur} from '../../store/reducers';

let PhoneInput = props => {
  let {mobile} = props;
  const [openCountryList, setOpenCountryList] = React.useState(false);
  const handlePress = () => {
    setOpenCountryList(!openCountryList);
    props.toggleBlur(!openCountryList);
  };
  return (
    <>
      <View style={[loginstyles.mb16, {flexDirection: 'row'}]}>
        <View
          style={[
            loginstyles.codeView,
            loginstyles.input,
            loginstyles.slate50bg,
          ]}>
          <Image
            source={require('../../../assets/images/flag-AE.png')}
            style={loginstyles.flagImg}
          />
          <Text style={loginstyles.countryCode}>+234</Text>
          <Pressable onPress={() => handlePress()}>
            <Image
              source={require('../../../assets/images/drop_down.png')}
              style={loginstyles.dropdownImg}
            />
          </Pressable>
        </View>

        <View style={{flex: 0.75}}>
          <TextInput
            placeholderTextColor={'#CBD5E1'}
            placeholder="000 000 000"
            style={[loginstyles.input, loginstyles.slate50bg]}
            //onChangeText={handlePress}
            value={mobile}
          />
        </View>
      </View>
      {openCountryList && <CountryCodeList handlePress={() => handlePress()} />}
    </>
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
  };
}

export default PhoneInput = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneInput);
