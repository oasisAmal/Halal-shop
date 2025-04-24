import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import commonstyles from '../../../styles/defultStyles';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import myColors from '../../../styles/myColors';
import {special_section_data} from '../../../data/DropdownData';
import PlusIconImage from '../../../components/plus-icon-image';
import CreateSpecialSection from '../create-special-section';
import IMGS from '../../../../assets/images';

const SpecialSection = props => {
	const {specialsections, set_special_sections, createSpecialSection, set_has_quantity, has_quantity} = props;
	return (
		<View style={{}}>
			<Text style={commonstyles.subheader}>Special Sections</Text>
			<View style={commonstyles.formView}>
				<TouchableOpacity style={commonstyles.flewRow} onPress={() => createSpecialSection()}>
					<View
						style={[
							commonstyles.flex50,
							styles.btn,
							commonstyles.flewRow,
							{
								backgroundColor: myColors.lightGreen,
							},
						]}>
						<Text style={[commonstyles.longBtnTxt, {marginLeft: 16}]}>Create</Text>
						<PlusIconImage width={16} height={16} mt={4} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{flexDirection: 'row'}} onPress={() => set_has_quantity(!has_quantity)}>
					<Image
						source={has_quantity ? IMGS.CheckboxTicked : IMGS.Checkbox}
						style={{width: 24, height: 24, marginVertical: 4, marginRight: 8}}
					/>
					<Text style={[commonstyles.label, commonstyles.mb12]}>There is a section for the quantity of the product</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SpecialSection;
