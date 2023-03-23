import React, {Component, useState} from 'react';
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
  ScrollView,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, push} from 'firebase/database';
import {useNavigation} from '@react-navigation/native';

const db = getDatabase(firebase);
const usersRef = ref(db, 'Orders');

const AddOrders = () => {
  const navigation = useNavigation();

  const [fertilizerType, setFertilizerType] = useState('');
  const [orderAmount, setOrderAmount] = useState('');
  const [description, setDescription] = useState('');

  const onSumbit = () => {
    const newData = {
      fertilizerType,
      orderAmount,
      description,
    };
    push(usersRef, newData)
      .then(() => {
        console.log('Data added successfully');
        navigation.navigate('Orders');
      })
      .catch(error => {
        console.error('Error adding data: ', error);
      });
  };

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View>
        <Text style={styles.text}>Add Orders</Text>
      </View>

      <ScrollView contentContainerStyle={{
          paddingBottom: 150,
        }}
        style={styles.new3}>
        {/* <View style={styles.new}> */}
          <Text style={styles.text1}>Fertilizer Type</Text>
          <View style={styles.container}>
            <TextInput
              placeholder=""
              style={styles.input}
              value={fertilizerType}
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
              value={orderAmount}
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
              value={description}
              onChangeText={text => {
                setDescription(text);
              }}
            />
          </View>

          <View style={{bottom: 50}}>
            <CustomButton text="Save" onPress={onSumbit}></CustomButton>
          </View>
        {/* </View> */}
      </ScrollView>
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
  new: {
    top: -320,
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
  new3: {
    top: -320,
    height: 550,
  },
});

export default AddOrders;
