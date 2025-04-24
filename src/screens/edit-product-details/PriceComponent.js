import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import CreateButton from '../../components/create-button';
import PictureComponent from './PictureComponent';
import CookingComponent from './CookingComponent';
import QuantityComponent from './QuantityComponent';
import TagComponent from './TagComponent';
import Appointment from './AppointmentsComponent';

const Price = props => {
  return (
    <View>
      <Text style={styles.subheader}>Prices</Text>
      <View style={[styles.formView, {}]}>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
          <View style={{flex: 0.1}}>
            <Image
              source={require('../../../assets/images/checkbox-ticked.png')}
              style={{
                width: 28,
                height: 28,
              }}
            />
          </View>
          <View style={{flex: 0.8}}>
            <Text
              style={[
                styles.productName,
                {
                  //marginLeft: -32,
                },
              ]}>
              {' '}
              There Are Product Sizes
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Image
              source={require('../../../assets/images/Trash.png')}
              style={{
                width: 32,
                height: 32,
                marginTop: -4,
              }}
            />
          </View>
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}> The Price</Text>
          <TextInput style={styles.input} value="500.00 AED" />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}> Price Before Discount </Text>
          <TextInput style={styles.input} value="600.00 AED" />
        </View>
        <View style={[commonstyles.mb16, {marginTop: 8}]}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 0.5, flexDirection: 'column', marginRight: 8}}>
              <Text style={styles.smallTxt}> The Weight</Text>
              <TextInput placeholder="Type" style={[styles.inputSm, {}]} />
            </View>
            <View style={{flex: 0.5, marginLeft: 8}}>
              <Text style={styles.smallTxt}> The Age</Text>
              <TextInput placeholder="Type" style={styles.inputSm} />
            </View>
          </View>
        </View>
        <View style={[commonstyles.mb16, {}]}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 0.5, flexDirection: 'column', marginRight: 8}}>
              <Text style={styles.smallTxt}> The Price </Text>
              <TextInput placeholder="Type" style={[styles.inputSm]} />
            </View>
            <View style={{flex: 0.5, marginLeft: 8}}>
              <Text style={styles.smallTxt}> Price Before Discount</Text>
              <TextInput
                placeholder="Type"
                style={[
                  styles.inputSm,
                  {
                    //marginRight: 8,
                  },
                ]}
              />
            </View>
          </View>
        </View>
        <View style={[commonstyles.mb16, {}]}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 0.5, flexDirection: 'column', marginRight: 8}}>
              <Text style={styles.smallTxt}> How Many People(From) </Text>
              <TextInput
                placeholder="Type"
                style={[
                  styles.inputSm,
                  {
                    //marginRight: 8,
                  },
                ]}
              />
            </View>
            <View style={{flex: 0.5, marginLeft: 8}}>
              <Text style={styles.smallTxt}> How Many People(To)</Text>
              <TextInput
                placeholder="Type"
                style={[
                  styles.inputSm,
                  {
                    //marginLeft: 8,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        <CreateButton mh={0.25} handlePress={() => console.log('under dev ')} />
      </View>
    </View>
  );
};

export default Price;
