import React, {Component} from 'react';
import {View, I18nManager} from 'react-native';
import ItemComponent from './ItemComponent';
import PictureItem from './PictureItem';
import {DeleteProductService} from '../../services/ProductService';
import {strings} from '../../i18n';

export default class ProductCardViewNeedApproval extends Component {
	constructor(props) {
		super(props);
	}
	navigateToEditProduct = () => {
		if (this.props.handleEdit) {
			this.props.handleEdit();
		} else {
			this.props.navigation.navigate('EditProduct', {id: this.props.product.id, product: this.props.product});
		}
	};

	deleteProduct() {
		DeleteProductService(
			{
				id: this.props.product.id,
			},
			this.onSuccessDelete,
			this.onErrorDelete,
		);
	}
	onSuccessDelete = () => {
		alert('successfully deleted');
		this.props.setrefreshPage();
	};

	onErrorDelete = () => {
		alert('error in  deleting product');
	};

	render() {
		let bgColor = 'white';
		let {product} = this.props;
		return (
			<View
				key={this.props.index}
				style={{
					elevation: 0,
					borderColor: 'white',
					borderRadius: 8,
				}}>
				<View>
					{/* <EditDeleteButtons
						//deleteProduct={deleteProduct}
						enableButtons={true}
						handleEdit={() => this.navigateToEditProduct()}
						handleDelete={() => this.deleteProduct()}
					/> */}

					<View style={{backgroundColor: bgColor}}>
						<View style={{flex: 1, marginTop: 8}}>
							<ItemComponent
								mainText1={strings('ID')}
								mainText2={strings('Product Name')}
								subText1={product.id}
								subText2={product.name}
							/>
							<PictureItem
								mainText1={strings('Section')}
								mainText2={strings('Picture')}
								subText1={product?.category?.name}
								image={product?.image}
							/>
							<ItemComponent
								mainText1={strings('Branch')}
								mainText2={strings('Back Prices')}
								subText1={I18nManager.isRTL ? product?.branch?.name : product?.branch?.name_en}
								subText2={product?.price ? product.price : 0 + ' AED'}
							/>
							<ItemComponent
								mainText1={strings('Tags')}
								mainText2={strings('Status')}
								subText1={product.badges && product.badges.length > 0 ? product?.badges[0].name : ''}
								subText2={strings('Pending')} // for rejected approval  2
							/>

							<ItemComponent
								mainText1={strings('Shop')}
								mainText2={''}
								subText1={product.shop && product.shop.name ? product.shop.name : ''}
								subText2={''}
							/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
