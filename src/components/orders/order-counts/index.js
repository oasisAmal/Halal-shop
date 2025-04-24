import React from 'react';
import {View, StyleSheet, I18nManager, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonView from './ButtonView';
import {strings} from '../../../i18n';
import {connect} from 'react-redux';

let OrderCountComponent = props => {
  React.useEffect(() => {
    //alert('got changed ');
  }, [props.orderCounts]);
  //let {c, orderCounts} = props;
  return (
    <View style={{flexDirection: 'row', marginTop: -16}}>
      <ScrollView horizontal>
        {/* <Text> hi : {orderCounts.new_orders} </Text> */}
        <ButtonView
          label={`${strings('Orders')} : ${
            // c.orders_count ? c.orders_count : 0
            props.orderCounts.orders_count ? props.orderCounts.orders_count : 0
          } `}
        />
        <ButtonView
          bgcolor="#FFEAEA"
          label={`${strings('New Orders')} : ${
            props.orderCounts.new_orders ? props.orderCounts.new_orders : 0
          } `}
        />
        <ButtonView
          label={`${strings('Driver assigned')} : ${
            props.orderCounts.assign ? props.orderCounts.assign : 0
          } `}
        />
        <ButtonView
          bgcolor="#FFE5CE"
          label={`${strings('Order not assigned to driver')} : ${
            props.orderCounts.un_assign ? props.orderCounts.un_assign : 0
          } `}
        />
        <ButtonView
          bgcolor="#EEEDFD"
          label={`${strings('On the way')} : ${
            props.orderCounts.in_the_way ? props.orderCounts.in_the_way : 0
          } `}
        />
        <ButtonView
          bgcolor="#EEEDFD"
          label={`${strings('Processing')} : ${
            props.orderCounts.in_progress ? props.orderCounts.in_progress : 0
          } `}
        />
        <ButtonView
          bgcolor="#EEEDFD"
          label={`${strings('Cancelled Orders')} : ${
            props.orderCounts.canceled ? props.orderCounts.canceled : 0
          } `}
        />
        <ButtonView
          bgcolor="#EEEDFD"
          label={`${strings('Delivered Orders')} : ${
            props.orderCounts.delivered ? props.orderCounts.delivered : 0
          } `}
        />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    orderCounts: state.orderCounts,
  };
};

// Orders = connect(mapStateToProps, mapDispatchToProps)(Orders);
// export default memo(Orders);

export default OrderCountComponent =
  connect(mapStateToProps)(OrderCountComponent);
