import React, {useRef} from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  Image,
  I18nManager,
  SafeAreaView,
  Platform,
} from 'react-native';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import RepeatItem from './RepeatItem';
import Head from './Head';
import {ScrollView} from 'react-native-gesture-handler';
import TableView from './TableView';
import {InvoiceDetailsService} from '../../services/OrdersServices';
import {toastMessage} from '../utils/functions/commonFunctions';
import RNPrint from 'react-native-print';
import {getadminURL} from '../../utils/APIKit';
import {strings} from '../../i18n';
import {connect} from 'react-redux';
import {updateOrderPrintStatus} from '../../store/reducers';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {WebView} from 'react-native-webview';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../utils/AsyncStorageKeys';

let Invoice = props => {
  let [invoiceData, setInvoiceData] = React.useState([]);

  let onSuccess = async response => {
    setInvoiceData(response.data.data);
    props.updateOrderPrintStatus(props.orderID);
  };

  let onFailure = error => {
    toastMessage(error);
  };
  let printRemotePDF = async () => {
    //   + `receipt/${props.orderID}`
    let url = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.BaseURL);
    // let baseurl = '';
    // if (url) {
    //   let splitted = url.split('/api');
    //   baseurl = splitted[0];
    // } else {
    //   baseurl = 'https://zabehaty.uae.zabe7ti.website/';
    // }

    // await RNPrint.print({
    //   filePath: 'https://zabehaty.uae.zabe7ti.website/receipt/304020.pdf',
    //   //getadminURL() + `receipt/${props.orderID}`,
    // });
    downloadFile(url + `receipt/${props.orderID}`);
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
    InvoiceDetailsService({order_id: props.orderID}, onSuccess, onFailure);
    // getadminURL();
    return () => {
      //console.log('unmount'+invoiceData.id);
    };
  }, []);

  const path = `${
    Platform.OS === 'android' ? RNFS.DownloadDirectoryPath : RNFS.MainBundlePath
  }/Invoice-${props.orderID}.pdf`;

  const downloadFile = async url => {
    console.log(path);
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

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.invoicePressed}
      onRequestClose={() => {}}>
      <View style={styles.modalView}>
        <ScrollView>
          <View style={styles.title}>
            <View style={{flex: 0.85}}>
              <Text style={styles.driverTxt}>{strings('Invoice')} </Text>
            </View>
            <View>
              <Pressable onPress={() => props.toggleInvoicePressed(false)}>
                <Image
                  source={require('../../../assets/images/close.png')}
                  style={styles.closeImg}
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.head1}>
            <View style={styles.head2}>
              <View style={styles.flexrow}>
                <View style={styles.flex70}>
                  <Text style={[styles.paraLeft, styles.mt40]}>
                    {strings('Al Waha Livestock Company')}
                  </Text>
                  <Text style={[styles.paraLeft, styles.mv20]}>
                    {' '}
                    {strings('Tax Bill')}{' '}
                  </Text>
                </View>
                <View style={styles.flex30}>
                  <Image
                    style={styles.logo}
                    source={require('../../../assets/images/Logo.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.view1}>
              <View style={styles.flexrow}>
                <View style={styles.flex100}>
                  <Text style={[styles.paraLeft, {}]}>
                    {strings('Phone')} : (02)8004664
                  </Text>
                  <Text style={[styles.paraLeft, {}]}>
                    {' '}
                    {strings('Fax')} : 026452117{' '}
                  </Text>
                  <Text style={[styles.paraLeft, {}]}>
                    {strings('To visit our website')} : www.oasislivestock.com
                  </Text>
                  {/* <Text
                    style={[
                      styles.paraLeft,
                      {
                        alignSelf: I18nManager.isRTL
                          ? 'flex-end'
                          : 'flex-start',
                      },
                    ]}>
                    www.oasislivestock.com
                  </Text> */}
                  <Text style={[styles.paraLeft, {}]}>
                    {strings('Address')} : United Arab Emirates Abu Dhabi
                  </Text>
                  <Text style={[styles.paraLeft, {}]}>
                    {strings('Tax number')} : : 100366831400003
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.view2}>
            <View style={styles.view3}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <RepeatItem
                    label={strings('Invoice number')}
                    value={invoiceData?.id}
                  />
                  <RepeatItem
                    label={strings('The date')}
                    value={invoiceData?.date}
                  />
                  <RepeatItem
                    label={strings('Timing')}
                    value={
                      invoiceData?.time?.from + ' - ' + invoiceData?.time?.to
                    }
                  />
                  <RepeatItem
                    label={strings('Applicant')}
                    value={invoiceData?.user?.name}
                  />
                  <RepeatItem
                    label={strings('Mobile')}
                    value={invoiceData?.user?.mobile}
                  />
                  <RepeatItem
                    label={strings('Address')}
                    value={invoiceData?.address?.address}
                  />
                  <RepeatItem
                    label={strings('Home number')}
                    value={invoiceData?.address?.apartment_num}
                  />
                  <RepeatItem
                    label={strings('Street')}
                    value={invoiceData?.address?.street_name}
                  />
                  <RepeatItem
                    label={strings('Emirate')}
                    value={invoiceData?.emirate?.name}
                  />
                  <RepeatItem
                    label={strings('Region')}
                    value={invoiceData?.region?.name}
                  />
                  <RepeatItem
                    label={strings('Payment Method')}
                    value={invoiceData?.payment?.name}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.view2}>
            <View
              style={{flexDirection: 'column', padding: 8, marginBottom: 16}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <TableView />
                  <Head />
                  {invoiceData.details &&
                    invoiceData.details.length > 0 &&
                    invoiceData.details.map((item, index) => {
                      return (
                        <Head
                          key={index}
                          element={item?.product?.name}
                          quantity={item?.quantity}
                          unit_price={'AED ' + item?.price}
                          amount={'AED ' + item?.quantity * item?.price}
                        />
                      );
                    })}

                  <RepeatItem />
                  <RepeatItem
                    label={strings('Delivery')}
                    value={'AED ' + invoiceData?.delivery}
                    right="true"
                  />
                  <RepeatItem
                    label={strings('Total before tax')}
                    value={'AED ' + invoiceData.subtotal}
                    right="true"
                  />
                  <RepeatItem
                    label={strings('Tax') + '%5'}
                    value={'AED ' + invoiceData.tax}
                    right="true"
                  />
                  <RepeatItem
                    label={strings('Driver tip')}
                    value={
                      invoiceData.delivery_tips == null
                        ? 'AED 0'
                        : 'AED ' + invoiceData.delivery_tips
                    }
                    right="true"
                  />
                  {/* <RepeatItem
                    label="The total"
                    value={'AED ' + invoiceData.total}
                    right="true"
                  /> */}
                  {/* <RepeatItem
                    label="Discount"
                    value="AED 102.00"
                    right="true"
                  /> */}

                  <RepeatItem
                    label={strings('The net amount')}
                    value={'AED ' + invoiceData.total}
                    right="true"
                  />
                  {/* <RepeatItem
                    label="The user's points balance"
                    value={'AED ' + invoiceData.used_points}
                    right="true"
                  /> */}
                  {/* <RepeatItem
                    label="Collection"
                    value={'AED ' + invoiceData.total}
                    right="true"
                  /> */}
                </View>
              </View>
            </View>
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
                orderID: invoiceData.id,
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
              onPress={() => {
                props.toggleInvoicePressed(false);
                printRemotePDF();
                // props.navigation.navigate('OrderInvoicePDF', {
                //   orderId: props.orderID,
                // });
              }}>
              <View style={[styles.btn, styles.nextView]}>
                <Text style={[styles.clrWhite, styles.btnTxt]}>
                  {strings('Print')}
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={{}}>
            <Pressable onPress={() => props.toggleInvoicePressed(false)}>
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
    // <SafeAreaView style={{flex: 1}}>
    //   <WebView
    //     ref={webref}
    //     source={{
    //       uri: 'https://zabehaty.uae.zabe7ti.website/receipt/304020.pdf',
    //     }}
    //     onFileDownload={({nativeEvent: {downloadUrl}}) => {
    //       downloadDocument(downloadUrl);
    //       // You use downloadUrl which is a string to download files however you want.
    //     }}
    //     javaScriptEnabled={true}
    //     domStorageEnabled={true}
    //     allowFileAccess={true}
    //     allowUniversalAccessFromFileURLs={true}
    //     allowingReadAccessToURL={true}
    //     mixedContentMode={'always'}
    //   />
    // </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    //enableBlur: state.enableBlur,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateOrderPrintStatus: orderID =>
      dispatch(updateOrderPrintStatus(orderID)),
  };
}

export default Invoice = connect(mapStateToProps, mapDispatchToProps)(Invoice);
