import React, {useState, useEffect} from 'react';

import ValueComponentPrice from '../text-list-multiple/ValueComponentPrice';
import CreateButton from '../create-button';
import ListMultipleAndPriceImage from './ListMultipleAndPriceImage';
import SizesWithOrWithoutPrice from '../sizes-with-or-without-price';

const TextListMultipleAndPrice = props => {
	const [values, setValues] = useState([
		{
			id: 1,
			name: '',
			name_en: '',
			price: 0,
		},
	]);
	const [last_id, set_last_id] = useState(1);
	const {setAvailablevalues, current_key, title} = props;

	const createNewValue = () => {
		let new_id = parseInt(last_id) + 1;

		let empty_data = {
			name: '',
			name_en: '',
			id: new_id,
			price: 0,
		};
		// if (priceEnable) {
		// 	empty_data.price = 2;
		// 	setpriceEnabled(true);
		// }
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
					} else if (field == 'price') {
						return {...todo, price: value};
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
			{current_key == 'list-multi-price' && <ListMultipleAndPriceImage title="list-multi-price" />}
			{current_key == 'list-single-price' && <ListMultipleAndPriceImage title="list-single-price" />}
			{current_key == 'size-with-price' && <SizesWithOrWithoutPrice title="size-with-price" />}

			{values &&
				values.length > 0 &&
				values.map((item, index) => (
					<ValueComponentPrice delete_value={delete_value} updateValue={updateValue} key={index} item={item} />
				))}

			<CreateButton mh={0.01} handlePress={() => createNewValue()} />
		</>
	);
};

export default TextListMultipleAndPrice;
