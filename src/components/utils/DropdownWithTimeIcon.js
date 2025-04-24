import React, {useRef, useState} from 'react';

import SelectDropdown from 'react-native-select-dropdown';
import dropdownStyles from '../../styles/dropdownStyles';
import RenderTimeIcon from '../common/RenderTimeIcon';
import styles from '../../styles/inputStyles';
import {View, Text} from 'react-native';
import {time_slots_data} from '../../data/DummyData';
import {strings} from '../../i18n';
import {ListTimeService} from '../../services/OrdersServices';

const DropdownWithTimeIcon = props => {
  const dropdownRef = useRef({});
  const [image, setImage] = useState('dropdown');
  const {label, data} = props;
  const {buttonTextAfterSelection, rowTextForSelection, renderDropdownIcon} =
    props;
  const [timeData, setTimeData] = React.useState([]);

  let onSuccess = async response => {
    setTimeData(response.data.data);
    //console.log(response.data.data);
  };

  let onFailure = error => {
    alert(error);
  };

  let fetchData = () => {
    ListTimeService(onSuccess, onFailure);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={[styles.mh16]}>
      <Text style={[styles.name, {marginBottom: 0}]}>
        {label ? label : strings('Time')}
      </Text>
      <SelectDropdown
        ref={dropdownRef}
        data={timeData}
        onSelect={(selectedItem, index) => {
          //  console.log(selectedItem + 'selc ');
          props.setSelectedItem && props.setSelectedItem(selectedItem);
        }}
        onFocus={(selectedItem, index) => {
          setImage('dropup');
        }}
        onBlur={(selectedItem, index) => {
          setImage('dropdown');
        }}
        buttonTextAfterSelection={
          buttonTextAfterSelection
            ? buttonTextAfterSelection
            : selectedItem => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                if (typeof selectedItem == 'object') {
                  return selectedItem.name;
                }
                return selectedItem;
              }
        }
        rowTextForSelection={
          rowTextForSelection
            ? rowTextForSelection
            : item => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                if (typeof item == 'object') {
                  return item.name;
                }
                return item;
              }
        }
        selectedRowStyle={dropdownStyles.selectedRowStyle}
        selectedRowTextStyle={dropdownStyles.selectedRowTextStyle}
        rowStyle={dropdownStyles.rowStyle}
        rowTextStyle={dropdownStyles.rowTextStyle1}
        buttonStyle={dropdownStyles.buttonStyle}
        buttonTextStyle={dropdownStyles.buttonTextStyle}
        dropdownStyle={{
          // width:329,
          paddingVertical: 12,
          borderRadius: 6,
          border: 1,
          marginBottom: 16,
          marginTop: 8,
          backgroundColor: 'white',
          fontSize: 12,
          height: props.height ? props.height : 186,
        }}
        renderDropdownIcon={
          renderDropdownIcon
            ? renderDropdownIcon
            : () => {
                return <RenderTimeIcon image={image} />;
              }
        }
        defaultButtonText={
          props.defaultTxt ? props.defaultTxt : strings('Choose')
        }
        dropdownOverlayColor={'transparent'}
      />
    </View>
  );
};
export default DropdownWithTimeIcon;
