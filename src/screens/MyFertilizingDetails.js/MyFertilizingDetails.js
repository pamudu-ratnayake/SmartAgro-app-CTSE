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
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import CardView from 'react-native-cardview';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, onValue} from 'firebase/database';

const db = getDatabase(firebase);
const usersRef = ref(db, 'FertilizerDetails');

const MyFertilizingDetails = () => {
  const navigation = useNavigation();

  const [fertilizingData, setFertilizingData] = useState([]);

  //navigate
  const onPressed = ferData => {
    navigation.navigate('DelFert', ferData);
  };

  useEffect(() => {
    const fetchData = () => {
      onValue(
        usersRef,
        snapshot => {
          const data = snapshot.val();
          if (data) {
            const ferArray = Object.keys(data).map(key => ({
              ...data[key],
              id: key,
            }));
            setFertilizingData(ferArray);
          }
        },
        error => {
          console.log('Error fetching data: ', error);
        },
      );
    };
    fetchData();
  }, []);

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View>
        <Text style={styles.text}>My Fertilizing Details</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        style={styles.new3}>
        <View style={styles.column}>
          {fertilizingData.map(detail => (
            <Pressable
              key={detail.id}
              style={styles.container}
              onPress={() => onPressed(detail)}>
              <View>
                <View>
                  <Text style={styles.txt}>Crop Name </Text>
                  <Text style={styles.txt}>Fertilizer Name </Text>
                  <Text style={styles.txt}>Fertilizer Type </Text>
                  <Text style={styles.txt}>Fertilized Area </Text>
                  <Text style={styles.txt}>Fertilized Date </Text>
                </View>
                <View>
                  <Text style={styles.txtnew}>: {detail.cropName}</Text>
                  <Text style={styles.txtnew}>: {detail.fertilizerName}</Text>
                  <Text style={styles.txtnew}>: {detail.fertilizerType}</Text>
                  <Text style={styles.txtnew}>: {detail.fertilizedArea}</Text>
                  <Text style={styles.txtnew}>: {detail.fertilizedDate}</Text>
                </View>
              </View>
            </Pressable>
          ))}
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
  container: {
    width: 310,
    height: 150,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 15,
    top: 70,
    marginTop: 20,
    marginHorizontal: 20,
  },
  new3: {
    top: -320,
    height: 550,
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
    top: 25,
    left: 20,
    fontWeight: 'bold',
  },
  txtnew: {
    left: 150,
    top: -72,
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

export default MyFertilizingDetails;
