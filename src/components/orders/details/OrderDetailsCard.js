import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';
import DetailsItemComponent from './DetailsItemComponent';
import {strings} from '../../../i18n';
import {theme_color} from '../../../mutils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AddressOnMap from '../../address-on-map/index';

const OrderDetailsCard = props => {
	let d = props.orderDetails;
	const date = new Date(d.created_at);
	console.log('details order');
	console.log(d?.details);
	return (
		<View style={styles.container}>
			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Order ID')}</Text>
					<Text style={styles.subTxt}> {d.id} </Text>
				</View>
				<View style={styles.rightView}>
					<Text style={styles.mainTxt}>{strings('User Name')}</Text>
					<Text style={styles.subTxt}>{d.user ? d.user.name : ''}</Text>
				</View>
			</View>
			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Mobile')}</Text>
					<Text style={styles.subTxt}> {d.user ? d.user.mobile : ''}</Text>
				</View>
				<View style={styles.rightView}>
					<Text style={styles.mainTxt}>{strings('Amount Without tax')}</Text>
					<Text style={styles.subTxt}> {d.subtotal}</Text>
				</View>
			</View>
			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Total')}</Text>
					<Text style={styles.subTxt}> {d.total} AED</Text>
				</View>
				<View style={styles.rightView}>
					<Text style={styles.mainTxt}>{strings('Tax')} </Text>
					<Text style={styles.subTxt}>{d.tax}</Text>
				</View>
			</View>
			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Order Date')}</Text>
					<Text style={styles.subTxt}> {date.toDateString()}</Text>
				</View>
				<View style={styles.rightView}>
					<Text style={styles.mainTxt}>{strings('Order Time')} </Text>
					<Text style={styles.subTxt}>{date.toLocaleString('en-US', {hour: 'numeric', hour12: true})}</Text>
				</View>
			</View>
			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Expected Delivery Date')}</Text>
					<Text style={styles.subTxt}> {d.date}</Text>
				</View>
				<View style={styles.rightView}>
					<Text style={styles.mainTxt}>{strings('Expected Delivery Time')}</Text>
					<Text style={styles.subTxt}>{d?.time?.from + ' - ' + d?.time?.to}</Text>
				</View>
			</View>
			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Emirate')} </Text>
					<Text style={styles.subTxt}>{d.emirate ? d.emirate.name : ''} </Text>
				</View>
				<View style={styles.rightView}>
					<Text style={styles.mainTxt}>{strings('Region')}</Text>
					<Text style={styles.subTxt}>{d.region ? d.region.name : ''}</Text>
				</View>
			</View>
			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Order Status')} </Text>
					<Text style={styles.subTxt}>{d?.status?.name}</Text>
				</View>
				<View style={styles.rightView}>
					<Text style={styles.mainTxt}>{strings('Distributer')}</Text>
					<Text style={styles.subTxt}>{d.shop ? d.shop.name : ''}</Text>
				</View>
			</View>
			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Inside by')}</Text>
					<Text style={styles.subTxt}>{d.source}</Text>
				</View>
				<View style={styles.rightView}>
					<Text style={styles.mainTxt}>{strings('Payment Method')} </Text>
					<Text style={styles.subTxt}>{d.payment ? d.payment.name : ''} </Text>
				</View>
			</View>

			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Last Update')} </Text>
					<Text style={styles.subTxt}>{d.updated_at}</Text>
				</View>
				<View style={styles.rightView}>
					<Text style={styles.mainTxt}>{strings('Collection ID')} </Text>
					<Text style={styles.subTxt}>{d.order_collection_id} </Text>
				</View>
			</View>
			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Actual Delivery')} </Text>
					<Text style={styles.subTxt}>{d.delivered_at}</Text>
				</View>
				<View style={styles.rightView}>
					<Text style={styles.mainTxt}>{strings('Extra Requests')} </Text>

					{ d?.details && ( d?.details.map(item=>{
						return item.details.map(i=>{
							return   i?.id==1016&&  i?.values && i.values.length > 0 && i.values.map(v=>{
								return <Text style={styles.subTxt} >{v} </Text>
							})
						})				
					})	
					)}
				</View>
			</View>
			<View style={styles.mainView}>
				<View style={styles.leftView}>
					<Text style={styles.mainTxt}>{strings('Address on Map')} </Text>
					<TouchableOpacity onPress={() => props.setShowMap(true)}>
						<Text
							style={[
								styles.subTxt,
								{
									color: theme_color,
								},
							]}>
							{strings('Google Map')}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.rightView}></View>
			</View>
		</View>
	);
};

export default OrderDetailsCard;
