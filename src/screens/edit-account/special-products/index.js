import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {orders_data} from '../../../data/DummyData';

import {theme_color} from '../../../mutils';

import {connect} from 'react-redux';
import {toggleBlur} from '../../../store/reducers';
import SubHeader from '../../../components/partials/Subheader';
import CreateButton from '../../../components/create-button';
import ProductSort from '../../../components/product-sort';
import EditPrice from '../../../components/edit-product-price';
import SpecialCategories from '../../../components/special-categories';
import EditGeneralProducts from '../../../components/edit-general-products';
import Filter from '../../products/Filter';
import ProductCardView from '../../products/ProductCardView';

let SpecialProducts = props => {
	const [filterVisible, setFilterVisible] = useState(false);
	const [editgeneralProducts, toggleEditProducts] = useState(false);
	const [specialCategories, setSpecialCategories] = useState(false);
	const [sortProduct, setsortProduct] = useState(false);
	const [editPrice, setEditPrice] = useState(false);

	const handleEditPrice = () => {
		setEditPrice(!editPrice);
		props.toggleBlur(!editPrice);
	};
	const handleSpecialCategories = () => {
		setSpecialCategories(!specialCategories);
		props.toggleBlur(!specialCategories);
	};
	const toggleFilter = status => {
		setFilterVisible(status);
	};
	const handlePress = () => {
		setSpecialCategories(!specialCategories);
	};
	return (
		<View style={[styles.container, {}]}>
			<ScrollView>
				<SubHeader title="Special Products" subtitle="Home / Edit Shop Details / Special Products" />

				<View>
					<CreateButton />

					<View style={{flexDirection: 'row', height: 56}}>
						<View style={styles.filter}>
							<Pressable
								onPress={() => {
									setFilterVisible(true);
								}}>
								<Image source={require('../../../../assets/images/filter.png')} style={{width: 21, height: 18}} />
							</Pressable>
						</View>
						<View
							style={{
								flex: 0.9,
								backgroundColor: 'white',
								borderRadius: 6,
								marginBottom: 8,
								flexDirection: 'row',
							}}>
							<TextInput placeholder="Type to search" style={{paddingVertical: 10.5, paddingLeft: 20}} />
							<Image
								source={require('../../../../assets/images/search.png')}
								style={{
									width: 24,
									height: 24,
									right: 16,
									top: 12,
									position: 'absolute',
								}}
							/>
						</View>
					</View>
					<View style={{flexDirection: 'row'}}>
						<ScrollView horizontal>
							<View style={{}}>
								<TouchableOpacity onPress={() => setsortProduct(!sortProduct)}>
									<Text style={[styles.btn, {}]}> Sort </Text>
								</TouchableOpacity>
							</View>
							{sortProduct && <ProductSort handlePress={() => setsortProduct(!sortProduct)} />}
							<View style={{}}>
								<TouchableOpacity onPress={() => handleEditPrice()}>
									<Text style={styles.btn}>Edit Prices </Text>
								</TouchableOpacity>
							</View>
							{editPrice && <EditPrice handlePress={() => handleEditPrice()} />}
							<Pressable onPress={() => handleSpecialCategories()}>
								<View>
									<Text style={styles.btn}>Special Categories </Text>
								</View>
							</Pressable>
							{specialCategories && <SpecialCategories handlePress={() => handleSpecialCategories()} />}
							<Pressable onPress={() => toggleEditProducts(!editgeneralProducts)}>
								<Text style={styles.btn}>Edit General Products </Text>
							</Pressable>
							{editgeneralProducts && (
								<EditGeneralProducts handlePress={() => toggleEditProducts(!editgeneralProducts)} />
							)}
							<View>
								<Text style={styles.btn}>Clear </Text>
							</View>
						</ScrollView>
					</View>
					{filterVisible && <Filter modalVisible={filterVisible} toggleModal={toggleFilter} />}
					{orders_data.map((order, index) => {
						return (
							<View key={index} style={styles.orderView}>
								<ProductCardView
									key={index}
									navigation={props.navigation}
									enableButtons={'true'}
									handleEdit={() => alert('Edit under dev')}
								/>
							</View>
						);
					})}
					<View style={styles.mb100}></View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	subheader: {
		textAlign: 'left',
		fontFamily: 'Inter-Regular',
		fontSize: 14,
		//: 400,
		lineHeight: 21,
		marginBottom: 24,
		color: '#475569',
	},
	container: {
		//flex: 1,
		marginHorizontal: 16,
	},
	longBtn: {
		backgroundColor: theme_color,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
		height: 48,
		//marginHorizontal: 16 ,
		marginBottom: 16,
		flexDirection: 'row',
	},
	btn: {
		marginTop: 16,
		marginBottom: 9,
		marginRight: 8,
		paddingVertical: 12,
		paddingHorizontal: 18,
		color: 'white',
		backgroundColor: theme_color,
		borderRadius: 6,
	},
	longBtnTxt: {
		fontFamily: 'Inter-Medium',
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		//: 500,
	},

	orderTxt: {
		textAlign: 'left',
		//paddingLeft: 16,
		paddingTop: 24,
		paddingBottom: 4,
		fontSize: 20,
		//: 600,
		color: 'black',
	},
	next: {
		flexDirection: 'row',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	plusImg: {
		width: 16,
		height: 16,
		marginLeft: 5,
		marginVertical: 4,
	},

	filter: {
		flex: 0.1,
		paddingVertical: 16,
		paddingHorizontal: 20,
		backgroundColor: 'white',
		marginRight: 8,
		//marginLeft:16,
		marginBottom: 8,
		borderRadius: 6,
	},
	search: {
		flex: 0.1,
		backgroundColor: 'white',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderBottomRightRadius: 6,
		borderTopRightRadius: 6,
		marginBottom: 8,
	},
	orderView: {
		marginBottom: 8,
		marginTop: 8,
	},
	mb100: {marginBottom: 100},
});

const mapStateToProps = state => {
	return {
		enableBlur: state.enableBlur,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		toggleBlur: cart_item => dispatch(toggleBlur(cart_item)),
	};
}

export default SpecialProducts = connect(mapStateToProps, mapDispatchToProps)(SpecialProducts);
