import {createStackNavigator} from '@react-navigation/stack';
import EditProduct from '../../screens/edit-product';
import EditProductDetails from '../../screens/edit-product-details';
import Products from '../../screens/products';
import NeedApprovalProducts from '../../screens/need-approval-products';
import Gifts from '../../screens/gifts';
import SuggestedProducts from '../../screens/products/suggested-products';
import SpecialSection from '../../screens/products/special-section';
import AlternativeProducts from '../../screens/products/alternative-products';
import CreateProduct from '../../screens/create-product';

const Stack = createStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 0,
        },
      }}>
      <Stack.Screen
        name="ActiveProducts"
        component={Products}
        options={
          {
            //headerShown: false,
          }
        }
      />
      <Stack.Screen
        name="CreateProduct"
        component={CreateProduct}
        options={{
          //headerShown: false,
          headerStyle: {
            //marginTop: 10,
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProduct}
        options={{
          //headerShown: false,
          headerStyle: {
            //marginTop: 10,
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Details"
        component={EditProductDetails}
        options={{
          //headerShown: false,
          headerStyle: {
            //marginTop: 10,
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="NeedApprovalProducts"
        component={NeedApprovalProducts}
        options={{
          //headerShown: false,
          headerStyle: {
            //marginTop: 10,
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Gifts"
        component={Gifts}
        options={{
          headerStyle: {},
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Suggested Products"
        component={SuggestedProducts}
        options={{
          headerStyle: {},
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Alternative Products"
        component={AlternativeProducts}
        options={{
          headerStyle: {},
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Special Sections"
        component={SpecialSection}
        options={{
          headerStyle: {},
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
}
export default ProductStack;
