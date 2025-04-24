import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import giftstyles from './styles';
import commonstyles from '../../styles/defultStyles';
import CreateButton from '../../components/create-button';
import {emirates_data} from '../../data/DummyData';
import DatePickerWithInput from '../../components/datepicker-with-input';
import CustomDropdown from '../../components/utils/CustomDropdown';

import {strings} from '../../i18n';
import {GET_EMIRATES} from '../../services/ListsService';
import {SET_EMIRATES} from '../../store/actionTypes';

const FormComponent = props => {
	const dispatch = useDispatch();

	const shops = useSelector(state => state.shops);
	const emirates = useSelector(state => state.emirates);

	const [listOfEmirates, setListOfEmirates] = useState([]);

	const [selectedFromDate, setSelectedFromDate] = React.useState('');
	const [selectedToDate, setSelectedToDate] = React.useState('');

	const [selectedEmirate, setSelectedEmirate] = React.useState(undefined);
	const [selectedShop, setSelectedShop] = React.useState(undefined);

	const fetchEmirates = () => {
		GET_EMIRATES(response => {
			dispatch({type: SET_EMIRATES, data: response.data.data});
		});
	};

	useEffect(() => {
		if (emirates.length > 0) {
			setListOfEmirates(emirates);
		} else {
			fetchEmirates();
		}
	}, [emirates]);

	const onSearch = () => {
		let data = {};
		if (selectedFromDate) data.from = selectedFromDate.replace(/\//g, '-');
		if (selectedToDate) data.to = selectedToDate.replace(/\//g, '-');
		if (selectedEmirate) data.emirate_id = selectedEmirate;
		if (selectedShop) data.shop_id = selectedShop;

		props.onSearch(data);
	};

	return (
		<View style={giftstyles.formView}>
			<View style={commonstyles.mb16}>
				<Text style={giftstyles.productName}>{strings('From')}</Text>
				<DatePickerWithInput selectedDate={selectedFromDate} setSelectedDate={date => setSelectedFromDate(date)} />
			</View>
			<View style={commonstyles.mb16}>
				<Text style={giftstyles.productName}>{strings('To')}</Text>
				<DatePickerWithInput selectedDate={selectedToDate} setSelectedDate={date => setSelectedToDate(date)} />
			</View>
			<View style={commonstyles.mb16}>
				<Text style={giftstyles.productName}>{strings('Emirate')}</Text>
				<CustomDropdown data={listOfEmirates} setSelectedItem={emirate => setSelectedEmirate(emirate)} />
			</View>
			<View style={commonstyles.mb16}>
				<Text style={giftstyles.productName}>{strings('Shop')}</Text>
				<CustomDropdown data={shops} setSelectedItem={shop => setSelectedShop(shop)} />
			</View>

			<CreateButton hideImg="true" label={strings('Search')} mh={-0.25} handlePress={onSearch} />
			{/* <CreateButton hideImg="true" label="Print" mh={-0.25} /> */}
		</View>
	);
};

export default FormComponent;
