import {StyleSheet} from 'react-native';
import {theme_color} from '../../mutils';

const styles = StyleSheet.create({
	mainView: {
		backgroundColor: theme_color,
		height: 48,
		// paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
		marginBottom: 8,
		alignItems: 'center',
		justifyContent: 'center',
		//elevation: 6,
	},
});
export default styles;
