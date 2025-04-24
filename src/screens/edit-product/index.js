import React from 'react';
import {View, Text, Image} from 'react-native';
import ListItem from './ListItem';
import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import {strings} from '../../i18n';

const EditProduct = props => {
	navigationOptions = ({navigation}) => {
		return {
			header: null,
		};
	};

	const [activeLabel, setActiveLabel] = React.useState(strings('Details'));

	const handleClick = screen => {
		console.log('hii from edit p ' + props.route.params.id);
		setActiveLabel(screen);
		props.navigation.navigate(screen, {id: props.route.params.id, product: props.route.params.product});
	};
	//const isActiveLabel =

	return (
		<View style={[styles.container, {}]}>
			<Text style={styles.orderTxt}>{strings('Update Products')}</Text>
			<View style={commonstyles.flewRow}>
				<Text style={styles.subheader}>Home / Products / Active Products / Update</Text>
			</View>
			<View>
				<ListItem i="1" label={strings('Details')} activeLabel={activeLabel} handleClick={() => handleClick('Details')} />
				<ListItem i="2" label={strings('Gifts')} activeLabel={activeLabel} handleClick={() => handleClick('Gifts')} />
				<ListItem
					i="3"
					label={strings('Suggested Products')}
					activeLabel={activeLabel}
					handleClick={() => handleClick('Suggested Products')}
				/>
				{/* <ListItem
          i="4"
          label="Alternative Products"
          activeLabel={activeLabel}
          handleClick={() => handleClick('Alternative Products')}
        />
        <ListItem
          i="5"
          label="Special Sections"
          activeLabel={activeLabel}
          handleClick={() => handleClick('Special Sections')}
        /> */}
			</View>
		</View>
	);
};

export default EditProduct;
