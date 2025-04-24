import React from 'react';
import {View, Text, Image} from 'react-native';
import giftstyles from './styles';

const SingleItem = ({item}) => {
  return (
    <View style={giftstyles.singleItem}>
      <Image
        source={require('../../../../assets/images/checkbox-ticked.png')}
        style={giftstyles.checkboxImg}
      />
      <Text style={giftstyles.selectedTxt}> {item} </Text>
    </View>
  );
};
export default SingleItem;
