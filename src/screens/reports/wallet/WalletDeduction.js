import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View, TextInput, Image} from 'react-native';
import commonstyles from '../../../styles/defultStyles';
import {theme_color} from '../../../mutils';
import DecisionButtonsSmall from '../../../components/decision-buttons-small';

const WalletDeduction = props => {
	return (
		<View style={{marginHorizontal: 16, padding: 12, flex: 1}}>
			<Modal animationType="slide" transparent={true} visible={props.modalVisible} onRequestClose={() => {}}>
				<View style={{marginTop: 150, marginHorizontal: 16}}>
					<View style={styles.modalView}>
						<View style={{flexDirection: 'row'}}>
							<View style={{flex: 0.8}}>
								<Text
									style={{
										fontFamily: 'Inter-Medium',
										fontSize: 18,
										//: 600,
										color: '#1E293B',
										lineHeight: 27,
										marginLeft: 8,
										//textAlign:'left',
										// letterSpacing: 0,
										textAlign: 'left',
									}}>
									Wallet Deduction
								</Text>
							</View>
							<View style={{flex: 0.2, flexDirection: 'row-reverse'}}>
								<Pressable onPress={() => props.toggleModal(false)}>
									<Image
										source={require('../../../../assets/images/close.png')}
										style={{
											width: 24,
											height: 24,
											left: 6.75,
										}}
									/>
								</Pressable>
							</View>
						</View>
						<View style={[commonstyles.mh16, {marginTop: 24}]}>
							<Text style={commonstyles.mainTxt}>Discount Value </Text>
							<TextInput style={commonstyles.input} />
						</View>
						<DecisionButtonsSmall handlePress={() => props.toggleModal(false)} btnOk="Deduct" />
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	btn: {
		width: '100%',
		paddingVertical: 12,
		height: 45,
		//paddingHorizontal: 24,
		borderRadius: 6,
		//marginVertical: 8,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
		width: 361,
	},
	modalView: {
		// minHeight: 434,
		// margin: 20,
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 35,
		alignItems: 'center',
		shadowColor: theme_color,
		shadowOffset: {
			//   width: 0,
			//   height: 2,
		},
		shadowOpacity: 1,
		//shadowRadius: 4,
		elevation: 4,
		marginBottom: 40,
	},
});

export default WalletDeduction;
