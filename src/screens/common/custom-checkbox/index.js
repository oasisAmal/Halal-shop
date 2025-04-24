import React, {useState, useReducer, useEffect} from 'react';

import {View, Text, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import {branch_data, checkbox_data} from '../../../data/DummyData';
import SingleItem from '../../products/suggested-products/SingleItem';
import commonstyles from '../../../styles/defultStyles';
import dropdownStyles from '../../../styles/dropdownStyles';
import DropdownItem from './DropdownItem';
import DropdownInput from './DropdownInput';

const CustomCheckbox = props => {
	let {data} = props;
	const [cookingMethods, setCookingMethods] = useState(data);

	const handleComplete = item => {
		//dispatch({type: 'COMPLETE', id: item.id});

		setCookingMethods(prevSate =>
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

	useEffect(() => {
		if (props.getselectedList) {
			getSelectedList();
		}
		console.log('cookingMethods');
		console.log(cookingMethods);
		if (dropdownOpened) {
			setCookingMethods(data);
		}
	}, [branch_data, dropdownOpened]);

	useEffect(() => {
		setCookingMethods(data);
	}, []);

	const [image, setImage] = useState('dropdown');
	const [dropdownOpened, setDropDowOpened] = useState(false);
	const [selectedList, setList] = React.useState([]);

	const handleDropdown = () => {
		setDropDowOpened(!dropdownOpened);
		//if (dropdownOpened == true) {

		//}
	};
	const getSelectedList = () => {
		let selectedList = [];
		cookingMethods &&
			cookingMethods.map(item => {
				if (item.selected) {
					selectedList.push(item.id);
				}
			});
		props.set_data(selectedList);
		// console.log('selectedList');
		//console.log(selectedList);
		setList(selectedList);
	};

	return (
		<View>
			<DropdownInput dropdownOpened={dropdownOpened} onPress={() => setDropDowOpened(!dropdownOpened)} />
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
              selectedList.map(item => {
                return <SingleItem item={item} />;
              })}
          </ScrollView>
        </View>
      )} */}
		</View>
	);
};

export default CustomCheckbox;
