import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import CustomDropdown from '../utils/CustomDropdown';
import {sort_data} from '../../data/DummyData';
import styles from './styles';
import DecisionButtons from '../decision-buttons';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {myfonts} from '../../assets/Fonts';
import myColors from '../../styles/myColors';

const ProductSort = props => {
	return (
		<Modal animationType="slide" transparent={true} onRequestClose={() => {}}>
			<View style={styles.modalView}>
				<View style={styles.title}>
					<View style={{flex: 0.85}}>
						<Text style={styles.driverTxt}> Sort </Text>
					</View>
					<View>
						<Pressable onPress={() => props.handlePress(false)}>
							<Image source={require('../../../assets/images/close.png')} style={styles.closeImg} />
						</Pressable>
					</View>
				</View>
				<View
					style={{
						padding: 8,
						borderRadius: 8,
						borderWidth: 1,
						margin: 8,
						// width: Fixed (328px)
						height: 510,
						borderColor: '#E2E8F0',
					}}>
					<View style={{flex: 1}}>
						<ScrollView>
							{sort_data &&
								sort_data.map((item, index) => {
									return (
										<Text
											key={index}
											style={{
												fontFamily: myfonts.Regular,
												fontSize: 12,
												//: 400,
												textAlign: 'left',
												color: myColors.slate600,
											}}>
											{' '}
											{item}{' '}
										</Text>
									);
								})}
						</ScrollView>
					</View>
				</View>
				<DecisionButtons btnOk="Sort" btnBack="Back" handlePress={() => props.handlePress()} />
			</View>
		</Modal>
	);
};

export default ProductSort;
