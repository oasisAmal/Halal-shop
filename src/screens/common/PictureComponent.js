import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native';

import styles from './styles';
import {ImageUploadService} from '../../services/ProductService';
import ImagePicker from 'react-native-image-crop-picker';
import {strings} from '../../i18n';
import {toastMessage} from '../../components/utils/functions/commonFunctions';

const PictureComponent = props => {
	const [selectedImg, setSelectedImg] = useState(undefined);
	const [uploadtype, setuploadtype] = useState('main');
	const {setimage, handleAdditionalImages, image} = props;
	const [selectedImglocal, setSelectedImglocal] = useState(image ?? null);
	const [selectedImgAdditional, setSelectedImgAdditional] = useState(null);

	const onSelectGallery = async type => {
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
					openGallery(type);
				} else {
					console.log('Camera permission denied');
					//setImgType('');
				}
			} catch (err) {
				console.warn(err);
				//setImgType('');
			}
		} else {
			// const res = await Permission.check(Permission.PERMISSIONS.IOS.PHOTO_LIBRARY);
			// if (res === Permission.RESULTS.GRANTED) {
			// 	openGallery();
			// } else {
			// 	const res2 = await Permission.request(Permission.PERMISSIONS.IOS.PHOTO_LIBRARY);
			// 	if (res2 === Permission.RESULTS.GRANTED) {
			// 		openGallery();
			// 	} else {
			// 		//setuploadtype('');
			// 	}
			// }
		}
	};

	const handleUploadImage = type => {
		//alert(type + ' input type ');
		if (type == 'main') {
			setuploadtype('main');
		} else if (type == 'extra') {
			setuploadtype('extra');
		} else {
			setuploadtype('');
		}
		setTimeout(() => {
			onSelectGallery(type);
		}, 500);
	};

	const openGallery = type => {
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
						console.log('uploadtype ' + uploadtype);
						console.log(response.data);
						if (response.data && response.data.data) {
							if (type == 'main') {
								setimage(response.data.data.file);
								setSelectedImglocal(response.data.data.url);
								toastMessage('main image Success');
							} else if (type == 'extra') {
								handleAdditionalImages(response.data.data.file);
								toastMessage('Additional image Success');
								//setSelectedImglocal('');
							} else {
								//setSelectedImglocal('');
							}
							//toastMessage('Success');
						} else {
							if (type == 'main') {
								setSelectedImglocal('');
							}

							toastMessage('Not success .. try again ');
						}
					},
					error => {
						if (type == 'main') {
							setSelectedImglocal('');
						}
						console.log('error  ' + error);
					},
				);
			})
			.finally(() => {
				ImagePicker.clean();
			});
	};

	// launchImageLibrary = () => {
	// 	let options = {
	// 		storageOptions: {
	// 			skipBackup: true,
	// 			path: 'images',
	// 		},
	// 	};
	// 	ImagePicker.launchImageLibrary(options, response => {
	// 		//console.log('Response = ', response);

	// 		if (response.didCancel) {
	// 			console.log('User cancelled image picker');
	// 		} else if (response.error) {
	// 			console.log('ImagePicker Error: ', response.error);
	// 		} else if (response.customButton) {
	// 			console.log('User tapped custom button: ', response.customButton);
	// 			alert(response.customButton);
	// 		} else {
	// 			const source = {uri: response.uri};
	// 			console.log('response', JSON.stringify(response));
	// 			console.log('response', response.assets[0].uri);
	// 			// alert(response.assets[0].uri)
	// 			props.setimage({
	// 				type: 'image/png',
	// 				uri: response.assets[0].uri, // This value comes from "react-native-image-crop-picker" response.path
	// 				name: 'upload.png',
	// 			});

	// 			const formData = new FormData();
	// 			formData.append('image', response);

	// 			ImageUploadService(
	// 				formData,
	// 				response => {
	// 					console.log('success ');
	// 					console.log(response);
	// 				},
	// 				error => console.log('error  ' + error),
	// 			);
	// 		}
	// 	});
	// };
	console.log('image is =================== ' + image);
	return (
		<View style={{}}>
			<Text style={styles.subheader}>{strings('Picture')} </Text>
			<View style={styles.formView}>
				<View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
					<View style={{flex: 0.2}}>
						<TouchableOpacity onPress={() => handleUploadImage('main')} style={styles.fileUpload}>
							<Text style={styles.chhoseTxt}>{strings('Choose File')} </Text>
						</TouchableOpacity>
					</View>
					<View style={{flex: 0.8}}>
						<Text
							style={[
								styles.imgTxt,
								{
									textAlign: 'center',
								},
							]}>
							{strings('Main Image')} (1290px X 1075px)
						</Text>
					</View>
				</View>
				{
					// rethink this
				}
				{selectedImglocal && selectedImglocal !== '' && (
					<View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
						<View style={{flex: 0.4}}>
							<Image source={{uri: selectedImglocal}} style={{width: 100, height: 142}} />
						</View>
						<TouchableOpacity style={{flex: 0.3}} onPress={() => setSelectedImglocal('')}>
							<Image source={require('../../../assets/images/close.png')} style={{width: 24, height: 24}} />
						</TouchableOpacity>
					</View>
				)}
				{/* {image && image !== '' && (
					<View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
						<View style={{flex: 0.4}}>
							<Image source={{uri: image}} style={{width: 100, height: 142}} />
						</View>
						<TouchableOpacity style={{flex: 0.3}} onPress={() => setSelectedImglocal('')}>
							<Image source={require('../../../assets/images/close.png')} style={{width: 24, height: 24}} />
						</TouchableOpacity>
					</View>
				)} */}

				<View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
					<View style={{flex: 0.2}}>
						<TouchableOpacity onPress={() => handleUploadImage('extra')} style={styles.fileUpload}>
							<Text style={styles.chhoseTxt}>{strings('Choose File')}</Text>
						</TouchableOpacity>
					</View>
					<View style={{flex: 0.8}}>
						<Text
							style={[
								styles.imgTxt,
								{
									textAlign: 'center',
									marginRight: 32,
								},
							]}>
							{strings('Additional Image')} (1290px X 1075px)
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default PictureComponent;
