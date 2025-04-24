import React, {useRef, useState} from 'react';

import SelectDropdown from 'react-native-select-dropdown';
import dropdownStyles from '../../styles/dropdownStyles';
import RenderDropdownIcon from '../common/RenderDropdownIcon';
import {I18nManager} from 'react-native';
import {strings} from '../../i18n';

const CustomDropdown = props => {
	const dropdownRef = useRef({});
	const [image, setImage] = useState('dropdown');
	const {onSelect} = props;
	const {buttonTextAfterSelection, rowTextForSelection, renderDropdownIcon, is_printed} = props;

	return (
		<SelectDropdown
			ref={dropdownRef}
			data={props.data}
			onSelect={(selectedItem, index) => {
				props.setSelectedItem && props.setSelectedItem(is_printed ? selectedItem.is_printed : selectedItem.id);
				if (props.setSelectedItemText) {
					props.setSelectedItemText(
						selectedItem.name_en ? (I18nManager.isRTL ? selectedItem.name : selectedItem.name_en) : selectedItem.name,
					);
				}
				if (props.setSelectedKey) {
					selectedItem && selectedItem.key && props.setSelectedKey(selectedItem.key);
				}
				// alert(selectedItem.name);
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
								if (selectedItem.name_en && selectedItem.name_en !== null) {
									return I18nManager.isRTL ? selectedItem.name : selectedItem.name_en;
								} else {
									return selectedItem.name;
								}
							} else return selectedItem;
					  }
			}
			rowTextForSelection={
				rowTextForSelection
					? rowTextForSelection
					: item => {
							if (typeof item == 'object') {
								if (item.name_en && item.name_en !== null) {
									return I18nManager.isRTL ? item.name : item.name_en;
								} else {
									return item.name;
								}
							} else return item;
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
				borderColor: '#CCCCCC',
				// marginBottom: 16,
				// marginTop: 8,
				backgroundColor: '#FFFFFF',
				fontSize: 12,
				height: props.height ? props.height : 186,
				elevation: 2,
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 1,
				},
				shadowOpacity: 0.2,
				shadowRadius: 1.41,
				overflow: 'visible',
			}}
			renderDropdownIcon={
				renderDropdownIcon
					? renderDropdownIcon
					: () => {
							return <RenderDropdownIcon image={image} />;
					  }
			}
			defaultButtonText={props.defaultTxt ? props.defaultTxt : strings('Choose')}
			dropdownOverlayColor={'transparent'}
		/>
	);
};
export default CustomDropdown;
