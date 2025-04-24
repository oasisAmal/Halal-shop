import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar, SafeAreaView,PermissionsAndroid,Platform } from "react-native";
import { theme_color } from "./config";
import MainStackNavigation from "./src/navigation/MainStackNavigation";

import store from "./src/store/create_store";
import { Provider } from 'react-redux';
 
import { Root } from "native-base"; 
import Main from "./src/screens/auth/Main";
import { notificationPermission } from "./src/utils/Permissions";
import messaging from "@react-native-firebase/messaging";

import {SheetProvider} from 'react-native-actions-sheet';
import './src/components/_ActionSheets/Sheets';

import Toast from 'react-native-toast-message';
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { useNavigation } from "@react-navigation/native";
export default function App() {
 // const navigation = useNavigation();
  const [granted, setGranted]= React.useState(false);

 
 
//AsyncStorage.clear()




  return (
<Root style={{ backgroundColor:'white'}}>
  <Provider store={store}>
    <SheetProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar  backgroundColor={theme_color} />
        <MainStackNavigation/> 
        {/* <Main/> */}
        <Toast />
      </SafeAreaView>
    </SheetProvider>
  </Provider>
 </Root>

  );
}
