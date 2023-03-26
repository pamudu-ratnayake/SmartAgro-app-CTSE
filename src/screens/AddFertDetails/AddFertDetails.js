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
  Platform,
  // DatePickerAndroid,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, push} from 'firebase/database';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const db = getDatabase(firebase);
const usersRef = ref(db, 'FertilizerDetails');

const AddFertDetails = () => {
  const navigation = useNavigation();

  const [cropName, setCropName] = useState('');
  const [ferType, setFerType] = useState('');
  const [ferName, setFerName] = useState('');
  const [fertilizedArea, setFertilizedArea] = useState('');
  const [fertilizedDate, setFertilizedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = () => {
    console.log('date is ==> ', fertilizedDate);
    const newData = {
      cropName: cropName,
      fertilizerType: ferType,
      fertilizerName: ferName,
      fertilizedArea: fertilizedArea,
      fertilizedDate: fertilizedDate.toString(),
    };
    push(usersRef, newData)
      .then(() => {
        console.log('Data added successfully');
        navigation.navigate('Firt');
      })
      .catch(error => {
        console.error('Error adding data: ', error);
      });
  };

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setFertilizedDate(date);
    }
    setShowDatePicker(Platform.OS === 'ios');
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View>
        <Text style={styles.text}>Add Fertilizer</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        style={styles.new3}>
        <Text style={styles.text1}>Fertilized Crop</Text>
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

        <Text style={styles.text1}>Fertilizer Type</Text>
        <View style={styles.container}>
          <TextInput
            placeholder=""
            style={styles.input}
            value={ferType}
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
            value={ferName}
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
            value={fertilizedArea}
            onChangeText={text => {
              setFertilizedArea(text);
            }}
          />
        </View>

        <Text style={styles.text1}>Fertilized Date</Text>
        <View>
          <TouchableOpacity style={styles.container} onPress={openDatePicker}>
            <Text style={styles.input}>{fertilizedDate.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={fertilizedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        <View style={{bottom: 50}}>
          <CustomButton text="Save" onPress={onSubmit}></CustomButton>
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
  new3: {
    top: -320,
    height: 550,
  },

  newnew3: {
    top: -320,
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
    // height: '10%',
    borderRadius: 40,
    borderColor: '#FFA903',
    borderWidth: 2,
    top: 70,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
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

export default AddFertDetails;
