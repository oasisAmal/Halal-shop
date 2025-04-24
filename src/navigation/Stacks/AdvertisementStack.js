import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Advertisements from '../../screens/advertisements';
import CreateAd from '../../screens/advertisements/CreateAd';
import Pending from '../../screens/advertisements/Pending';
import Approved from '../../screens/advertisements/Approved';
import PaymentPage from '../../screens/advertisements/PaymentPage';
import CheckDetails from '../../screens/advertisements/CheckDetails';
import PaymentSuccess from '../../screens/advertisements/PaymentSuccess';
import PaymentFailed from '../../screens/advertisements/PaymentFailed';
import OnlinePayment from '../../screens/advertisements/OnlinePayment';

const Stack = createStackNavigator();

function AdvertisementStack(props) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					height: 0,
				},
			}}>
			<Stack.Screen
				name="AdvertisementMain"
				component={Advertisements}
				options={{
					headerTitle: '',
					headerStyle: {height: 70},
				}}
			/>
			<Stack.Screen
				name="CheckDetails"
				component={CheckDetails}
				options={{
					headerStyle: {height: 70},
					headerTitle: '',
				}}
			/>

			<Stack.Screen
				name="CreateAd"
				component={CreateAd}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
						height: 70,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Pending"
				component={Pending}
				options={{
					headerShown: false,
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
						height: 70,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Approved"
				component={Approved}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="PaymentSuccess"
				component={PaymentSuccess}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="PaymentFailed"
				component={PaymentFailed}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="PaymentPage"
				component={PaymentPage}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="OnlinePayment"
				component={OnlinePayment}
				options={{
					headerShown: true,
					headerStyle: {height: 70},
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

export default AdvertisementStack = connect(mapStateToProps)(AdvertisementStack);
