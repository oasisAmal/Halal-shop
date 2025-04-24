import React, {memo, useEffect, useState} from 'react';
import {View} from 'react-native';
import ItemComponent from '../ItemComponent';
import cardStyles from '../../../styles/cardStyles';
import {strings} from '../../../i18n';

const CardDetails = memo(({order}) => {
	let bgColor = 'white';

	const [orderStatus, setOrderStatus] = useState(undefined);

	useEffect(() => {
		if (order) {
			order.status.map(status => {
				if (parseInt(status.checked) === 1) {
					setOrderStatus(status.status);
				}
			});
		}
	}, [order]);

	return (
		<View style={cardStyles.container}>
			<View>
				<View style={[{backgroundColor: bgColor}, cardStyles.view1]}></View>
				<View style={{backgroundColor: bgColor}}>
					<View style={{flex: 1}}>
						<ItemComponent
							mainText1={strings('ID')}
							mainText2={strings('User Name')}
							subText1={order.id}
							subText2={order.user ? `${order.user.first_name} ${order.user.last_name}` : ''}
						/>
						<ItemComponent
							mainText1={strings('Emirate')}
							mainText2={strings('Region')}
							subText1={order.emirate ? order.emirate.name : ''}
							subText2={order.region ? order.region.name : ''}
						/>
						<ItemComponent
							mainText1={strings('Total')}
							mainText2={strings('Paying Off')}
							subText1={order.total}
							subText2={order.payment ? order.payment.status : ''}
						/>
						<ItemComponent
							mainText1={strings('Mobile')}
							mainText2={strings('Status')}
							subText1={order.user ? order.user.mobile : ''}
							subText2={orderStatus}
						/>
						<ItemComponent
							mainText1={strings('Date')}
							mainText2={strings('Time')}
							subText1={order.date}
							subText2={`${order.time.from} - ${order.time.to}`}
						/>
						<ItemComponent
							mainText1={strings('Total before tax')}
							mainText2={strings('Delivery')}
							subText1={order.subtotal}
							subText2={order.delivery}
						/>
					</View>
				</View>
			</View>
		</View>
	);
});

export default CardDetails;
