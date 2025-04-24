import React from 'react';

import DropdownWithLabel from '../../common/DropdownWithLabel';
import {toastMessage} from '../../utils/functions/commonFunctions';
import {ListAddressService} from '../../../services/AddressService';

let RegionalAdresses = props => {
  const {handlePress} = props;
  const [addresses, setAddresses] = React.useState([]);

  let onSuccess = response => {
    //console.log('in success ');
    setAddresses(response.data.data);
    // console.log(response.data);
  };

  let onFailure = error => {
    toastMessage(error);
    setAddresses([]);
  };
  React.useEffect(() => {
    let fd = {user_id: 325};
    ListAddressService(fd, onSuccess, onFailure);
  }, []);

  return (
    <DropdownWithLabel
      label="Region Address"
      data={addresses}
      defaultTxt="Select one address or create one"
      selectKey="address"
      buttonTextAfterSelection={item => {
        return item.address;
      }}
      rowTextForSelection={item => {
        return item.address;
      }}
      handlePress={handlePress}
    />
  );
};

export default RegionalAdresses;
