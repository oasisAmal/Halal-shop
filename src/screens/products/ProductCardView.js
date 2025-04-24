import React, {Component} from 'react';
import {Image, View, StyleSheet, Pressable, I18nManager} from 'react-native';
import ItemComponent from './ItemComponent';
import ActiveItem from './ActiveItem';
import PictureItem from './PictureItem';
import EditDeleteButtons from '../../components/common/EditDeleteButtons';
import {DeleteProductService} from '../../services/ProductService';
import {deleteProduct} from '../../store/reducers';
import {connect} from 'react-redux';
import {strings} from '../../i18n';

export class ProductCardView extends Component {
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
	onSuccessDelete = response => {
		alert('successfully deleted');
		//this.props.setrefreshPage();
		this.props.deleteProduct(this.props.product);
		console.log(response.data.data);
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
					<EditDeleteButtons
						//deleteProduct={deleteProduct}
						enableButtons={true}
						handleEdit={() => this.navigateToEditProduct()}
						handleDelete={() => this.deleteProduct()}
					/>

					<View style={{backgroundColor: bgColor}}>
						<View style={{flex: 1}}>
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
							<ActiveItem mainText1={strings('Active')} active={product.active} />
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		// enableBlur: state.enableBlur,
		// products: state.products,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		deleteProduct: product => dispatch(deleteProduct(product)),
	};
}

export default ProductCardView = connect(mapStateToProps, mapDispatchToProps)(ProductCardView);
