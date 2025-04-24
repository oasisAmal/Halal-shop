import React from 'react';

import DropdownWithLabel from '../../common/DropdownWithLabel';
import {
  EmiratesListService,
  RegionListService,
} from '../../../services/OrdersServices';
import {toastMessage} from '../../utils/functions/commonFunctions';
import {strings} from '../../../i18n';

let EmiratewithRegions = props => {
  const [emirates, setEmirates] = React.useState([]);
  const [selectedEmirate, setSelectedEmirate] = React.useState('');
  const [selectedRegion, setSelectedRegion] = React.useState(1);
  const [regions, setRegions] = React.useState([]);

  let onSuccess = async response => {
    setEmirates(response.data.data);
  };

  let onFailure = error => {
    alert(error);
  };

  let onSuccessRegion = async response => {
    setRegions(response.data.data);
  };

  let onFailureRegion = error => {
    toastMessage(error);
  };

  React.useEffect(() => {
    EmiratesListService(onSuccess, onFailure);
  }, []);

  let fetchRegionsData = () => {
    let formData = {emirate_id: selectedEmirate};

    RegionListService(formData, onSuccessRegion, onFailureRegion);
    //console.log('again calling fetchData ');
  };

  React.useEffect(() => {
    if (selectedEmirate != '') {
      fetchRegionsData();
    }
  }, [selectedEmirate]);

  let handleEmirate = e => {
    setSelectedEmirate(e);

    props.handlePress(e, '');
  };
  let handleRegion = r => {
    //setSelectedEmirate(e);
    setSelectedRegion(r);
    props.handlePress(selectedEmirate, r);
  };

  return (
    <>
      <DropdownWithLabel
        label={strings('Emirate')}
        data={emirates}
        defaultTxt={strings('Select Emirate')}
        handlePress={e => handleEmirate(e)}
        setSelectedItemText={props.setSelectedItemText}
      />
      <DropdownWithLabel
        label={strings('Region')}
        data={regions}
        defaultTxt={strings('Select Region')}
        handlePress={r => handleRegion(r)}
        setSelectedItemText={props.setselectedRegion}
      />
    </>
  );
};

export default EmiratewithRegions;
