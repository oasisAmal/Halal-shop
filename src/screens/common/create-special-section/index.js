import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import commonstyles from '../../../styles/defultStyles';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import {SpecialSectionListService} from '../../../services/ProductService';
import IMGS from '../../../../assets/images';
import TextListMultiple from '../../../components/text-list-multiple';
import TextListMultipleAndPrice from '../../../components/text-list-multiple-and-price';
import TextArea from '../../../components/text-area';
import Paragraph from '../../../components/paragraph';
import ImageAndPrice from '../../../components/text-list-multiple-and-price/ImageAndPrice';

const CreateSpecialSection = props => {
	const [attributes, setAttributes] = useState([]);
	const [availablevalues, setAvailablevalues] = useState([]);
	const [group_id, set_group_id] = useState(null);
	const [current_key, set_current_key] = useState(null);
	useEffect(() => {
		SpecialSectionListService(onSuccess, onFailure);
	}, []);
	const {updateSpecialSection, specialsections, set_special_sections, createSpecialSection, delete_special_section, item} = props;

	const onSuccess = response => {
		setAttributes(response.data.data);
	};
	const onFailure = () => {};

	const handleSectionGroup = key => {
		console.log(key + ' is selected id ');
		//set_group_id(id);
		set_current_key(key);
		updateSpecialSection(item.index, 'section_name', key, availablevalues);
	};
	// useEffect(() => {
	// 	console.log(current_key + '  current_key   ');
	// 	// if (group_id == 7) {
	// 	// 	// list with multi choice
	// 	// 	set_current_group('list-multi');
	// 	// }
	// }, [current_key]);

	return (
		<View style={{marginBottom: 16}}>
			<Text
				style={[
					commonstyles.label,
					{
						marginBottom: 0,
					},
				]}>
				Section
			</Text>
			<CustomDropdown
				data={attributes}
				defaultTxt="Choose Section"
				//setSelectedItem={handleSectionGroup}
				//setSelectedItemText={handleSectionGroup}
				setSelectedKey={handleSectionGroup}
			/>
			<View style={commonstyles.mb16}>
				<Text style={styles.productName}>Address</Text>
				<TextInput style={styles.input} onChangeText={text => updateSpecialSection(item.index, 'name', text)} />
			</View>
			<View style={commonstyles.mb16}>
				<Text style={styles.productName}>Address In English </Text>
				<TextInput style={styles.input} onChangeText={text => updateSpecialSection(item.index, 'name_en', text)} />
			</View>
			<View style={{height: 42, flexDirection: 'row', flex: 1}}>
				<TouchableOpacity
					style={{flexDirection: 'row', flex: 0.5}}
					onPress={() => updateSpecialSection(item.index, 'is_required', '')}>
					<Image
						source={item.is_required ? IMGS.CheckboxTicked : IMGS.Checkbox}
						style={{
							width: 20,
							height: 20,
							marginRight: 8,
							// right: 28,
							// top: 8,
							// position: 'absolute',
						}}
					/>
					<Text> Is required </Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => delete_special_section(item.index)}>
					<Image
						source={require('../../../../assets/images/Trash.png')}
						style={{
							width: 28,
							height: 28,
							flexDirection: 'row-reverse',
							//top: 8,
							//position: 'absolute',
						}}
					/>
				</TouchableOpacity>
			</View>
			{current_key == 'list-multi' && <TextListMultiple setAvailablevalues={setAvailablevalues} current_key={current_key} />}
			{current_key == 'list-single' && <TextListMultiple setAvailablevalues={setAvailablevalues} current_key={current_key} />}
			{current_key == 'list-multi-price' && (
				<TextListMultipleAndPrice
					title="List With Multi Choice & Price"
					setAvailablevalues={setAvailablevalues}
					current_key={current_key}
				/>
			)}
			{current_key == 'list-single-price' && (
				<TextListMultipleAndPrice
					title="List With Single Choice & Price"
					setAvailablevalues={setAvailablevalues}
					current_key={current_key}
				/>
			)}
			{current_key == 'textarea' && <TextArea />}
			{current_key == 'paragraph' && (
				<Paragraph title="List With Single Choice & Price" setAvailablevalues={setAvailablevalues} current_key={current_key} />
			)}
			{current_key == 'without' && <TextListMultiple setAvailablevalues={setAvailablevalues} current_key={current_key} />}
			{current_key == 'on-off' && <TextListMultiple setAvailablevalues={setAvailablevalues} current_key={current_key} />}

			{current_key == 'size-single' && <TextListMultiple setAvailablevalues={setAvailablevalues} current_key={current_key} />}
			{current_key == 'size-with-price' && (
				<TextListMultipleAndPrice
					title=" size-with-price / List With Single Choice & Price"
					setAvailablevalues={setAvailablevalues}
					current_key={current_key}
				/>
			)}
			{current_key == 'landscape-with-price' && (
				<ImageAndPrice title="landscape-with-price" setAvailablevalues={setAvailablevalues} current_key={current_key} />
			)}
			{current_key == 'cutting' && (
				<ImageAndPrice
					title="landscape-with-price"
					setAvailablevalues={setAvailablevalues}
					current_key={current_key}
					videoEnabled={true}
				/>
			)}
			{current_key == 'packaging' && (
				<ImageAndPrice
					title="landscape-with-price"
					setAvailablevalues={setAvailablevalues}
					current_key={current_key}
					descriptionEnabled={true}
				/>
			)}
			{current_key == 'gift-packaging' && (
				<ImageAndPrice
					title="landscape-with-price"
					setAvailablevalues={setAvailablevalues}
					current_key={current_key}
					descriptionEnabled={true}
				/>
			)}
		</View>
	);
};

export default CreateSpecialSection;
