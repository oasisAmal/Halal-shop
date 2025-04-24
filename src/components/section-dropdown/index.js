import React, {useState} from 'react';

import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import SVG from '../../../assets/images/SVG';
import myColors from '../../styles/myColors';

const DropdownItem = ({item, handleDropdownText, selectedText, currentCatId, currentSubId, setcurrentCatId, setcurrentSubId}) => {
	const selectedRow = selectedText == item.name ? true : false;
	let isCategory = item.children && item.children.length > 0 ? false : true;
	let selectedColor = '#4338CA';
	return (
		<>
			<Pressable onPress={() => handleDropdownText(item, 'cat', item.id)}>
				<View style={selectedRow ? styles.selectedRowStyle : styles.rowStyle}>
					<Text
						style={[
							styles.categoryTxt,
							{
								color: selectedRow ? selectedColor : '#1E293B',
							},
						]}>
						{item.name}
						{item.children && item.children.length > 0 && (
							<Image
								source={require('../../../assets/images/arrow-left.png')}
								style={{width: 12, height: 12, marginLeft: 36, marginRight: 16}}
							/>
						)}
					</Text>
				</View>
			</Pressable>
			{currentCatId == item.id &&
				item.children &&
				item.children.map((sub, index) => {
					return (
						<>
							<Pressable
								onPress={() => handleDropdownText(sub, 'sub', sub.id)}
								style={[
									styles.subcontainer,
									{
										backgroundColor: selectedText == sub.name ? '#EEF2FF' : myColors.clrWhite,
										//paddingHorizontal: 8,
									},
								]}>
								<Text
									style={[
										styles.subCategoryTxt,
										{
											color: selectedText == sub.name ? selectedColor : '#475569',
										},
									]}>
									{sub.name}
									{sub.children && sub.children.length > 0 && (
										<Image
											source={require('../../../assets/images/arrow-left.png')}
											style={{width: 12, height: 12, marginLeft: 36, marginRight: 16}}
										/>
									)}
								</Text>
							</Pressable>
							{currentSubId == sub.id &&
								sub.children &&
								sub.children.map((sub1, index1) => {
									return (
										<TouchableOpacity
											style={[
												styles.productcontainer,
												{
													backgroundColor: selectedText == sub1.name ? '#EEF2FF' : myColors.clrWhite,
												},
											]}
											onPress={() => handleDropdownText(sub1, 'product', sub1.id)}>
											<Text
												key={index1}
												style={[
													styles.productTxt,
													{
														color: selectedText == sub1.name ? selectedColor : myColors.black,
													},
												]}>
												{sub1.name}
											</Text>
										</TouchableOpacity>
									);
								})}
						</>
					);
				})}
		</>
	);
};

const SectionDropdown = props => {
	const [selectedText, setSelectedTxt] = useState('Select section');
	const [image, setImage] = useState('dropdown');
	const [dropdownOpened, setDropDowOpened] = useState(false);
	const [currentCatId, setcurrentCatId] = useState(null);
	const [currentSubId, setcurrentSubId] = useState(null);

	const handleDropdown = () => {
		setDropDowOpened(!dropdownOpened);
	};
	const handleDropdownText = (item, type, id) => {
		//setDropDowOpened(!dropdownOpened);
		setSelectedTxt(item.name);
		if (type == 'sub') {
			// for sub category
			props.setSelectedItem && props.setSelectedItem(item.id);
			setcurrentSubId(item.id);
		}
		if (type == 'cat') {
			// for category
			props.set_category_id && props.set_category_id(item.id);
			setcurrentCatId(item.id);
		}
		if (type == 'product') {
			// for product
			//props.set_category_id && props.set_category_id(item.id);
		}
	};

	return (
		<View>
			<Pressable onPress={() => handleDropdown()}>
				<View style={styles.buttonStyle}>
					<Text style={styles.buttonTextStyle}>{selectedText}</Text>
					<Image
						source={
							dropdownOpened
								? require('../../../assets/images/dropup.png')
								: require('../../../assets/images/dropdown.png')
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
				<View style={styles.dropdownStyle}>
					<ScrollView>
						{props.data &&
							props.data.map((item, index) => (
								<DropdownItem
									item={item}
									handleDropdownText={handleDropdownText}
									selectedText={selectedText}
									currentCatId={currentCatId}
									setcurrentCatId={setcurrentCatId}
									currentSubId={currentSubId}
									setcurrentSubId={setcurrentSubId}
								/>
							))}
					</ScrollView>
				</View>
			)}
		</View>
	);
};

export default SectionDropdown;
