import React from "react";
import {
  Text,
  View} from "react-native";
import styles from "./styles";

const RepeatItem = (props) => {

  return (
     
    <View style={styles.repeatView}>
      <View style={styles.flex50}>
        <Text style={styles.paraLeft}>{ props.label}     </Text>
      </View>
      <View style={styles.flex50}>
        <Text style={props.right?  styles.pararight : styles.para}>  { props.value} </Text>
      </View>
    </View>
  );
};



export default  RepeatItem;
