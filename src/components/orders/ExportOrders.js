import React from 'react';
import ExportButton from '../common/ExportButton';

import {PermissionsAndroid, Platform, I18nManager} from 'react-native';
var RNFS = require('react-native-fs');
import XLSX from 'xlsx';
import {toastMessage} from '../utils/functions/commonFunctions';
import {strings} from '../../i18n';

const ExportOrders: () => React$Node = props => {
  const [shopID, setShopID] = React.useState('');
  const [excelData, setExcelData] = React.useState([]);

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    let {orders} = props;
    formatOrdersdata(orders);
  }, [props.orders]);

  // function to handle exporting

  let formatOrdersdata = orders => {
    let final_data = [];
    orders.map((item, index) => {
      if (I18nManager.isRTL) {
        final_data.push({
          'رقم التعريف الخاص بالطلب': item.id,
          اسم: item?.user?.name,
          هاتف: item?.user?.mobile,
          الإمارة: item?.emirate?.name,
          تاريخ: item.date,
          وقت: item?.time?.from + '-' + item?.time?.to,
        });
      } else {
        final_data.push({
          OrderID: item.id,
          Name: item?.user?.name,
          Mobile: item?.user?.mobile,
          Emirate: item?.emirate?.name,
          Date: item.date,
          Time: item?.time?.from + '-' + item?.time?.to,
        });
      }
    });
    //console.log(final_data)
    setExcelData(final_data);
    setShopID(orders[0]?.shop?.id);
    final_data = [];
  };

  const exportDataToExcel = () => {
    // RNFS.writeFile(path, wbout, 'ascii');

    // remove file if already there
    // removeFile(path);

    let wb = XLSX.utils.book_new();

    let ws = XLSX.utils.json_to_sheet(excelData ? excelData : '');
    var wscols = [
      {wch: 15},
      {wch: 20},
      {wch: 12},
      {wch: 10},
      {wch: 10},
      {wch: 15},
    ];

    ws['!cols'] = wscols;

    XLSX.utils.book_append_sheet(wb, ws, 'Orders');

    const wbout = XLSX.write(wb, {type: 'binary', bookType: 'xlsx'});
    let path = `${
      Platform.OS === 'android'
        ? RNFS.DownloadDirectoryPath
        : RNFS.DocumentDirectoryPath
    }/Shop-Orders${new Date().getTime()}.xlsx`;
    // Write generated excel to Storage
    // alert(path);
    RNFS.writeFile(path, wbout, 'ascii')
      .then(r => {
        console.log(
          'Success' + path
        );
        toastMessage(strings('Success'));
      })
      .catch(e => {
        console.log('Error', e);
      });
    path = '';
  };
  const handleClick = async () => {
    try {
      // Check for Permission (check if permission is already given or not)
      // let isPermitedExternalStorage = '';
      let isPermitedExternalStorage = Platform.OS==='ios' ? true :"";

      if (!isPermitedExternalStorage) {
        // Ask for permission
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          {
            title: 'Storage permission needed',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Permission Granted (calling our exportDataToExcel function)
          if (excelData == []) {
            // formatOrdersdata().then(() => {
            //   exportDataToExcel();
            // });
          } else {
            exportDataToExcel();
          }

          //console.log('Permission granted');
        } else {
          // Permission denied
          console.log('Permission denied');
        }
      } else {
        // Already have Permission (calling our exportDataToExcel function)
        if (excelData == []) {
          // formatOrdersdata().then(() => {
          //   exportDataToExcel();
          // });
          toastMessage(strings('Please wait till data comes'));
        } else {
          exportDataToExcel();
        }
      }
      // exportDataToExcel();
    } catch (e) {
      //console.log('Error while checking permission');
      // console.log(e);
      return;
    }
  };

  return <ExportButton handlePress={() => handleClick()} />;
};

export default ExportOrders;
