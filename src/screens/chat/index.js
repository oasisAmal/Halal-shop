import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import myColors from '../../styles/myColors';
import SubHeader from '../../components/partials/Subheader';
import chatstyles from './styles';
import DateView from './DateView';

const Chat = props => {
  return (
    <View style={[chatstyles.container]}>
      <ScrollView>
        <SubHeader title="Chat" subtitle="Home  /  Chat" />
        <View style={chatstyles.hr}></View>
        <View style={chatstyles.leftcardView}>
          <Text style={chatstyles.chatTxt}>Is there new product arrived?</Text>
          <Text>09.45</Text>
        </View>
        <View style={chatstyles.leftcardView}>
          <View style={chatstyles.replyView}>
            <Text style={[chatstyles.youTxt, {}]}>You</Text>
            <Text
              style={[
                chatstyles.chatTxt,
                {
                  color: myColors.slate700,
                },
              ]}>
              Is there new product arrived?
            </Text>
          </View>
          <Text style={chatstyles.chatTxt}>
            And when i can get my delivery..... Its been late almost
          </Text>
          <Text>09.55</Text>
        </View>
        <View style={chatstyles.rightcardView}>
          <Text style={chatstyles.chatTxtRight}>
            Your Delivery is on the way
          </Text>
          <Text style={chatstyles.timeRight}>16.50 · Read</Text>
        </View>
        <DateView />
      </ScrollView>
      <View style={chatstyles.sendViewBtn}>
        <View style={[chatstyles.sendView, {flexDirection: 'row'}]}>
          <View style={{flex: 0.9}}>
            <TextInput placeholder="Type Something There" />
          </View>
          <View style={[chatstyles.opBtns]}>
            <Image
              source={require('../../../assets/images/send.png')}
              style={chatstyles.sendImg}
            />
            <Image
              source={require('../../../assets/images/Attach.png')}
              style={chatstyles.attachImg}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chat;
