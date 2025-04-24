import React from 'react';

import DropdownWithLabel from '../../common/DropdownWithLabel';
import {CategoriesListService} from '../../../services/OrdersServices';
import {toastMessage} from '../../utils/functions/commonFunctions';
import {ListUserService} from '../../../services/UserServices';
import {OrderCounts} from '../../../services/OrdersServices';

let Users = props => {
  const [users, setUsers] = React.useState([]);
  let {handlePress} = props;

  let onSuccess = async response => {
    //console.log('on success ');
    setUsers(response.data.data);
    //console.log(response.data.data);
  };

  let onFailure = error => {
    alert('failed api ');
    toastMessage(error);
  };

  let fetchData = () => {
    // console.log('fetch data ');
    let fd = {q: 'hossam'};
    ListUserService(fd, onSuccess, onFailure);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <DropdownWithLabel
      label="Existing User"
      data={users}
      defaultTxt="Select one"
      handlePress={handlePress}
    />
  );
};

export default Users;
