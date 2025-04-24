import React, {Component} from 'react';
import {View} from 'react-native';
import ItemComponent from '../products/ItemComponent';

export default class SettingsCard extends Component {
  render() {
    let bgColor = 'white';
    return (
      <View
        key={this.props.index}
        style={{
          elevation: 0,
          borderColor: 'white',
          borderRadius: 8,
        }}>
        <View>
          <View style={{backgroundColor: bgColor, marginBottom: 16}}>
            <View style={{flex: 1, marginTop: 16}}>
              <ItemComponent
                mainText1={'ID'}
                mainText2={'Name'}
                subText1={'202669'}
                subText2={'Boury'}
              />
              <ItemComponent
                mainText1={'Action'}
                mainText2={''}
                subText1={'0'}
                subText2={''}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
