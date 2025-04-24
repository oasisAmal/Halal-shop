import React from 'react';
import {View} from 'react-native';
import styles from '../../edit-product-details/styles';
import {ScrollView} from 'react-native-gesture-handler';
import SubHeader from '../../../components/partials/Subheader';
import List from './List';
import {strings} from '../../../i18n';

let Regions = props => {
	const {shop} = props.route.params;

	navigationOptions = ({navigation}) => {
		return {
			header: null,
		};
	};

	return (
		<View
			style={[
				styles.container,
				{
					opacity: props.enableBlur ? 0.2 : 1,
				},
			]}>
			<ScrollView>
				<SubHeader title={strings('Regions')} subtitle={`Home / Edit Shop Details / ${shop.name} / Regions`} />
				<List shop={shop} />
			</ScrollView>
		</View>
	);
};

export default Regions;
