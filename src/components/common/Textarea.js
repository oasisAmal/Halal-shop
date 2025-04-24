import React from 'react';
import {TextInput} from 'react-native';
import {strings} from '../../i18n';

const Textarea = props => {
	return (
		<TextInput
			multiline={true}
			placeholder={strings('Type') + '...'}
			style={{
				// paddingBottom: 80,
				paddingHorizontal: 16,
				borderRadius: 6,
				borderWidth: 1,
				marginBottom: 8,
				height: 117,
				borderColor: '#E2E8F0',
				textAlignVertical: 'top',
			}}
			value={props.value ? props.value : null}
			onChangeText={data => (props.onChangeText ? props.onChangeText(data) : '')}
		/>
	);
};

export default Textarea;
