import React from 'react';
import {View, Image, Text} from 'react-native';
import giftstyles from '../gifts/styles';
import SaveButton from '../../components/save-button';
import {ScrollView} from 'react-native-gesture-handler';
import ad_styles from './styles';

const PaymentSuccess = props => {
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
          <Text style={ad_styles.approvedTxt}>Payment Confirmed</Text>
          <Text style={ad_styles.subTxt}>
            Thank you your payment has been successfully done.
          </Text>
        </View>
      </View>
      <View style={{paddingBottom: 67}}>
        <SaveButton
          label="Done"
          handlePress={() => props.navigation.navigate('AdvertisementMain')}
        />
      </View>
    </View>
  );
};

export default PaymentSuccess;
