import React from 'react';

import CreateProduct from '../create-product';
import {strings} from '../../i18n';

const EditProductDetails = props => {
	navigationOptions = ({navigation}) => {
		return {
			header: null,
		};
	};
	const [timeOpened, setTimeOpened] = React.useState(false);

	const toggleTimeOpened = () => {
		setTimeOpened(!timeOpened);
	};
	//console.log(props.route.params.id + ' props.route.params.id ');
	return (
		<CreateProduct
			navigation={props.navigation}
			title={strings('Edit Product')}
			id={props.route.params.id}
			product={props.route.params.product}
		/>
	);
};

export default EditProductDetails;
