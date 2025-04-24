import React, {useState} from 'react';
import {Text, View, Image, Pressable, Alert} from 'react-native';
import styles from './styles';

const TagItem = props => {
	const {img, title, handlePress} = props;

	return (
		<Pressable style={styles.tagView} onPress={handlePress}>
			{/* <Pressable onPress={() => handlePress()}> */}
			<Image source={img} style={styles.tagImg} />
			{/* </Pressable> */}
			<Text style={styles.tagTxt}> {title} </Text>
		</Pressable>
	);
};

export default TagItem;
