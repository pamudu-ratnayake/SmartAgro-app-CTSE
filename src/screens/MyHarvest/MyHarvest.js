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
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, onValue} from 'firebase/database';

const db = getDatabase(firebase);
const usersRef = ref(db, 'Harvest');

const MyHarvest = () => {
  const navigation = useNavigation();

  const [harvestData, setHarvestData] = useState([]);

  const onPressed = (harvest) => {
    navigation.navigate('DelHar', harvest);
  };

  useEffect(() => {
    const fetchData = () => {
      onValue(
        usersRef,
        snapshot => {
          const data = snapshot.val();
          if (data) {
            const harvestArray = Object.keys(data).map(key => ({ ...data[key], id: key }));
            setHarvestData(harvestArray);
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
        <Text style={styles.text}>My Harvest</Text>
      </View>

      <View style={styles.column}>
      {harvestData.map(harvest => (
          <Pressable key={harvest.id} style={styles.container} onPress={() => onPressed(harvest)}>
          <View>
          <View>
            <Text style={styles.txt}>Crop Name </Text>
            <Text style={styles.txt}>Date </Text>
            <Text style={styles.txt}>Weight </Text>
            <Text style={styles.txt}>Description </Text>
            </View>
            <View>
            <Text style={styles.txtnew}>:  {harvest.cropName}</Text>
            <Text style={styles.txtnew}>:  {harvest.date}</Text>
            <Text style={styles.txtnew}>:  {harvest.weight}</Text>
            <Text style={styles.txtnew}>:  {harvest.description}</Text>

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
  column:{
    top:-370

  },
  container: {
    width: 310,
    height: 120,
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
    alignSelf:'flex-start',
    color: 'black',
    top: 15,
    left:20,
    fontWeight: 'bold',
  },
  txtnew:{
    left:140,
    top:-63,
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

export default MyHarvest;
