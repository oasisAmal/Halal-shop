import React from 'react';

import {
  ListProductsService,
  ListSubProductsService,
} from '../../../services/ProductService';
import {toastMessage} from '../../utils/functions/commonFunctions';
import CustomDropdown from '../../utils/CustomDropdown';
import styles from '../../../styles/inputStyles';
import {Text, View} from 'react-native';

let ProductsandSubproducts = props => {
  const [products, setProducts] = React.useState([]);
  const [selectedProductId, setSelectedProductId] = React.useState('');
  const [subproducts, setSubproducts] = React.useState([]);
  const [selectedSubproduct, setSelectedSubproduct] = React.useState('');

  let onSuccess = async response => {
    setProducts(response.data.data);
  };

  let onFailure = error => {
    alert(error);
  };

  let onSuccessSubproducts = async response => {
    setSubproducts(response.data.data);
    //console.log(response.data.data[0]);
  };

  let onFailureSubproducts = error => {
    setSubproducts([]);
    toastMessage('No sub products found');
  };

  React.useEffect(() => {
    let fd = {
      // q: 'لحم ناعم بقري',
      q: '',
    };
    ListProductsService(fd, onSuccess, onFailure);
  }, []);

  let fetchSubproducts = () => {
    let fd = {
      // q: 'لحم ناعم بقري',
      product_id: selectedProductId,
    };
    //console.log(fd.product_id + 'this is fd ');
    ListSubProductsService(fd, onSuccessSubproducts, onFailureSubproducts);
    // setSubproducts(sub_products);
  };

  React.useEffect(() => {
    if (selectedProductId != '') {
      setSubproducts([]);
      fetchSubproducts();
    } else {
      //alert('selected produc id is ' + selectedProductId);
    }
  }, [selectedProductId]);

  return (
    <View style={[styles.mh16]}>
      <Text style={[styles.name, {marginBottom: 0}]}>Products </Text>
      <CustomDropdown
        data={products}
        rowTextForSelection={item => {
          return item.name;
        }}
        buttonTextAfterSelection={selectedItem => {
          // if (selectedItem) {
          //   setSelectedProductId(selectedItem.id);
          // }

          return selectedItem.name;
        }}
        setSelectedItem={selectedItem => {
          // if (selectedItem) {
          setSelectedProductId(selectedItem);
          // console.log(selectedItem + ' product id is ' + selectedProductId);

          // }

          //return selectedItem.name;
        }}
      />

      {subproducts && subproducts.length > 0 && (
        <>
          <Text style={[styles.name, {marginBottom: 0}]}>Sub Products </Text>
          <CustomDropdown
            data={subproducts}
            setSelectedItem={selectedItem => {
              // if (selectedItem) {
              setSelectedSubproduct(selectedItem);
              console.log(
                selectedItem + ' subproduct id is ' + selectedSubproduct,
              );
              props.setProductIdandSubId(selectedProductId, selectedSubproduct);

              // }

              //return selectedItem.name;
            }}
          />
        </>
      )}
    </View>
  );
};

export default ProductsandSubproducts;
