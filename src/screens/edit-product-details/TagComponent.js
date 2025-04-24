import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import TagItem from '../products/TagItem';

const TagComponent = props => {
  let tickedImg = require('../../../assets/images/checkbox-ticked.png');
  let untickedImg = require('../../../assets/images/checkbox.png');

  const [bestSeller, setBestSeller] = React.useState(true);
  const [dealsoftheDay, setDealsoftheDay] = React.useState(false);
  const [offers, setOffers] = React.useState(false);
  const [experience, setExperience] = React.useState(false);
  const [mostImportant, setMostImportant] = React.useState(false);

  return (
    <View style={{marginBottom: 8}}>
      <Text style={styles.subheader}>Tags</Text>
      <View style={styles.formView}>
        <View style={{flexDirection: 'row'}}>
          <TagItem
            img={bestSeller ? tickedImg : untickedImg}
            title="Best Seller"
            handlePress={() => setBestSeller(!bestSeller)}
          />
          <TagItem
            img={offers ? tickedImg : untickedImg}
            handlePress={() => setOffers(!offers)}
            title="Offer"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TagItem
            img={dealsoftheDay ? tickedImg : untickedImg}
            handlePress={() => setDealsoftheDay(!dealsoftheDay)}
            title="Deals Of The Day"
          />
          <TagItem
            img={experience ? tickedImg : untickedImg}
            handlePress={() => setExperience(!experience)}
            title="An Experience"
          />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 8}}>
          <TagItem
            img={mostImportant ? tickedImg : untickedImg}
            handlePress={() => setMostImportant(!mostImportant)}
            title="The Most Important Products"
          />
        </View>
        <View style={commonstyles.mb16}>
          <Text style={styles.productName}> Create a New One </Text>
          <TextInput style={styles.input} placeholder="Type..." />
        </View>
      </View>
    </View>
  );
};

export default TagComponent;
