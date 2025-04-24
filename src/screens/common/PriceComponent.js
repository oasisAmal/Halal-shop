import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import CreateButton from '../../components/create-button';
import PictureComponent from './PictureComponent';
import CookingComponent from './CookingComponent';
import QuantityComponent from './QuantityComponent';
import TagComponent from './TagComponent';
import Appointment from './AppointmentsComponent';
import DatePickerWithLabel from '../../components/common/DatePickerWithLabel';
import CustomDatePicker from '../../components/utils/CustomDatePicker';
import DatePickerWithInput from '../../components/datepicker-with-input';
import ProductSizes from './ProductSizes';
import {strings} from '../../i18n';

const Price = props => {
	const [productSizeAvailable, setAvailable] = useState(false);

	const {
		updateSubProduct,
		has_limited_offer,
		setprice,
		set_old_price,
		setstock,
		set_has_limited_offer,
		set_limited_offer_expired_at,
		handleSubProduct,
		sub_products,
		delete_sub_product,
		createSubProduct,
		set_has_sub_products,
		has_sub_products,
	} = props;

	const toggleProductSize = () => {
		setAvailable(!productSizeAvailable);
		set_has_sub_products(!has_sub_products);

		if (productSizeAvailable) {
			if (sub_products && sub_products.length > 1) {
				//handleSubProduct(0, {});
			} else {
				createSubProduct();
			}
		}
	};
	return (
		<View>
			<Text style={styles.subheader}>{strings('Prices')}</Text>
			<View style={[styles.formView, {}]}>
				<View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
					<TouchableOpacity style={{flex: 0.1}} onPress={() => toggleProductSize()}>
						<Image
							source={
								productSizeAvailable
									? require('../../../assets/images/checkbox-ticked.png')
									: require('../../../assets/images/checkbox.png')
							}
							style={{
								width: 28,
								height: 28,
							}}
						/>
					</TouchableOpacity>
					<View style={{flex: 0.8}}>
						<Text
							style={[
								styles.productName,
								{
									//marginLeft: -32,
								},
							]}>
							{strings('There Are Product Sizes')}
						</Text>
					</View>
				</View>

				<TouchableOpacity
					style={{flex: 1, flexDirection: 'row', marginBottom: 16}}
					onPress={() => set_has_limited_offer(!has_limited_offer)}>
					<View style={{flex: 0.1}}>
						<Image
							source={
								has_limited_offer
									? require('../../../assets/images/checkbox-ticked.png')
									: require('../../../assets/images/checkbox.png')
							}
							style={{
								width: 28,
								height: 28,
							}}
						/>
					</View>
					<View style={{flex: 0.8}}>
						<Text
							style={[
								styles.productName,
								{
									//marginLeft: -32,
								},
							]}>
							{strings('Limited Time Offer')}
						</Text>
					</View>
				</TouchableOpacity>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Limited offer expires')}</Text>
					<DatePickerWithInput setSelectedDate={set_limited_offer_expired_at} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('The Price')}</Text>
					<TextInput style={styles.input} onChangeText={price => setprice(price)} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}> {strings('Price Before Discount')} </Text>
					<TextInput style={styles.input} onChangeText={old_price => set_old_price(old_price)} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>
						{strings('Quantity')}{' '}
						<Text style={{color: '#94A3B8'}}>{'(' + strings('Leave Blank to not calculate') + ')'}</Text>
					</Text>
					<TextInput style={styles.input} onChangeText={stock => setstock(stock)} />
				</View>
				{productSizeAvailable && (
					<>
						{sub_products &&
							sub_products.map((product, index) => (
								<ProductSizes
									key={index}
									updateSubProduct={updateSubProduct}
									product={product}
									delete_sub_product={delete_sub_product}
								/>
							))}

						<CreateButton mh={0.25} handlePress={() => createSubProduct()} />
					</>
				)}
			</View>
		</View>
	);
};

export default Price;
