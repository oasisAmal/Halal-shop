import {createStackNavigator} from '@react-navigation/stack';
import Reports from '../../screens/reports';
import ViewReport from '../../screens/reports/view-report';
import Wallet from '../../screens/reports/wallet';
import {connect} from 'react-redux';
const Stack = createStackNavigator();

function ReportStack(props) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					height: 0,
				},
			}}>
			<Stack.Screen
				name="ReportsMain"
				component={Reports}
				options={{
					headerStyle: {height: 70},
					//headerShown: false,
				}}
			/>
			<Stack.Screen
				name="ViewReport"
				component={ViewReport}
				options={{
					headerStyle: {height: 70},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Wallet"
				component={Wallet}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
		</Stack.Navigator>
	);
}
const mapStateToProps = state => {
	return {
		enableBlur: state.enableBlur,
	};
};

export default ReportStack = connect(mapStateToProps)(ReportStack);
