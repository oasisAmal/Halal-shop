import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Chat from '../../screens/chat';
import Language from '../../components/language';
import Logout from '../../screens/logout';
import MainHeader from '../../components/partials/MainHeader';
import AdvertisementStack from '../Stacks/AdvertisementStack';
import CustomDrawerContent from './CustomDrawerContent';
import NeedApprovalProducts from '../../screens/need-approval-products';
import {drawerWidth} from '../../mutils/index';
import OrderStack from '../Stacks/OrderStack';
import ProductStack from '../Stacks/ProductStack';
import ReportStack from '../Stacks/ReportStack';
import EditAccountStack from '../Stacks/EditAccountStack';
import Attribute from '../../screens/settings/Attribute';
import Settings from '../../screens/settings';
import {I18nManager} from 'react-native';
const Drawer = createDrawerNavigator();

function MyDrawer(props) {
	return (
		<Drawer.Navigator
			drawerContent={props => <CustomDrawerContent {...props} />}
			//defaultStatus="open"
			detachInactiveScreens={true}
			screenOptions={{
				drawerPosition: I18nManager.isRTL ? 'right' : 'left',
				header: props => {
					return <MainHeader {...props} />;
				},
				drawerStyle: {
					width: drawerWidth,
				},
				drawerActiveBackgroundColor: 'white',
			}}>
			<Drawer.Screen
				name="Orders"
				component={OrderStack}
				options={{
					headerShown: false,
				}}
			/>
			<Drawer.Screen
				name="Products"
				component={ProductStack}
				options={{
					headerShown: false,
				}}
			/>

			<Drawer.Screen
				name="Reports"
				component={ReportStack}
				options={{
					headerShown: false,
				}}
			/>
			<Drawer.Screen
				name="Edit Shop Details"
				component={EditAccountStack}
				options={{
					headerShown: false,
				}}
			/>
			<Drawer.Screen
				name="Settings"
				component={Settings}
				options={{
					headerShown: false,
				}}
			/>
			<Drawer.Screen name="Language" component={Language} />
			<Drawer.Screen
				name="Advertisement"
				component={AdvertisementStack}
				options={{
					headerShown: false,
				}}
			/>

			<Drawer.Screen
				name="NeedApprovalProducts"
				component={NeedApprovalProducts}
				options={{
					headerShown: false,
				}}
			/>
			<Drawer.Screen
				name="Attribute"
				component={Attribute}
				options={{
					headerShown: false,
				}}
			/>

			<Drawer.Screen name="Chat with Admin" component={Chat} />
			<Drawer.Screen
				name="Logout"
				component={Logout}
				//setAuthenticated={props.setAuthenticated}
			/>
		</Drawer.Navigator>
	);
}

export default MyDrawer;
