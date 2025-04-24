import React from 'react';

import DropdownWithLabel from '../../common/DropdownWithLabel';
import {ShippingMethodsListService} from '../../../services/OrdersServices';

let ShippingMethods = props => {
  const {label} = props;
  const [shipping_methods, setShippingMethods] = React.useState([]);

  let onSuccess = response => {
    console.log('in success ');
    setShippingMethods(response.data.data);
    //console.log(response.data);
  };

  let onFailure = error => {
    alert(error);
    setShippingMethods([]);
  };
  React.useEffect(() => {
    ShippingMethodsListService(onSuccess, onFailure);
  }, []);

  return (
    <DropdownWithLabel
      label={label ? label : 'Shipping Method'}
      data={shipping_methods}
      defaultTxt="Select one"
      //handlePress={props.handlePress}
    />
  );
};

export default ShippingMethods;
