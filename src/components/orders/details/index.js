import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import {ScrollView} from 'react-native-gesture-handler';
import {theme_color} from '../../../mutils';
import OrderDetailsCard from './OrderDetailsCard';
import AddNote from '../../notes/index';
import OrderItem from './OrderItem';
import DriverCustomization from '../../driver-customization';
import ChangeStatus from '../../change-status';
import CreateLabel from '../../order-label';
import CreateBarcode from '../../barcode';
import Invoice from '../../order-invoice';
import SubHeader from '../../partials/Subheader';
import {ListOrderDetailsService} from '../../../services/OrdersServices';
import OrderInvoicePDF from './OrderInvoicePDF';
import I18n from 'react-native-i18n';
import {strings} from '../../../i18n';
import TrackOrder from '../../../screens/track-order';
import styles from './details-styles';
import AddressOnMap from '../../address-on-map';
import DeliveryDetails from '../delivery-details';

const OrderDetails = props => {
  const [pressed, setPressed] = React.useState(false);
  const [shadowClr, setShadowClr] = React.useState('');
  const [driverCusPressed, setDriverCusPressed] = React.useState(false);
  const [createLabel, setCreateLabel] = React.useState(false);
  const [createBarcode, setCreateBarcode] = React.useState(false);
  const [invoicePressed, setInvoicePressed] = React.useState(false);
  const [orderID, setorderID] = React.useState('');
  const [orderDetails, setOrderDetails] = React.useState('');
  const [copiedText, setCopiedText] = React.useState('');
  const [openStatuses, setopenStatus] = React.useState(false);
  const [openTrackOrder, setOpenTrackOrder] = React.useState(false);
  const [driverUpdated, setdriverUpdated] = React.useState(false);
  const [statusUpdated, setstatusUpdated] = React.useState(false);

  const [showMap, setShowMap] = React.useState(false);

  const handleSatusUpdate = status => {
    setstatusUpdated(status);
  };

  const toggleInvoicePressed = status => {
    setInvoicePressed(status);
  };
  const toggleCreateLabel = status => {
    setCreateLabel(status);
  };
  const toggleCreateBarcode = status => {
    setCreateBarcode(status);
  };
  const handlePress = (screen, color) => {
    setPressed(true);
    setShadowClr(color);
  };

  const customizeDriver = () => {
    //Alert.alert("jjb dfgd")
    setDriverCusPressed(true);
  };
  const toggleDriver = () => {
    //Alert.alert("jjb dfgd")
    setDriverCusPressed(false);
  };
  const onSuccess = response => {
    // console.log('order details ==== ');
    // console.log(response.data.data);
    setOrderDetails(response.data.data);
    setdriverUpdated(false);
    setstatusUpdated(false);
  };
  const onError = () => {};
  const fetchOrderDetails = () => {
    let fd = {
      order_id: props.route.params.order_id,
    };
    ListOrderDetailsService(fd, onSuccess, onError);
  };

  React.useEffect(() => {
    let order_id = props.route.params.order_id;
    setorderID(order_id);
    fetchOrderDetails();
    return () => {
      order_id = null;
    };
    // I18n.locale = 'en';
  }, []);

  React.useEffect(() => {
    fetchOrderDetails();
    return () => {
      //order_id = null;
    };
    // I18n.locale = 'en';
  }, [driverUpdated, statusUpdated]);

  if (openTrackOrder) {
    return (
      <TrackOrder
        setOpenTrackOrder={setOpenTrackOrder}
        customerLocation={orderDetails?.address}
        driver={orderDetails?.driver}
      />
    );
  } else if (showMap) {
    return (
      <View style={{flex: 1}}>
        <AddressOnMap
          customerLocation={orderDetails?.address}
          setShowMap={setShowMap}
        />
      </View>
    );
  } else
    return (
      <View style={styles.container}>
        <ScrollView>
          <SubHeader
            title={strings('Orders Details No') + ` ${orderID}`}
            subtitle={strings('Home') + ' / ' + strings('Chose Type')}
          />
          {/* <OrderInvoicePDF /> */}

          {openStatuses && (
            <ChangeStatus
              toggleDriver={() => setopenStatus(!openStatuses)}
              driverCusPressed={openStatuses}
              orderID={orderID}
              order={props.route.params.order}
              setstatusUpdated={status => handleSatusUpdate(status)}
              handleSatusUpdate={status => handleSatusUpdate(status)}
            />
          )}

          {driverCusPressed && (
            <DriverCustomization
              toggleDriver={toggleDriver}
              driverCusPressed={driverCusPressed}
              orderID={orderID}
              setdriverUpdated={setdriverUpdated}
              driver={orderDetails?.driver}
            />
          )}
          {orderDetails?.status?.id && orderDetails?.status?.id !== 4 && (
            <>
              <TouchableOpacity onPress={() => customizeDriver('')}>
                <View style={[styles.longBtn, {}]}>
                  <Text style={styles.longBtnTxt}>
                    {strings('Driver Customization')}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={
                  () => setopenStatus(!openStatuses)
                  // alert("hi")
                }>
                <View
                  style={[
                    styles.longBtn,
                    {
                      // designer said no animation for this, since already applying from default
                      //  elevation: pressed ?  4: 0,
                      //  shadowColor: shadowClr
                    },
                  ]}>
                  <Text style={styles.longBtnTxt}>
                    {strings('Change Status')}{' '}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  //handlePress('','#21DB7459')
                  setInvoicePressed(true)
                }>
                <View
                  style={[
                    styles.longBtn,
                    {
                      backgroundColor: '#21DB74',
                      elevation: pressed ? 4 : 0,
                      shadowColor: shadowClr,
                    },
                  ]}>
                  <Text style={styles.longBtnTxt}>
                    {strings('Create an invoice')}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCreateLabel(true)}>
                <View style={[styles.longBtn, {backgroundColor: '#21DB74'}]}>
                  <Text style={styles.longBtnTxt}>
                    {strings('Create Label')}{' '}
                  </Text>
                </View>
              </TouchableOpacity>
              {orderDetails?.driver && (
                <TouchableOpacity
                  onPress={() =>
                    // props.navigation.replace('TrackOrder', {
                    //   customerLocation: orderDetails?.address,
                    // })
                    setOpenTrackOrder(!openTrackOrder)
                  }>
                  <View style={[styles.longBtn, {}]}>
                    <Text style={styles.longBtnTxt}>
                      {strings('Order Tracking')}{' '}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </>
          )}

          {invoicePressed && (
            <Invoice
              invoicePressed={invoicePressed}
              toggleInvoicePressed={toggleInvoicePressed}
              orderID={orderID}
              navigation={props.navigation}
            />
          )}

          {createLabel && (
            <CreateLabel
              createLabel={createLabel}
              toggleCreateLabel={toggleCreateLabel}
              orderID={orderID}
            />
          )}

          {orderDetails?.driver && (
            <DeliveryDetails
              driver={orderDetails?.driver}
              delivered_at={orderDetails?.delivered_at}
              assigned_at={orderDetails?.assigned_at}
              order_id={orderDetails?.id}
              setdriverUpdated={setdriverUpdated}
            />
          )}

          <OrderDetailsCard
            orderDetails={orderDetails}
            setShowMap={setShowMap}
          />
          <AddNote
            title={strings('Permanent feedback to the customer')}
            orderID={orderID}
            notetype="customer-note"
          />
          <AddNote
            title={strings('Account Notes')}
            orderID={orderID}
            notetype="note"
          />
          {orderDetails &&
            orderDetails.details &&
            orderDetails.details.map((item, index) => {
              return (
                <OrderItem
                  key={index}
                  data={{
                    type: item?.product?.name,
                    quantity: item.quantity,
                    unit_price: item.price,
                    weight: item?.sub_product?.name,
                    age: item?.sub_product?.name,
                    details: item?.details[0],
                  }}
                />
              );
            })}

          <View style={{marginBottom: 57}}></View>
        </ScrollView>
      </View>
    );
};

export default OrderDetails;
