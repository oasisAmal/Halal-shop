import React from 'react';
import {View, Image, Text} from 'react-native';
import loginstyles from '../../screens/auth/styles';

const CountryCodeCardItem = props => {
  let {mobile, handlePress} = props;
  const [openCountryList, setOpenCountryList] = React.useState(false);
  return (
    <>
      <View
        style={[
          loginstyles.mb16,
          loginstyles.input,
          {flexDirection: 'row', marginHorizontal: -16},
        ]}>
        <View style={[loginstyles.codeView]}>
          <Image
            source={require('../../../assets/images/flag-AE.png')}
            style={loginstyles.flagImg}
          />
          <Text style={loginstyles.countryCode}>UAE</Text>
        </View>

        <View
          style={{
            flex: 0.75,
            flexDirection: 'row-reverse',
            marginVertical: 16,
          }}>
          <Text>+971</Text>
        </View>
      </View>
    </>
  );
};

export default CountryCodeCardItem;
