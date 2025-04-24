import React, {useState} from 'react';
import { Text, Pressable, View, TextInput, Image, TouchableOpacity} from 'react-native';
import commonstyles from '../../styles/defultStyles';
import DecisionButtonsSmall from '../decision-buttons-small';
import modalStyles from '../../styles/modalStyles';
import timeStyles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import TimeWithInput from '../common/TimeWithInput';
import CheckBox from '../common/CheckBox';
import {strings} from '../../i18n';
import Modal from 'react-native-modal'

const AvailableTime = props => {
	const [availableOnFriday, setAvailableOnFriday] = useState(false);
	const [hoursBeforeOrder, setHoursBeforeOrder] = useState('');
	const [maxOrders, setMaxOrders] = useState('');

	const [fromTime, setFromTime] = useState('');
	const [toTime, setToTime] = useState('');

	const onSubmit = () => {
		const data = {
			checked: 1,
			from: fromTime,
			to: toTime,
			hours_before_order: hoursBeforeOrder,
			max_order: maxOrders,
			not_available_in_friday: availableOnFriday ? '1' : '0',
		};

		props.onSubmit(data);
		props.toggleModal();
	};

	return (

		<View style={{}}>
			<Modal isVisible={true} backdropColor={myColors.backdropColor}>
				<View style={modalStyles.centerModal}>
				<View style={modalStyles.modalView}>
			
			<View style={{flexDirection: 'row'}}>
				<View style={{flex: 0.9}}>
					<Text style={modalStyles.header}>{strings('Select Available Time')}</Text>
				</View>
				<View style={{flex: 0.1, flexDirection: 'row-reverse'}}>
					{/* <Pressable onPress={() => props.toggleModal()}>
						<Image source={require('../../../assets/images/close.png')} style={timeStyles.closeImg} />
					</Pressable> */}
				</View>
			</View>
			<View style={{}}>
				<TimeWithInput
					label={strings('From')}
					placeholder={fromTime ? fromTime : strings('Select Time')}
					onSubmit={time => setFromTime(time)}
					mb={8}
					latest={true}
				/>
			</View>
			<View style={{}}>
				<TimeWithInput
					label={strings('To')}
					placeholder={toTime ? toTime : strings('Select Time')}
					onSubmit={time => setToTime(time)}
					mb={8}
					latest={true}
				/>
			</View>
			<View>
				<Text style={commonstyles.mainTxt}>{strings('Hours Before Ordering')}</Text>
				<TextInput
					style={commonstyles.input}
					value={hoursBeforeOrder}
					onChangeText={txt => setHoursBeforeOrder(txt)}
				/>
			</View>
			<View>
				<Text style={commonstyles.mainTxt}>{strings('Maximum Orders')}</Text>
				<TextInput style={commonstyles.input} value={maxOrders} onChangeText={txt => setMaxOrders(txt)} />
			</View>
			<View style={{width: '100%', marginTop: 10}}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={[{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}]}
					onPress={() => setAvailableOnFriday(prevState => !prevState)}>
					<View>
						<CheckBox ticked={availableOnFriday} />
					</View>
					<Text style={commonstyles.mainTxt}>{strings('Not Available On Friday')}</Text>
				</TouchableOpacity>
			</View>
			<DecisionButtonsSmall
				handleOk={onSubmit}
				handlePress={props.toggleModal}
				btnOk={props.btnOk ? props.btnOk : strings('Save')}
			/>
		
	</View>
				</View>
			</Modal>
		</View>
	);
};

export default AvailableTime;
