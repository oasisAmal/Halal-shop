import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import commonstyles from '../../../styles/defultStyles';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import {special_section_data} from '../../../data/DropdownData';
import CreateButton from '../../../components/create-button';
import TextListMultiple from '../../../components/text-list-multiple';
import TextListSingle from '../../../components/text-list-single';
import TextListMultipleAndPrice from '../../../components/text-list-multiple-and-price';
import TextListMultiSingleAndPrice from '../../../components/text-list-multi-single-and-price';
import TextArea from '../../../components/text-area';
import Paragraph from '../../../components/paragraph';
import LandscapeWithPrice from '../../../components/landscape-with-price';
import SizesWithOrWithoutPrice from '../../../components/sizes-with-or-without-price';
import ToggleOnOff from '../../../components/toggle-on-off';
import SizeSelectionSingle from '../../../components/size-selection-single';
import Cutting from '../../../components/cutting';
import GiftPacking from '../../../components/gift-packing';
import Without from '../../../components/without';
import Packing from '../../../components/packing';
import {SpecialSectionListService} from '../../../services/ProductService';
import IMGS from '../../../../assets/images';

const SpecialSection = props => {
	const [attributes, setAttributes] = useState([]);

	const {specialsections, set_special_sections, createSpecialSection} = props;

	const onSuccess = response => {
		setAttributes(response.data.data);
	};
	const onFailure = () => {};

	return (
		<View style={{}}>
			{/* <TextListMultiple /> */}

			{/* <Packing />
			<Without />
			<GiftPacking />
			<Cutting />
			<SizeSelectionSingle />
			<ToggleOnOff />
		
			<TextListSingle />
			<TextListMultipleAndPrice />
			<TextListMultiSingleAndPrice />
			<TextArea />
			<Paragraph />
			<LandscapeWithPrice />
			<SizesWithOrWithoutPrice /> */}
			{/* <View style={commonstyles.mb16}>
				<Text style={styles.productName}>The Value</Text>
				<TextInput style={styles.input} />
			</View>
			<View style={commonstyles.mb16}>
				<Text style={styles.productName}>Value In English </Text>
				<TextInput style={styles.input} />
			</View> */}
			{/* <CreateButton mh={0.01} /> */}
		</View>
	);
};

export default SpecialSection;
