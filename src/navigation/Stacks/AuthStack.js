import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';
const Stack = createStackNavigator();
import Login from '../../screens/auth/Login';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import OTPVerification from '../../screens/auth/OTPVerification';
import ResetPassword from '../../screens/auth/ResetPassword';

function AuthStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 0,
        },
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={
          {
            //headerShown: false,
          }
        }
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerStyle: {
            opacity: props.enableBlur ? 0.2 : 1,
            borderBottomColor: 'red',
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerification}
        options={{
          headerStyle: {
            opacity: props.enableBlur ? 0.2 : 1,
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
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

export default AuthStack = connect(mapStateToProps)(AuthStack);
