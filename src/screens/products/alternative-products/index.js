import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import giftstyles from '../../gifts/styles';
import commonstyles from '../../../styles/defultStyles';
import dropdownStyles from '../../../styles/dropdownStyles';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {products_data} from '../../../data/DummyData';

const AlternativeProducts = () => {
  const [dropdownOpened, setOpened] = React.useState(false);
  const itemList = React.useState(products_data);
  const [filteredList, setFilteredList] = React.useState(itemList);
  const [search, setSearch] = React.useState('');

  return (
    <View style={[giftstyles.container, {}]}>
      <ScrollView>
        <Text style={giftstyles.orderTxt}>Alternative Products </Text>
        <View style={commonstyles.flewRow}>
          <Text style={giftstyles.subheader}>
            Home / Products / Active Products / Alternative Products
          </Text>
        </View>
        <View style={giftstyles.formView}>
          <View style={commonstyles.mb16}>
            <Text style={giftstyles.productName}>Search</Text>
            <View
              style={[
                commonstyles.input,
                commonstyles.flewRow,
                {
                  marginTop: 0,
                },
              ]}>
              <View
                style={[
                  {
                    flex: 0.1,
                  },
                ]}>
                <Image
                  source={require('../../../../assets/images/search-light.png')}
                  style={{
                    width: 24,
                    height: 24,
                    marginVertical: 9,
                    marginLeft: 16,
                    marginRight: 16,
                  }}
                />
              </View>

              <View style={{flex: 0.8, marginLeft: 8}}>
                <TextInput
                  placeholder="Please enter 2 or more characters"
                  //onChangeText={filterBySearch}
                />
              </View>
              <Pressable onPress={() => setOpened(!dropdownOpened)}>
                <View style={{flex: 0.1}}>
                  <Image
                    source={
                      dropdownOpened
                        ? require('../../../../assets/images/dropup.png')
                        : require('../../../../assets/images/dropdown.png')
                    }
                    style={{
                      width: 7.18,
                      height: 4.59,
                      left: 9,
                      marginVertical: (42 - 4.59) / 2,
                      // marginLeft: 16,
                      // marginRight: 8,
                    }}
                  />
                </View>
              </Pressable>
            </View>
            {dropdownOpened && (
              // <ScrollView>
              <View style={commonstyles.dropdownStyle}>
                {products_data &&
                  products_data.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          height: 34,
                          paddingVertical: 8,
                          paddingHorizontal: 16,
                          borderRadius: 6,
                          margin: 8,
                        }}>
                        <Text
                          style={[
                            dropdownStyles.rowTextStyle,
                            {
                              marginLeft: 0,
                              marginTop: 0,
                            },
                          ]}>
                          {' '}
                          {item}
                        </Text>
                      </View>
                    );
                  })}
              </View>
              // </ScrollView>
            )}
            {/* <ScrollView> */}
            <View style={commonstyles.dropdownStyle}>
              {products_data &&
                products_data.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        height: 34,
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                        borderRadius: 6,
                        margin: 8,
                        flexDirection: 'row',
                      }}>
                      <View style={{flex: 0.9}}>
                        <Text
                          style={[
                            dropdownStyles.rowTextStyle,
                            {
                              marginLeft: 0,
                              marginTop: 0,
                            },
                          ]}>
                          {' '}
                          {item}
                        </Text>
                      </View>
                      <View style={{flex: 0.1}}>
                        <Image
                          style={{width: 20, height: 20, marginRight: 24}}
                          source={require('../../../../assets/images/delete_icon.png')}
                        />
                      </View>
                    </View>
                  );
                })}
            </View>
            {/* </ScrollView> */}
          </View>
          {/* <SaveButton handlePress={() => console.log('hello SaveButton')} /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default AlternativeProducts;
