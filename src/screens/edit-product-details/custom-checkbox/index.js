import React, {useState, useReducer, useEffect} from 'react';

import {View, Text, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import {checkbox_data} from '../../../data/DummyData';
import SingleItem from '../../products/suggested-products/SingleItem';
import commonstyles from '../../../styles/defultStyles';
import dropdownStyles from '../../../styles/dropdownStyles';

const DropdownItem = ({item, handleComplete}) => {
	return (
		<Pressable onPress={() => handleComplete()}>
			<View style={commonstyles.mainView}>
				<View style={{flex: 0.2}}>
					<Image
						style={styles.checkedImg}
						source={
							item.selected
								? require('../../../../assets/images/checkbox-ticked.png')
								: require('../../../../assets/images/checkbox.png')
						}
					/>
				</View>
				<View style={{flex: 0.8}}>
					<Text style={dropdownStyles.rowTextStyle}>{item.name} </Text>
				</View>
			</View>
		</Pressable>
	);
};

const CustomCheckbox = props => {
	const reducer = (state, action) => {
		switch (action.type) {
			case 'COMPLETE':
				return state.map(todo => {
					if (todo.id === action.id) {
						return {...todo, selected: !todo.selected};
					} else {
						return todo;
					}
				});
			default:
				return state;
		}
	};

	// console.log(' props.data');

	// console.log(props.data);
	const [cookingMethods, dispatch] = useReducer(reducer, props.data ? props.data : checkbox_data);

	const handleComplete = item => {
		dispatch({type: 'COMPLETE', id: item.id});
		console.log(' handleComplete');
		if (props.getselectedList) {
			getSelectedList();
		}
		props.setbranchId && props.setbranchId(selectedList);
	};

	const [image, setImage] = useState('dropdown');
	const [dropdownOpened, setDropDowOpened] = useState(false);
	const [selectedList, setList] = React.useState([]);

	const handleDropdown = () => {
		setDropDowOpened(!dropdownOpened);
		//if (dropdownOpened == true) {
		if (props.getselectedList) {
			getSelectedList();
		}
		//}
		props.setbranchId && props.setbranchId(selectedList);
	};
	const getSelectedList = () => {
		let selectedList = [];
		cookingMethods.map(item => {
			if (item.selected) {
				selectedList.push(item.name);
			}
		});
		setList(selectedList);
	};

	useEffect(() => {
		//if (dropdownOpened == true) {
		if (props.getselectedList) {
			getSelectedList();
		}
		//}
	}, [dropdownOpened]);

	return (
		<View>
			<Pressable onPress={() => handleDropdown()}>
				<View style={styles.buttonStyle}>
					<Text style={styles.buttonTextStyle}> All Sections</Text>
					<Image
						source={
							dropdownOpened
								? require('../../../../assets/images/dropup.png')
								: require('../../../../assets/images/dropdown.png')
						}
						style={{
							marginTop: 16,
							width: 7.18,
							height: 4.59,
							right: 24,
							position: 'absolute',
						}}
					/>
				</View>
			</Pressable>
			{dropdownOpened && (
				<View style={commonstyles.dropdownStyle}>
					<ScrollView>
						{cookingMethods &&
							cookingMethods.map((item, index) => (
								<DropdownItem key={index} item={item} handleComplete={() => handleComplete(item)} />
							))}
					</ScrollView>
				</View>
			)}
			{/* {!dropdownOpened && (
				<View>
					<ScrollView>
						{selectedList &&
							selectedList.map((item, index) => {
								return <SingleItem item={item} key={index} />;
							})}
					</ScrollView>
				</View>
			)} */}
		</View>
	);
};

export default CustomCheckbox;
