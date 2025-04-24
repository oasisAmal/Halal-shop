import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import Textarea from '../common/Textarea';
import {toastMessage} from '../utils/functions/commonFunctions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AddNoteService, AddUserNoteService} from '../../services/OrdersServices';
import {strings} from '../../i18n';
const AddNote = props => {
	let [inputValue, setInputValue] = React.useState('');

	const handleNote = () => {
		if (inputValue == '') {
			toastMessage(strings('Please type your notes'));
		} else {
			if ((props.notetype = 'note')) {
				AddNoteService(
					{
						order_id: props.orderID,
						note: inputValue,
					},
					onSuccess,
					onError,
				);
			} else {
				// customer note
				AddUserNoteService(
					{
						order_id: props.orderID,
						customer_note: inputValue,
					},
					onSuccess,
					onError,
				);
			}
		}
	};

	const onSuccess = response => {
		toastMessage(strings('Success'));
	};
	const onError = error => {
		console.log('response.data.data' + error);
	};

	return (
		<View style={styles.noteMain}>
			<Text style={styles.title}>{props.title}</Text>
			<Textarea onChangeText={inputValue => setInputValue(inputValue)} />
			<TouchableOpacity onPress={() => handleNote()}>
				<View style={styles.btn}>
					<Text style={styles.btnTxt}>{strings('Add a Note')} </Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default AddNote;
