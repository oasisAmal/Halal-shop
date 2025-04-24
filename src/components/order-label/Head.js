import React from "react";
import {
  Text,
  View} from "react-native";
import styles from "./styles";

const Head = (props) => {

  return (
     
    <View style={{ flexDirection:'row', marginTop: 16 ,marginHorizontal: 0  }}>
      <View style={{ flex:0.33}}>
        <Text style={styles.paraCenter}>{ props.label}     </Text>
      </View>
      <View style={{   flex:0.33 }}>
        <Text style={styles.paraCenter}>  { props.value} </Text>
      </View>
            <View style={{  flex:0.33 }}>
        <Text style={styles.paraCenter}>{props.mid}   </Text>
      </View>
    </View>
  );
};



export default  Head;
