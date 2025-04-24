import * as React from 'react';

import {View, Text, Pressable, I18nManager} from 'react-native';
import myColors from '../../../styles/myColors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../../utils/AsyncStorageKeys';
import styles from '../../../styles/submenuStyles';
import {setAppLanguage} from '../../../utils/APIKit';
import RNRestart from 'react-native-restart';
import {connect} from 'react-redux';
import {setToken, changeLanguage} from '../../../store/reducers';
import {strings} from '../../../i18n';
// import I18n from 'i18n-js';
import I18n from 'react-native-i18n';
function LanguageMenu(props) {
  const [subfocused, setSubFocused] = React.useState(strings('English'));
  const [currentLang, setCurrentLang] = React.useState('en');

  const handleSubmenu = subscreen => {
    //alert('subscreen is ' + subscreen + ' from handleSubmenu');
    props.handlePress('Language');
    setSubFocused(subscreen);

    let lang = strings(subscreen) == strings('English') ? 'en' : 'ar';
    setCurrentLang(lang);
    onSelectLanguage(lang);
  };

  const onSelectLanguage = async lang => {
    if (lang !== currentLang) {
      saveLocaleToStorage(lang);

      if (lang === 'ar') {
        I18nManager.forceRTL(true);
        I18nManager.allowRTL(true);
      } else {
        I18nManager.forceRTL(false);
        I18nManager.allowRTL(false);
      }

      I18n.locale = lang;
      //moment.locale(lang);
      RNRestart.Restart();
    }
  };

  const languageRestart = async () => {
    //changing language based on what was chosen
    console.log(I18n.locale + '  after changing the language  ');
    await RNRestart.Restart();
  };

  React.useEffect(() => {
    //AsyncStorage.clear();
    readData();
  }, []);

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEYS.CurrentLocale,
      );
      if (value !== null) {
        //alert('CurrentLocale is ' + value);
        setCurrentLang(value);
        //setSubFocused(value == 'en' ? strings('English') : strings('Arabic'));
      } else {
        //alert('subfocused from read data ' + subfocused);
        setCurrentLang('en');
        saveLocaleToStorage('en');
      }
    } catch (e) {
      alert('Failed to fetch the language from storage');
    }
  };

  const saveLocaleToStorage = async value => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.CurrentLocale, value);
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };
  return (
    <View style={styles.mainView}>
      <Pressable onPress={() => handleSubmenu('English')}>
        <View
          style={[
            styles.menuView,
            {
              backgroundColor:
                currentLang == 'en'
                  ? myColors.selected_background_light
                  : 'white',
            },
          ]}>
          <Text style={styles.menutxt}>{strings('English')} </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => handleSubmenu('Arabic')}>
        <View
          style={[
            styles.menuView,
            {
              backgroundColor:
                currentLang == 'ar'
                  ? myColors.selected_background_light
                  : 'white',
            },
          ]}>
          <Text style={[styles.menutxt]}>{strings('Arabic')} </Text>
        </View>
      </Pressable>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    //enableBlur: state.enableBlur,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setToken: token => dispatch(setToken(token)),
  };
}

export default LanguageMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageMenu);
