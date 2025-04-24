import React from 'react';
import {Image, StyleSheet} from 'react-native';

const DeleteIcon = props => {
  return (
    <Image
      source={require('../../../assets/images/Trash.png')}
      style={styles.imgSize}
    />
  );
};

const styles = StyleSheet.create({
  imgSize: {
    width: 28,
    height: 28,
  },
});
export default DeleteIcon;
