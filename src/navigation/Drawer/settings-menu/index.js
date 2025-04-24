import * as React from 'react';

import {View, Text, Pressable} from 'react-native';
import myColors from '../../../styles/myColors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../../utils/AsyncStorageKeys';
import submenuStyles from '../../../styles/submenuStyles';

function SettingsMenu(props) {
  const [subfocused, setSubFocused] = React.useState('Attribute Group');

  const handleSubmenu = subscreen => {
    props.handlePress();
    setSubFocused(subscreen);
    saveStorageData(subscreen);
    if (subscreen == 'Attribute Group') {
      props.navigation.navigate('Settings');
    } else {
      props.navigation.navigate(subscreen);
    }
  };

  React.useEffect(() => {
    //AsyncStorage.clear();
    readData();
  }, []);

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEYS.SettingSubmenu,
      );
      if (value !== null) {
        setSubFocused(value);
      } else {
        saveStorageData(subfocused);
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };
  const saveStorageData = async value => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.SettingSubmenu, value);
      //alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  return (
    <View style={submenuStyles.mainView}>
      <Pressable onPress={() => handleSubmenu('Attribute Group')}>
        <View
          style={[
            submenuStyles.menuView,
            {
              backgroundColor:
                subfocused == 'Attribute Group'
                  ? myColors.selected_background_light
                  : 'white',
            },
          ]}>
          <Text style={submenuStyles.menutxt}>Attribute Group</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => handleSubmenu('Attribute')}>
        <View
          style={[
            submenuStyles.menuView,
            {
              backgroundColor:
                subfocused == 'Attribute'
                  ? myColors.selected_background_light
                  : 'white',
            },
          ]}>
          <Text style={[subfocused.menutxt]}>Attribute</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default SettingsMenu;
