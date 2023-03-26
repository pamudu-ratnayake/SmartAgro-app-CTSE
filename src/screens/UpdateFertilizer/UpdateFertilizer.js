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
  ScrollView,
  ImageBackground,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, onValue, child, update} from 'firebase/database';
import {useNavigation} from '@react-navigation/native';

const db = getDatabase(firebase);
const usersRef = ref(db, 'FertilizerDetails');

const UpdateFertilizer = ({route}) => {
  const navigation = useNavigation();
  
  const {fertilizedId} = route.params;
  const [ferData, setFerData] = useState({});
  const [cropName, setCropName] = useState('');
  const [ferType, setFerType] = useState('');
  const [ferName, setFerName] = useState('');
  const [fertilizedArea, setFertilizedArea] = useState('');
  const [fertilizedDate, setFertilizedDate] = useState('');

  const onSumbit = () => {
    const newData = {
      cropName: cropName,
      fertilizerType: ferType,
      fertilizerName: ferName,
      fertilizedArea: fertilizedArea,
      fertilizedDate: fertilizedDate,
    };
    update(child(usersRef, fertilizedId), newData)
      .then(() => {
        console.log('Data Updated successfully!');
        navigation.navigate("MyFert");
      })
      .catch(error => {
        console.error('Error on adding data: ', error);
      });
  };

  useEffect(() => {
    const fetchOneFer = () => {
      const Id = fertilizedId;
      console.log('fer ID data: ', Id);
      onValue(
        child(usersRef, Id),
        snapshot => {
          const data = snapshot.val();
          if (data) {
            setFerData(data);
          }
        },
        error => {
          console.log('Error fetching data: ', error);
        },
      );
    };

    fetchOneFer();
  }, []);

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View>
        <Text style={styles.text}>Update Fertilizer Details</Text>
      </View>

      <ScrollView
            contentContainerStyle={{
              paddingBottom: 150
            }}
            style={styles.new3}
          >

          <View>

      <Text style={styles.text1}>Fertilized Crop</Text>
      <View style={styles.container}>
        <TextInput
          placeholder=""
          style={styles.input}
          defaultValue={ferData.cropName}
          onChangeText={text => {
            setCropName(text);
          }}
        />
      </View>

      <Text style={styles.text1}>Fertilizer Type</Text>
      <View style={styles.container}>
        <TextInput
          placeholder=""
          style={styles.input}
          defaultValue={ferData.fertilizerType}
          onChangeText={text => {
            setFerType(text);
          }}
        />
      </View>

      <Text style={styles.text1}>Fertilizer Name</Text>
      <View style={styles.container}>
        <TextInput
          placeholder=""
          style={styles.input}
          defaultValue={ferData.fertilizerName}
          onChangeText={text => {
            setFerName(text);
          }}
        />
      </View>

      <Text style={styles.text1}>Fertilized Area</Text>
      <View style={styles.container}>
        <TextInput
          placeholder=""
          style={styles.input}
          defaultValue={ferData.fertilizedArea}
          onChangeText={text => {
            setFertilizedArea(text);
          }}
        />
      </View>

      <Text style={styles.text1}>Fertilized Date</Text>
      <View style={styles.container}>
        <TextInput
          placeholder=""
          style={styles.input}
          defaultValue={ferData.fertilizedDate}
          onChangeText={text => {
            setFertilizedDate(text);
          }}
        />
      </View>

      <View style={{bottom: 50}}>
        <CustomButton text="Update" onPress={onSumbit}></CustomButton>
      </View>
      </View>
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
  new3:{
    top:-320,
    height:550

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

export default UpdateFertilizer;
