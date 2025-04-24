import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

import styles from './styles';
import commonstyles from '../../../styles/defultStyles';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import {special_section_data} from '../../../data/DropdownData';
import CreateButton from '../../../components/create-button';
import TextListMultiple from '../../../components/text-list-multiple';
import TextListSingle from '../../../components/text-list-single';
import TextListMultipleAndPrice from '../../../components/text-list-multiple-and-price';
import TextListMultiSingleAndPrice from '../../../components/text-list-multi-single-and-price';
import TextArea from '../../../components/text-area';
import Paragraph from '../../../components/paragraph';
import LandscapeWithPrice from '../../../components/landscape-with-price';
import SizesWithOrWithoutPrice from '../../../components/sizes-with-or-without-price';
import ToggleOnOff from '../../../components/toggle-on-off';
import SizeSelectionSingle from '../../../components/size-selection-single';
import Cutting from '../../../components/cutting';
import GiftPacking from '../../../components/gift-packing';
import Without from '../../../components/without';
import Packing from '../../../components/packing';

const CreateSpecialSection = props => {
  return (
    <View style={{}}>
      <Text
        style={[
          commonstyles.label,
          {
            marginBottom: 0,
          },
        ]}>
        Section
      </Text>
      <CustomDropdown data={special_section_data} defaultTxt="Choose Section" />
      <View style={commonstyles.mb16}>
        <Text style={styles.productName}>Address</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={commonstyles.mb16}>
        <Text style={styles.productName}>Address In English </Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{height: 42}}>
        <Image
          source={require('../../../../assets/images/Trash.png')}
          style={{
            width: 28,
            height: 28,
            right: 28,
            top: 8,
            position: 'absolute',
          }}
        />
      </View>
      <Packing />
      <Without />
      <GiftPacking />
      <Cutting />
      <SizeSelectionSingle />
      <ToggleOnOff />
      <TextListMultiple />
      <TextListSingle />
      <TextListMultipleAndPrice />
      <TextListMultiSingleAndPrice />
      <TextArea />
      <Paragraph />
      <LandscapeWithPrice />
      <SizesWithOrWithoutPrice />
      <View style={commonstyles.mb16}>
        <Text style={styles.productName}>The Value</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={commonstyles.mb16}>
        <Text style={styles.productName}>Value In English </Text>
        <TextInput style={styles.input} />
      </View>
      <CreateButton mh={0.01} />
    </View>
  );
};

export default CreateSpecialSection;
