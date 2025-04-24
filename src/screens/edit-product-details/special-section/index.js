import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import commonstyles from '../../../styles/defultStyles';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import myColors from '../../../styles/myColors';
import {special_section_data} from '../../../data/DropdownData';
import PlusIconImage from '../../../components/plus-icon-image';
import CreateSpecialSection from '../create-special-section';

const SpecialSection = props => {
  return (
    <View style={{}}>
      <Text style={commonstyles.subheader}>Special Sections</Text>
      <View style={commonstyles.formView}>
        <View style={commonstyles.flewRow}>
          <View
            style={[
              commonstyles.flex50,
              styles.btn,
              commonstyles.flewRow,
              {
                backgroundColor: myColors.lightGreen,
              },
            ]}>
            <Text style={[commonstyles.longBtnTxt, {marginLeft: 16}]}>
              Create
            </Text>
            <PlusIconImage width={16} height={16} mt={4} />
          </View>
          <View
            style={[
              commonstyles.flex50,
              styles.btn,
              {
                backgroundColor: myColors.theme_color,
              },
            ]}>
            <Text style={commonstyles.longBtnTxt}>Delete</Text>
          </View>
        </View>
        <Text style={[commonstyles.label, commonstyles.mb12]}>
          There is a section for the quantity of the product
        </Text>
        <CreateSpecialSection />
      </View>
    </View>
  );
};

export default SpecialSection;
