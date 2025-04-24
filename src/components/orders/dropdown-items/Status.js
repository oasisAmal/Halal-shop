import React from 'react';

import DropdownWithLabel from '../../common/DropdownWithLabel';
import {StatusListService} from '../../../services/OrdersServices';
import {strings} from '../../../i18n';

let Status = props => {
  const [status_data, setStatusData] = React.useState([]);

  let onSuccess = async response => {
    setStatusData(response.data.data);
    // console.log(response.data.data);
  };

  let onFailure = error => {
    alert(error);
  };

  let fetchData = () => {
    StatusListService(onSuccess, onFailure);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <DropdownWithLabel
      label={strings('Status')}
      data={status_data}
      defaultTxt={strings('Select status')}
      handlePress={props.handlePress}
      setSelectedItemText={props.setSelectedItemText}
    />
  );
};

export default Status;
