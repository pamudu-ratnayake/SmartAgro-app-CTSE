import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import CardView from 'react-native-cardview';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, onValue} from 'firebase/database';

const db = getDatabase(firebase);
const usersRef = ref(db, 'Crops');

const MyCrops = () => {
  const navigation = useNavigation();

  const [cropstData, setCropstData] = useState([]);

  const onPressed = crop => {
    console.log('data coming from database1 =====> ', crop);
    navigation.navigate('Del', crop);
  };

  useEffect(() => {
    const fetchData = () => {
      onValue(
        usersRef,
        snapshot => {
          const data = snapshot.val();
          if (data) {
            const cropsArray = Object.keys(data).map(key => ({
              ...data[key],
              id: key,
            }));
            setCropstData(cropsArray);
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
        <Text style={styles.text}>MyCrops</Text>
      </View>
      <SafeAreaView>
        <View style={styles.column}>
          {cropstData.map(crop => (
            <Pressable
              key={crop.id}
              style={styles.container}
              onPress={() => onPressed(crop)}>
              <View>
                <View>
                  <Text style={styles.txt}>Crop Name </Text>
                  <Text style={styles.txt}>Description </Text>
                </View>
                <View>
                  <Text style={styles.txtnew}>: {crop.cropName}</Text>
                  <Text style={styles.txtnew}>: {crop.cropDes}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>
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
  column: {
    //top:-350,
    top: -390,
  },
  container: {
    width: 310,
    height: 60,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 15,
    top: 70,
    marginTop: 20,
    marginHorizontal: 20,
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
    alignSelf: 'flex-start',
    color: 'black',
    top: 10,
    left: 20,
    fontWeight: 'bold',
  },
  txtnew: {
    left: 150,
    top: -32,
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

export default MyCrops;
