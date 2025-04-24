import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import CreateUser from '../user/CreateUser';
import CreateAddress from '../user/CreateAddress';
import {connect} from 'react-redux';
import {toggleBlur} from '../../store/reducers';
import SubHeader from '../partials/Subheader';
import styles from './styles';
import InputWithLabel from '../common/InputWithLabel';
import CreateButton from '../create-button';
import SaveButton from '../save-button';
import DatePickerWithLabel from '../common/DatePickerWithLabel';
import Categories from './dropdown-items/Categories';
import EmiratewithRegions from './dropdown-items/EmiratewithRegions';
import PaymentMethods from './dropdown-items/PaymentMethods';
import ShippingMethods from './dropdown-items/ShippingMethods';
import TimeWithInput from '../common/TimeWithInput';
import Users from './dropdown-items/Users';
import RegionalAdresses from './dropdown-items/RegionalAdresses';
import {toastMessage} from '../utils/functions/commonFunctions';
import {CreateOrderService} from '../../services/OrdersServices';
import ProductsandSubproducts from './dropdown-items/ProductsandSubproducts';

let CreateOrder = props => {
  let [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [addressmodalVisible, setAddressModalVisible] = useState(false);
  const [userid, setUserId] = useState('');
  const [categoryid, setCategoryId] = useState('');
  const [emirateid, setEmirateId] = useState('');
  const [regionid, setRegionId] = useState('');
  const [addressid, setAddressId] = useState('');
  const [selectedProductId, setSelectedProductId] = React.useState('');
  const [selectedSubproduct, setSelectedSubproduct] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(false);

  const toggleModal = status => {
    setModalVisible(status);
    props.toggleBlur(status);
  };

  const setProductIdandSubId = (product_id, sub_product_id) => {
    //console.log('calling from parent ' + product_id + ' sub ' + sub_product_id);
    setSelectedProductId(product_id);
    setSelectedSubproduct(sub_product_id);
  };

  const toggleAddressModal = status => {
    setAddressModalVisible(status);
    props.toggleBlur(status);
  };

  let retriveFormdata = () => {
    const fd = {
      user_id: userid, /// customer_id
      category_id: categoryid,
      emirate_id: emirateid,
      region_id: regionid,
      address_id: addressid,
      date: selectedDate,
      time_from: '13:00:00',
      time_to: '15:00:00',
      payment_method: '1',
      shipping_method_id: '1',
      notes: 'order notes',
      order_details: [
        {
          product_id: selectedProductId,
          sub_product_id: selectedSubproduct,
          quantity: '2',
        },
      ],
    };
    return fd;
  };

  let onSuccess = response => {
    toastMessage('successfully saved');
    console.log(response.data);
    //setLoading(false);
  };

  let onFailure = error => {
    setLoading(false);

    console.log(error);
    //setAddresses([]);
  };

  const saveAddress = () => {
    setLoading(true);
    CreateOrderService(retriveFormdata(), onSuccess, onFailure);
  };
  let handleEmiratesandRegions = (emirate_id, region_id) => {
    setEmirateId(emirate_id);
    setRegionId(region_id);
    //console.log('emirate_id is ' + emirate_id + ' region_id is' + region_id);
  };

  return (
    <View
      style={{
        flex: 1,
        opacity: modalVisible || addressmodalVisible ? 0.2 : null,
      }}>
      <ScrollView>
        <View style={{marginHorizontal: 16}}>
          <SubHeader
            title="Create Order"
            subtitle="Home / Order / Create an Order"
          />
        </View>
        <View
          style={[
            styles.mh16,
            {
              backgroundColor: 'white',
              paddingTop: 16,
              borderRadius: 8,
            },
          ]}>
          <Categories
            handlePress={id => {
              setCategoryId(id);
              //console.log(id + ' setCategoryId id ');
            }}
          />
          <EmiratewithRegions
            handlePress={(emirate_id, region_id) =>
              handleEmiratesandRegions(emirate_id, region_id)
            }
          />
          <Users
            handlePress={id => {
              setUserId(id);
              //console.log(id + ' user id ');
            }}
          />
          <View style={{marginBottom: -32}}>
            <CreateButton
              mh={16}
              label="Create a New User"
              handlePress={() => toggleModal(true)}
            />
          </View>
          <CreateUser toggleModal={toggleModal} modalVisible={modalVisible} />
          <RegionalAdresses
            handlePress={id => {
              setAddressId(id);
              //console.log(id + ' address ');
            }}
          />
          <View style={{marginBottom: -32}}>
            <CreateButton
              mh={16}
              label="Add a New Address"
              handlePress={() => toggleAddressModal(true)}
            />
          </View>
          <CreateAddress
            toggleAddressModal={toggleAddressModal}
            addressmodalVisible={addressmodalVisible}
            emirate_id={4}
            region_id={7}
          />
          <DatePickerWithLabel
            label="Date"
            setSelectedDate={date => setSelectedDate(date)}
          />
          <View style={{marginHorizontal: 16, marginTop: -28}}>
            <TimeWithInput mb={8} label="Select Time" />
          </View>
          <PaymentMethods label="Payment Method" />
          <ShippingMethods />
          <InputWithLabel label="Additional Request" />

          <View>
            <Text style={styles.orderTxt}>Order Details</Text>
          </View>

          {/* <DropdownWithLabel
            data={departments}
            defaultTxt="Select Department"
            label="Subsection"
          /> */}
          <ProductsandSubproducts
            setProductIdandSubId={(pid, sub_id) =>
              setProductIdandSubId(pid, sub_id)
            }
          />
          <InputWithLabel label="Quantity" />
          <View style={{marginHorizontal: 16}}>
            <SaveButton handlePress={() => saveAddress()} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    enableBlur: state.enableBlur,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    toggleBlur: status => dispatch(toggleBlur(status)),
  };
}

export default CreateOrder = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateOrder);
