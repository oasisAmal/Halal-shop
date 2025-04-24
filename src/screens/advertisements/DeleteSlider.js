import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import DecisionButtonsSmall from '../../components/decision-buttons-small';
import CloseImage from '../../components/common/CloseImage';
import modalStyles from '../../styles/modalStyles';

const DeleteSlider = props => {
	const {handlePress = () => {}, handleOk = () => {}} = props;
	return (
		<View style={{marginHorizontal: 16, padding: 12, flex: 1}}>
			<Modal animationType="slide" transparent={true} visible={props.modalVisible} onRequestClose={() => {}}>
				<View style={{marginHorizontal: 16, height: '100%', alignItems: 'center', justifyContent: 'center'}}>
					<View style={styles.modalView}>
						<View
							style={{
								flexDirection: 'row',
								marginBottom: 16,
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<View style={{flex: 1}}>
								<Image
									style={{width: 32, height: 32}}
									source={require('../../../assets/images/delete-popup-icon.png')}
								/>
							</View>
							<Pressable onPress={handlePress}>
								<CloseImage />
							</Pressable>
						</View>

						<Text style={modalStyles.deleteTxt}>Are you sure to delete this Slider?</Text>
						<DecisionButtonsSmall handlePress={handlePress} handleOk={handleOk} btnOk="Yes" btnBack="Cancel" />
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	modalView: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 20,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
});

export default DeleteSlider;
