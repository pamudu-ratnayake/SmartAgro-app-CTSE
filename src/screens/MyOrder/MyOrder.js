import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import CardView from 'react-native-cardview';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, onValue} from 'firebase/database';

const db = getDatabase(firebase);
const usersRef = ref(db, 'Orders');

const MyOrder = () => {
  const navigation = useNavigation();

  const [ordersData, setOrdersData] = useState([]);

  const onPressed = (order) => {
    navigation.navigate('DelOrder', order);
  };

  useEffect(() => {
    const fetchData = () => {
      onValue(
        usersRef,
        snapshot => {
          const data = snapshot.val();
          if (data) {
            const ordersArray = Object.keys(data).map(key => ({ ...data[key], id: key }));
            setOrdersData(ordersArray);
          }
        },
        error => {
          console.log('Error fetching data: ', error);
        },
      );
    };
    fetchData();
  }, []);

  //Flatlist should be implemented

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View>
        <Text style={styles.text}>My Orders</Text>
      </View>

      <View style={styles.column}>
      {ordersData.map(order => (
          <Pressable key={order.id} style={styles.container} onPress={() => onPressed(order)}>
          <View>
          <View>
            <Text style={styles.txt}>Fertilizer Type </Text>
            <Text style={styles.txt}>Order Amount </Text>
            <Text style={styles.txt}>Description </Text>
            </View>
            <View>
            <Text style={styles.txtnew}>:  {order.fertilizerType}</Text>
            <Text style={styles.txtnew}>:  {order.orderAmount}</Text>
            <Text style={styles.txtnew}>:  {order.description}</Text>

            </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    top: -320,
    left: 30,
    fontWeight: 'bold',
  },
  container: {
    width: 310,
    height: 100,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 15,
    top: -90,
    marginTop: 20,
    marginHorizontal: 20,
  },
  column:{
    top:-240
  },

  container2: {
    width: 110,
    height: 110,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 55,
    top: 200,
    marginHorizontal: 20,
  },

  container3: {
    width: 110,
    height: 110,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 55,
    top: 330,
    marginHorizontal: 20,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  image: {
    alignSelf: 'center',
    top: 20,
  },
  txt: {
    alignSelf:'flex-start',
    color: 'black',
    top: 15,
    left:30,
    fontWeight: 'bold',
  },
  txtnew:{
    left:180,
    top:-45,
    color: 'black',
    fontWeight: 'bold',

  },

  txt2: {
    alignSelf: 'center',
    color: 'black',
    top: 25,
    fontWeight: 'bold',
    top: 50,
  },

  txt3: {
    alignSelf: 'center',
    color: 'black',
    top: 25,
    fontWeight: 'bold',
    top: 35,
  },
});

export default MyOrder;
