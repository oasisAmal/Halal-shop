import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import {strings} from '../../i18n';

const QuantityComponent = props => {
	const {set_quantity_step, set_quantity_min} = props;
	return (
		<View style={{}}>
			<Text style={styles.subheader}>{strings('Quantity')} </Text>
			<View style={styles.formView}>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}> {strings('Less Amount')} </Text>
					<TextInput style={styles.input} placeholder={strings('Type')} onChangeText={q_min => set_quantity_min(q_min)} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}> {strings('The Amount Increase Each Time')} </Text>
					<TextInput style={styles.input} placeholder={strings('Type')} onChangeText={q_step => set_quantity_step(q_step)} />
				</View>
			</View>
		</View>
	);
};

export default QuantityComponent;
