import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';
const Stack = createStackNavigator();
import EditAccount from '../../screens/edit-account';
import GeneralData from '../../screens/edit-account/general-data';
import Regions from '../../screens/edit-account/regions';
import ShopBranches from '../../screens/edit-account/shop-branches';
import CreateBranch from '../../screens/edit-account/shop-branches/CreateBranch';
import SpecialProducts from '../../screens/edit-account/special-products';
import RatingAndComments from '../../screens/edit-account/rating-and-comments';
import MaximumOrders from '../../screens/edit-account/maximum-orders';
import SMS from '../../screens/edit-account/sms';

function EditAccountStack(props) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					height: 0,
				},
			}}>
			<Stack.Screen
				name="EditAccountMain"
				component={EditAccount}
				options={{
					headerStyle: {height: 70},
				}}
			/>
			<Stack.Screen
				name="General Data"
				component={GeneralData}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Regions"
				component={Regions}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Shop Branches"
				component={ShopBranches}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Create Branch"
				component={CreateBranch}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Special Products"
				component={SpecialProducts}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Rating and Comments"
				component={RatingAndComments}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Maximum Orders"
				component={MaximumOrders}
				options={{
					headerStyle: {
						opacity: props.enableBlur ? 0.2 : 1,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Notification content"
				component={SMS}
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

export default EditAccountStack = connect(mapStateToProps)(EditAccountStack);
