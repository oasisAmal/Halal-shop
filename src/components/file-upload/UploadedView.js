import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';

import landscapeStyles from '../landscape-with-price/styles';

const UploadedView = props => {
	const {uploadedFile} = props;
	const [uploadedImg, setUploadedImg] = useState(undefined);

	useEffect(() => {
		if (uploadedFile) {
			setUploadedImg(uploadedFile);
		}
	}, [uploadedFile]);
	return (
		<View style={landscapeStyles.imgViewFish}>
			{uploadedImg ? (
				<React.Fragment>
					<View style={{flex: props.banner ? 0.7 : 0.3}}>
						<Image
							source={{uri: uploadedImg}}
							style={props.banner ? landscapeStyles.bannerView : landscapeStyles.fishStallImg}
						/>
					</View>
					<View style={{flex: 0.3}}>
						<Image source={require('../../../assets/images/close.png')} style={landscapeStyles.closeImg} />
					</View>
				</React.Fragment>
			) : null}
		</View>
	);
};

export default UploadedView;
