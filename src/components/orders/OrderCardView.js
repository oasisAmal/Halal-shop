import React, {Component} from 'react';
import {Text} from 'native-base';
import {Image, View, Pressable} from 'react-native';
import ItemComponent from './ItemComponent';
import styles from './styles';
import {strings} from '../../i18n';
import myColors from '../../styles/myColors';

export default class OrderCardView extends Component {
	render() {
		let order = this.props.order;
		let isNewOrder = order.is_read == 1 ? false : true;
		let isDelivered = order.is_deliverd == 1 ? true : false;
		let is_thirt_min = order.is_thirt_min == 1 ? true : false;
		let is_cancelled = order.status.id == 4 ? true : false;
		// let bgColor = isNewOrder ? '#FFEAEA' : 'white';
		let bgColor = isNewOrder ? '#E6F9EE' : is_cancelled ? '#FFEAEA' : 'white';

		let isVIPUser = order.is_vip == 1 ? true : false;
		//console.log("im vip " + isVIPUser +" id" + order.id )
		return (
			<View
				key={this.props.index}
				style={{
					borderColor: 'white',
					borderRadius: 8,
					backgroundColor: bgColor,
					marginBottom: 16,
				}}>
				<View
					style={{
						paddingHorizontal: 16,
						paddingVertical: 16,
						flexDirection: 'row',
					}}>
					<View style={{flex: 0.5, flexDirection: 'row'}}>
						{is_thirt_min && (
							<>
								<Image
									source={require('../../../assets/images/processing-time.png')}
									style={{
										width: 24,
										height: 24,
									}}
								/>
								<Text style={styles.thirtyMinutes}>30 {strings('Minutes')}</Text>
							</>
						)}
						{isDelivered && (
							<Image
								source={require('../../../assets/images/success-order.png')}
								style={{
									width: 24,
									height: 24,
									//marginLeft: 8,
								}}
							/>
						)}
					</View>
					<View style={{flexDirection: 'row-reverse', flex: 0.5}}>
						<Image
							source={require('../../../assets/images/flag-new.png')}
							style={{
								width: 24,
								height: 24,
							}}
						/>
					</View>
				</View>

				<View>
					<View style={{flex: 1}}>
						<ItemComponent
							mainText1={strings('Order ID')}
							mainText2={strings('User Name')}
							subText1={order.id}
							subText2={order?.user?.name}
							isVIPUser={isVIPUser}
						/>
						<ItemComponent
							mainText1={strings('Mobile')}
							mainText2={strings('Shop')}
							subText1={order.user?.mobile}
							subText2={order.shop?.name}
							isVIPUser={isVIPUser}
						/>
						<ItemComponent
							mainText1={strings('Total')}
							mainText2={strings('Date')}
							subText1={order.total}
							subText2={order.date}
							isVIPUser={isVIPUser}
						/>
						<ItemComponent
							mainText1={strings('Time')}
							mainText2={strings('Emirate')}
							subText1={order?.time?.from + ' - ' + order?.time?.to}
							subText2={order?.emirate?.name}
							isVIPUser={isVIPUser}
						/>
						<ItemComponent
							mainText1={strings('Region')}
							mainText2={strings('Printed')}
							subText1={order?.region?.name}
							subText2={order.is_printed == 1 ? strings('Yes') : strings('No')}
							isVIPUser={isVIPUser}
						/>

						<View>
							<ItemComponent mainText1={strings('Status')} mainText2={''} subText1={order.status?.name} subText2={''} />
						</View>
						<View
							style={{
								flexDirection: 'row',
								marginBottom: 16,
								marginLeft: 16,
							}}>
							<Pressable
								onPress={() => {
									this.props.handleComplete(order);
									this.props.navigation.navigate('OrderDetails', {
										order_id: order.id,
										order: order,
									});
								}}>
								<View style={styles.acceptBtn}>
									<Text style={{fontSize: 14, textAlign: 'center', color: myColors.clrWhite}}>
										{strings('View')}{' '}
									</Text>
								</View>
							</Pressable>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
