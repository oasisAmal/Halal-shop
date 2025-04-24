import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainStackNavigation from './MainStackNavigation';

const ApplicationContainer = () => {
  //AsyncStorage.getItem(ASYNC_STORAGE_KEYS.DarkMode);

  return <MainStackNavigation />;
};

export default ApplicationContainer;
