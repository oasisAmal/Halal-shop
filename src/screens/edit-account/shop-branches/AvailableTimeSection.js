import React, {useState, useEffect} from 'react';
import {Text} from 'native-base';
import {Image, PixelRatio, View, Pressable, Alert} from 'react-native';
import ItemComponent from '../../reports/ItemComponent';
import styles from '../../../styles/itemStyles';
import {connect} from 'react-redux';
import {toggleBlur} from '../../../store/reducers';
import CheckBox from '../../../components/common/CheckBox';
import CreateButton from '../../../components/create-button';
import AvailableTime from '../../../components/available-time';
import {strings} from '../../../i18n';
import {ScrollView} from 'react-native-gesture-handler';

const AvailableTimeList = ({index, time, onDelete}) => {
	let bgColor = 'white';

	const onDeleteRecord = () => {
		Alert.alert(strings('Delete'), strings('Are you sure you want to delete this data?'), [
			{
				text: strings('CANCEL'),
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{text: strings('Delete'), onPress: () => deleteRecord(), style: 'destructive'},
		]);
	};

	const deleteRecord = () => {
		onDelete(index);
	};

	return (
		<View
			style={{
				elevation: 0,
				borderColor: 'white',
				borderRadius: 8,
				marginBottom: 16,
				marginRight: 8,
			}}>
			<View>
				<View
					style={{
						flex: 1,
						padding: 10,
						flexDirection: 'row',
						backgroundColor: bgColor,
					}}>
					<View style={{flex: 0.5}}></View>
					<View style={{flexDirection: 'row-reverse', flex: 0.5}}>
						<Pressable onPress={onDeleteRecord}>
							<Image
								source={require('../../../../assets/images/Trash.png')}
								style={{
									width: PixelRatio.getPixelSizeForLayoutSize(12),
									height: PixelRatio.getPixelSizeForLayoutSize(10),
									marginRight: 12,
								}}
							/>
						</Pressable>
					</View>
				</View>

				<View style={{backgroundColor: bgColor}}>
					<View style={{flex: 1}}>
						<ItemComponent mainText1={strings('From')} mainText2={strings('To')} subText1={time.from} subText2={time.to} />
						<ItemComponent
							mainText1={strings('Hours Before Ordering')}
							mainText2={strings('Maximum Orders')}
							subText1={time.hours_before_order}
							subText2={time.max_order}
						/>

						<View
							style={{
								flexDirection: 'row',
								marginBottom: 20,
								marginLeft: 16,
							}}>
							<View style={{flex: 0.5, marginRight: 16}}>
								<Text style={styles.mainTxt}>{strings('Not Available On Friday')}</Text>
								<CheckBox ticked={parseInt(time.not_available_in_friday) ? true : false} />
							</View>
							<View style={{flex: 0.5, marginRight: 16}}></View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};
let AvailableTimeSection = props => {
	const [availableTime, setAvailableTimeOpened] = React.useState(false);
	const [shopTimes, setShopTimes] = useState([]);

	useEffect(() => {
		if (shopTimes.length === 0) {
			setShopTimes(props.deliveryTimesData);
		}
	}, [props.deliveryTimesData, shopTimes]);

	const handleAvilableButton = () => {
		setAvailableTimeOpened(!availableTime);
		// props.toggleBlur(!props.enableBlur);
	};

	const onSubmitTime = data => {
		setShopTimes(prevState => {
			return [...prevState, data];
		});
		props.onNewTime(data);

		handleAvilableButton();
	};

	const onDelete = index => {
		setShopTimes(prevState => prevState.filter((_, itemIndex) => itemIndex !== index));
		props.onDeleteTime(index);
	};

	return (
		<View>
			<CreateButton mh={2} label={strings('Available Time')} handlePress={() => handleAvilableButton()} />
			{availableTime && <AvailableTime onSubmit={onSubmitTime} toggleModal={() => handleAvilableButton()} />}

			<ScrollView horizontal>
				{shopTimes.map((time, index) => {
					return <AvailableTimeList key={index} time={time} index={index} onDelete={onDelete} />;
				})}
			</ScrollView>
		</View>
	);
};

const mapStateToProps = state => {
	return {
		enableBlur: state.enableBlur,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		toggleBlur: cart_item => dispatch(toggleBlur(cart_item)),
	};
}

export default AvailableTimeSection = connect(mapStateToProps, mapDispatchToProps)(AvailableTimeSection);
