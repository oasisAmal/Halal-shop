import React, {useState, useEffect} from 'react';

import ValueComponentPrice from '../text-list-multiple/ValueComponentPrice';
import CreateButton from '../create-button';
import ListMultipleAndPriceImage from './ListMultipleAndPriceImage';
import SizesWithOrWithoutPrice from '../sizes-with-or-without-price';
import LandscapeWithPrice from '../landscape-with-price';
import ValueComponentPriceImage from '../text-list-multiple/ValueComponentPriceImage';
import Cutting from '../cutting';
import Packing from '../packing';

const ImageAndPrice = props => {
	const [values, setValues] = useState([
		{
			id: 1,
			name: '',
			name_en: '',
			price: 0,
		},
	]);
	const [last_id, set_last_id] = useState(1);
	const {setAvailablevalues, current_key, title, videoEnabled, descriptionEnabled} = props;

	const createNewValue = () => {
		let new_id = parseInt(last_id) + 1;

		let empty_data = {
			name: '',
			name_en: '',
			id: new_id,
			price: 0,
		};
		if (videoEnabled) {
			empty_data.vidro = null;
		}
		if (descriptionEnabled) {
			empty_data.description = null;
			empty_data.description_en = null;
		}

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
					} else if (field == 'price') {
						return {...todo, price: value};
					} else if (field == 'image') {
						return {...todo, image: value};
					} else if (field == 'vidro') {
						return {...todo, vidro: value};
					} else if (field == 'description') {
						return {...todo, description: value};
					} else if (field == 'description_en') {
						return {...todo, description_en: value};
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
		<>
			{current_key == 'landscape-with-price' && <LandscapeWithPrice title="list-multi-price" />}
			{current_key == 'cutting' && <Cutting title="list-single-price" />}
			{current_key == 'packaging' && <Packing />}

			{values &&
				values.length > 0 &&
				values.map((item, index) => (
					<ValueComponentPriceImage
						delete_value={delete_value}
						updateValue={updateValue}
						key={index}
						item={item}
						videoEnabled={videoEnabled}
						descriptionEnabled={descriptionEnabled}
					/>
				))}

			<CreateButton mh={0.01} handlePress={() => createNewValue()} />
		</>
	);
};

export default ImageAndPrice;
