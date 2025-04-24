import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {SafeAreaView} from 'react-native';

import OrderCardView from './OrderCardView';
import {connect} from 'react-redux';
import {updateOrder} from '../../store/reducers';
import CustomActivityIndicator from '../common/CustomActivityIndicator';
import {strings} from '../../i18n';

let OrderLists = props => {
  const [orders, setOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getItem = (_data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  const getItemCount = _data => 30;

  React.useEffect(() => {
    // ListOrdersServiceWithoutQuery(onSuccessOrdersList, onFailureOrdersList);
    // return () => {
    //   console.log('unmount');
    //   //setOrders([]);
    // };
    setTimeout(() => {
      //alert('5 sec');

      setLoading(false);
    }, 2000);
  }, []);

  let {latestOrders} = props;

  const handleComplete = item => {
    //console.log('handleComplete count ');
    props.fetchOrderCounts();
    if (item.is_read == 0) {
      props.updateOrder(item);
    } else {
      //alert('im alredy read ');
    }

    //ListOrdersService(onSuccessOrdersList, onFailureOrdersList);
  };

  if (props.isLoading || loading) {
    return <CustomActivityIndicator />;
  } else {
    if (latestOrders && latestOrders.length > 0) {
      return (
        // <ScrollView onScroll={() => console.log('im scrolloing')}>
        //   {latestOrders.map((order, index) => {
        //     return (
        //       <View key={index} style={styles.orderView}>
        //         <OrderCardView
        //           key={index}
        //           order={order}
        //           navigation={props.navigation}
        //           handleComplete={item => handleComplete(item)}
        //           fetchOrderCounts={props.fetchOrderCounts}
        //         />
        //       </View>
        //     );
        //   })}
        // </ScrollView>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={latestOrders}
            renderItem={({item, index}) => (
              <OrderCardView
                key={index}
                order={item}
                navigation={props.navigation}
                handleComplete={item => handleComplete(item)}
                fetchOrderCounts={props.fetchOrderCounts}
              />
            )}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </SafeAreaView>
      );
    } else {
      return (
        <Text
          style={{
            marginVertical: 16,
            textAlign: 'center',
          }}>
          {strings('No Results')}
        </Text>
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    latestOrders: state.latestOrders,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateOrder: order => dispatch(updateOrder(order)),
  };
}

export default OrderLists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderLists);

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
