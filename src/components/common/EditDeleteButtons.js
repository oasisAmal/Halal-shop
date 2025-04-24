import React from 'react';
import {Image, View, Pressable, StyleSheet} from 'react-native';
import myColors from '../../styles/myColors';
import commonstyles from '../../styles/defultStyles';
import DeleteIcon from './DeleteIcon';

const EditDeleteButtons = props => {
	const {bgColor, enableButtons, handleEdit, handleDelete, deleteProduct} = props;
	return (
		<View
			style={[
				{
					backgroundColor: bgColor ? bgColor : myColors.clrWhite,
				},
				styles.rowStyle,
			]}>
			<View style={commonstyles.flex50}></View>
			<View style={styles.flexRowReverse50}>
				{enableButtons && (
					<>
						<Pressable onPress={() => (handleDelete ? handleDelete() : '')}>
							<DeleteIcon />
						</Pressable>
						<Pressable onPress={() => (handleEdit ? handleEdit() : '')}>
							<Image
								source={require('../../../assets/images/Pencil_Edit.png')}
								style={[
									{
										marginRight: 6,
									},
									styles.imgSize,
								]}
							/>
						</Pressable>
					</>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	rowStyle: {
		flex: 1,
		padding: 10,
		flexDirection: 'row',
	},
	flexRowReverse50: {flexDirection: 'row-reverse', flex: 0.5},
	imgSize: {
		width: 28,
		height: 28,
	},
});
export default EditDeleteButtons;
