import React, {useEffect, useState} from 'react';
import {View, Text, PermissionsAndroid, Platform, TextInput, ActivityIndicator} from 'react-native';
import giftstyles from '../gifts/styles';

import commonstyles from '../../styles/defultStyles';
import FileUploadInput from '../../components/file-upload/FileUploadInput';
import UploadedSlider from '../../components/file-upload/UploadedSlider';
import UploadedView from '../../components/file-upload/UploadedView';
import Textarea from '../../components/common/Textarea';
import IncreaseDecrease from '../../components/common/IncreaseDecrease';
import CustomDropdown from '../../components/utils/CustomDropdown';
import {strings} from '../../i18n';

import SaveButton from '../../components/save-button';
import {useSelector} from 'react-redux';
import {SheetManager} from 'react-native-actions-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import Permission from 'react-native-permissions';
import {ImageUploadService} from '../../services/ProductService';

import {PAGE_LIST} from '../../data/DropdownData';
import DatePickerWithInput from '../../components/datepicker-with-input';
import Toast from 'react-native-toast-message';
import {CREATE_AD} from '../../services/AdsService';
import {ApprovedButtons, DeclinedButtons, PendingButtons} from '../../components/common/PaymentButtons';

const PLACE_LIST = [
	{
		id: 'slider',
		name: strings('Slider'),
	},
	{
		id: 'pop up',
		name: strings('Pop Up'),
	},
];

