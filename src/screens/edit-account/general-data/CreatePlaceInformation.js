import React, {useState} from 'react';
import { StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
import commonstyles from '../../../styles/defultStyles';
import {theme_color} from '../../../mutils';
import DecisionButtonsSmall from '../../../components/decision-buttons-small';
import CloseImage from '../../../components/common/CloseImage';
import modalStyles from '../../../styles/modalStyles';
import {strings} from '../../../i18n';

import Modal from 'react-native-modal'
import myColors from '../../../styles/myColors';


const CreatePlaceInformation = props => {
	const [field, setField] = useState('');
	const [fieldEn, setFieldEn] = useState('');
	const [value, setValue] = useState('');
	const [valueEn, setValueEn] = useState('');

	const onSubmit = () => {
		//() => props.toggleModal(false)
		const newData = {
			key: field,
			key_en: fieldEn,
			value: value,
			value_en: valueEn,
		};

		props.onSubmit(newData);
	};

	return (

		<View style={{}}>
			<Modal isVisible={true} backdropColor={myColors.backdropColor}>
				<View style={modalStyles.centerModal}>
				<View style={modalStyles.modalView}>
				<View style={{flexDirection: 'row', justifyContent:'space-between'}}>
								<View style={{}}>
									<Text style={[modalStyles.header, modalStyles.mediumHeader]}>
										{strings('Create Information About Place')}
									</Text>
								</View>
								<View style={{  flexDirection: 'row-reverse'}}>
									<Pressable onPress={() => props.toggleModal(false)}>
										<CloseImage />
									</Pressable>
								</View>
							</View>
							
							<View style={[commonstyles.mh16, {marginTop: 24}]}>
								<Text style={commonstyles.mainTxt}>{strings('Field')}</Text>
								<TextInput style={commonstyles.input} value={field} onChangeText={txt => setField(txt)} />
							</View>
							<View style={[commonstyles.mh16, {}]}>
								<Text style={commonstyles.mainTxt}>{strings('Field in English')}</Text>
								<TextInput style={commonstyles.input} value={fieldEn} onChangeText={txt => setFieldEn(txt)} />
							</View>
							<View style={[commonstyles.mh16, {}]}>
								<Text style={commonstyles.mainTxt}>{strings('Value')}</Text>
								<TextInput style={commonstyles.input} value={value} onChangeText={txt => setValue(txt)} />
							</View>
							<View style={[commonstyles.mh16, {}]}>
								<Text style={commonstyles.mainTxt}>{strings('Value In English')}</Text>
								<TextInput style={commonstyles.input} value={valueEn} onChangeText={txt => setValueEn(txt)} />
							</View>
							{/* <View style={[commonstyles.mh16, {}]}>
								<Text style={commonstyles.mainTxt}>Icon </Text>
								<TextInput style={commonstyles.input} />
							</View> */}
							<DecisionButtonsSmall handlePress={props.toggleModal} handleOk={onSubmit} btnOk={strings('Next')} />
						
							
	</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	btn: {
		width: '100%',
		paddingVertical: 12,
		height: 45,
		//paddingHorizontal: 24,
		borderRadius: 6,
		//marginVertical: 8,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
		width: 361,
	},
	modalView: {
		// minHeight: 434,
		// margin: 20,
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 35,
		alignItems: 'center',
		shadowColor: theme_color,
		shadowOffset: {
			//   width: 0,
			//   height: 2,
		},
		shadowOpacity: 1,
		//shadowRadius: 4,
		elevation: 4,
		marginBottom: 40,
	},
});

export default CreatePlaceInformation;
