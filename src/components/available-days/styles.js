import {StyleSheet} from 'react-native';
import {myfonts} from '../../assets/Fonts';

const daystyles = StyleSheet.create({
	label: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		lineHeight: 15,
		textAlign: 'left',
		color: '#64748B',
	},
	mainview: {
		flexDirection: 'row',
		// width: 101.67,
		flex: 1 / 3,
		height: 32,
		padding: 8,
		borderRadius: 6,
		borderWidth: 1,
		margin: 6,
		borderColor: '#E2E8F0',
	},
	img: {
		width: 20,
		height: 20,
		marginRight: 8,
		marginTop: -2,
	},
});
export default daystyles;
