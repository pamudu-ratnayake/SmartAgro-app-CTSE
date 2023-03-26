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
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, push} from 'firebase/database';
import {useNavigation} from '@react-navigation/native';

const db = getDatabase(firebase);
const usersRef = ref(db, 'Harvest');

const AddHarvest = () => {
  const navigation = useNavigation();

  const [cropName, setCropName] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = () => {
    const newData = {
      cropName,
      weight,
      date,
      description
      
    }
    push(usersRef, newData)
      .then(() => {
        navigation.navigate('Harvest');
      })
      .catch(error => {
        console.error('Error adding data: ', error);
      });
  };

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View>
        <Text style={styles.text}>Add Harvest</Text>
      </View>

      <View style={styles.new1}>
        <Text style={styles.text1}>Crop</Text>
        <View style={styles.container}>
          <TextInput
            placeholder=""
            style={styles.input}
            value={cropName}
            onChangeText={text => {
              setCropName(text);
            }}
          />
        </View>

        <Text style={styles.text1}>Crop Weight</Text>
        <View style={styles.container}>
          <TextInput
            placeholder=""
            style={styles.input}
            value={weight}
            onChangeText={text => {
              setWeight(text);
            }}
          />
        </View>

        <Text style={styles.text1}>Date</Text>
        <View style={styles.container}>
          <TextInput
            placeholder=""
            style={styles.input}
            value={date}
            onChangeText={text => {
              setDate(text);
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
          <CustomButton text="Save" onPress={onSubmit}></CustomButton>
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
  new1: {
    top: -350,
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

export default AddHarvest;
