import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import giftstyles from './styles';
import commonstyles from '../../../styles/defultStyles';
import CustomCheckbox from '../../edit-product-details/custom-checkbox';
import SaveButton from '../../../components/save-button';
import {checkbox_data} from '../../../data/DummyData';
// import {ScrollView} from 'react-native-gesture-handler';
import {SaveSuggestedProductsService, SuggestedProductsService} from '../../../services/ProductService';
import {toastMessage} from '../../../components/utils/functions/commonFunctions';
import {strings} from '../../../i18n';
import DropdownInput from '../../common/custom-checkbox/DropdownInput';
import DropdownItem from '../../common/custom-checkbox/DropdownItem';
const SuggestedProducts = props => {
	navigationOptions = ({}) => {
		return {
			header: null,
		};
	};

	const [list, setList] = useState([]);
	const [selectedlist, setSelectedlist] = useState([]);
	const [dropdownOpened, setDropDowOpened] = useState(false);

	const onSucces = response => {
		// console.log('response.data onSucces');
		// console.log(response.data.data);
		setList(response.data.data);
	};
	const onFailure = e => {
		//console.log(' error gifts ');
		console.log(e);
	};

	const onSuccesSave = response => {
		//	console.log('response.data onSuccesList');
		toastMessage('Success');
		//console.log(response.data);
	};

	const onFailureSave = e => {
		console.log(' error ');
		toastMessage('error');
		console.log(e);
	};

	useEffect(() => {
		SuggestedProductsService(
			//	22273,
			props.route.params.id,
			onSucces,
			onFailure,
		);
	}, []);

	const saveSuggestedProduct = () => {
		SaveSuggestedProductsService(
			{
				id: props.route.params.id,
				suggested_products: selectedlist,
			},
			onSuccesSave,
			onFailureSave,
		);
	};

	useEffect(() => {
		console.log('selectedlist');
		console.log(selectedlist);
	}, [selectedlist]);

	const handleComplete = item => {
		//dispatch({type: 'COMPLETE', id: item.id});

		setList(prevSate =>
			prevSate.map(todo => {
				if (todo.id === item.id) {
					//console.log(todo.selected, ' todo.selected');
					if (todo.selected == undefined) {
						return {...todo, selected: true};
					} else return {...todo, selected: !todo.selected};
				} else {
					return todo;
				}
			}),
		);
	};

	return (
		<View style={[giftstyles.container, {}]}>
			<ScrollView>
				<Text style={giftstyles.orderTxt}> {strings('Suggested Products')} </Text>
				<View style={commonstyles.flewRow}>
					<Text style={giftstyles.subheader}>Home / Products / Active Products / Suggested Products</Text>
				</View>
				<View style={giftstyles.formView}>
					<View style={commonstyles.mb16}>
						<Text style={giftstyles.productName}> {strings('Products')}</Text>
						{/* <CustomCheckbox setbranchId={setSelectedlist} data={list} getselectedList={true} /> */}
						<DropdownInput dropdownOpened={dropdownOpened} onPress={() => setDropDowOpened(!dropdownOpened)} />
						{dropdownOpened && (
							<View style={commonstyles.dropdownStyle}>
								<ScrollView>
									{list &&
										list.map((item, index) => (
											<DropdownItem key={index} item={item} handleComplete={() => handleComplete(item)} />
										))}
									{list.length == 0 && <Text>{strings('No Data')} </Text>}
								</ScrollView>
							</View>
						)}
					</View>
					{list && list.length > 0 && <SaveButton handlePress={() => saveSuggestedProduct()} />}

					{/* <Pressable onPress={() => ''}>
						<View style={[commonstyles.longBtn, giftstyles.resetBtn]}>
							<Text style={[commonstyles.longBtnTxt, giftstyles.longTxt]}>Reset </Text>
						</View>
					</Pressable> */}
				</View>
			</ScrollView>
		</View>
	);
};

export default SuggestedProducts;
