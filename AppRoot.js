import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar, SafeAreaView  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./components/drawer";
import { theme_color } from "./config";
import { Provider } from 'react-redux';

import configureStore from './src/Redux/configureStore';

export default function AppRoot() {
  return (
    <NavigationContainer>
          <MyDrawer />
    </NavigationContainer>
  );
}
