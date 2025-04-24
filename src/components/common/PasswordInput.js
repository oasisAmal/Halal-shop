import React from 'react';
import {View, Image, TextInput, PixelRatio, Pressable} from 'react-native';
import loginstyles from '../../screens/auth/styles';
import {strings} from '../../i18n';

const PasswordInput = props => {
  let {password, handlePress, placeholderTxt, mb} = props;
  let [eyeOpened, setEyeOpened] = React.useState(false);
  return (
    <View
      style={[
        loginstyles.input,
        loginstyles.mb8,
        {flexDirection: 'row', marginBottom: mb ? mb : 8},
      ]}>
      <View style={[{flex: 0.1}]}>
        <Image
          source={require('../../../assets/images/lock-closed.png')}
          style={loginstyles.iconImg}
        />
      </View>
      <View style={{flex: 0.8}}>
        <TextInput
          placeholder={placeholderTxt ? placeholderTxt : strings('Password')}
          onChangeText={handlePress}
          value={password}
          secureTextEntry={!eyeOpened}
          style={{height: '100%'}}
          placeholderTextColor={'#C1C1C1'}
        />
      </View>
      <View style={[{flex: 0.1, flexDirection: 'row-reverse'}]}>
        <Pressable onPress={() => setEyeOpened(!eyeOpened)}>
          <Image
            source={
              eyeOpened
                ? require('../../../assets/images/eye-open.png')
                : require('../../../assets/images/eye-closed.png')
            }
            style={loginstyles.iconImg}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PasswordInput;
