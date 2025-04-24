import React from 'react';
import {View, Image, TextInput} from 'react-native';
import loginstyles from '../../screens/auth/styles';
import {strings} from '../../i18n';

const Username = props => {
  let {username, handlePress} = props;
  return (
    <View style={[loginstyles.input, loginstyles.mb16, {flexDirection: 'row'}]}>
      <View style={[{flex: 0.1}]}>
        <Image
          source={require('../../../assets/images/user.png')}
          style={loginstyles.iconImg}
        />
      </View>
      <View style={{flex: 0.8}}>
        <TextInput
          placeholder={strings('User Name')}
          style={{height: '100%'}}
          onChangeText={handlePress}
          value={username}
          placeholderTextColor={'#C1C1C1'}
        />
      </View>
    </View>
  );
};

export default Username;
