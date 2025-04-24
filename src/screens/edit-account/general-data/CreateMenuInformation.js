import React, {useState} from 'react';
import { Text, Pressable, View, TextInput, TouchableOpacity} from 'react-native';
import commonstyles from '../../../styles/defultStyles';
import DecisionButtonsSmall from '../../../components/decision-buttons-small';
import CloseImage from '../../../components/common/CloseImage';
import {ScrollView} from 'react-native-gesture-handler';
import CheckBox from '../../../components/common/CheckBox';
import modalStyles from '../../../styles/modalStyles';

import {strings} from '../../../i18n';
import Modal from 'react-native-modal'
import myColors from '../../../styles/myColors';
import { fullWidth } from '../../../utils/commonFunctions';

const CreateMenuInformation = props => {
	const [name, setName] = useState('');
	const [nameEn, setNameEn] = useState('');
	const [sort, setSort] = useState('');
	const [isActive, setIsActive] = useState(false);

	const onSubmit = () => {
		const newData = {
			name: name,
			name_en: nameEn,
			sort: sort,
			is_active: isActive,
		};

		props.onSubmit(newData);
	};

	return (
		<View style={{}}>
			<Modal isVisible={true} backdropColor={myColors.backdropColor}>
				<View style={modalStyles.centerModal}>
				<View style={modalStyles.modalView}>
							<View style={{flexDirection: 'row'}}>
								<View style={{flex: 0.9}}>
									<Text style={modalStyles.header}>{strings('Create Menu')}</Text>
								</View>
								<View style={{flex: 0.1, flexDirection: 'row-reverse'}}>
									<Pressable onPress={() => props.toggleModal(false)}>
										<CloseImage />
									</Pressable>
								</View>
							</View>
							<View style={[commonstyles.mh16, {marginTop: 24}]}>
								<Text style={commonstyles.mainTxt}>{strings('Name')}</Text>
								<TextInput style={commonstyles.input} value={name} onChangeText={txt => setName(txt)} />
							</View>
							<View style={[commonstyles.mh16, {}]}>
								<Text style={commonstyles.mainTxt}>{strings('Name In English')}</Text>
								<TextInput style={commonstyles.input} value={nameEn} onChangeText={txt => setNameEn(txt)} />
							</View>
							{/* <View style={[commonstyles.mh16, {}]}>
								<Text style={commonstyles.mainTxt}>Value </Text>
								<TextInput style={commonstyles.input} />
							</View> */}
							<View style={[commonstyles.mh16, {}]}>
								<Text style={commonstyles.mainTxt}>{strings('Sort')}</Text>
								<TextInput style={commonstyles.input} value={sort} onChangeText={txt => setSort(txt)} />
							</View>
							<TouchableOpacity
								activeOpacity={0.8}
								style={[commonstyles.mh16, {}]}
								onPress={() => setIsActive(prevState => !prevState)}>
								<Text style={commonstyles.mainTxt}>{strings('Active')}</Text>
								<View
									style={[
										commonstyles.input,
										{
											borderWidth: 0,
										},
									]}
								/>

								<CheckBox mt={-40} ticked={isActive} />
							</TouchableOpacity>
							<DecisionButtonsSmall handlePress={props.toggleModal} handleOk={onSubmit} btnOk={strings('Next')} />
						</View>
				</View>
			</Modal>
		</View>
	);
};

export default CreateMenuInformation;
