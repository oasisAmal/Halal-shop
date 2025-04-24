import {PixelRatio, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	drawerContent: {
		//marginHorizontal: 24,
		marginTop: 16,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 30,
		marginBottom: -20,
	},
	menuTxt: {
		fontSize: 20,
		//: 600,
		color: '#1E293B',
		top: -2,
		right: 24,
		position: 'absolute',
		marginRight: 28,
	},
	closeImg: {
		width: PixelRatio.getPixelSizeForLayoutSize(10.5),
		height: PixelRatio.getPixelSizeForLayoutSize(10.5),
		marginTop: 0,
		marginLeft: 40,
		//marginRight: 30.75
	},
	hr: {
		borderBottomColor: '#F5F5F5',
		borderBottomWidth: 1,
		marginTop: 8,
		marginBottom: 48,
		marginRight: -24,
		marginLeft: -16,
	},
	drawerItem: {
		flexDirection: 'row',
		borderRadius: 6,
		height: 56,
		paddingTop: 16,
		paddingRight: 12,
		paddingLeft: 12,
		borderColor: '#CBD5E1',
		borderWidth: 1,
		marginLeft: 24,
		marginVertical: -8,
	},
	itemImg: {
		width: 24,
		height: 24,
	},
	dropdownImg: {
		position: 'absolute',
		width: 7.18,
		height: 4.59,
		top: 10,
		right: 8.41,
	},
});

export default styles;
