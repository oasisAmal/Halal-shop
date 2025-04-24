import React from 'react';
import {Text} from 'native-base';
import {View, I18nManager} from 'react-native';
import styles from '../../styles/itemStyles';
import {strings} from '../../i18n';
import {ScrollView} from 'react-native-gesture-handler';

const ButtonView = props => {
  return (
    <View
      style={{
        // width: 113,
        height: 40,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderWidth: 0.5,
        margin: 10,
        borderColor: '#64748B',
      }}>
      <Text> {props.label} </Text>
    </View>
  );
};

function SelectedFilteredList(props) {
  const {
    selectedStatus,
    selectedTimeSlot,
    selectedDateSlot,
    selectedEmirate,
    selectedRegion,
    selectedPaymethod,
    isPrinted,
    shop,
  } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        // marginTop: 16,
        // marginBottom: 12,
      }}>
      <ScrollView horizontal>
        {selectedStatus && <ButtonView label={selectedStatus} />}
        {selectedTimeSlot && <ButtonView label={selectedTimeSlot} />}
        {selectedDateSlot && <ButtonView label={selectedDateSlot} />}
        {selectedEmirate && <ButtonView label={selectedEmirate} />}
        {selectedRegion && <ButtonView label={selectedRegion} />}
        {selectedPaymethod && <ButtonView label={selectedPaymethod} />}
        {isPrinted && <ButtonView label={isPrinted} />}
        {shop && <ButtonView label={shop} />}
      </ScrollView>
    </View>
  );
}

export default SelectedFilteredList;
