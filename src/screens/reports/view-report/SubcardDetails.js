import React, {Component} from 'react';
import {View} from 'react-native';
import ItemComponent from '../ItemComponent';
import cardStyles from '../../../styles/cardStyles';

export default class SubcardDetails extends Component {
  render() {
    let bgColor = 'white';
    return (
      <View key={this.props.index} style={cardStyles.container}>
        <View>
          <View style={[{backgroundColor: bgColor}, cardStyles.view1]}></View>

          <View style={{backgroundColor: bgColor}}>
            <View style={{flex: 1}}>
              <ItemComponent
                mainText1={'ID'}
                mainText2={'User'}
                subText1={'202669'}
                subText2={'Anfoshy'}
              />
              <ItemComponent
                mainText1={'Mobile'}
                mainText2={'Number of Orders'}
                subText1={'0556389045'}
                subText2={'12'}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
