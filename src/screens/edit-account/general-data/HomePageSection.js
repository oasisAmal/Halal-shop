import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../edit-product-details/styles';
import itemStyles from '../../../styles/itemStyles';
import genDataStyles from './styles';
import commonstyles from '../../../styles/defultStyles';
import ToggleOn from '../../../components/common/ToggleOn';

const HomePageSection = () => {
  return (
    <View>
      <View style={{marginBottom: 12}}>
        <Text
          style={[
            genDataStyles.title,
            {
              marginLeft: 4,
            },
          ]}>
          Home Page Section
        </Text>
      </View>
      <View
        style={[
          styles.formView,
          {
            height: 116,
          },
        ]}>
        <Text
          style={[
            styles.productName,
            {
              marginBottom: 8,
            },
          ]}>
          Donate Now{' '}
        </Text>
        <View
          style={[
            commonstyles.flewRow,
            {
              height: 52,
              marginVertical: 16,
              paddingHorizontal: 0,
              borderRadius: 8,
              marginHorizontal: 16,
            },
          ]}>
          <ToggleOn enableOn={true} ml={-16} mr={12} mt={4} />
          <Text
            style={[
              itemStyles.subTxt,
              {
                marginBottom: 16,
              },
            ]}>
            Open{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomePageSection;
