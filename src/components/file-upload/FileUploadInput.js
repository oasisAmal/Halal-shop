import React, {useState} from 'react';

import styles from '../../screens/edit-product-details/styles';
import landscapeStyles from '../landscape-with-price/styles';
import {strings} from '../../i18n';
import {View, Text, Image, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native';

import {ImageUploadService} from '../../services/ProductService';
import ImagePicker from 'react-native-image-crop-picker';

const FileUploadInput = props => {
	const [selectedImg, setSelectedImg] = useState(undefined);
	const [uploadtype, setuploadtype] = useState(undefined);
	const {setimage, handleAdditionalImages} = props;

	const onSelectGallery = async () => {
		if (Platform.OS === 'android') {
			try {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.CAMERA,
					PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
					PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
					PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,

					{
						title: 'App needs access to your camera ',
						message: 'App needs access to your camera so you can take awesome pictures.',
						buttonNeutral: 'Ask Me Later',
						buttonNegative: 'Cancel',
						buttonPositive: 'OK',
					},
				);
				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
					console.log('You can use the camera');
					openGallery();
				} else {
					console.log('Camera permission denied');
					//setImgType('');
				}
			} catch (err) {
				console.warn(err);
				//setImgType('');
			}
		}
		// else {
		// 	const res = await Permission.check(Permission.PERMISSIONS.IOS.PHOTO_LIBRARY);
		// 	if (res === Permission.RESULTS.GRANTED) {
		// 		openGallery();
		// 	} else {
		// 		const res2 = await Permission.request(Permission.PERMISSIONS.IOS.PHOTO_LIBRARY);
		// 		if (res2 === Permission.RESULTS.GRANTED) {
		// 			openGallery();
		// 		} else {
		// 			setImgType('');
		// 		}
		// 	}
		// }
	};

	const handleUploadImage = type => {
		if (type == 'main') {
			setuploadtype('main');
		} else {
			setuploadtype('extra');
		}
		onSelectGallery();
	};

	const openGallery = () => {
		ImagePicker.openPicker({
			includeBase64: true, // for base 64 string
			multiple: false, // To support multiple image selection
			width: 512,
			height: 512,
			cropping: true,
			mediaType: 'photo',
		})
			.then(async selectedImg => {
				//console.log('image from gallery::>>', selectedImg);
				// if (imgType === 'Image') {
				setSelectedImg(selectedImg);
				// } else if (imgType === 'Banner') {
				// 	//setSelectedBanner(image);
				// } else if (imgType === 'License') {
				// 	//setSelectedLicense(image);
				// }

				//setImgType('');
				const formData = new FormData();
				let imgsrc = {
					uri: selectedImg.path,
					type: selectedImg.mime ?? 'image/jpeg',
					name: selectedImg.path.split('/').pop(),
				};
				formData.append('image', imgsrc);

				//console.log(formData);
				//console.log(imgsrc);

				ImageUploadService(
					formData,
					{headers: {'Content-Type': 'multipart/form-data'}},
					response => {
						console.log('success ');
						//console.log(response.data);
						// if (uploadtype == 'main') {
						setimage(response.data.data.file);
						// } else {
						// 	handleAdditionalImages(response.data.data.file);
						// }
					},
					error => console.log('error  ' + error),
				);
			})
			.finally(() => {
				ImagePicker.clean();
			});
	};

	return (
		<>
			<TouchableOpacity
				activeOpacity={0.8}
				style={landscapeStyles.imgView}
				onPress={props.onPress ? props.onPress : () => handleUploadImage('main')}>
				<View style={{flex: 0.2}}>
					<View style={landscapeStyles.chooseView}>
						<Text style={[styles.chhoseTxt]}>{strings('Choose File')}</Text>
					</View>
				</View>
				<View style={{flex: 0.8}}>
					<Text style={[styles.imgTxt, landscapeStyles.noFileTxt]}>
						{props.text ? props.text : strings('No File Chosen')}
					</Text>
				</View>
			</TouchableOpacity>
		</>
	);
};

export default FileUploadInput;
