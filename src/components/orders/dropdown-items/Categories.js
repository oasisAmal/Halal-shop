import React from 'react';

import DropdownWithLabel from '../../common/DropdownWithLabel';
import {CategoriesListService} from '../../../services/OrdersServices';
import {toastMessage} from '../../utils/functions/commonFunctions';

let Categories = props => {
  const [categories, setCategories] = React.useState([]);

  let onSuccess = async response => {
    setCategories(response.data.data);
    //console.log(response.data.data);
  };

  let onFailure = error => {
    toastMessage(error);
  };

  let fetchData = () => {
    CategoriesListService('', onSuccess, onFailure);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <DropdownWithLabel
      label="Section"
      data={categories}
      defaultTxt="Select one"
      handlePress={props.handlePress}
    />
  );
};

export default Categories;
