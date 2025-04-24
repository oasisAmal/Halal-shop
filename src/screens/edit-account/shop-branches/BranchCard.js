import React, {Component} from 'react';
import {View} from 'react-native';
import ItemComponent from '../../products/ItemComponent';
import EditDeleteButtons from '../../../components/common/EditDeleteButtons';
import {strings} from '../../../i18n';

const bgColor = 'white';
const BranchCard = ({item, enableButtons, onEdit = () => {}, onDelete = () => {}}) => {
	return (
		<View
			style={{
				elevation: 0,
				borderColor: 'white',
				borderRadius: 8,
			}}>
			<View>
				<EditDeleteButtons enableButtons={enableButtons ? enableButtons : false} handleEdit={onEdit} handleDelete={onDelete} />
				<View style={{backgroundColor: bgColor, marginBottom: 16}}>
					<View style={{flex: 1}}>
						<ItemComponent mainText1={'#'} mainText2={strings('Name')} subText1={item.id} subText2={item.name} />
						<ItemComponent
							mainText1={strings('Emirate')}
							mainText2={strings('Region')}
							subText1={item.emirate ? item.emirate.name : ''}
							subText2={item.region ? item.region.name : ''}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default BranchCard;
