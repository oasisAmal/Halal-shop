import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';
const Stack = createStackNavigator();
import ChooseCountry from '../../screens/auth/ChooseCountry';

function CountyStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 0,
        },
      }}>
      <Stack.Screen
        name="ChooseCountry"
        component={ChooseCountry}
        options={
          {
            //headerShown: false,
          }
        }
      />
    </Stack.Navigator>
  );
}
const mapStateToProps = state => {
  return {
    enableBlur: state.enableBlur,
  };
};

export default CountyStack = connect(mapStateToProps)(CountyStack);
