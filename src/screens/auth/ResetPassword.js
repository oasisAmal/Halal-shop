import React from 'react';
import {View, Text, Image} from 'react-native';
import loginstyles from './styles';
import SaveButton from '../../components/save-button';
import myColors from '../../styles/myColors';
import PasswordInput from '../../components/common/PasswordInput';
import {theme_color} from '../../mutils';

const ResetPassword = props => {
  const [isFilled, setFilled] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setPasswordConfirmation] = React.useState('');

  let checkAllFilled = () => {
    if (confirmpassword == '' || password == '') {
      setFilled(false);
    } else {
      setFilled(true);
    }
  };
  React.useEffect(() => {
    checkAllFilled();
  }, [confirmpassword, password]);

  return (
    <View style={loginstyles.container}>
      <Text style={[loginstyles.headTxt, loginstyles.mt110]}>
        Reset Password
      </Text>
      <Text
        style={[
          loginstyles.subTxt,
          {
            marginBottom: 150,
          },
        ]}>
        Please enter your new password below.
      </Text>
      <View style={loginstyles.formView}>
        <PasswordInput
          handlePress={password => setPassword(password)}
          password={password}
          placeholderTxt="New Password"
          mb={16}
        />
        <PasswordInput
          handlePress={confirmpassword =>
            setPasswordConfirmation(confirmpassword)
          }
          confirmpassword={confirmpassword}
          placeholderTxt="Confirm New Password"
          mb={40}
        />
        <SaveButton
          label="Reset Password"
          bgcolor={isFilled ? theme_color : myColors.slate400}
          handlePress={() => props.navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default ResetPassword;
