import React from 'react';
import {
  View,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import {strings} from '../../i18n';
import {theme_color} from '../../mutils';

const SearchBarNew = props => {
  const {setModalVisible, openFilter, setSearch, search, handleSearch} = props;
  return (
    <>
      <View style={styles.row}>
        <Pressable onPress={() => handleSearch()}>
          <View style={styles.filterView}>
            <Image
              source={require('../../../assets/images/search.png')}
              style={styles.filterImg}
            />
          </View>
        </Pressable>
        <View style={styles.inputView}>
          <TextInput
            placeholder={strings('Type to search')}
            style={styles.input}
            onChangeText={text => setSearch(text)}
            value={search}
          />
          <Pressable
            onPress={() => handleSearch()}
            style={styles.pressableItem}>
            {/* <Image
              source={require('../../../assets/images/search.png')}
              style={styles.searchImg}
            /> */}
          </Pressable>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  filterView: {
    //flex: 0.1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginRight: 8,
    //marginLeft:16,
    marginBottom: 8,
    borderRadius: 6,
    // borderColor: theme_color,
    // borderWidth: 1,
  },
  filterImg: {width: 21, height: 18, alignSelf: 'center'},
  inputView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 6,
    marginBottom: 8,
    flexDirection: 'row',
    //marginRight: 16,
  },
  input: {paddingVertical: 10.5, paddingLeft: 20},
  pressableItem: {
    right: 0,
    top: 0,
    position: 'absolute',
    borderWidth: 1,
  },
  searchImg: {
    width: 24,
    height: 24,
    right: 16,
    top: 12,
    position: 'absolute',
    borderWidth: 1,
  },
  row: {
    borderRadius: 6,
    flexDirection: 'row',
  },
});
export default SearchBarNew;
