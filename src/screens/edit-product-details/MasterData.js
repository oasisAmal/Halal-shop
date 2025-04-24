import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
const MasterData = () => {
  return (
    <View>
      <Text style={styles.subheader}>Master Data</Text>
      <View style={styles.formView}>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}> Product Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}>Product Name In English </Text>
          <TextInput style={styles.input} />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}>Description </Text>
          <TextInput
            multiline={true}
            placeholder="Type..."
            style={styles.textarea}
          />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}>Brief </Text>
          <TextInput
            multiline={true}
            placeholder="Type..."
            style={styles.textarea}
          />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}>Description In English </Text>
          <TextInput
            multiline={true}
            placeholder="Type..."
            style={styles.textarea}
          />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}>Brief In English</Text>
          <TextInput
            multiline={true}
            placeholder="Type..."
            style={styles.textarea}
          />
        </View>
      </View>
    </View>
  );
};

export default MasterData;
