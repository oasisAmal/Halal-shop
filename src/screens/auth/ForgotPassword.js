import React from 'react';
import {View, Text} from 'react-native';
import loginstyles from './styles';
import SaveButton from '../../components/save-button';
import myColors from '../../styles/myColors';
import PhoneInput from './PhoneInput';
import {theme_color} from '../../mutils';
import {connect} from 'react-redux';
import {toggleBlur} from '../../store/reducers';

let ForgotPassword = props => {
  const [isFilled, setFilled] = React.useState(true);
  const [countrycode, setCountrycode] = React.useState('');
  const [mobile, setMobile] = React.useState('558436789');

  // let checkAllFilled = () => {
  //   if (countrycode == '' || mobile == '') {
  //     //setFilled(false);
  //   } else {
  //     setFilled(true);
  //   }
  // };
  // React.useEffect(() => {
  //   checkAllFilled();
  // }, [countrycode, mobile]);
  return (
    <View
      style={[
        loginstyles.container,
        {
          opacity: props.enableBlur ? 0.2 : 1,
        },
      ]}>
      <Text style={loginstyles.mobileTxt}>Mobile Number</Text>
      <Text style={loginstyles.subTxt}>
        Enter your mobile number for OTP Verification
      </Text>
      <View
        style={[
          loginstyles.formView,
          {
            marginTop: 168,
          },
        ]}>
        <View style={{marginBottom: 24}}>
          <PhoneInput mobile={mobile} />
        </View>

        <SaveButton
          label="Send"
          bgcolor={isFilled ? theme_color : myColors.slate400}
          handlePress={() => props.navigation.push('OTPVerification')}
        />
      </View>
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
  };
}

export default ForgotPassword = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
