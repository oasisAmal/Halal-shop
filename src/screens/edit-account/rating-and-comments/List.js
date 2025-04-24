import React, {Component} from 'react';
import {View} from 'react-native';
import ItemComponent from '../../products/ItemComponent';
import myColors from '../../../styles/myColors';
import {strings} from '../../../i18n';

const CommentsCard = ({item}) => {
	return (
		<View
			style={{
				elevation: 0,
				borderColor: 'white',
				borderRadius: 8,
			}}>
			<View>
				<View style={{backgroundColor: myColors.clrWhite, marginBottom: 16}}>
					<View style={{flex: 1, marginTop: 16}}>
						<ItemComponent
							mainText1={strings('ID')}
							mainText2={strings('Evaluation')}
							subText1={item.id}
							subText2={item.rating}
						/>
						<ItemComponent mainText1={strings('Comment')} mainText2={''} subText1={item.comment} subText2={''} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default CommentsCard;
