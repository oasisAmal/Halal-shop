import React, {useEffect} from 'react';
import {Modal, Text, Pressable, View, Image, FlatList} from 'react-native';
import styles from './styles';
import CustomDropdown from '../../../components/utils/CustomDropdown';
import {branch_data, section_data} from '../../../data/DummyData';
import TagItem from '../TagItem';
import DecisionButtons from '../../../components/decision-buttons';
import SectionDropdown from '../../../components/section-dropdown';
import {ListBranchService} from '../../../services/ShopServices';
import {GET_PROFILE} from '../../../services/ProfileService';
import {setShops} from '../../../store/reducers';
import {AllSectionListService, TagsService} from '../../../services/ProductService';
import {strings} from '../../../i18n';

const Filter = props => {
	const [dailyOffers, setDailyOffers] = React.useState(false);

	const [branches, setbranches] = React.useState([]);
	const [shops, setshops] = React.useState([]);
	const [tags, settags] = React.useState([]);

	const [allsections, setAllsections] = React.useState([]);
	const [category_id, set_category_id] = React.useState(null);
	const [sub_category_id, set_sub_category_id] = React.useState(null);
	const [branch_id, set_branch_id] = React.useState(null);
	const [shop_id, set_shop_id] = React.useState(null);
	const [badges, set_badges] = React.useState([]);

	const handlePress = () => {};
	let tickedImg = require('../../../../assets/images/checkbox-ticked.png');
	let untickedImg = require('../../../../assets/images/checkbox.png');

	useEffect(() => {
		ListBranchService(onSuccess, onFailure);
		GET_PROFILE(onSuccessShop, e => console.log(e));
		TagsService(onSuccessTag, onFailureTag);
		AllSectionListService(onSuccessSection, onFailureSection);
	}, []);

	const onSuccessSection = response => {
		// console.log('section list ');
		// console.log(response.data.data);
		setAllsections(response.data.data);
	};
	const onFailureSection = response => {
		// console.log(response.data);
		//setbranches(response.data.data);
	};

	const onSuccess = response => {
		// console.log(response.data);
		setbranches(response.data.data);
	};
	const onSuccessShop = response => {
		console.log('shop list ');
		// console.log(response.data.data);
		setshops(response.data.data.shops);
	};
	const onFailure = error => {
		console.log(error);
	};

	const onSuccessTag = response => {
		console.log(' Tags  ');
		console.log(response.data.data);
		settags(response.data.data);
		//set_badges(response.data.data);
	};
	const onFailureTag = error => {
		console.log(error);
	};

	//const [cookingMethods, setCookingMethods] = useState(data);

	const handleComplete = item => {
		//dispatch({type: 'COMPLETE', id: item.id});

		settags(prevSate =>
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
		let selectedvalues = [];
		tags &&
			tags.map(todo => {
				if (todo.selected == true) {
					selectedvalues.push(todo.id);
				}
			});

		set_badges(selectedvalues);
	}, [tags]);

	useEffect(() => {
		console.log(category_id + '  category_id');
		console.log(sub_category_id + ' sub_category_id');
	}, [sub_category_id, category_id]);

	return (
		<View>
			<Modal animationType="fade" transparent={true} visible={props.modalVisible} onRequestClose={() => {}}>
				<View style={{}}>
					<View style={styles.modalView}>
						<View style={{flexDirection: 'row'}}>
							<View style={{flex: 0.8}}>
								<Text style={styles.subTxt}>{strings('Filter')} </Text>
							</View>
							<View style={{flex: 0.2, flexDirection: 'row-reverse'}}>
								{/* <Pressable onPress={() => props.toggleModal(false)}>
									<Image source={require('../../../../assets/images/close.png')} style={styles.closeImg} />
								</Pressable> */}
							</View>
						</View>
						<Text style={styles.hr}></Text>
						<View style={{}}>
							<Text style={styles.title}>{strings('Section')}</Text>
							<SectionDropdown
								data={allsections}
								defaultTxt={strings('Select section')}
								setSelectedItem={set_sub_category_id}
								set_category_id={set_category_id}
							/>
						</View>
						<View>
							<Text style={styles.title}> {strings('Branch')}</Text>
							<CustomDropdown data={branches} defaultTxt={strings('Select Branch')} setSelectedItem={set_branch_id} />
						</View>
						<View>
							<Text style={styles.title}> {strings('Shop')}</Text>
							<CustomDropdown data={shops} defaultTxt={strings('Select Shop')} setSelectedItem={set_shop_id} />
						</View>
						<View>
							<Text style={styles.title}> {strings('Tags')}</Text>
						</View>

						<View style={{flexDirection: 'row', flex: 1}}>
							<FlatList
								data={tags}
								numColumns={2}
								renderItem={({item, index}) => (
									<TagItem
										img={item.selected ? tickedImg : untickedImg}
										handlePress={() => handleComplete(item)}
										title={item.name}
										key={index}
									/>
								)}
							/>
						</View>
						<DecisionButtons
							btnOk={strings('Sort')}
							btnBack={strings('Back')}
							handlePress={() => props.toggleModal(false)}
							handleOk={() =>
								props.handleOk({
									sub_category_id: sub_category_id,
									branch_id: branch_id,
									shop_id: shop_id,
									badges: badges,
									category_id: category_id,
								})
							}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default Filter;
