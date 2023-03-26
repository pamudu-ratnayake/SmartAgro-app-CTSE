import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import CardView from 'react-native-cardview';
import {firebase} from '../../../firebase.config';
import del from '../../../assets/images/del.png';
import ed from '../../../assets/images/ed2.png';
import {getDatabase, ref, onValue, child, remove} from 'firebase/database';

const db = getDatabase(firebase);
const usersRef = ref(db, 'FertilizerDetails');

const DelUpMyFert = ({route}) => {
  const navigation = useNavigation();
  const fertilizeDetails = route.params;

  const onUpdatePressed = id => {
    navigation.navigate('UpFert', {fertilizedId: id});
  };

  const onDeletePressed = id => {
    const nodeRef = ref(db, `FertilizerDetails/${id}`);
    remove(nodeRef)
      .then(() => {
        console.log('Data removed successfully');
        navigation.navigate('MyFert');
      })
      .catch(error => {
        console.error('Error removing data: ', error);
      });
  };

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View>
        <Text style={styles.text}>My Fertilizers</Text> 
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        style={styles.new3}>
        <View style={styles.column}>
          <Pressable style={styles.container}>
            <Text style={styles.txt}>
              Crop Name: {fertilizeDetails.cropName}
            </Text>
            <Text style={styles.txt}>
              Fertilizer Name: {fertilizeDetails.fertilizerName}
            </Text>
            <Text style={styles.txt}>
              Fertilizer Type: {fertilizeDetails.fertilizerType}
            </Text>
            <Text style={styles.txt}>
              Fertilized Area: {fertilizeDetails.fertilizedArea}
            </Text>
            <Text style={styles.txt}>
              Fertilized Date: {fertilizeDetails.fertilizedDate}
            </Text>

            <TouchableOpacity
              style={styles.btncontainer}
              onPress={() => onDeletePressed(fertilizeDetails.id)}>
              <Image source={del} style={styles.image}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btncontainer2}
              onPress={() => onUpdatePressed(fertilizeDetails.id)}>
              <Image source={ed} style={styles.image2}></Image>
            </TouchableOpacity>
          </Pressable>
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
  container: {
    width: 310,
    height: 460,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 15,
    top: 70,
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
  btncontainer: {
    height: 60,
    width: 120,
    top: 250,
    left: 10,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  btncontainer2: {
    height: 60,
    width: 120,
    top: 190,
    left: 150,
    backgroundColor: 'green',
    borderRadius: 20,
  },
  btntxt: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
    top: 15,
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
    top: 12,
  },
  image2: {
    alignSelf: 'center',
    top: 10,
  },
  txt: {
    alignSelf: 'center',
    color: 'black',
    top: 25,
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

export default DelUpMyFert;
