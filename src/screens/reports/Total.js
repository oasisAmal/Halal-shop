import React from 'react';
import {View, Text} from 'react-native';
import mainstyles from './styles';
import styles from '../../styles/itemStyles';

import {strings} from '../../i18n';

function Total(props) {
	return (
		<View style={[mainstyles.formView]}>
			<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
				<Text style={styles.mainTxt}>{strings('Total')}</Text>
				<Text style={styles.subTxt}>{props.total.toFixed(2)}</Text>
			</View>
		</View>
	);
}

export default Total;
