import React from 'react';
import {View, Image, Text} from 'react-native';
import giftstyles from '../gifts/styles';
import SaveButton from '../../components/save-button';
import {ScrollView} from 'react-native-gesture-handler';
import ad_styles from './styles';

const PaymentFailed = props => {
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
          <View>
            <Image
              style={ad_styles.failedImg}
              source={require('../../../assets/images/failed.png')}
            />
          </View>
          <Text style={ad_styles.approvedTxt}>Payment Failed</Text>
          <Text style={ad_styles.subTxt}>
            Your payment was not successfully processed.
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

export default PaymentFailed;
