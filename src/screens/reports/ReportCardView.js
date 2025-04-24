import React, {memo} from 'react';
import {View, Pressable} from 'react-native';
import ItemComponent from './ItemComponent';

import {strings} from '../../i18n';

const bgColor = 'white';

const ReportCardView = memo(({order, submittedData, navigation}) => {
	return (
		<Pressable
			style={{
				elevation: 0,
				borderColor: 'white',
				borderRadius: 8,
				marginBottom: 16,
				marginHorizontal: 16,
			}}
			onPress={() =>
				navigation.push('ViewReport', {
					data: order,
					submittedData: submittedData,
				})
			}>
			{/* <View
					style={{
						flex: 1,
						padding: 10,
						flexDirection: 'row',
						backgroundColor: bgColor,
						//marginBottom: 16
					}}>
					<View style={{flex: 0.5}}></View>
					<View style={{flexDirection: 'row-reverse', flex: 0.5}}>
						<Pressable
							onPress={() => {
								navigation.navigate('ViewReport');
							}}>
							<Image
								source={require('../../../assets/images/eye.png')}
								style={{
									width: PixelRatio.getPixelSizeForLayoutSize(14),
									height: PixelRatio.getPixelSizeForLayoutSize(12),
									// width: 12,
									// height: 10,
								}}
							/>
						</Pressable>
					</View>
				</View> */}

			<View style={{paddingTop: 16, backgroundColor: bgColor}}>
				<ItemComponent mainText1={'ID'} mainText2={'Shop'} subText1={`${order.id}`} subText2={`${order.name}`} />
				<ItemComponent
					mainText1={strings('Completed Orders')}
					mainText2={strings('Cancelled Orders')}
					subText1={`${order.orders_count}`}
					subText2={`${order.canceled_orders_count}`}
				/>
				<ItemComponent
					mainText1={strings('Vip Discount')}
					mainText2={strings('Delivery with tax')}
					subText1={order.vip_discount ? `${order.vip_discount}` : '0'}
					subText2={order.delivery}
				/>
				<ItemComponent
					mainText1={strings('Delivery via')}
					mainText2={strings('Total Sales')}
					subText1={order.shipping_by_zabehaty}
					subText2={order.orders_sum_total}
				/>
				<ItemComponent
					mainText1={strings('Sales without delivery')}
					mainText2={strings('Cooking')}
					subText1={order.total_without_delivery}
					subText2={order.cooking_price}
				/>
				<ItemComponent
					mainText1={strings('Net Sales')}
					mainText2={strings('Emirate')}
					subText1={order.total_without_delivery}
					subText2={order.branch_name}
				/>
				<ItemComponent
					mainText1={strings('Section')}
					mainText2={strings('Date Created')}
					subText1={order.department_name}
					subText2={order.created_at}
				/>
				<ItemComponent
					mainText1={strings('Tamara')}
					mainText2={strings('Wallet')}
					subText1={order.tamara_percentage}
					subText2={order.balance}
				/>

				{/* <View
					style={{
						flexDirection: 'row',
						marginBottom: 20,
						marginLeft: 16,
					}}>
					<View style={{flex: 0.5, marginRight: 16}}>
						<Text style={styles.mainTxt}>My Sacrifice Rate </Text>
						<Text style={styles.subTxt}>0.00 </Text>
					</View>
					<View style={{flex: 0.5, marginRight: 16}}>
						<Text style={styles.mainTxt}>Portfolio </Text>

						<Text
							onPress={() => {
								this.props.navigation.navigate('Wallet');
							}}
							style={[
								styles.subTxt,
								{
									color: theme_color,
									textDecorationLine: 'underline',
								},
							]}>
							Details{' '}
						</Text>
					</View>
				</View> */}
			</View>
		</Pressable>
		// { id: 138,
		//   name: 'new',
		//   orders_count: 0,
		//   canceled_orders_count: 0,
		//   vip_discount: null,
		//   delivery: 0,
		//   shipping_by_zabehaty: 'المتجر',
		//   orders_sum_total: '0.00',
		//   total_without_delivery: '0.00',
		//   cooking_price: '0.00',
		//   rest_total: '0.00',
		//   branch_name: null,
		//   department_name: 'Vegetables & Fruits',
		//   created_at: '2022-11-28 12:54:36',
		//   zabehaty_percentage_value: '0.00',
		//   tamara_percentage: '0.00',
		//   balance: 0 },
	);
});

export default ReportCardView;
