import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import giftstyles from '../../gifts/styles';
import commonstyles from '../../../styles/defultStyles';
import SaveButton from '../../../components/save-button';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import {products_data} from '../../../data/DummyData';

const RelatedProducts = props => {
  return (
    <View style={[giftstyles.container, {}]}>
      <Text style={giftstyles.orderTxt}>Special Sections </Text>
      <View style={commonstyles.flewRow}>
        <Text style={giftstyles.subheader}>
          Home / Products / Active Products / Special Sections
        </Text>
      </View>
      <View style={giftstyles.formView}>
        <View style={commonstyles.mb16}>
          <Text style={giftstyles.productName}>Special Sections</Text>
          <CustomDropdown data={products_data} />
        </View>
        <SaveButton handlePress={() => console.log('hello SaveButton')} />
      </View>
    </View>
  );
};

export default RelatedProducts;
