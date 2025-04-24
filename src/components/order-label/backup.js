import React from 'react';
import {Modal, Text, Pressable, View, Image,Platform } from 'react-native';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import RepeatItem from './RepeatItem';
import Head from './Head';
import {ScrollView} from 'react-native-gesture-handler';
import {toastMessage} from '../utils/functions/commonFunctions';
import {LabelDetailsService} from '../../services/OrdersServices';
import {strings} from '../../i18n';
import RNPrint from 'react-native-print';
import {getadminURL} from '../../utils/APIKit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../utils/AsyncStorageKeys';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';

const CreateLabel = props => {
  const path = `${
    Platform.OS === 'android' ? RNFS.DownloadDirectoryPath : RNFS.MainBundlePath
  }/Label-${props.orderID}.pdf`;

  let [data, setData] = React.useState([]);

  let onSuccess = async response => {
    setData(response.data.data);
    console.log('   data ');
    // console.log(response.data.data);
    console.log(data);
  };

  let onFailure = error => {
    toastMessage(error);
  };
  let printRemotePDF = async () => {
    //   + `receipt/${props.orderID}`
    let url = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.BaseURL);
    let baseurl = '';
    if (url) {
      let splitted = url.split('/api');
      baseurl = splitted[0];
    } else {
      baseurl = 'https://zabehaty.uae.zabe7ti.website';
    }

    // await RNPrint.print({
    //   filePath: 'https://zabehaty.uae.zabe7ti.website/receipt/304020.pdf',
    //   //getadminURL() + `receipt/${props.orderID}`,
    // });
    downloadFile(baseurl + `/label/${props.orderID}`);
  };
  const downloadFile = async url => {
    //alert(path);
    // const url = 'https://zabehaty.uae.zabe7ti.website/receipt/304020.pdf';
    const filePath = path;

    RNFS.downloadFile({
      fromUrl: url,
      toFile: filePath,
      background: true, // Enable downloading in the background (iOS only)
      discretionary: true, // Allow the OS to control the timing and speed (iOS only)
      progress: res => {
        // Handle download progress updates if needed
        const progress = (res.bytesWritten / res.contentLength) * 100;
        //console.log(`Progress: ${progress.toFixed(2)}%`);
      },
    })
      .promise.then(async response => {
        //console.log('File downloaded!', response);
        const file = await RNFS.readFile(filePath);
        printPDF(file);
        // setFileData(file);
      })
      .catch(err => {
        console.log('Download error:', err);
      });
  };


  let printPDF = async file => {
    const results = await RNHTMLtoPDF.convert({
      //html: '<h1>Custom converted PDF Document</h1>',
      html: file || '<h1> ref not set! </h1> ',
      fileName: 'test',
      base64: true,
    });

    await RNPrint.print({filePath: results.filePath});
  };

  React.useEffect(() => {
    LabelDetailsService({order_id: props.orderID}, onSuccess, onFailure);
    return () => {
      //console.log('unmount'+invoiceData.id);
    };
  }, []);

  // let printRemotePDF = async () => {
  //   await RNPrint.print({
  //     filePath: getadminURL() + `label/${props.orderID}`,
  //   });
  // };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.driverCusPressed}
      onRequestClose={() => {}}>
      <View style={styles.modalView}>
        <ScrollView>
          <View style={styles.title}>
            <View style={{flex: 0.85}}>
              <Text style={styles.driverTxt}>{strings('Label')} </Text>
            </View>
            <View>
              <Pressable onPress={() => props.toggleCreateLabel(false)}>
                <Image
                  source={require('../../../assets/images/close.png')}
                  style={styles.closeImg}
                />
              </Pressable>
            </View>
          </View>
          <View style={{flexDirection: 'column', borderWidth: 1, padding: 8}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.3}}>
                {/* <Text> flex 4 </Text> */}
                <Image
                  style={{width: 100, height: 100}}
                  source={require('../../../assets/images/Logo.png')}
                />
              </View>
              <View style={{flex: 0.7}}></View>
            </View>
            <RepeatItem label={strings('Order ID')} value={data?.id} mid=":" />
            <RepeatItem label={strings('Date')} value={data?.date} mid=":" />
            <RepeatItem
              label={strings('Timing')}
              value={data?.time?.from + ' - ' + data?.time?.to}
              mid=":"
            />
            <RepeatItem
              label={strings('Customer name')}
              value={data?.user?.name}
              mid=":"
            />
            <RepeatItem
              label={strings('Customer Number')}
              value={data?.user?.mobile}
              mid=":"
            />
            <RepeatItem
              label={strings('Emirate')}
              value={data?.emirate?.name}
              mid=":"
            />
            <RepeatItem
              label={strings('Region')}
              value={data?.region?.name}
              mid=":"
            />
          </View>
          <View style={{borderWidth: 1, padding: 8, marginVertical: 8}}>
            <Head
              label={strings('Weight')}
              mid={strings('Type')}
              value={strings('Count')}
            />

            <Head label="" mid="" value="" />
            {data &&
              data.details &&
              data.details.map((item, index) => {
                return (
                  <Head
                    key={index}
                    label={item?.sub_product?.name}
                    value={item.quantity}
                    mid={item?.product?.name}
                  />
                );
              })}

            <Head label=" " value=" " mid=" " />
            <RepeatItem
              label={strings('Delivery')}
              value={'AED ' + data?.delivery}
              mid=""
            />
            <RepeatItem
              label={strings('Total')}
              value={'AED ' + data?.total}
              mid=""
            />
          </View>

          <View
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              flex: 1,
              flexDirection: 'row',
              marginVertical: 16,
            }}>
            <QRCode
              value={JSON.stringify({
                name: data?.user?.name,
                expiry: data?.date,
                manufacturer: data?.shop?.name,
                ordeID: data.id,
              })}
              size={150}
              color="black"
              backgroundColor="white"
              //getRef={getRef}
            />
          </View>
        </ScrollView>
        <View style={styles.btnView}>
          <View style={{}}>
            <Pressable
              // onPress={() => props.toggleCreateLabel(false)}
              onPress={() => {
                props.toggleCreateLabel(false);
                printRemotePDF();
              }}>
              <View style={[styles.btn, styles.nextView]}>
                <Text style={[styles.clrWhite, styles.btnTxt]}>
                  {strings('Print')}
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={{}}>
            <Pressable onPress={() => props.toggleCreateLabel(false)}>
              <View style={[styles.btn, styles.backView]}>
                <Text style={[styles.backTxt, styles.btnTxt]}>
                  {strings('Back')}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateLabel;
