import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import myColors from '../../styles/myColors';
import DeleteIcon from '../../components/common/DeleteIcon';
import ad_styles from './styles';
import CardType from './CardType';
import DeleteSlider from './DeleteSlider';
import {connect} from 'react-redux';
import {toggleBlur} from '../../store/reducers';
import {DELETE_AD} from '../../services/AdsService';

let SliderCard = props => {
	const {item, onItemDelete} = props;

	const [openDeletePopup, setOpenDeletePopup] = React.useState(false);

	const handlePress = () => {
		setOpenDeletePopup(!openDeletePopup);
		props.toggleBlur(!openDeletePopup);
		props.setEnableBlur(!openDeletePopup);
	};

	const handleOk = () => {
		DELETE_AD(item.id, () => {
			if (onItemDelete) onItemDelete();
		});

		setOpenDeletePopup(!openDeletePopup);
		props.toggleBlur(!openDeletePopup);
		props.setEnableBlur(!openDeletePopup);
	};

	return (
		<View>
			<View style={{flexDirection: 'row', marginBottom: 16}}>
				<View style={{flex: 0.4}}>
					<Image
						source={{uri: item.image}}
						style={{
							width: 142,
							height: 103,
							borderRadius: 6,
						}}
					/>
				</View>
				<View
					style={{
						flex: 0.6,
						backgroundColor: myColors.slate50,
						paddingVertical: 8,
						paddingLeft: 8,
					}}>
					<View style={{flexDirection: 'row'}}>
						<View style={{flex: 0.5}}>
							<Text style={ad_styles.title}>{item.place}</Text>
						</View>
						<View style={{flex: 0.5, flexDirection: 'row-reverse'}}>
							<Pressable onPress={() => handlePress()}>
								<DeleteIcon />
							</Pressable>
						</View>
					</View>
					<CardType item={item} navigation={props.navigation} />
				</View>
			</View>
			{openDeletePopup && <DeleteSlider handlePress={handlePress} handleOk={handleOk} />}
		</View>
	);
};

const mapStateToProps = state => {
	return {
		enableBlur: state.enableBlur,
	};
};
function mapDispatchToProps(dispatch) {
	return {
		toggleBlur: cart_item => dispatch(toggleBlur(cart_item)),
	};
}

export default SliderCard = connect(mapStateToProps, mapDispatchToProps)(SliderCard);
