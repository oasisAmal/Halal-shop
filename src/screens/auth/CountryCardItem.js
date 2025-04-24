import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import loginstyles from '../../screens/auth/styles';

const CountryCardItem = props => {
  let {mobile, handlePress} = props;
  const [openCountryList, setOpenCountryList] = React.useState(false);
  return (
    // <View
    //   style={[
    //     loginstyles.mb16,
    //     loginstyles.input,
    //     {flexDirection: 'row', marginHorizontal: -16},
    //   ]}>
    //   <View style={loginstyles.countryView}>
    //     <Text style={loginstyles.countryCode} onPress={handlePress}>
    //       {props.label ? props.label : ''}
    //     </Text>
    //   </View>

    //   <View
    //     style={{
    //       flex: 0.5,
    //       flexDirection: 'row-reverse',
    //     }}>
    //     {props.source ? (
    //       <Pressable onPress={handlePress}>
    //         <Image source={props.source} style={loginstyles.flagImg} />
    //       </Pressable>
    //     ) : (
    //       ''
    //     )}
    //   </View>
    // </View>

    <TouchableOpacity onPress={() => handlePress()}>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          backgroundColor: 'white',
          marginBottom: 16,
          //paddingVertical: 8,

          height: 52,
          paddingVertical: 0,
          paddingHorizontal: 12,
          borderRadius: 6,
          borderColor: '#CBD5E1',
          marginHorizontal: 16,
        }}>
        <View style={{flex: 0.9}}>
          <Text style={loginstyles.countryCode}>
            {props.label ? props.label : ''}
          </Text>
        </View>
        <View style={{flex: 0.1}}>
          <Image source={props.source} style={loginstyles.flagImg} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CountryCardItem;
