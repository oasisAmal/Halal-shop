import {createStackNavigator} from '@react-navigation/stack';
import Orders from '../../components/orders';

import {connect} from 'react-redux';
import CreateOrder from '../../components/orders/CreateOrder';
const Stack = createStackNavigator();
import OrderDetails from '../../components/orders/details';
import TrackOrder from '../../screens/track-order';
import OrderInvoicePDF from '../../components/orders/details/OrderInvoicePDF';

function OrderStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 0,
        },
      }}>
      <Stack.Screen
        name="OrdersMain"
        component={Orders}
        options={
          {
            //headerShown: false,
          }
        }
      />
      <Stack.Screen
        name="CreateOrder"
        component={CreateOrder}
        options={{
          headerStyle: {
            opacity: props.enableBlur ? 0.2 : 1,
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="TrackOrder"
        component={TrackOrder}
        options={{
          headerStyle: {
            opacity: props.enableBlur ? 0.2 : 1,
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{
          headerStyle: {
            opacity: props.enableBlur ? 0.2 : 1,
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="OrderInvoicePDF"
        component={OrderInvoicePDF}
        options={{
          headerStyle: {
            opacity: props.enableBlur ? 0.2 : 1,
          },
          headerTitle: '',
        }}
      />

      {/* <Drawer.Screen name="TrackOrder" component={TrackOrder} /> */}
    </Stack.Navigator>
  );
}
const mapStateToProps = state => {
  return {
    enableBlur: state.enableBlur,
  };
};

export default OrderStack = connect(mapStateToProps)(OrderStack);
