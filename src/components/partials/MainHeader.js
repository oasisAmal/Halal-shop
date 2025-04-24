import React from 'react';
import {View, Text, Image, Pressable, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {strings} from '../../i18n';
import {connect} from 'react-redux';
import {toggleBlur} from '../../store/reducers';

let MainHeader = props => {
	return (
		<View
			activeOpacity={0.5}
			style={{
				flexDirection: 'row',
				padding: 16,
				backgroundColor: 'white',
				opacity: props.enableBlur ? 0.2 : 1,
				marginHorizontal: props.mh ? props.mh : 0,
			}}>
			<View
				style={
					{
						//marginRight: 4
						//flex: 0.2,
					}
				}>
				<Pressable
				//onPress={() => props.toggleBlur('hi')}
				>
					<Image
						source={require('../../../assets/images/Logo.png')}
						style={{
							width: 40,
							height: 40,
							resizeMode: 'contain',
						}}
					/>
				</Pressable>
			</View>
			<View
				style={{
					//flex: 0.5,
					right: 4,
				}}>
				<Text
					style={{
						//: 700,
						fontSize: 20,
						// fontFamily: 'Roboto',
						color: '#03050D',
						//textAlign:'left',
						textAlignVertical: 'bottom',
						marginVertical: 8.5,
						marginLeft: 12,
					}}>
					{I18nManager.isRTL ? 'حلال' : 'Halal'}
				</Text>
			</View>
			<View
				style={
					{
						//flex: 0.2
					}
				}></View>
			<View
				style={{
					//flex: 0.1,
					right: 16,
					marginVertical: 20,
					position: 'absolute',
				}}>
				<Icon
					name="menu-outline"
					size={32}
					color="black"
					onPress={() => props.navigation.openDrawer()}
					style={{
						color: 'black',
					}}
				/>
			</View>
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

export default MainHeader = connect(mapStateToProps, mapDispatchToProps)(MainHeader);
