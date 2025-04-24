import React from 'react';

import DropdownWithLabel from '../../common/DropdownWithLabel';
import {PaymentMethodsListService} from '../../../services/OrdersServices';
import {toastMessage} from '../../utils/functions/commonFunctions';
import {strings} from '../../../i18n';

let PaymentMethods = props => {
  const {label, handlePress} = props;
  const [payment_methods, setPaymentMethods] = React.useState([]);

  let onSuccess = response => {
    //console.log('in success ');
    setPaymentMethods(response.data.data);
    // console.log(response.data);
  };

  let onFailure = error => {
    toastMessage(error);
    setPaymentMethods([]);
  };
  React.useEffect(() => {
    PaymentMethodsListService(onSuccess, onFailure);
  }, []);

  return (
    <DropdownWithLabel
      label={label ? label : strings('Paying Off')}
      data={payment_methods}
      defaultTxt={strings('Select one')}
      handlePress={handlePress}
      setSelectedItemText={props.setselectedPaymethod}
    />
  );
};

export default PaymentMethods;
