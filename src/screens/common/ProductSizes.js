import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import CreateButton from '../../components/create-button';
import IMGS from '../../../assets/images';
import {strings} from '../../i18n';

const ProductSizes = props => {
	const {delete_sub_product, index, product, updateSubProduct} = props;
	const [weight, setWeight] = useState(undefined);

	return (
		<View style={{}}>
			<View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
				<TouchableOpacity style={{flex: 0.1}} onPress={() => updateSubProduct(product.id, 'is_active', 1)}>
					<Image
						source={product.is_active ? IMGS.CheckboxTicked : IMGS.Checkbox}
						style={{
							width: 28,
							height: 28,
						}}
					/>
				</TouchableOpacity>
				<View style={{flex: 0.8}}></View>
				<TouchableOpacity style={{flex: 0.1}} onPress={() => delete_sub_product(product.id)}>
					<Image
						source={require('../../../assets/images/Trash.png')}
						style={{
							width: 32,
							height: 32,
							marginTop: -4,
						}}
					/>
				</TouchableOpacity>
			</View>
			<View style={[commonstyles.mb16, {marginTop: 8}]}>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 0.5, flexDirection: 'column', marginRight: 8}}>
						<Text style={styles.smallTxt}> {strings('The Weight')}</Text>
						<TextInput
							placeholder={strings('Type')}
							style={[styles.inputSm, {}]}
							onChangeText={text => updateSubProduct(product.id, 'weight', text)}
						/>
					</View>
					<View style={{flex: 0.5, marginLeft: 8}}>
						<Text style={styles.smallTxt}> {strings('The Age')}</Text>
						<TextInput
							placeholder={strings('Type')}
							style={styles.inputSm}
							onChangeText={text => updateSubProduct(product.id, 'age', text)}
						/>
					</View>
				</View>
			</View>
			<View style={[commonstyles.mb16, {}]}>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 0.5, flexDirection: 'column', marginRight: 8}}>
						<Text style={styles.smallTxt}> {strings('The Price')} </Text>
						<TextInput
							placeholder={strings('Type')}
							style={[styles.inputSm]}
							onChangeText={text => updateSubProduct(product.id, 'price', text)}
						/>
					</View>
					<View style={{flex: 0.5, marginLeft: 8}}>
						<Text style={styles.smallTxt}> {strings('Price Before Discount')}</Text>
						<TextInput
							placeholder={strings('Type')}
							style={[
								styles.inputSm,
								{
									//marginRight: 8,
								},
							]}
							onChangeText={text => updateSubProduct(product.id, 'old_price', text)}
						/>
					</View>
				</View>
			</View>
			<View style={[commonstyles.mb16, {}]}>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 0.5, flexDirection: 'column', marginRight: 8}}>
						<Text style={styles.smallTxt}> {strings('How Many People(From)')} </Text>
						<TextInput
							placeholder={strings('Type')}
							style={[
								styles.inputSm,
								{
									//marginRight: 8,
								},
							]}
							onChangeText={text => updateSubProduct(product.id, 'enough_for_from', text)}
						/>
					</View>
					<View style={{flex: 0.5, marginLeft: 8}}>
						<Text style={styles.smallTxt}> {strings('How Many People(To)')}</Text>
						<TextInput
							placeholder={strings('Type')}
							style={[
								styles.inputSm,
								{
									//marginLeft: 8,
								},
							]}
							onChangeText={text => updateSubProduct(product.id, 'enough_for_to', text)}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ProductSizes;