const Form = props => {
	const shops = useSelector(state => state.shops);

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isUploadingImg, setIsUploadingImg] = useState(false);

	const [adDetails, setAdDetails] = useState(undefined);

	const [pageId, setPageId] = useState('');
	const [page, setPage] = useState(undefined);
	const [place, setPlace] = useState(undefined);
	const [selectedImg, setSelectedImg] = useState(undefined);
	const [uploadedImg, setUploadedImg] = useState(undefined);
	const [days, setDays] = useState(1);
	const [note, setNote] = useState('');
	const [selectedShop, setSelectedShop] = useState(undefined);
	const [selectedShopName, setSelectedShopName] = useState(undefined);

	const [dateFrom, setDateFrom] = useState(undefined);
	const [dateTo, setDateTo] = useState(undefined);

	useEffect(() => {
		if (adDetails) {
			setUploadedImg({
				url: props.adDetails.image,
			});
			setPlace(props.adDetails.place);
			setDateFrom(props.adDetails.date_from);
			setDateTo(props.adDetails.date_to);
			setPage(props.adDetails.page);
			setPageId(`${props.adDetails.page_id}`);
			setNote(props.adDetails.note);
			if (props.adDetails.shop) {
				setSelectedShop(props.adDetails.shop.id);
				setSelectedShopName(props.adDetails.shop.name);
			}
		}
	}, [adDetails]);

	useEffect(() => {
		if (props.adDetails) {
			setAdDetails(props.adDetails);
		}
	}, [props]);

	useEffect(() => {
		if (dateFrom && dateTo) {
			const date1 = new Date(dateFrom.replace(/\//g, '-'));
			const date2 = new Date(dateTo.replace(/\//g, '-'));
			const diffTime = Math.abs(date2 - date1);
			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

			setDays(diffDays);
		}
	}, [dateFrom, dateTo]);

	const onSubmit = () => {
		let validation = '';

		if (!place) {
			validation += 'Place is required \n';
		}
		if (!dateFrom) {
			validation += 'Date from is required \n';
		}
		if (!dateTo) {
			validation += 'Date to is required \n';
		}
		if (!uploadedImg) {
			validation += 'Image is required \n';
		}

		if (validation === '') {
			setIsSubmitting(true);
			const data = {
				id: adDetails ? adDetails.id : undefined,
				image: uploadedImg ? uploadedImg.file : undefined,
				shop_id: selectedShop,
				page: page,
				page_id: pageId,
				place: place,
				days: days,
				note: note,
				date_from: dateFrom,
				date_to: dateTo,
			};

			if (adDetails) {
				UPDATE_AD(adDetails.id, data, () => {
					props.navigation.navigate('Pending');
				});
			} else {
				CREATE_AD(data, () => {
					props.navigation.navigate('Pending');
				});
			}
		} else {
			Toast.show({
				type: 'error',
				text1: 'Please fill required fields:',
				text2: validation,
				position: 'top',
				topOffset: 60,
			});
		}
	};

	const uploadImg = () => {
		setIsUploadingImg(true);
		setUploadedImg(undefined);

		const formData = new FormData();
		if (selectedImg) {
			formData.append('image', {
				uri: selectedImg.sourceURL ? selectedImg.sourceURL : selectedImg.path,
				type: selectedImg.mime ?? 'image/jpeg',
				name: selectedImg.path.split('/').pop(),
			});
		}

		ImageUploadService(
			formData,
			{headers: {'Content-Type': 'multipart/form-data'}},
			response => {
				if (response.data) {
					setUploadedImg(response.data.data);
				} else if (response.error) {
					Toast.show({
						type: 'error',
						text1: 'Upload Img Error: Please try smaller image',
						position: 'top',
						topOffset: 60,
					});
				}
				setIsUploadingImg(false);
			},
			error => {
				Toast.show({
					type: 'error',
					text1: 'Upload Img Error: Please try smaller image',
					position: 'top',
					topOffset: 60,
				});
				setIsUploadingImg(false);
			},
		);
	};

	useEffect(() => {
		if (selectedImg) {
			uploadImg();
		}
	}, [selectedImg]);

	const openCamera = () => {
		ImagePicker.openCamera({
			includeBase64: false,
			// width: 512,
			// height: 512,
			cropping: false,
		})
			.then(image => {
				setSelectedImg(image);
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
				}
			} catch (err) {
				console.warn(err);
			}
		} else {
			const res = await Permission.check(Permission.PERMISSIONS.IOS.CAMERA);
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
			width: 512,
			height: 512,
			cropping: true,
			mediaType: 'photo',
		})
			.then(async image => {
				setSelectedImg(image);
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
				}
			} catch (err) {
				console.warn(err);
			}
		} else {
			const res = await Permission.check(Permission.PERMISSIONS.IOS.PHOTO_LIBRARY);
			if (res === Permission.RESULTS.GRANTED) {
				openGallery();
			} else {
				const res2 = await Permission.request(Permission.PERMISSIONS.IOS.PHOTO_LIBRARY);
				if (res2 === Permission.RESULTS.GRANTED) {
					openGallery();
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

	// useEffect(() => {
	// 	if (imgType) {
	// 		onChangeImg();
	// 	}
	// }, [imgType]);

	const onUploadImg = () => {
		onChangeImg();
	};

	return (
		<React.Fragment>
			<View style={giftstyles.formView}>
				<View style={commonstyles.mb16}>
					<Text style={[giftstyles.productName, {marginBottom: 0}]}>{strings('Place')}</Text>
					<CustomDropdown
						data={PLACE_LIST}
						defaultTxt={place}
						setSelectedItem={txt => {
							setPlace(txt);
						}}
					/>
				</View>

				{place === 'slider' ? (
					<View style={commonstyles.mb16}>
						<Text style={[giftstyles.productName, {marginBottom: 0}]}>{strings('Choose Slider Image')}</Text>
						<FileUploadInput text="(305px x 156px)" onPress={onUploadImg} />
						{isUploadingImg ? (
							<View style={{alignItems: 'center', justifyContent: 'center'}}>
								<ActivityIndicator size={'large'} color={'#333333'} />
							</View>
						) : (
							<UploadedView uploadedFile={uploadedImg ? uploadedImg.url : undefined} banner={true} mr={16} />
						)}
					</View>
				) : null}
				{place === 'pop up' ? (
					<View style={commonstyles.mb16}>
						<Text style={[giftstyles.productName, {marginBottom: 0}]}>{strings('Choose Pop Up image')}</Text>
						<FileUploadInput text="(111px x 157px)" onPress={onUploadImg} />
						{isUploadingImg ? (
							<View style={{alignItems: 'center', justifyContent: 'center'}}>
								<ActivityIndicator size={'large'} color={'#333333'} />
							</View>
						) : (
							<UploadedView uploadedFile={uploadedImg ? uploadedImg.url : undefined} />
						)}
					</View>
				) : null}

				{place ? (
					<View style={commonstyles.mb16}>
						<Text style={giftstyles.productName}>{strings('How Many Days You Want %{place} Ad', {place: place})}</Text>
						<Text style={commonstyles.underlinedata}>
							{strings('Price For One day %{place} is 20 AED', {place: place})}
						</Text>
					</View>
				) : null}
				<View style={commonstyles.mb16}>
					<Text style={[giftstyles.productName, {marginBottom: 0}]}>{strings('Date From')}</Text>
					<DatePickerWithInput selectedDate={dateFrom} setSelectedDate={date => setDateFrom(date)} />
				</View>

				<View style={commonstyles.mb16}>
					<Text style={[giftstyles.productName, {marginBottom: 0}]}>{strings('Date To')}</Text>
					<DatePickerWithInput selectedDate={dateTo} setSelectedDate={date => setDateTo(date)} />
				</View>

				{/* {place ? (
					<View style={commonstyles.mb16}>
						<Text style={giftstyles.productName}>How Many Days You Want {place} Ad</Text>
						<Text style={commonstyles.underlinedata}>Price For One day {place} is 20 AED</Text>
						<IncreaseDecrease minValue={1} value={days} onValueChange={value => setDays(value)} />
					</View>
				) : null} */}

				<View style={commonstyles.mb16}>
					<Text style={[giftstyles.productName, {marginBottom: 0}]}>{strings('Page')}</Text>
					<CustomDropdown
						data={PAGE_LIST}
						defaultTxt={page}
						setSelectedItem={txt => {
							setPage(txt);
						}}
					/>
				</View>

				{/* <View style={commonstyles.mb16}>
					<Text style={[giftstyles.productName, {marginBottom: 0}]}>{strings('Page ID')}</Text>
					<TextInput style={giftstyles.input} value={pageId} onChangeText={txt => setPageId(txt)} />
				</View> */}

				{/* <Text style={commonstyles.underlinedata}></Text> */}
				<View style={commonstyles.mb16}>
					<Text style={[giftstyles.productName, {marginBottom: 0}]}>{strings('Add A Note')}</Text>
					<Textarea value={note} onChangeText={txt => setNote(txt)} />
				</View>

				<View style={commonstyles.mb16}>
					<Text style={[giftstyles.productName, {marginBottom: 0}]}>{strings('Shop')}</Text>
					<CustomDropdown
						data={shops}
						defaultTxt={selectedShopName ? selectedShopName : undefined}
						setSelectedItem={txt => {
							setSelectedShop(txt);
						}}
					/>
				</View>
			</View>

			{adDetails ? (
				<React.Fragment>
					{parseInt(adDetails.is_approved) === 1 && (
						<ApprovedButtons
						// handlePress={() => props.navigation.navigate('Approved')}
						/>
					)}
					{/* {status == 'declined' && <DeclinedButtons />} */}
					{parseInt(adDetails.is_approved) === 0 && (
						<PendingButtons
						// handlePress={() => props.navigation.navigate('Pending')}
						/>
					)}
				</React.Fragment>
			) : null}

			<SaveButton label={strings('Save')} isLoading={isSubmitting} handlePress={onSubmit} />
		</React.Fragment>
	);
};

export default Form;
