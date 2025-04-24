import React, {useEffect, useState} from 'react';
import {View, Image, Text, Pressable, TouchableOpacity} from 'react-native';
import myColors from '../../styles/myColors';
import DeleteIcon from '../../components/common/DeleteIcon';
import ad_styles from './styles';
import commonstyles from '../../styles/defultStyles';
import {theme_color} from '../../mutils';
import buttonStyles from '../../styles/buttonStyles';
import {strings} from '../../i18n';

const CardType = ({item, navigation}) => {
	const [status, setStatus] = useState('');
	const [statusTxtColor, setStatusTxtColor] = useState('');

	const [remainingDays, setRemainingDays] = useState(0);

	useEffect(() => {
		if (item) {
			if (parseInt(item.is_active) === 1 && parseInt(item.is_approved) === 1) {
				setStatus('Active');
				setStatusTxtColor(myColors.successColor);
			} else if (parseInt(item.is_approved) === 1) {
				setStatus('Approved');
				setStatusTxtColor(myColors.successColor);
			}
			if (parseInt(item.is_approved) === 0) {
				setStatus('Pending');
				setStatusTxtColor(myColors.slate500);
			}

			if (item.date_from && item.date_to) {
			} else if (item.days) {
				setRemainingDays(item.days);
			}
		}
	}, [item]);

	useEffect(() => {
		if (item) {
			if (parseInt(item.is_approved) === 1 && parseInt(item.is_active) === 0) {
				if (remainingDays < 0) {
					setStatus('Expired');
					setStatusTxtColor('#FF0000');
				}
			}
		}
	}, [remainingDays, item]);

	return (
		<View>
			<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 12}}>
				{status === 'declined' ? (
					<Image
						style={{
							width: 20,
							height: 20,
							marginRight: 8,
						}}
						source={require('../../../assets/images/declined.png')}
					/>
				) : null}
				{status === 'Pending' ? (
					<Image
						style={{
							width: 20,
							height: 20,
							marginRight: 8,
						}}
						source={require('../../../assets/images/pending.png')}
					/>
				) : null}
				{status === 'Approved' ? (
					<Image
						style={{
							width: 20,
							height: 20,
							marginRight: 8,
						}}
						source={require('../../../assets/images/success-green.png')}
					/>
				) : null}

				<Text
					style={[
						{
							color: statusTxtColor,
						},
					]}>
					{strings(status)}
				</Text>
			</View>
			<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 5}}>
				{['pending', 'failed'].includes(item.payment_status) && item.payment_link ? (
					<Pressable onPress={() => navigation.navigate('PaymentPage', {item: item})}>
						<View
							style={[
								buttonStyles.smallBtn,
								{
									backgroundColor: theme_color,
									marginHorizontal: 0,
								},
							]}>
							<Text style={commonstyles.longBtnTxt}>{strings('Go For Pay')}</Text>
						</View>
					</Pressable>
				) : (
					<React.Fragment>
						{['Active'].includes(status) ? (
							<View>
								<Text style={commonstyles.underlinedata}>
									{item.days} {strings('Days remaining')}
								</Text>
							</View>
						) : (
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() =>
									navigation.navigate('CheckDetails', {
										item: item,
									})
								}>
								<View style={[{borderWidth: 1, marginLeft: 0}, buttonStyles.smallBtn]}>
									<Text>{strings('Check Details')}</Text>
								</View>
							</TouchableOpacity>
						)}
					</React.Fragment>
				)}

				<Text>
					{strings('ID:')} {item.id}
				</Text>
			</View>
		</View>
	);
};

export default CardType;

