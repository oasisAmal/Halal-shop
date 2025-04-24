import React, {useEffect, useState} from 'react';
import {ActivityIndicator, I18nManager, Platform, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
//import RNFetchBlob from 'rn-fetch-blob';
import ReactNativeBlobUtil from 'react-native-blob-util';

import RNFS from 'react-native-fs';
import Pdf from 'react-native-pdf';
// import Share from 'react-native-share';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Helpers
import {strings} from '../../../i18n';
import {writeFilePermission} from '../../../utils/Permissions';
import {Text} from 'react-native';

// Styles

const OrderInvoicePDF = ({route, navigation}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isFileDownloaded, setIsFileDownloaded] = useState(false);
	const [filePath, setFilePath] = useState(' /data/user/0/com.halalshopapp/files/Invoice-121089.pdf');

	const fileType = 'application/pdf';

	const path = `${Platform.OS === 'android' ? RNFS.DownloadDirectoryPath : RNFS.MainBundlePath}/Invoice-${
		route?.params?.orderId
	}.pdf`;

	console.log(route?.params?.orderId);
	console.log(path + ' path is ');

	useEffect(() => {
		setIsLoading(true);
		writeFilePermission(
			() => {
				console.log('path is from write perm  ');
				console.log(path);
				const dirs = ReactNativeBlobUtil.fs.dirs;
				ReactNativeBlobUtil.config({
					// add this option that makes response data to be stored as a file,
					// this is much more performant.
					fileCache: true,
					//appendExt : 'pdf'
					path: dirs.DocumentDir + `/Invoice-${route?.params?.orderId}.pdf`,
				})
					.fetch('GET', 'https://testing.zabehaty.uae.zabe7ti.website/backend/orders/receipt/121089', {
						//some headers ..
					})
					.then(res => {
						// the temp file path
						console.log('The file saved to ', res.path());
						setFilePath(res.path());
						setIsLoading(false);
						setIsFileDownloaded(true);
					})
					.catch(e => {
						console.log('error ');
						console.log('error ', e);
						setIsLoading(false);
					});
			},
			() => {
				setIsLoading(false);
			},
		);
	}, []);

	//   const onShare = () => {
	//     Share.open({
	//       title: `${strings('Invoice')}${route?.params?.orderId}`,
	//       message: strings('I Want To Share Invoice With You'),
	//       url: `file://${filePath}`, //`file:///${path}`,
	//       type: `${fileType}`,
	//       filename: `${strings('Invoice')}${route?.params?.orderId}`,
	//     }).catch(e => {});
	//   };

	//   useEffect(() => {
	//     navigation.setOptions({
	//       headerLeft: () => (
	//         <TouchableOpacity
	//           activeOpacity={0.8}
	//           style={{
	//             width: 50,
	//             height: 50,
	//             justifyContent: 'center',
	//             alignItems: 'center',
	//           }}
	//           onPress={() => {
	//             navigation.goBack();
	//           }}>
	//           <Ionicons
	//             name={
	//               I18nManager.isRTL ? 'arrow-forward-outline' : 'arrow-back-outline'
	//             }
	//             color={'#000000'}
	//             size={25}
	//           />
	//         </TouchableOpacity>
	//       ),
	//       headerRight: () => (
	//         <TouchableOpacity
	//           activeOpacity={0.8}
	//           style={{
	//             width: 50,
	//             height: 50,
	//             justifyContent: 'center',
	//             alignItems: 'center',
	//           }}
	//           disabled={!isFileDownloaded}
	//           onPress={() => {
	//             //onShare();
	//           }}>
	//           <Entypo name={'share'} color={'#000000'} size={25} />
	//         </TouchableOpacity>
	//       ),
	//     });
	//   }, [isFileDownloaded]);

	if (isLoading) {
		return (
			<ActivityIndicator
				//color={myColors.primary}
				size="large"
				style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
			/>
		);
	}

	return (
		<>
			{isFileDownloaded ? (
				<Pdf
					source={{
						uri: `file://${filePath}`,
					}}
					style={{
						backgroundColor: myColors.white,
						flex: 1,
						width: Dimensions.get('window').width,
						height: Dimensions.get('window').height,
					}}
				/>
			) : (
				// <Text>hu</Text>
				<ActivityIndicator />
			)}
		</>
	);
};
export default OrderInvoicePDF;
