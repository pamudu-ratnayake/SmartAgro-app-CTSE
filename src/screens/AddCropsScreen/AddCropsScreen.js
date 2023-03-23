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
import { useNavigation } from "@react-navigation/native";

const db = getDatabase(firebase);
const usersRef = ref(db, 'Crops');

const AddCropsScreen = () => {
  const navigation =useNavigation();

  const [cropName, setCropName] = useState('');
  const [cropDes, setCropDes] = useState('');

  const onSumbit = () => {
    const newData = {
      cropName,
      cropDes
    }
    push(usersRef, newData)
      .then(() => {
        console.log("Data added successfully");
        navigation.navigate("MyFarm");
      })
      .catch((error) => {
        console.error("Error adding data: ", error);
      });
  };

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View >
        <Text style={styles.text}>Add Crops</Text>
      </View>
      <View style={styles.con}>
      <Text style={styles.text1}>Crop Name</Text>
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

      <Text style={styles.text1}>Crop Details</Text>
      <View style={styles.container}>
        <TextInput
          placeholder=""
          style={styles.input}
          value={cropDes}
          onChangeText={text => {
            setCropDes(text);
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
    top: -350,
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
  con:{
    top:-300

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

export default AddCropsScreen;
