import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import TagItem from '../products/TagItem';
import {TagsService} from '../../services/ProductService';
import {FlatList} from 'react-native-gesture-handler';

const TagComponent = props => {
  let tickedImg = require('../../../assets/images/checkbox-ticked.png');
  let untickedImg = require('../../../assets/images/checkbox.png');

  const [bestSeller, setBestSeller] = React.useState(true);
  const [dealsoftheDay, setDealsoftheDay] = React.useState(false);
  const [offers, setOffers] = React.useState(false);
  const [experience, setExperience] = React.useState(false);
  const [mostImportant, setMostImportant] = React.useState(false);

  const [tags, setTags] = React.useState([]);
  const [customtags, setcustomTags] = React.useState([]);

  let onSuccess = async response => {
    setTags(response.data);

    let tag_array = [];
    for (let index = 0; index < response.data.length; index++) {
      const element = response.data[index];
      let e1 = {
        id: element.id,
        name: element.name,
        name_en: element.name_en,
        selected: false,
      };
      tag_array.push(e1);
    }
    setcustomTags(tag_array);

    // console.log(response.data);
  };

  let onFailure = error => {
    console.log(error);
  };

  const fetchTags = () => {
    TagsService({}, onSuccess, onFailure);
  };

  useEffect(() => {
    fetchTags();
  }, []);

  handleTagItem = item => {
    //let uindex = customtags.filter(item1 => item.id === item1.id);

    const nextCounters = customtags.map((c, i) => {
      if (c.id === item.id) {
        // Increment the clicked counter
        c.selected = !c.selected;
        return c;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setcustomTags(nextCounters);
    props.setselectedTags(nextCounters);

    //setcustomTags(customtags=> customtags.uindex['selected'] )
  };

  return (
    <View style={{marginBottom: 8}}>
      <Text style={styles.subheader}>Tags</Text>
      <View style={styles.formView}>
        <View style={{flex: 1}}>
          <FlatList
            numColumns={2}
            data={customtags}
            renderItem={({item}) => (
              <TagItem
                title={item.name}
                img={item.selected ? tickedImg : untickedImg}
                handlePress={() => handleTagItem(item)}
              />
            )}
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
