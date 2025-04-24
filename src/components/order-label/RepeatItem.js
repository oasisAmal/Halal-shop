import React from "react";
import {
  Text,
  View} from "react-native";
import styles from "./styles";

const RepeatItem = (props) => {

  return (
     
    <View style={{ flexDirection:'row', marginTop: 16 ,marginHorizontal: 2  }}>
      <View style={{ flex: 0.45}}>
        <Text style={styles.paraLeft}>{ props.label}     </Text>
      </View>
      <View style={{ flex: 0.05}}>
        <Text style={styles.para}>{props.mid}   </Text>
      </View>
      <View style={{ flex: 0.5}}>
        <Text style={styles.para}>  { props.value} </Text>
      </View>
    </View>
  );
};



export default  RepeatItem;
