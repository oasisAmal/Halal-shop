import React from 'react';
import {Text, View} from 'react-native';
import mainstyles from './styles';
import commonstyles from '../../styles/defultStyles';
import {strings} from '../../i18n';

function TotalOrders(props) {
	return (
		<View
			style={[
				mainstyles.formView,
				{
					height: 65,
					marginTop: props.mt ? props.mt : 8,
				},
			]}>
			<View style={commonstyles.flewRow}>
				<Text style={mainstyles.totalOrderTxt}>
					{strings('Total Orders:')} {props.total}
				</Text>
				{/* <View style={mainstyles.exportView}>
					<Text style={commonstyles.longBtnTxt}>Export</Text>
				</View> */}
			</View>
		</View>
	);
}

export default TotalOrders;
