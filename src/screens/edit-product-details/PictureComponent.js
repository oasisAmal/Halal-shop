import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const PictureComponent = props => {
  return (
    <View style={{}}>
      <Text style={styles.subheader}>Picture</Text>
      <View style={styles.formView}>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
          <View style={{flex: 0.2}}>
            <View style={styles.fileUpload}>
              <Text style={styles.chhoseTxt}>Choose File </Text>
            </View>
          </View>
          <View style={{flex: 0.8}}>
            <Text
              style={[
                styles.imgTxt,
                {
                  textAlign: 'center',
                },
              ]}>
              Main Image (1290px X 1075px)
            </Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
          <View style={{flex: 0.4}}>
            <Image
              source={require('../../../assets/images/fish_stall.png')}
              style={{width: 100, height: 142}}
            />
          </View>
          <View style={{flex: 0.3}}>
            <Image
              source={require('../../../assets/images/close.png')}
              style={{width: 24, height: 24}}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
          <View style={{flex: 0.2}}>
            <View style={styles.fileUpload}>
              <Text style={styles.chhoseTxt}>Choose File </Text>
            </View>
          </View>
          <View style={{flex: 0.8}}>
            <Text
              style={[
                styles.imgTxt,
                {
                  textAlign: 'center',
                  marginRight: 32,
                },
              ]}>
              Additional Image (1290px X 1075px)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PictureComponent;
