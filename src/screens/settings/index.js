import React from 'react';
import {View} from 'react-native';
import giftstyles from '../gifts/styles';

import CreateButton from '../../components/create-button';

import {ScrollView} from 'react-native-gesture-handler';

import SubHeader from '../../components/partials/Subheader';

import {orders_data} from '../../data/DummyData';
import BranchCard from '../edit-account/shop-branches/BranchCard';
import MainHeader from '../../components/partials/MainHeader';
import ExportButton from '../../components/common/ExportButton';
import SettingsCard from './SettingsCard';
import CreateAttributeGroup from './CreateAttributeGroup';
import {connect} from 'react-redux';
import {toggleBlur} from '../../store/reducers';

let Settings = props => {
  navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };
  const [createAttribute, setCreateAttribute] = React.useState(false);

  const handlePress = () => {
    setCreateAttribute(!createAttribute);
    props.toggleBlur(!createAttribute);
  };
  return (
    <View
      style={[
        giftstyles.container,
        {
          opacity: props.enableBlur ? 0.2 : 1,
        },
      ]}>
      <MainHeader mh={-16} navigation={props.navigation} />
      <ScrollView>
        <SubHeader
          title="Setting"
          subtitle="Home  /  Setting / Attribute Group"
        />
        <CreateButton
          handlePress={
            () => handlePress()
            //props.navigation.navigate('Create Branch')
          }
        />
        {createAttribute && (
          <CreateAttributeGroup handlePress={() => handlePress()} />
        )}

        <ExportButton label="Sort Data " />
        <View style={{marginTop: 8, marginBottom: 24}}>
          {orders_data.map((order, index) => {
            return (
              <View key={index} style={styles.orderView}>
                <SettingsCard
                  key={index}
                  navigation={props.navigation}
                  enableButtons={false}
                />
              </View>
            );
          })}
        </View>
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

export default Settings = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
