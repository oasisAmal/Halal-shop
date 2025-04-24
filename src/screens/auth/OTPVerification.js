import React from 'react';
import {View, Text, TextInput} from 'react-native';
import loginstyles from './styles';
import SaveButton from '../../components/save-button';
import myColors from '../../styles/myColors';
import {theme_color} from '../../mutils';

const OTPVerification = props => {
  const [value1, setValueOne] = React.useState('7');
  const [value2, setValueTwo] = React.useState('8');
  const [value3, setValueThree] = React.useState('2');
  const [value4, setValueFour] = React.useState('5');
  const [count, setCount] = React.useState(100);
  const [isFilled, setFilled] = React.useState(false);

  const resendOTP = () => {
    setCount(10);
  };
  let checkAllFilled = () => {
    if (value1 == '' || value2 == '' || value3 == '' || value4 == '') {
      setFilled(false);
    } else {
      setFilled(true);
    }
  };
  React.useEffect(() => {
    checkAllFilled();
  }, [value1, value2, value3, value4]);

  React.useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (count == 0) {
        return () => clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);

    //Clearing the interval
    // if (count == 0) {
    return () => clearInterval(interval);
    // }
  }, [count]);

  return (
    <View style={loginstyles.container}>
      <Text style={[loginstyles.headTxt, loginstyles.mt110]}>
        OTP Verification
      </Text>
      <Text
        style={[
          loginstyles.subTxt,
          {
            marginBottom: 160,
          },
        ]}>
        Enter the verification code we just sent to your number +971 *******53.
      </Text>
      <View style={loginstyles.formView}>
        <View style={loginstyles.otpVerifiedRow}>
          <View style={[loginstyles.smallBtn, loginstyles.mr12]}>
            <TextInput
              value={value1}
              style={loginstyles.otpVerifiedTxt}
              onChangeText={value1 => setValueOne(value1)}
            />
          </View>
          <View style={[loginstyles.smallBtn, loginstyles.mr12]}>
            <TextInput
              value={value2}
              style={loginstyles.otpVerifiedTxt}
              onChangeText={value2 => setValueTwo(value2)}
            />
          </View>
          <View style={[loginstyles.smallBtn, loginstyles.mr12]}>
            <TextInput
              value={value3}
              style={loginstyles.otpVerifiedTxt}
              onChangeText={value3 => setValueThree(value3)}
            />
          </View>
          <View style={[loginstyles.smallBtn]}>
            <TextInput
              value={value4}
              style={loginstyles.otpVerifiedTxt}
              onChangeText={value4 => setValueFour(value4)}
            />
          </View>
        </View>
        {count !== 0 && (
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={[loginstyles.mb40, loginstyles.didnotreceive]}>
              Resend OTP in
            </Text>
            <Text style={[loginstyles.time]}> {count} seconds </Text>
          </View>
        )}
        {count == 0 && (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginBottom: 40,
            }}>
            <Text style={[loginstyles.didnotreceive]}>
              Didn’t receive code?
            </Text>
            <Text
              style={[loginstyles.didnotreceive, loginstyles.resend]}
              onPress={() => resendOTP()}>
              Resend
            </Text>
          </View>
        )}

        <SaveButton
          label="Verify"
          bgcolor={isFilled ? theme_color : myColors.slate400}
          handlePress={() => props.navigation.replace('ResetPassword')}
        />
      </View>
    </View>
  );
};

export default OTPVerification;
