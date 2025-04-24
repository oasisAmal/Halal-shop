import React from 'react';
import {View, Text, TextInput} from 'react-native';
import giftstyles from '../styles';
import commonstyles from '../../../styles/defultStyles';
import {ScrollView} from 'react-native-gesture-handler';
import CreateButton from '../../../components/create-button';
import ItemComponent from '../ItemComponent';
import WalletDeduction from './WalletDeduction';
import {connect} from 'react-redux';
import {toggleBlur} from '../../../store/reducers';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import walletstyles from './styles';
import {operation_data} from '../../../data/DropdownData';

let Wallet = props => {
  navigationOptions = ({}) => {
    return {
      header: null,
    };
  };
  const handleWallet = () => {
    setShowWallet(!showWallet);
    props.toggleBlur(!showWallet);
  };
  const [showWallet, setShowWallet] = React.useState(false);
  return (
    <View
      style={[
        giftstyles.container,
        {
          opacity: props.enableBlur ? 0.2 : 1,
        },
      ]}>
      <ScrollView>
        <Text style={giftstyles.orderTxt}>Wallet </Text>
        <View style={commonstyles.flewRow}>
          <Text style={giftstyles.subheader}>Home / Reports / Wallet</Text>
        </View>
        <View
          style={[
            giftstyles.formView,
            {
              paddingHorizontal: 16,
            },
          ]}>
          <Text style={walletstyles.title}> Al Anfoshy Fish : O</Text>
          <ItemComponent
            marginLeft={4}
            mainText1={'ID'}
            mainText2={'Amount'}
            subText1={'202669'}
            subText2={'10.00AED'}
          />
          <View style={commonstyles.mb16}>
            <Text style={giftstyles.productName}>Order</Text>
            <TextInput style={giftstyles.input} placeholder="Type..." />
          </View>
          <View style={commonstyles.mb16}>
            <Text style={giftstyles.productName}>Operation</Text>
            <CustomDropdown data={operation_data} height={104} />
          </View>
          <ItemComponent
            marginLeft={4}
            mainText1={'Admin'}
            mainText2={'Time'}
            subText1={'Ashika'}
            subText2={'10:00AM- 12:00PM'}
          />
          <CreateButton
            label="Wallet Deduction"
            hideImg={true}
            mh={-2}
            handlePress={() => handleWallet()}
          />
          {showWallet && <WalletDeduction toggleModal={() => handleWallet()} />}
        </View>

        <View style={{marginBottom: 40}}></View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    enableBlur: state.enableBlur,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    toggleBlur: cart_item => dispatch(toggleBlur(cart_item)),
  };
}

export default Wallet = connect(mapStateToProps, mapDispatchToProps)(Wallet);
