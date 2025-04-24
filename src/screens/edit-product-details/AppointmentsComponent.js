import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

import styles from './styles';
import commonstyles from '../../styles/defultStyles';
import {checkbox_data, time_slots_data} from '../../data/DummyData';
import myColors from '../../styles/myColors';
import CustomDropdown from '../../components/utils/CustomDropdown';
import TagItem from '../products/TagItem';
import AvailableDaysComponent from '../../components/available-days';

const Appointment = props => {
  let tickedImg = require('../../../assets/images/checkbox-ticked.png');
  let untickedImg = require('../../../assets/images/checkbox.png');

  const [delivery, setDelivery] = React.useState(true);
  const [fastdelivery, setFastDelivery] = React.useState(false);
  const [vipdelivery, setVIPDelivery] = React.useState(false);
  const [bookticket, setBookTicket] = React.useState(true);
  const [sacrificedate, setSacrificeDate] = React.useState(false);

  return (
    <View style={{}}>
      <Text style={styles.subheader}>Appointments</Text>
      <View
        style={[
          styles.saveBtn,
          {
            backgroundColor: myColors.greenBtnBg,
            marginBottom: 4,
          },
        ]}>
        <Text style={commonstyles.longBtnTxt}> Add Appointments </Text>
      </View>
      <View
        style={[
          styles.saveBtn,
          {
            backgroundColor: myColors.greenBtnBg,
          },
        ]}>
        <Text style={commonstyles.longBtnTxt}>
          Cancel Special Appointments{' '}
        </Text>
      </View>
      <View style={[commonstyles.flewRow, {marginVertical: 12}]}>
        <Image
          source={require('../../../assets/images/checkbox-ticked.png')}
          style={{
            width: 24,
            height: 24,
          }}
        />
        <Text style={styles.deliveryTxt}>
          {' '}
          Possibility of delivery in 30 minutes{' '}
        </Text>
      </View>

      <View style={styles.formView}>
        <View style={commonstyles.mb16}>
          <CustomDropdown data={time_slots_data} />
        </View>
        <Text
          style={[
            styles.productName,
            {
              marginTop: -16,
            },
          ]}>
          Delivery{' '}
        </Text>

        <View style={{flexDirection: 'row'}}>
          <TagItem
            img={delivery ? tickedImg : untickedImg}
            title="Delivery"
            handlePress={() => setDelivery(!delivery)}
          />
          <TagItem
            img={fastdelivery ? tickedImg : untickedImg}
            title="Fast Delivery"
            handlePress={() => setFastDelivery(!fastdelivery)}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TagItem
            img={vipdelivery ? tickedImg : untickedImg}
            handlePress={() => setVIPDelivery(!vipdelivery)}
            title="Delivery to VIP"
          />
          <TagItem
            img={bookticket ? tickedImg : untickedImg}
            handlePress={() => setBookTicket(!bookticket)}
            title="Book a Slaughter Ticket"
          />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 8}}>
          <TagItem
            img={sacrificedate ? tickedImg : untickedImg}
            handlePress={() => setSacrificeDate(!sacrificedate)}
            title="Sacrifice Dates"
          />
          <View style={styles.emptyTag}></View>
        </View>
        <View style={commonstyles.mb16}>
          <Text
            style={[
              styles.productName,
              {
                color: myColors.slate800,
                marginVertical: 16,
              },
            ]}>
            {' '}
            Book a slaughter ticket{' '}
          </Text>
          <View style={commonstyles.flewRow}>
            <View>
              <Image
                source={require('../../../assets/images/checkbox.png')}
                style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
              />
            </View>
            <View>
              <Text style={[styles.productName, {}]}>Delivery Price</Text>
            </View>
          </View>
          <TextInput style={styles.input} placeholder="Type..." />
          <Text style={{marginTop: 4, marginBottom: 16}}>
            Remove the tag to get the value from top level
          </Text>

          <View style={commonstyles.flewRow}>
            <View>
              <Image
                source={require('../../../assets/images/checkbox.png')}
                style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
              />
            </View>
            <View>
              <Text style={[styles.productName, {}]}>
                {' '}
                Order after a few days
              </Text>
            </View>
          </View>
          <TextInput style={styles.input} placeholder="Type..." />
          <Text style={{marginTop: 4, marginBottom: 16}}>
            Set 0 to be able to order on the same day
          </Text>

          <View style={commonstyles.flewRow}>
            <View>
              <Image
                source={require('../../../assets/images/checkbox.png')}
                style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
              />
            </View>
            <View>
              <Text style={[styles.productName, {}]}> Day after hour</Text>
            </View>
          </View>
          <TextInput
            style={[
              styles.input,
              {
                marginBottom: 16,
              },
            ]}
            placeholder="Type..."
          />
          <View
            style={[
              styles.input,
              {
                marginBottom: 16,
              },
            ]}>
            <Text>Select Time</Text>
            <Image
              source={require('../../../assets/images/time.png')}
              style={{
                width: 24,
                height: 24,
                marginRight: 16,
                marginVertical: 9,
                right: 0,
                position: 'absolute',
              }}
            />
          </View>

          <View style={commonstyles.flewRow}>
            <View>
              <Image
                source={require('../../../assets/images/checkbox.png')}
                style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
              />
            </View>
            <View>
              <Text style={[styles.productName, {}]}>
                {' '}
                Available days in a week
              </Text>
            </View>
          </View>
          <Text style={{marginTop: 4, marginBottom: 16}}>
            uncheck to get the value from the top level
          </Text>
          <AvailableDaysComponent />
          <View>
            <Text
              style={[
                styles.productName,
                {
                  marginTop: 16,
                },
              ]}>
              {' '}
              Visa
            </Text>
            <Text style={[styles.productName, {}]}> Eid Days</Text>
            <View style={commonstyles.flewRow}>
              <View
                style={[
                  commonstyles.flewRow,
                  {
                    marginRight: 16,
                  },
                ]}>
                <Image
                  source={require('../../../assets/images/checkbox-ticked.png')}
                  style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
                />
                <Text style={styles.productName}>1 </Text>
              </View>
              <View
                style={[
                  commonstyles.flewRow,
                  {
                    marginRight: 16,
                  },
                ]}>
                <Image
                  source={require('../../../assets/images/checkbox.png')}
                  style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
                />
                <Text style={styles.productName}>2 </Text>
              </View>
              <View
                style={[
                  commonstyles.flewRow,
                  {
                    marginRight: 16,
                  },
                ]}>
                <Image
                  source={require('../../../assets/images/checkbox.png')}
                  style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
                />
                <Text style={styles.productName}>3 </Text>
              </View>
              <View
                style={[
                  commonstyles.flewRow,
                  {
                    marginRight: 16,
                  },
                ]}>
                <Image
                  source={require('../../../assets/images/checkbox.png')}
                  style={{width: 20, height: 20, marginRight: 8, marginTop: 2}}
                />
                <Text style={styles.productName}>4 </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Appointment;
