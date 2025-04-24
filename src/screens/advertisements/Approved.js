import React from 'react';
import {View, Image, Text} from 'react-native';
import giftstyles from '../gifts/styles';
import SaveButton from '../../components/save-button';
import {ScrollView} from 'react-native-gesture-handler';
import ad_styles from './styles';

const Approved = props => {
  const [enableBlur, setEnableBlur] = React.useState(false);
  return (
    <View
      style={[
        giftstyles.container,
        {
          opacity: enableBlur ? 0.2 : 1,
        },
      ]}>
      <View>
        <View style={{}}>
          <View style={ad_styles.successGreenImg}>
            <Image
              source={require('../../../assets/images/success-green.png')}
            />
          </View>
          <Text style={ad_styles.approvedTxt}>Approved</Text>
          <Text style={ad_styles.subTxt}>Slider and Popup add is Approved</Text>
        </View>
      </View>
      <View style={{paddingBottom: 67}}>
        <SaveButton label="Done" handlePress={() => alert('done')} />
      </View>
    </View>
  );
};

export default Approved;
