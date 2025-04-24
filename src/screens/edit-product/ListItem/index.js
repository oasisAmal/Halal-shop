import React, {useState} from 'react';
import {View, Text, Pressable, Image, I18nManager} from 'react-native';
import styles from './styles';
import commonstyles from '../../../styles/defultStyles';
import IMGS from '../../../../assets/images';

const ListItem = props => {
	const isActiveLabel = props.activeLabel == props.label ? true : false;
	return (
		<Pressable onPress={props.handleClick}>
			<View style={[styles.container, {}]}>
				<View style={[commonstyles.flewRow, {justifyContent: 'space-between'}]}>
					<View style={commonstyles.flewRow}>
						<View style={styles.mainview}>
							<Text style={styles.number}>{props.i} </Text>
						</View>
						<Text style={isActiveLabel ? styles.labelActive : styles.label}> {props.label}</Text>
					</View>

					<Image
						source={I18nManager.isRTL ? IMGS.ArrowRight : IMGS.ArrowLeft}
						style={{
							width: 20,
							height: 20,
							marginEnd: 10,
						}}
					/>
				</View>
			</View>
		</Pressable>
	);
};

export default ListItem;
