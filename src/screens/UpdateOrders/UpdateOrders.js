import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Button,
  Pressable,
  ImageBackground,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, onValue, child, update} from 'firebase/database';
import {useNavigation} from '@react-navigation/native';

//database instance
const db = getDatabase(firebase);
const usersRef = ref(db, 'Orders');

const UpdateOrders = ({route}) => {
  const navigation = useNavigation();

  const [orderData, setOrderData] = useState({});
  const {orderId} = route.params;

  const [fertilizerType, setFertilizerType] = useState('');
  const [orderAmount, setOrderAmount] = useState('');
  const [description, setDescription] = useState('');

  //save updated values
  const onSumbit = () => {
    const newData = {
      fertilizerType,
      orderAmount,
      description,
    };
    update(child(usersRef, orderId), newData)
      .then(() => {
        console.log('Data added successfully');
        navigation.navigate("MyOrder");
      })
      .catch(error => {
        console.error('Error adding data: ', error);
      });
  };

  useEffect(() => {
    const fetchOneCrop = () => {
      const Id = orderId;
      onValue(
        child(usersRef, Id),
        snapshot => {
          const data = snapshot.val();
          if (data) {
            setOrderData(data);
          }
        },
        error => {
          console.log('Error fetching data: ', error);
        },
      );
    };

    fetchOneCrop();
  }, []);

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View>
        <Text style={styles.text}>Update Orders</Text>
      </View>
      
      <View style={styles.new5}>
      <Text style={styles.text1}>Fertilizer Type</Text>
      <View style={styles.container}>
        <TextInput
          placeholder=""
          style={styles.input}
          defaultValue={orderData.fertilizerType}
          onChangeText={text => {
            setFertilizerType(text);
          }}
        />
      </View>

      <Text style={styles.text1}>Order Amount(Kg)</Text>
      <View style={styles.container}>
        <TextInput
          placeholder=""
          style={styles.input}
          defaultValue={orderData.orderAmount}
          onChangeText={text => {
            setOrderAmount(text);
          }}
        />
      </View>

      <Text style={styles.text1}>Description</Text>
      <View style={styles.container}>
        <TextInput
          placeholder=""
          style={styles.input}
          defaultValue={orderData.description}
          onChangeText={text => {
            setDescription(text);
          }}
        />
      </View>

      <View style={{bottom: 50}}>
        <CustomButton text="Save" onPress={onSumbit}></CustomButton>
      </View>
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
  new5:{
    top:-320
  },

  text1: {
    color: 'black',
    top: 70,
    paddingLeft: 50,
    fontSize: 15,
  },
  container: {
    backgroundColor: 'ivory',
    width: '65%',
    borderRadius: 40,
    borderColor: '#FFA903',
    borderWidth: 2,
    top: 70,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginVertical: 5,
  },

  container2: {
    width: 140,
    height: 100,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    top: 100,
    marginHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
  },

  image: {
    alignSelf: 'center',
    top: 5,
    left: 2,
    width: 80,
    height: 80,
  },
});

export default UpdateOrders;
