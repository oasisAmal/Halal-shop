import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import CustomDropdown from '../../components/utils/CustomDropdown';
import {products_data} from '../../data/DummyData';
import CreateButton from '../../components/create-button';
import PictureComponent from './PictureComponent';
import CookingComponent from './CookingComponent';
import QuantityComponent from './QuantityComponent';
import TagComponent from './TagComponent';
import Appointment from './AppointmentsComponent';
import Price from './PriceComponent';
import SpecialSection from './special-section';
import SaveButton from '../../components/save-button';
import AvailableTime from '../../components/available-time';
import MasterData from './MasterData';

const EditProductDetails = props => {
  navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };
  const [timeOpened, setTimeOpened] = React.useState(false);

  const toggleTimeOpened = () => {
    setTimeOpened(!timeOpened);
  };

  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          {marginBottom: 40, opacity: timeOpened ? 0.2 : 1},
        ]}>
        <Text style={styles.editTxt}>Edit Product</Text>
        <MasterData />
        <Text style={styles.subheader}>Section</Text>
        <View style={styles.rowView}>
          <Image
            source={require('../../../assets/images/section.png')}
            resizeMode="stretch"
            style={styles.sectionImg}
          />
          <Text style={styles.sectionTxt}> Fish</Text>
        </View>

        <Text style={styles.subheader}>Branch</Text>
        <View style={[styles.formView, {height: 200}]}>
          <Text style={styles.productName}> Main Product</Text>
          <CustomDropdown data={products_data} defaultTxt="All Sections" />
        </View>
        <Price />
        <PictureComponent />
        <CookingComponent />
        <QuantityComponent />
        <TagComponent />
        <Appointment />
        <CreateButton
          hideImg={'true'}
          label="Available Time"
          mh={4}
          handlePress={() => setTimeOpened(true)}
        />
        {timeOpened && <AvailableTime handlePress={toggleTimeOpened} />}

        <SpecialSection />
        <SaveButton />
      </View>
    </ScrollView>
  );
};

export default EditProductDetails;
