import React from "react";
import {
  Text,
  View} from "react-native";
import styles from "./styles";

const Head = (props) => {

  return (
     
    <View style={styles.headView}>
      <View style={styles.flex25}>
        <Text style={styles.paraCenter}> {props.element ? props.element :""}  </Text>
      </View>
      <View  style={styles.flex25}>
        <Text style={styles.paraCenter}>{props.quantity ? props.quantity :""}    </Text>
      </View>
      <View  style={styles.flex25}>
        <Text style={styles.paraCenter}>{props.unit_price ? props.unit_price :""}      </Text>
      </View>
      <View  style={styles.flex25}>
        <Text style={styles.paraCenter}>{props.amount ? props.amount :""}      </Text>
      </View>
    </View>
  );
};



export default  Head;
