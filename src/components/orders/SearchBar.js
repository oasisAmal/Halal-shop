import React from 'react';
import {View, Image, TextInput, Pressable, StyleSheet, Text} from 'react-native';
import {strings} from '../../i18n';
import {fullWidth} from '../../utils/commonFunctions';

const SearchBar = props => {
	const {setModalVisible, openFilter, setSearch, search, handleSearch} = props;
	return (
		<>
			<View style={styles.row}>
				{/* <View style={styles.filterView}>
          <Pressable
            onPress={() => {
              setModalVisible(true);
              openFilter();
            }}>
            <Image
              source={require('../../../assets/images/filter.png')}
              style={styles.filterImg}
            />
          </Pressable>
        </View> */}

				<Pressable
					style={styles.filterView}
					onPress={() => {
						setModalVisible(true);
						openFilter();
					}}>
					<Image source={require('../../../assets/images/filter.png')} style={styles.filterImg} />
				</Pressable>

				<View style={styles.inputView}>
					<TextInput
						placeholder={strings('Type to search')}
						style={styles.input}
						onChangeText={text => setSearch(text)}
						value={search}
					/>
					<Pressable onPress={() => handleSearch()} style={styles.pressableItem}>
						<Image source={require('../../../assets/images/search.png')} style={styles.searchImg} />
					</Pressable>
				</View>
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	filterView: {
		//flex: 0.1,
		paddingVertical: 16,
		paddingHorizontal: 20,
		backgroundColor: 'white',
		marginRight: 8,
		//marginLeft:16,
		marginBottom: 8,
		borderRadius: 6,
		//borderWidth:1
	},
	filterImg: {width: 21, height: 18, alignSelf: 'center'},
	inputView: {
		flex: 1,
		backgroundColor: 'white',
		borderRadius: 6,
		marginBottom: 8,
		flexDirection: 'row',
		//marginRight: 16,
	},
	input: {paddingVertical: 10.5, paddingLeft: 20, minWidth: 250, maxWidth: fullWidth - 100},
	pressableItem: {
		right: 0,
		//top: 0,
		position: 'absolute',
		//borderWidth: 1,

		width: 70,
		height: 50,
		//right: 16,
		//top: 12,
		alignSelf: 'center',
		justifyContent: 'center',
	},
	searchImg: {
		width: 24,
		height: 24,
		right: -16,
		// top: 12,
		// position: 'absolute',
		// borderWidth: 1 ,
		//padding:16
	},
	row: {
		borderRadius: 6,
		flexDirection: 'row',
	},
});
export default SearchBar;
