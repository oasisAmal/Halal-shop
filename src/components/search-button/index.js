import React from 'react';
import {View, Image, TextInput} from 'react-native';

const SearchButton = props => {
  return (
    // <Pressable onPress={() => props.handlePress()}>
    <View
      style={{
        flex: 0.9,
        backgroundColor: 'white',
        borderRadius: 6,
        marginBottom: 8,
        flexDirection: 'row',
      }}>
      {/* <Text style={{textAlign:'center', paddingVertical: 7  }}> Type to search  </Text>  */}
      <TextInput
        placeholder="Type to search"
        style={{paddingVertical: 10.5, paddingLeft: 20, borderWidth: 1}}
      />
      <Image
        source={require('../../../assets/images/search.png')}
        style={{
          width: 24,
          height: 24,
          right: 16,
          top: 12,
          position: 'absolute',
        }}
      />
    </View>
    // </Pressable>
  );
};

export default SearchButton;
