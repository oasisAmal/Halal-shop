import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Platform, PermissionsAndroid} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import Permission from 'react-native-permissions';

import styles from '../../edit-product-details/styles';
import commonstyles from '../../../styles/defultStyles';

import CustomDropdown from '../../../components/utils/CustomDropdown';
import FileUploadInput from '../../../components/file-upload/FileUploadInput';
import UploadedView from '../../../components/file-upload/UploadedView';
import SaveButton from '../../../components/save-button';

import {shop_type_data} from '../../../data/DummyData';
import {GET_SHOP_GENERAL_DATA, UPDATE_SHOP_GENERAL_DATA} from '../../../services/ShopServices';
import {strings} from '../../../i18n';
import {GET_PROFILE} from '../../../services/ProfileService';
import {SET_SHOPS} from '../../../store/actionTypes';
import Toast from 'react-native-toast-message';

const IMG_TYPES = {
	Image: 'Image',
	Banner: 'Banner',
	License: 'License',
};

const Form = ({shop}) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [shopData, setShopData] = useState(undefined);

	const [shopName, setShopName] = useState('');
	const [shopNameEn, setShopNameEn] = useState('');
	const [shopBackendName, setShopBackendName] = useState('');
	const [shopDescription, setShopDescription] = useState('');
	const [shopDescriptionEn, setShopDescriptionEn] = useState('');
	const [shopAddress, setShopAddress] = useState('');
	const [shopAddressEn, setShopAddressEn] = useState('');
	const [shopMobile, setShopMobile] = useState('');
	const [shopAdminEmail, setShopAdminEmail] = useState('');
	const [shopBankAccount, setShopBankAccount] = useState('');
	const [shopFreeDelivery, setShopFreeDelivery] = useState('');
	const [shopType, setShopType] = useState('');

	const [imgType, setImgType] = useState('');
	const [selectedImg, setSelectedImg] = useState(undefined);
	const [selectedBanner, setSelectedBanner] = useState(undefined);
	const [selectedLicense, setSelectedLicense] = useState(undefined);

	const fetchGeneralData = () => {
		GET_SHOP_GENERAL_DATA(
			shop.id,
			response => {
				if (response && response.data) {
					setShopData(response.data.data);
				}
			},
			error => {
				console.log(error);
			},
		);
	};

	useEffect(() => {
		if (shop) {
			fetchGeneralData();
		}
	}, [shop]);

	useEffect(() => {
		if (shopData) {
			if (shopData.name) setShopName(`${shopData.name}`);
			if (shopData.name_en) setShopNameEn(`${shopData.name_en}`);
			if (shopData.backend_name) setShopBackendName(`${shopData.backend_name}`);
			if (shopData.description) setShopDescription(`${shopData.description}`);
			if (shopData.description_en) setShopDescriptionEn(`${shopData.description_en}`);
			if (shopData.address) setShopAddress(`${shopData.address}`);
			if (shopData.address_en) setShopAddressEn(`${shopData.address_en}`);
			if (shopData.mobile) setShopMobile(`${shopData.mobile}`);
			if (shopData.admin_email) setShopAdminEmail(`${shopData.admin_email}`);
			if (shopData.bank_account) setShopBankAccount(`${shopData.bank_account}`);
			if (shopData.free_delivery) setShopFreeDelivery(`${shopData.free_delivery}`);
			if (shopData.type) setShopType(`${shopData.type}`);
		}
	}, [shopData]);

	const onSubmit = async () => {
		try {
			const postData = {
				name: shopName,
				name_en: shopNameEn,
				backend_name: shopBackendName,
				description: shopDescription,
				description_en: shopDescriptionEn,
				address: shopAddress,
				address_en: shopAddressEn,
				mobile: shopMobile,
				admin_email: shopAdminEmail,
				bank_account: shopBankAccount,
				free_delivery: shopFreeDelivery,
				type: shopType.toLowerCase(),
			};

			const formData = new FormData();
			formData.append('name', shopName);
			formData.append('name_en', shopNameEn);
			formData.append('backend_name', shopBackendName);
			formData.append('description', shopDescription);
			formData.append('description_en', shopDescriptionEn);
			formData.append('address', shopAddress);
			formData.append('address_en', shopAddressEn);
			formData.append('mobile', shopMobile);
			formData.append('admin_email', shopAdminEmail);
			formData.append('bank_account', shopBankAccount);
			formData.append('free_delivery', shopFreeDelivery);
			formData.append('type', shopType.toLowerCase());

			if (selectedImg) {
				formData.append('image', {
					uri: selectedImg.sourceURL ? selectedImg.sourceURL : selectedImg.path,
					type: selectedImg.mime ?? 'image/jpeg',
					name: selectedImg.path.split('/').pop(),
				});
			}
			if (selectedBanner) {
				formData.append('banner', {
					uri: selectedBanner.sourceURL ? selectedBanner.sourceURL : selectedBanner.path,
					type: selectedBanner.mime ?? 'image/jpeg',
					name: selectedBanner.path.split('/').pop(),
				});
			}
			if (selectedLicense) {
				formData.append('licence', {
					uri: selectedLicense.sourceURL ? selectedLicense.sourceURL : selectedLicense.path,
					type: selectedLicense.mime ?? 'image/jpeg',
					name: selectedLicense.path.split('/').pop(),
				});
			}

			let isImgExist = false;
			if (selectedImg || selectedBanner || selectedLicense) {
				isImgExist = true;
			}

			setIsSubmitting(true);
			UPDATE_SHOP_GENERAL_DATA(
				shop.id,
				isImgExist ? formData : postData,
				isImgExist,
				response => {
					setIsSubmitting(false);
					fetchProfile();

					Toast.show({
						type: 'success',
						text1: strings('Data has been updated successfully'),
					});
				},
				() => {},
			);
		} catch (error) {
			console.log(error);
			setIsSubmitting(false);
		}
	};

	const fetchProfile = () => {
		GET_PROFILE(repsonse => {
			dispatch({type: SET_SHOPS, shops: repsonse.data.data.shops});
		});
	};

	const openCamera = () => {
		ImagePicker.openCamera({
			includeBase64: false,
			// width: 512,
			// height: 512,
			cropping: false,
		})
			.then(image => {
				if (imgType === IMG_TYPES.Image) {
					setSelectedImg(image);
				} else if (imgType === IMG_TYPES.Banner) {
					setSelectedBanner(image);
				} else if (imgType === IMG_TYPES.Banner) {
					setSelectedLicense(image);
				}

				setImgType('');
			})
			.finally(() => {
				ImagePicker.clean();
			});
	};

	const onSelectCamera = async () => {
		if (Platform.OS === 'android') {
			try {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.CAMERA,
					PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
					PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
					PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,

					{
						title: 'Zanzimart App needs access to your camera ',
						message: 'Zanzimart App needs access to your camera so you can take awesome pictures.',
						buttonNeutral: 'Ask Me Later',
						buttonNegative: 'Cancel',
						buttonPositive: 'OK',
					},
				);
				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
					console.log('You can use the camera');
					openCamera();
				} else {
					console.log('Camera permission denied');
					setImgType('');
				}
			} catch (err) {
				console.warn(err);
				setImgType('');
			}
		} else {
			const res = await Permission.check(Permission.PERMISSIONS.IOS.CAMERA);
			//const res = await check(PERMISSIONS.IOS.CAMERA);
			if (res === Permission.RESULTS.GRANTED) {
				openCamera();
			} else {
				const res2 = await Permission.request(Permission.PERMISSIONS.IOS.CAMERA); //request(PERMISSIONS.IOS.CAMERA);
				if (res2 === Permission.RESULTS.GRANTED) {
					openCamera();
				}
			}
		}
	};

	const openGallery = () => {
		ImagePicker.openPicker({
			includeBase64: false, // for base 64 string
			multiple: false, // To support multiple image selection
			// width: 512,
			// height: 512,
			cropping: false,
			mediaType: 'photo',
		})
			.then(async image => {
				if (imgType === IMG_TYPES.Image) {
					setSelectedImg(image);
				} else if (imgType === IMG_TYPES.Banner) {
					setSelectedBanner(image);
				} else if (imgType === IMG_TYPES.License) {
					setSelectedLicense(image);
				}

				setImgType('');
			})
			.finally(() => {
				ImagePicker.clean();
			});
	};

	const onSelectGallery = async () => {
		if (Platform.OS === 'android') {
			try {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.CAMERA,
					PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
					PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
					PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,

					{
						title: 'Zanzimart App needs access to your camera ',
						message: 'Zanzimart App needs access to your camera so you can take awesome pictures.',
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
					setImgType('');
				}
			} catch (err) {
				console.warn(err);
				setImgType('');
			}
		} else {
			const res = await Permission.check(Permission.PERMISSIONS.IOS.PHOTO_LIBRARY);
			if (res === Permission.RESULTS.GRANTED) {
				openGallery();
			} else {
				const res2 = await Permission.request(Permission.PERMISSIONS.IOS.PHOTO_LIBRARY);
				if (res2 === Permission.RESULTS.GRANTED) {
					openGallery();
				} else {
					setImgType('');
				}
			}
		}
	};

	const onChangeImg = async () => {
		const response = await SheetManager.show('image-picker');

		if (response) {
			switch (response) {
				case 'Camera':
					setTimeout(() => {
						onSelectCamera();
					}, 500);
					break;
				default:
					setTimeout(() => {
						onSelectGallery();
					}, 500);
					break;
			}
		} else {
			setImgType('');
		}
	};

	useEffect(() => {
		if (imgType) {
			onChangeImg();
		}
	}, [imgType]);

	const onUploadLicense = () => {
		setImgType(IMG_TYPES.License);
	};

	const onUploadImg = () => {
		setImgType(IMG_TYPES.Image);
	};

	const onUploadBanner = () => {
		setImgType(IMG_TYPES.Banner);
	};

	return (
		<React.Fragment>
			<View style={styles.formView}>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Name')}</Text>
					<TextInput style={styles.input} value={shopName} onChangeText={txt => setShopName(txt)} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Name In English')}</Text>
					<TextInput style={styles.input} value={shopNameEn} onChangeText={txt => setShopNameEn(txt)} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Backend Name')}</Text>
					<TextInput style={styles.input} value={shopBackendName} onChangeText={txt => setShopBackendName(txt)} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Kind')}</Text>
					<CustomDropdown
						data={shop_type_data}
						defaultTxt={shopType}
						setSelectedItemText={txt => {
							setShopType(txt);
						}}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Description')}</Text>
					<TextInput
						multiline={true}
						placeholder="Type..."
						style={styles.textarea}
						value={shopDescription}
						onChangeText={txt => setShopDescription(txt)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Description In English')}</Text>
					<TextInput
						multiline={true}
						placeholder="Type..."
						style={styles.textarea}
						value={shopDescriptionEn}
						onChangeText={txt => setShopDescriptionEn(txt)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Address')}</Text>
					<TextInput
						multiline={true}
						placeholder="Type..."
						style={styles.textarea}
						value={shopAddress}
						onChangeText={txt => setShopAddress(txt)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Address In English')}</Text>
					<TextInput
						multiline={true}
						placeholder="Type..."
						style={styles.textarea}
						value={shopAddressEn}
						onChangeText={txt => setShopAddressEn(txt)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Mobile')}</Text>
					<TextInput
						style={styles.input}
						placeholder="0558734098"
						value={shopMobile}
						onChangeText={txt => setShopMobile(txt)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Admin Email')}</Text>
					<TextInput
						style={styles.input}
						placeholder={strings('Enter Email')}
						value={shopAdminEmail}
						onChangeText={txt => setShopAdminEmail(txt)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Bank Account')}</Text>
					<TextInput
						style={styles.input}
						placeholder={strings('Enter Account')}
						value={shopBankAccount}
						onChangeText={txt => setShopBankAccount(txt)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('License')}</Text>
					<FileUploadInput onPress={onUploadLicense} />
					<UploadedView uploadedFile={selectedLicense ? selectedLicense.sourceURL : shopData?.licence} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Free Delivery For Orders Over')}</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter Account"
						value={shopFreeDelivery}
						onChangeText={txt => setShopFreeDelivery(txt)}
					/>
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Picture')}</Text>
					<FileUploadInput text="(136px x 82px)" onPress={onUploadImg} />
					<UploadedView uploadedFile={selectedImg ? selectedImg.sourceURL : shopData?.image} />
				</View>
				<View style={commonstyles.mb16}>
					<Text style={styles.productName}>{strings('Banner')}</Text>
					<FileUploadInput text="(239px x 100px)" onPress={onUploadBanner} />
					<UploadedView banner={true} uploadedFile={selectedBanner ? selectedBanner.sourceURL : shopData?.banner} />
				</View>
			</View>
			<SaveButton handlePress={onSubmit} isLoading={isSubmitting} />
		</React.Fragment>
	);
};

export default Form;
