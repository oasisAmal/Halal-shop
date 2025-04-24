import React from 'react';

import DropdownWithLabel from '../../common/DropdownWithLabel';
import {CategoriesListService} from '../../../services/OrdersServices';

let SubCategories = props => {
  const [categories, setCategories] = React.useState([]);

  let onSuccess = async response => {
    setCategories(response.data.data);
    //console.log(response.data.data);
  };

  let onFailure = error => {
    alert(error);
  };

  let fetchData = () => {
    let formData = new FormData();
    formData.append('parent_id', 1);
    CategoriesListService(formData, onSuccess, onFailure);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <DropdownWithLabel
      label="Subsection"
      data={categories}
      defaultTxt="Select one"
      //handlePress={props.handlePress}
    />
  );
};

export default SubCategories;