// if (status == 'Active' || status == 'Expired') {
// 	return (
// 		<View>
// 			{status == 'Active' && (
// 				<View style={{flexDirection: 'row', marginBottom: 12}}>
// 					<Text
// 						style={[
// 							//commonstyles.underlinedata,
// 							{
// 								color: myColors.successColor,
// 								marginLeft: 4,
// 							},
// 						]}>
// 						{item.status}
// 					</Text>
// 				</View>
// 			)}
// 			{status == 'Expired' && (
// 				<View style={{flexDirection: 'row', marginBottom: 12}}>
// 					<Text
// 						style={[
// 							commonstyles.underlinedata,
// 							{
// 								color: 'red',
// 							},
// 						]}>
// 						{item.status}
// 					</Text>
// 				</View>
// 			)}
// 			<View style={{flexDirection: 'row'}}>
// 				{
// 					[].includes(status) ?
// 						<View style={{flex: 0.9}}>
// 							<View>
// 								<Text style={commonstyles.underlinedata}>{item.remaining}</Text>
// 							</View>
// 						</View>
// 						:
// 					<View style={{flex: 0.9}}>
// 						<Pressable
// 							onPress={() =>
// 								navigation.navigate('CheckDetails', {
// 									status: status,
// 								})
// 							}>
// 							<View style={[{borderWidth: 1, marginLeft: 0}, buttonStyles.smallBtn]}>
// 								<Text>Check Details</Text>
// 							</View>
// 						</Pressable>
// 					</View>

// 				}

// 				<IDCard item={item} />
// 			</View>
// 		</View>
// 	);
// } else if (status == 'Pending' || status == 'declined') {
// 	return (
// 		<View>
// 			{status == 'declined' && (
// 				<View style={{flexDirection: 'row', marginBottom: 12}}>
// 					<Image
// 						style={{
// 							width: 20,
// 							height: 20,
// 							marginRight: 8,
// 						}}
// 						source={require('../../../assets/images/declined.png')}
// 					/>
// 					<Text
// 						style={[
// 							commonstyles.underlinedata,
// 							{
// 								color: myColors.slate500,
// 							},
// 						]}>
// 						{item.status}
// 					</Text>
// 				</View>
// 			)}
// 			{status == 'Pending' && (
// 				<View style={{flexDirection: 'row', marginBottom: 12}}>
// 					<Image
// 						style={{
// 							width: 20,
// 							height: 20,
// 							marginRight: 8,
// 						}}
// 						source={require('../../../assets/images/pending.png')}
// 					/>
// 					<Text
// 						style={[
// 							commonstyles.underlinedata,
// 							{
// 								color: theme_color,
// 							},
// 						]}>
// 						{status}
// 					</Text>
// 				</View>
// 			)}
// 			<View style={{flexDirection: 'row'}}>
// 				<View style={{flex: 0.9}}>
// 					<Pressable
// 						onPress={() =>
// 							navigation.navigate('CheckDetails', {
// 								status: status,
// 							})
// 						}>
// 						<View style={[{borderWidth: 1, marginLeft: 0}, buttonStyles.smallBtn]}>
// 							<Text>Check Details</Text>
// 						</View>
// 					</Pressable>
// 				</View>
// 				<IDCard item={item} />
// 			</View>
// 		</View>
// 	);
// } else if (status == 'Approved') {
// 	return (
// 		<View>
// 			<View style={{flexDirection: 'row', marginBottom: 12}}>
// 				<Image
// 					style={{
// 						width: 20,
// 						height: 20,
// 						marginRight: 8,
// 					}}
// 					source={require('../../../assets/images/success-green.png')}
// 				/>
// 				<Text style={{color: myColors.successColor}}>{status}</Text>
// 			</View>
// 			<View style={{flexDirection: 'row', flex: 0.9}}>
// 				<Pressable onPress={() => navigation.navigate('PaymentPage')}>
// 					<View
// 						style={[
// 							{
// 								backgroundColor: theme_color,
// 							},
// 							buttonStyles.smallBtn,
// 						]}>
// 						<Text style={commonstyles.longBtnTxt}>Go For Pay</Text>
// 					</View>
// 				</Pressable>
// 				<IDCard item={item} />
// 			</View>
// 		</View>
// 	);
// } else {
// 	return (
// 		<View>
// 			<View style={{flexDirection: 'row', marginBottom: 12}}>
// 				<Image
// 					style={{
// 						width: 20,
// 						height: 20,
// 						marginRight: 8,
// 					}}
// 					source={require('../../../assets/images/success-green.png')}
// 				/>
// 				<Text> {item.status}</Text>
// 			</View>
// 			<View style={{flexDirection: 'row'}}>
// 				<View style={{flex: 0.5}}>
// 					<Text> {item.name} </Text>
// 				</View>
// 				<IDCard item={item} />
// 			</View>
// 		</View>
// 	);
// }
