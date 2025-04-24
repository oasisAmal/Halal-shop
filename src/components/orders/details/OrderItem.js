import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../styles';
import {strings} from '../../../i18n';

const OrderItem = props => {
  return (
    <View style={styles.itemBase}>
      <View style={styles.firstrow}>
        <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Type')} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemValue}>{props.data.type}</Text>
        </View>
        {/* <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Quantity')} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemValue}>{props.data.quantity}</Text>
        </View> */}
      </View>
      <View style={styles.secondrow}>
        <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Price Of One')} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemValue}>{props.data.unit_price}</Text>
        </View>
        {/* <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Weight')} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemValue}>{props.data.weight}</Text>
        </View> */}
      </View>
      <View style={styles.thirdrow}>
        <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Age')} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemValue}>{props.data.age}</Text>
        </View>
        {/* <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Details')} </Text>
        </View>
        <View style={styles.item_details}>
          <Text style={styles.itemValue}>
            {props.data.details &&
              props.data.details.attribute &&
              props.data?.details.attribute + ' : '} 

            {props.data &&
              props.data.details &&
              props.data.details[0] &&
              props.data?.details.values &&
              props.data?.details.values[0] &&
              props.data?.details.values[0]}
          </Text>
        </View> */}
      </View>
      <View style={styles.fourthrow}>
        {/* <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Type')} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemValue}>{props.data.type}</Text>
        </View> */}
        <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Quantity')} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemValue}>{props.data.quantity}</Text>
        </View>
      </View>
      <View style={styles.fifthrow}>
        {/* <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Price Of One')} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemValue}>{props.data.unit_price}</Text>
        </View> */}
        <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Weight')} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemValue}>{props.data.weight}</Text>
        </View>
      </View>
      <View style={styles.lastrow}>
        {/* <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Age')} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemValue}>{props.data.age}</Text>
        </View> */}
        <View style={styles.item}>
          <Text style={styles.itemHeader}>{strings('Details')} </Text>
        </View>
        <View style={styles.item_details}>
          <Text style={styles.itemValue}>
            {props.data.details &&
              props.data.details.attribute &&
              props.data?.details.attribute + ' : '}

            {props.data &&
              props.data.details &&
              props.data.details[0] &&
              props.data?.details.values &&
              props.data?.details.values[0] &&
              props.data?.details.values[0]}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
