import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import {theme_color} from '../../mutils';
import {startPointVerticallyCentered} from '../utils/functions/commonFunctions';
import DecisionButtonsSmall from '../decision-buttons-small';
import modalStyles from '../../styles/modalStyles';
import inputStyles from '../../styles/inputStyles';
import SaveButton from '../save-button';
import commonstyles from '../../styles/defultStyles';

const OrderCreated = props => {
	return (
		<View style={{marginHorizontal: 16, padding: 12, flex: 1}}>
			<Modal animationType="slide" transparent={true} visible={props.modalOrderCreatedVisible} onRequestClose={() => {}}>
				<View
					style={{
						marginTop: startPointVerticallyCentered(224),
						marginHorizontal: 16,
					}}>
					<View style={styles.modalView}>
						<View style={{flexDirection: 'row'}}>
							<View style={{flex: 0.1}}>
								<Image
									source={require('../../../assets/images/order-received.png')}
									style={{
										width: 24,
										height: 24,
									}}
								/>
							</View>
							<View style={{flex: 0.7}}>
								<Text
									style={{
										fontFamily: 'Inter-Medium',
										fontSize: 18,
										//: 600,
										color: '#1E293B',
										lineHeight: 27,
										marginLeft: 0,
										textAlign: 'left',
									}}>
									New Order
								</Text>
							</View>
							<View style={{flex: 0.2, flexDirection: 'row-reverse'}}></View>
						</View>
						<View
							style={{
								marginTop: 24,
								marginBottom: 52,
								marginHorizontal: 16,
								alignSelf: 'flex-start',
							}}>
							<Text style={inputStyles.name}>A New Order is Received.</Text>
						</View>

						{/* <DecisionButtonsSmall
              bgBackBtn="#21DB74"
              borderColor="transparent"
              txtClr="white"
              btnOk="View"
              handleOk={props.handleOk}
            /> */}
						<View
							style={[
								{
									width: '100%',
									backgroundColor: theme_color,

									//height: 45,
									paddingVertical: 12,
									paddingHorizontal: 24,
									borderRadius: 6,
									marginTop: 8,
									marginBottom: -16,
									marginHorizontal: -16,
								},
							]}>
							<Pressable onPress={() => props.handleOk()}>
								<Text
									style={[
										commonstyles.longBtnTxt,
										{
											fontSize: 14,
										},
									]}>
									Done
								</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	btn: {
		width: 140,
		//(Dimensions.get('window').width - 80)/2 ,
		//backgroundColor:theme_color,
		//marginLeft: 8,marginRight: 8,
		paddingVertical: 12,
		height: 45,
		paddingHorizontal: 24,
		borderRadius: 6,
		marginVertical: 8,
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
		paddingVertical: 35,
		paddingHorizontal: 16,
		alignItems: 'center',
		shadowColor: theme_color,
		shadowOffset: {
			//   width: 0,
			//   height: 2,
		},
		shadowOpacity: 1,
		//shadowRadius: 4,
		elevation: 4,
		//width: (screenwidth-32),
		//height: 230,
	},
});

export default OrderCreated;
