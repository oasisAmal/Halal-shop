import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import listStyles from './styles';
import Option from './Option';
import CreateButton from '../create-button';
import styles from '../../styles/defultStyles';
import commonstyles from '../../styles/defultStyles';
import IMGS from '../../../assets/images';
import ValueComponent from './ValueComponent';
import TextListMultipleFile from './TextListMultipleFile';
import TextListSingle from '../text-list-single';
import ToggleOnOff from '../toggle-on-off';
import SizeSelectionSingle from '../size-selection-single';

const TextListMultiple = props => {
	const [values, setValues] = useState([
		{
			id: 1,
			name: '',
			name_en: '',
		},
	]);
	const [last_id, set_last_id] = useState(1);
	const [priceEnabled, setpriceEnabled] = useState(false);
	const {setAvailablevalues, current_key} = props;

	const createNewValue = () => {
		let new_id = parseInt(last_id) + 1;

		let empty_data = {
			name: '',
			name_en: '',
			id: new_id,
		};

		console.log(empty_data);
		// set_last_id(last_id => last_id + 1);
		set_last_id(last_id => {
			return last_id + 1;
		});

		setValues([...values, empty_data]);
	};
	let delete_value = id => {
		console.log('index is =>>>>> ' + id);
		setValues(prevState => prevState.filter(product => product.id != id));
	};

	const updateValue = (id, field, value) => {
		console.log(id, field, value);

		setValues(
			values.map(todo => {
				if (todo.id === id) {
					if (field == 'name') {
						return {...todo, name: value};
					} else if (field == 'name_en') {
						return {...todo, name_en: value};
					} else {
						return todo;
					}
				} else {
					return todo;
				}
			}),
		);

		//console.log(sub_products);
	};

	useEffect(() => {
		console.log('values');
		//console.log(values);
		setAvailablevalues(values);
	}, [values]);

	return (
		<View>
			{current_key == 'list-multi' && <TextListMultipleFile />}
			{current_key == 'list-single' && <TextListSingle />}
			{current_key == 'on-off' && <ToggleOnOff />}
			{current_key == 'size-single' && <SizeSelectionSingle />}

			{values &&
				values.length > 0 &&
				values.map((item, index) => (
					<ValueComponent
						priceEnabled={priceEnabled}
						delete_value={delete_value}
						updateValue={updateValue}
						key={index}
						item={item}
					/>
				))}

			<CreateButton mh={0.01} handlePress={() => createNewValue()} />
		</View>
	);
};

export default TextListMultiple;
